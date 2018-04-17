import {AbstractView} from '../AbstractView';
import {callUrlChange} from './RoutingEngine';

export class Link extends AbstractView {

    onInit(config) {
        this.$el = $('<a></a>');
        this.template = '<span>{label}</span>';
        this.model = {
            label: config.label || ''
        };

        if (config.attributes) {
            config.attributes.href = config.href;
        } else {
            config.attributes = {
                href: config.href
            };
        }

        this.href = config.href || '';
    }

    attachEvents() {
        this.$el.on('click', (e) => {
            e.preventDefault();
            window.history.pushState({}, '', this.href);
            callUrlChange();
        });
    }
}

export const goToUrl = (url) => {
    window.history.pushState({}, '', url);
    callUrlChange();
};

export const createUrl = (url, parameters = {}) => {
    Object.keys(parameters).forEach((key) => {
        const regexp = new RegExp(':' + key);
        url = url.replace(regexp, parameters[key]);

    });

    return url;
};
