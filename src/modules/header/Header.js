import {AbstractView} from '../AbstractView';
import './header.scss';

const template = `
<div class="header">
    <hi>WELCOME</hi>
</div>

`;

export class Header extends AbstractView {
    onInit() {
        this.template = template;
    }
}

