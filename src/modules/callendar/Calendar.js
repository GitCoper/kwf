import {AbstractView} from '../AbstractView';
import moment from 'moment';
import './calendar.scss';
import {SingleDay} from "./SingleDay";
import {createUrl, goToUrl} from "../router/Link";


const template = `
    <div class="calendar">
    <div class="calendar-navigation"></div>
        <button class="prev-month month-change" data-month-add="-1"> < </button>
        <button class="next-month month-change" data-month-add="1"> > </button>
        <div class="show-current-month">{month}-{year}</div>                                                               <!-- add-->
       <div class="week-day-names">
            <div class="week-day-name">Poniedziałek</div>
            <div class="week-day-name">Wtorek</div>
            <div class="week-day-name">Środa</div>
            <div class="week-day-name">Czwartek</div>
            <div class="week-day-name">Piatek</div>
            <div class="week-day-name">Sobota</div>
            <div class="week-day-name">Niedziela</div>
        
        </div> 
        <div class="current-month"></div>
    </div>
    
`;

//jaki to dzień
export class Calendar extends AbstractView {
    onInit(config) {
        const dateTemp = moment(config.urlParams.date, 'MM-YYYY');
        if (dateTemp.isValid()) {
            this.currentMonth = dateTemp;
        }
        else {
            this.currentMonth = moment();
        }
        this.template = template;
        this.days = [];
        for (let i = 0; i <= 34; i++) {
            const day = new SingleDay();
            this.days.push(day);
        }
        this.setModel();

    }


    setModel() {
        this.model = {
            month: this.currentMonth.format('MMMM'),
            year: this.currentMonth.format('Y')

        };
    }


    attachEvents() {
        this.addDomEvent('click', '.month-change', (e) => {
            const monthAdd = $(e.target).data('month-add');
            this.currentMonth = this.currentMonth.add(monthAdd, 'M');
            this.setModel();
            this.fullRender();
            const date = {
                date: this.currentMonth.format('MM-YYYY'),
            };
            const url = createUrl('/calendar/:date', date);

            goToUrl(url);

        });
    };

    afterRender() {
        this.appendCalendarDays();
    };



    appendCalendarDays() {
        const firstDay = this.currentMonth.clone().startOf('month').startOf('isoweek');
        const $dayPlaceholder = this.$el.find('.current-month');
        $dayPlaceholder.children().remove();

        this.days.forEach((day, index) => {
            const currentDay = firstDay.clone().add(index, 'days');
            day.setModelData(currentDay, this.currentMonth.month());
            $dayPlaceholder.append(day.fullRender());
        });
    }

}
