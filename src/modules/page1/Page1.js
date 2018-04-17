import {AbstractView} from '../AbstractView';
import './page1.scss';

const template = `
<article>
        <div class="row part1">
            <main class="col-md-6 ">
            <h1 class="margin col-md-10">O nas</h1>
                <p>Nasza Firma obecna jest na rynku od 1990 roku i od początku swego istnienia nastawiona jest na produkcje
                    systemów osłonowych.</p>
        
                <p> w ofercie posiadamy około 15 systemów produkowanych w siedzibie naszej firmy w Lublinie. Są to <ul>rolety</ul>
                    <li>materiałowe wolno-wiszące</li> <li>i w prowadnicach,</li> <ul>żaluzje</ul> <li>aluminiowe,</li> <li>drewniane,</li> <li>verticale,</li> <li>moskitiery</li> <li>i markizy</li>.
                    Wszystko to w bardzo szerokiej gamie kolorów i wzorów o różnym stopniu grubości.</p>
        
                <p>Wieloletnie doświadczenie, nowoczesne maszyny używane do produkcji oraz materiały które pozyskujemy od
                    najlepszych dostawców Polskich jak i zagranicznych pozwalają nam oferować produkty najwyższej jakości.</p>
        
                <p>Wśród odbiorców firmy znajdują się zarówno osoby prywatne jak i instytucje.</p>
        
                <p>Nasze produkty znajdują się nie tylko w domach mieszkańców Lubelszczyzny ale i Anglii, Holandii, Niemiec czy
                    też Ukrainy.
                    Nasze najsilniejsze strony to przyjazne nastawienie do klienta i elastyczne podejście do rynku, bardzo
                    bogata oferta, szybka realizacja zamówień i konkurencyjne ceny.</p>
        
        
                <p>Zapraszamy do współpracy.</p>
            </main>
        </div>
        <div class="row part2">
            <aside class="offset-md-6 col-md-4 ">
                Oferta:
        
                * żaluzje poziome aluminiowe i drewniane
                * żaluzje pionowe - "Verticale"
                * rolety materiałowe
                * rolety materiałowe do okien dachowych
                * moskitiery okienne i drzwiowe
                * rolety zewnętrzne
                * bramy roletowe
                * montaż okien i obróbka drzwi z PCV
                * remonty żaluzji i verticali
        
        
                Dotychczasowi i aktualni klienci:
        
                * Zakład obsługi Lubelskiego Urzędu Wojewódzkiego w Lublinie
        
                * Spółdzielnia Niewidomych im. Modesta Sękowskiego w Lublinie
        
                * Ośrodek Szkolno-Wychowawczy dla Dzieci i Młodzieży Słabo Widzącej w Lublinie
        
                * Przychodnia specjalistyczna w Nałęczowie
        
                * Zespół Szkół im. św. Stanisława Kostki w Lublinie
        
                * NZOZ Specjalistyka Czechów. Sp. z oo w Lublinie
        
                * Spółdzielnia mieszkaniowa Czechów: oś. Szymanowskiego, oś. Braci Wieniawskich, oś. Lipińskiego, w Lublinie
        
                * Zespół Szkół Odzieżowo - Włókienniczych w Lublinie
        
                * Gimnazjum nr 18 w Lublinie
        
                * oraz wiele innych firm, instytucji oraz klientów indywidualnych,
        
                Usługi remontowo - budowlane,
            </aside>
        </div>
</article>`;

export class Page1 extends AbstractView {

    onInit() {
        this.template = template;
    }
}

