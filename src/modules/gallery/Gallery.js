import {AbstractView} from '../AbstractView';
import './gallery.scss';
import './lightbox.js';


const template = `
<div class="galleria">
            
           <a href="../../assets/1.jpg" data-lightbox="roadtrip"><img src="../../assets/1thumb.jpg"/></a>
           <a href="../../assets/2.jpg" data-lightbox="roadtrip"><img src="../../assets/2thumb.jpg"/></a>
           <a href="../../assets/3.jpg" data-lightbox="roadtrip"><img src="../../assets/3thumb.jpg"/></a>
           <a href="../../assets/4.jpg" data-lightbox="roadtrip"><img src="../../assets/4thumb.jpg"/></a>
           <a href="../../assets/5.jpg" data-lightbox="roadtrip"><img src="../../assets/5thumb.jpg"/></a>
           <a href="../../assets/6.jpg" data-lightbox="roadtrip"><img src="../../assets/6thumb.jpg"/></a>
           <a href="../../assets/7.jpg" data-lightbox="roadtrip"><img src="../../assets/7thumb.jpg"/></a>
           <a href="../../assets/8.jpg" data-lightbox="roadtrip"><img src="../../assets/8thumb.jpg"/></a>
           <a href="../../assets/9.jpg" data-lightbox="roadtrip"><img src="../../assets/9thumb.jpg"/></a>
           <a href="../../assets/10.jpg" data-lightbox="roadtrip"><img src="../../assets/10thumb.jpg"/></a>
           <a href="../../assets/11.jpg" data-lightbox="roadtrip"><img src="../../assets/11thumb.jpg"/></a>
           <a href="../../assets/12.jpg" data-lightbox="roadtrip"><img src="../../assets/12thumb.jpg"/></a>
           <a href="../../assets/13.jpg" data-lightbox="roadtrip"><img src="../../assets/13thumb.jpg"/></a>
           <a href="../../assets/14.jpg" data-lightbox="roadtrip"><img src="../../assets/14thumb.jpg"/></a>
           <a href="../../assets/15.jpg" data-lightbox="roadtrip"><img src="../../assets/15thumb.jpg"/></a>
           <a href="../../assets/16.jpg" data-lightbox="roadtrip"><img src="../../assets/16thumb.jpg"/></a>
           <a href="../../assets/17.jpg" data-lightbox="roadtrip"><img src="../../assets/17thumb.jpg"/></a>
           <a href="../../assets/18.jpg" data-lightbox="roadtrip"><img src="../../assets/18thumb.jpg"/></a>
           <a href="../../assets/19.jpg" data-lightbox="roadtrip"><img src="../../assets/19thumb.jpg"/></a>
           <a href="../../assets/20.jpg" data-lightbox="roadtrip"><img src="../../assets/20thumb.jpg"/></a>
           <a href="../../assets/21.jpg" data-lightbox="roadtrip"><img src="../../assets/21thumb.jpg"/></a>
           <a href="../../assets/22.jpg" data-lightbox="roadtrip"><img src="../../assets/22thumb.jpg"/></a>
           <a href="../../assets/23.jpg" data-lightbox="roadtrip"><img src="../../assets/23thumb.jpg"/></a>
           <a href="../../assets/24.jpg" data-lightbox="roadtrip"><img src="../../assets/24thumb.jpg"/></a>
           <a href="../../assets/25.jpg" data-lightbox="roadtrip"><img src="../../assets/25thumb.jpg"/></a>
           <a href="../../assets/26.jpg" data-lightbox="roadtrip"><img src="../../assets/26thumb.jpg"/></a>
           
        </div>
  
`;

export class Gallery extends AbstractView {
    onInit() {
        this.template = template;

    }


}




