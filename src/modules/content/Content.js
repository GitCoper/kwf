import {AbstractView} from '../AbstractView';
import {Page1} from '../page1/Page1';
import {Page2} from '../page2/Page2';
import {Calendar} from '../callendar/Calendar';
import {Gallery} from "../gallery/Gallery";
import './content.scss';
import {Router} from "../router/Router";

const template = `
<div class="header-under"></div>
<div class="space"></div>
<div class="content">
    
</div>
`;

export class Content extends AbstractView {
    onInit() {
        this.template = template;

        this.router = new Router([
            {
                url      : '/calendar/:date',
                component: Calendar,


            }, {
                url      : '/page1',
                component: Page1,
                default  : true
            }, {
                url      : '/page2',
                component: Page2,
            }, {
                url      : '/calendar',
                component: Calendar,
            }, {
                url      : '/gallery',
                component: Gallery
            }
        ]);    }

    afterRender() {
        this.replaceOrRemoveDOM(this.$el.find('.content'), this.router.getEl());
    }

}








