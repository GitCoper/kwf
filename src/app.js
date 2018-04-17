import {Layout} from './modules/layout/Layout';
import './app.scss';
import 'bootstrap';


$(document).ready(() => {
    new Layout({
        $el: $('#app')
    });
});

