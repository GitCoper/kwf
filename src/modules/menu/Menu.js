import {AbstractView} from '../AbstractView';
import './menu.scss';
import throttle from 'throttle-debounce/throttle';
import {Link} from '../router/Link';

const template = `

<nav class="navbar navbar-toggleable-md navbar-light bg-faded navbar-default">
<div class="container">
  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand">
  <img src="../../assets/logo.svg" width="205" height="80" alt="">
  </a>
  </div>
  <div class="navbar-collapse collapse" id="navbarNav">
    <ul class="navbar-nav row mr-auto" >
    </ul>
  </div>
</nav>
<div class="relativeSpace"></div>
`;

const linkTemplate = `
<li class="nav-item active" href="{href}">
    <a class="nav-link" href="{href}" data-index="{index}"><span>{label}</span></a>
</li>`;

let menuItems = [
    {
        href    : 'page1',
        label   : 'Home',
        isActive: true
    }, {
        href    : 'page2',
        label   : 'Kontakt',
        isActive: false
    }, {
        href    : 'calendar',
        label   : 'Kalendarz',
        isActive: false
    }, {
        href    : 'gallery',
        label   : 'Galeria',
        isActive: false
    }
];

export class Menu extends AbstractView {
    onInit(config) {
        this.template = template;
        this.addStickyClassToNavbar = throttle(20, this.addStickyClassToNavbar.bind(this));
    }

    attachEvents() {
        this.addDomEvent('click', 'a', (e) => {
            $('HTML').delay('100').animate({scrollTop:$('.menu-container').offset().top}, '500');
            e.preventDefault();
            const index = $(e.currentTarget).attr('data-index');
            menuItems = menuItems.map(item => {
                item.isActive = false;
                return item;
            });
            menuItems[index].isActive = true;
            this.appendLinks();
        });
        window.addEventListener("scroll", this.addStickyClassToNavbar);
    }

    afterRender() {
        this.appendLinks();


    }

    appendLinks() {
        this.$el.find('li').remove();
        const $ul = this.$el.find('ul');
        menuItems.forEach((item, index) => {
            const link = new Link({
                href      : '/' + item.href,
                label     : item.label,
                cssClass  : 'nav-link',
                attributes: {
                    'data-index': index,
                    'data-toggle' : 'collapse',
                    'data-target' : '.navbar-collapse.show'
                }

            });

            const menuTile = $('<li class="nav-item"></li>').html(link.getEl());
            if (item.isActive) {
                menuTile.addClass('active');
            }
            $ul.append(menuTile)
        });
    }

    addStickyClassToNavbar() {
        const $navbar = this.$el.find(".navbar");
        const sticky = this.$el.offset().top;
        if (window.scrollY >= sticky) {
            $navbar.addClass("navbar-fixed-top")
        } else {
            $navbar.removeClass("navbar-fixed-top");
        }
    }

    onDomRemove() {
        window.removeEventListener("scroll", this.addStickyClassToNavbar);
    }
}



