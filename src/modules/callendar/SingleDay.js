import {AbstractView} from '../AbstractView';
import moment from 'moment';


const template = `
<div class="day-placeholder">{day}</div>
<div class="month-placeholder">{month}</div>
`;

export class SingleDay extends AbstractView {
    onInit() {
        this.setModelData();
        this.template = template;
        this.$el = $('<div class="single-day"></div>');
    }

    setModelData(daymoment, currentMonth) {
        this.dayMoment = daymoment || moment();
        this.currentMonth = currentMonth;
        this.model = {
            day  : this.dayMoment.format('D'),
            month: this.dayMoment.format('MMMM'),
        };
    }

    afterRender() {
        const isCurrent = this.currentMonth !== this.dayMoment.month();
        this.$el.toggleClass('noCurrentMonth', isCurrent);
    }


}
