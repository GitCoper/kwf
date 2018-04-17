import {isString, isObject} from 'lodash';

export class AbstractView {
    constructor(config) {
        const {model, template, $el} = config || {};
        this.$el = $el || $('<div></div>');
        this.isDomElementProvided = !!$el;
        this.model = model || {};
        this.template = template || '';


        this.onInit(config);
        this.attachAttrs(config);
        this.$el.attr('module-view', true);
        this.$el.on('CleanUp', (e) => {
            e.stopPropagation();
            this.onDomRemove.bind(this)
        });
        this.attachEvents();

        this.fullRender();
    }

    attachAttrs(config) {
        if (config && isString(config.cssClass)) {
            this.$el.addClass(config.cssClass);
        }
        if (config && isObject(config.attributes)) {
            const keys = Object.keys(config.attributes);
            keys.forEach(key => {
                this.$el.attr(key, config.attributes[key]);
            });
        }

    }

    fullRender() {
        this.beforeRender();
        const output = this.render();
        this.afterRender();
        return output;
    }

    onInit() {
    }

    beforeRender() {
    }

    attachEvents() {
    }

    afterRender() {
    }

    onDomRemove() {
    }

    addDomEvent(eventName, target, callback) {
        this.$el.on(eventName, target, callback);
    }

    renderTemplateString(templateString, model) {
        const keys = Object.keys(model);
        let temp = templateString;
        keys.forEach(key => {
            const regexp = new RegExp('{' + key + '}', 'g');
            temp = temp.replace(regexp, model[key]);
        });

        return $(temp);
    }

    render() {
        const tempEl = this.renderTemplateString(this.template, this.model);
        this.$el.html(tempEl);

        return this.getEl();
    }

    getEl() {
        return this.$el
    }

    replaceOrRemoveDOM($elToClean, $elToInsert = '') {
        $elToClean.find('[module-view]').trigger('CleanUp');
        $elToClean.html($elToInsert);
    }

}
