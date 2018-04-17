import {AbstractView} from '../AbstractView';
import templates from './layout.html';
import {Header} from '../header/Header';
import {Menu} from '../menu/Menu';
import {Content} from '../content/Content';

export class Layout extends AbstractView {

    onInit() {
        this.template = templates;
    }

    afterRender() {
        new Header({
            $el: this.$el.find('.header-container')
        });

        new Menu({
            $el: this.$el.find('.menu-container')
        });

        new Content({
            $el: this.$el.find('.content-container')
        });

    }
}