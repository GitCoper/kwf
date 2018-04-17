import {AbstractView} from '../AbstractView';
import {addRouter, removeRouter} from './RoutingEngine';
import find from 'lodash/find';
import reduce from 'lodash/reduce';
import {Page1} from "../page1/Page1";


export class Router extends AbstractView {

    constructor(router) {
        super({router});
        this.routerId = Math.random();
        addRouter(this);
    }

    getRouterId() {
        return this.routerId;
    }

    onInit(config) {
        const {router} = config;
        this.router = router.map((item) => {
            return Object.assign({
                url      : '',
                strict   : true,
                component: '',
                default  : false
            }, item);
        });

        this.defaultItem = find(this.router, (item) => item.default);
    }

    onUrlChanged() {
        if (this.currentUrl === this._getCurrentUrl()) {
            return;
        }

        const matchingRoutConfig = find(this.router, (item) => this._testUrl(item));

        if (matchingRoutConfig) {
            this._renderViewFromConfig(matchingRoutConfig);
        } else if (this.defaultItem) {
            this._renderViewFromConfig(this.defaultItem);
        } else {
            this.$el.html('');
        }
        this.currentUrl = this._getCurrentUrl();
    }

    _renderViewFromConfig(matchingRoutConfig) {
        const view = new matchingRoutConfig.component({
            urlParams: this._getUrlParams(matchingRoutConfig)
        });
        if (view instanceof AbstractView) {
            this.replaceOrRemoveDOM(this.$el, view.getEl());
        }
    }

    afterRender() {
        this.onUrlChanged();
    }

    _testUrl(config) {
        const {url, strict} = config;
        let stringRegExp = '^' + url.replace(/\/(:[a-zA-Z0-9]*)/g, '/([a-zA-Z0-9\-\_]*)?');
        if (strict) {
            stringRegExp = stringRegExp + '$';
        } else {
            stringRegExp = stringRegExp + '(.*)?';
        }

        const regExp = new RegExp(stringRegExp);
        return regExp.test(this._getCurrentUrl());
    }

    _getUrlParams(config) {
        const {url} = config;
        const testUrlParts = url.split('/');
        const urlParts = this._getCurrentUrl().split('/');
        return reduce(testUrlParts, (output, item, index) => {
            if (/^:/.test(item)) {
                const key = item.replace(':', '');
                output[key] = urlParts[index];
            }
            return output;
        }, {});
    }

    _getCurrentUrl() {
        const {pathname} = window.location;
        return pathname;
    }

    onDomRemove() {
        removeRouter(this);
    }
}