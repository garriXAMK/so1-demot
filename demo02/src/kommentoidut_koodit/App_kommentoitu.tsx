/*
  * Alla on demo 2:n tärkeimmät koodit, jotka määrittävät tämän React-sovelluksen ainoan näkymän, jonka App-komponentti kattaa. Demoissa oleelliset koodit voivat sijaita muuallakin ohjelman lähdekoodissa.

  * Jokainen koodirivi on kommentoitu ohjelman logiikan selittämiseksi.

  * Tämä on kommentoitu versio samasta koodista, mikä on suoritettavassa ohjelmassa kommentoimattomana. Tätä koodia ei hyödynnetä sovelluksen toiminnassa, vaan on vain extrana.

  * Suosittelen lukemaan kommentit koodien ymmärtämiseksi paremmin.
*/

/*
  * Tuodaan (import) useRef- ja useState- ominaisuudet Reactista.
  * useState:n avulla voidaan luoda tilamuuttujia, jotka seuraavat sovelluksessa käsiteltäviä tietoja.
  * useRef:n avulla voidaan seurata "hiljaisesti" JSX-elementtiä. Tätä hyödynnetään ensisijaisesti tilanteissa, joissa elementin arvoon (esim. input value) halutaan viitata tallentamatta tietoa erikseen tilamuuttujaan.
      * Tässä demossa useRef:iä hyödynnetään viittaamaan syöttökenttään toisessa JSX-elementissä ja sen tapahtumakäsittelijässä.
*/
import { useRef, useState } from 'react';
import './App.css'; // Tyylien tuonti

/*
  * Tässä määritellään demosovelluksen tehtävälistan yksittäisen tehtävän tietomalli (voidaan ajatella omana TypeScript-tyyppinä).
  * Tietomalli on JavaScript-objektina määritetty rakenne, joka sisältää jonkin tietokokonaisuuden nimi-arvo -pareina.
  * Alla on määritelty yksittäisen tehtävän tietomalli sisältäen tehtävän nimen ja tehty-tiedon.
  * Tehtävä-objekti sisältää merkkijonona tallennetun nimen ja totuusarvona tallennetun tiedon siitä, onko tehtävä tehty.
  * Tietomallin/TypeScript-tyypin määrittely on ohjelmoijan itse päätettävissä sovelluksen tarpeen mukaan.
*/
interface Tehtava {
  nimi : string;
  tehty : boolean;
}

/*
  * Alla määritellään jälleen React-komponentti 'App', joka määrittää sovelluksen käyttöliittymän ja sen toiminnan.
  * React-komponentti on funktio, jonka pitää vähintään tehdä jokin JSX-palautus.
  * Komponentissa voi olla myös muuta logiikkaa, esim. tilamuuttujien ja customoitujen funktioiden määrittelyjä, joita käytetään komponentin toiminnassa.
*/
function App() {

  /*
    * Tässä määritellään viittaus (ref, reference).
    * Viittaus-muuttujan luonnin lisäksi se pitää asettaa palautuksessa jonkin JSX-elementin viitteeksi.
        * Alempana uusiTehtava-viite on sijoitettu tehtävän kirjoittamiseen varattuun input-kenttään.
        * Viittausta kutsumalla muualla ohjelmassa voidaan katsoa, mitä viitattu elementti sillä hetkellä sisältää.
    * Alla on määritetty, että uusiTehtava voi olla mikä tahansa viittaus (type any). Viittauksen arvo on aluksi null (ei arvoa) ja se saa myöhemmin jonkin arvon.
  */
  let uusiTehtava : any = useRef(null);

  /*
    * Tässä määritellään oma tietorakenne (data structure) tilamuttujaan 'tehtavat'.
    * Tietorakenne on toteutettu pohjautuen yllä määriteltyyn 'Tehtava'-tyyppiin.
    * Tämä 'tehtavat'-tilamuuttujan tietorakenne on taulukko (array), joka sisältää 'Tehtava'-tyypin mukaisia tietoja.
        * Array on järjestetty listamainen tietorakenne, jossa arrayn jokaisella elementillä (alkiolla) on oma sijainti/järjestys (index) listassa.
        * JavaScriptissa taulukossa alkioiden järjestys alkaa nollasta (0) ja kasvaa järjestyksessä [0, 1, 2, ..., n]
        * Listaa voidaan käsitellä viittaamalla johonkin alkioon sen järjestysluvulla.
            * esim. tehtavat[2] <-- viittaa tehtavat-taulukon kolmanteen alkioon
        * Listaa voidaan käsitellä myös JavaScriptin array-metodeilla (yleisimmät map() ja filter()).
            * Tässä demossa käytetään map()-metodia taulukon läpi käymiseen alkio kerrallaan.
            * map()-metodissa jokaiselle taulukon alkiolle suoritetaan jokin toimenpide sulkujen sisässä määritellyn 'callback'-funktion mukaan
            * Callback määritellään usein nuolifunktiona (esim. 'tehtavat.map( (tehtava) => {...täällä tehdään jotain...} )' )
                * 'tehtavat' on array, joka kutsuu map()-metodia
                * '(tehtava) =>' on callback-funktion parametri, jolla viitataan taulukon läpikäynnissä senhetkisen iteraation alkioon (yksittäinen tehtävä tehtävien listasta)
                * '=> {...täällä tehdään jotain...}' on callback-funktion varsinainen looginen osa, jossa määritellään jonkinlainen koodi, jolla käsitellään map()-metodia kutsunutta taulukkoa ja sen alkioita.
  */
  const [tehtavat, setTehtavat] = useState<Tehtava[]>([
    {
      nimi : "Käy kaupassa",
      tehty : false
    },
    {
      nimi : "Siivoa",
      tehty : true
    },
    {
      nimi : "Kastele kukat",
      tehty : false
    }
  ]);


  /*
    * Tässä luodaan funktio uuden tehtävän lisäämiselle.
    * Funktio ottaa vastaan argumenttina nimi-merkkijonon, jolla tallennetaan tehtävän nimi (nimi: string).
    * Funktion määrittelyn yhteydessä sulkujen sisällä olevista tiedoista käytetään termiä funktion parametri. Funktion kutsun yhteydessä parametriin sijoitettavaa tietoa sanotaan argumentiksi.
  */
  const lisaaTehtava = (nimi : string) : void => {

    /*
      * Usein funktioissa tehdään jonkinlaista tarkistusta syötetyille argumenteille ennen niiden käsittelyä. Tällä vältetään erilaisia ohjelmabugeja suorituksen aikana.
      * Tässä esimerkiksi tarkistetaan, että argumenttina annettu nimi oikeasti sisältää arvon.
      * !nimi (not nimi) on totuusarvon palauttava tarkistus, joka tarkistaa, sisältääkö nimi tietoa vai onko se tyhjä merkkijono. Jos nimi on tyhjä, alla oleva ehto on tosi, ja if-lohkossa oleva koodi ajetaan.
      * Tyhjää tietoa ei voida syöttää sovellukseen, vaan funktio vain palautuu tyhjänä (return ilman arvoa)
    */
    if (!nimi) {
      return;
    }

    /*
      * Jos yllä oleva tarkistus ei "lauennut" (nimi ei ollut tyhjä), jatketaan koodin suorittamista.
      * Alla luodaan apumuuttuja 'uusiTehtava', joka on tyypiltään 'Tehtava'-objekti. Muuttujaan sijoitetaan funktion argumenttina annettu nimi objektin 'nimi'-kenttään ja asetetaan 'tehty'-kentän tieto oletuksena false:ksi (tehtävää ei ole tehty ennen sen luontia).
    */
    let uusiTehtava : Tehtava = {
      nimi : nimi,
      tehty : false
    }

    /*
      * Lopuksi päivitetään 'tehtavat'-taulukko sijoittamalla siihen 'uusiTehtava'.
      * Taulukoiden kanssa uuden tiedon lisääminen pitää tehdä alla olevalla tavalla.
          * Alla olevassa sijoituksessa olemassa oleva 'tehtavat'-taulukko "avataan" (spread-operaatio) ja taulukon perään lisätään 'uusiTehtava'
          * Alla oleva kirjoitustapa on käytännössä sama kun kirjoitettaisiin olemassa olevan 'tehtavat'-taulukon jokainen alkio (Tehtava-objekteja) yksi kerrallaan uuteen taulukkoon (huomaa hakasulkeet []) ja perään lisätään vielä 'uusiTehtava'. Tässä siis tallennetaan kokonaan uusi taulukko vanhan tilalle.
    */
    setTehtavat([...tehtavat, uusiTehtava]);
  }

  /*
    * Alla olevassa funktiossa päivitetään argumenttia vastaavan 'tehtavat'-taulukon alkion 'tehty'-tieto.
  */
  const merkitseTehdyksi = (idx : number) : void => {

    /*
      * Koska alkuperäistä 'tehtavat'-taulukkoa ei voida suoraan käsitellä sellaisenaan, siitä voidaan luoda kopio apumuuttujaan 'tehtavatApu'.
      * Alla olevassa komennossa olemassa oleva 'tehtavat'-taulukko "spreadataan" auki ja tallennetaan kopiona apumuuttujaan. Tällöin taulukon tietoja voidaan käsitellä JavaScriptin komennoilla.
    */
    let tehtavatApu : Tehtava[] = [...tehtavat];

    /*
      * Kopioidun taulukon alkioihin voidaan nyt viitata järjestysluvulla (idx, index).
      * Alla viitataan valitun 'Tehtava'-objektin 'tehty'-tietoon ja käännetään sen arvo päinvastaiseksi (lue: tehty = not tehty).
          * Jos tehtävä oli jo tehty (true), siitä tulee ei-tehty (not true == false)
          * Jos tehtävää ei ollut tehty (false), siitä tulee tehty (not false == true)
    */
    tehtavatApu[idx].tehty = !tehtavatApu[idx].tehty

    /*
      * Lopuksi apumuuttujaan purettu taulukko, jonka valittu alkio on käännetty, tallennetaan takaisin 'tehtavat'-taulukkoon. Nyt taulukko oli valmiiksi "spreadattu" apumuuttujaan, jolloin uusi sijoitus voidaan tehdä suoraan.
      * Huomioi siis edellisen ja tämän funktion esimerkeistä, että tilamuuttujan sisältämää tietoa ei voida päivittää itsessään, mutta sen sisältämä arvo voidaan vaihtaa kokonaan. Siksi taulukko pitää aluksi kopioida "spread"-operaation avulla, jotta uusi kokonainen taulukko voidaan vaihtaa edellisen tilalle.
    */
    setTehtavat(tehtavatApu);
  }

  /*
    * App-komponentin palautus (return), joka on JSX-elementti.
    * Vaikka palautus sisältää useita JSX-elementtejä, niin teknisesti kyseessä on yksittäinen elementti, koska rinnakkaiset elementit on "kääritty" yksittäisen ylätason elementin (tyhjät <>-tagit) sisään.
    * Muista, että React-komponentit voivat palauttaa vain yhden ylätason JSX-elementin.
  */
  return (
    <>
      {/*
        * Kaksi otsikkotason elementtiä
      */}
      <h1>Demo 2: React-perusteita</h1>
      <h2>Tehtävälista</h2>

      {/*
        * Syöttökenttä tehtävän syöttämiselle.
        * Syöttokentälle on luotu viite komponentin alussa määriteltyyn useRef-hookiin. Viittaamalla muualla komponentissa tähän nimeen 'uusiTehtava' voidaan viitata tähän syöttökenttään ja esim. poimia sen senhetkinen arvo (current.value).
        * Kentälle on määritelty myös onKeyDown-tapahtumakäsittelijä, joka suoritetaan joka kerta, kun kentän ollessa aktiivinen painetaan jotain näppäimistön painiketta.
      */}
      <input
        ref={uusiTehtava}
        type="text"
        placeholder="Kirjoita tehtävä ja paina enter..."
        onKeyDown={(e : any) => {
          /*
            * Tämä on 'onKeyDown'-tapahtumakäsittelijän (event handler) callback-funktio.
          */
          console.log(e.key);
          /*
            * Tässä tarkastetaan, oliko painettu näppäin 'Enter'.
                * 'e.key' on tapahtuman (event) tiedoissa oleva näppäimen nimi, jota verrataan arvoon 'Enter'.
            * Huomioi, että tapahtuma suoritetaan joka painalluksella, ei vain 'Enter'-painalluksella. Alla olevassa tarkistuksessa toteutetaan koodilohko vain, jos painettu näppäin oli 'Enter'.
          */
          if (e.key === "Enter") {
            /*
              * Jos painettiin 'Enter', kutsutaan funktiota 'lisaaTehtava', jonka argumenttina on syöttökentän nykyinen arvo (e.target.value).
                * 'e' on tapahtuma (event), joka suoritetaan (tässä näppäimistön painallus).
                * 'target' on tapahtuman kohteena oleva JSX-elementti, joka kutsui tapahtumaa (tämä input-elementti).
                * 'value' on tapahtumaa kutsuneen kohteen senhetkinen arvo (mitä syöttökentässä lukee tapahtuman hetkellä).
            */
            lisaaTehtava(e.target.value);
            /*
              * Lopuksi tyhjennetään syöttökentän sisältämä arvo
            */
            e.target.value = null;
          }
        }}
      />

      {/*
        * Alla on painike, jolla tehtävä voidaan myös lisätä listaan.
      */}
      <button
        onClick={ () => {
          /*
            * Napin 'onClick'-tapahtumakäsittelijä kutsuu 'lisaaTehtava'-funktiota.
            * Nyt joudutaan hyödyntämään syöttökenttään sijoitettua viitettä (ref), jotta voidaan poimia kentän sisältämä arvo.
            * Huomaa, että viittauksessa arvon poimiminen tapahtuu eri tavalla kuin yllä kentän sisällä tehty arvon poimiminen.
                * 'uusiTehtava' on viittaus syöttökentän elementtiin.
                * 'current' on viitatun elementin senhetkinen tila.
                * 'value' on viitatun elementin senhetkisen tilan sisältämä arvo.
            * Tämä siis erona 'e.target.value' -arvoon.
          */
          lisaaTehtava(uusiTehtava.current.value);
          /*
            * Lopuksi nollataan syöttökentän sisältö.
          */
          uusiTehtava.current.value = "";
        }}
      >Lisää tehtävä</button>

      {/*
        * Tässä tehdään ehdollinen tulostus viitaten 'tehtavat'-taulukon pituuteen.
        * Jos taulukon pituus on pidempi kuin nolla (0), eli ts. jos taulukossa on alkioita, tulostetaan seuraava JSX-rakenne.
      */}
      {Boolean(tehtavat.length > 0) &&
      <ul>
        {/*
          * Kutsutaan 'tehtavat'-taulukon (array) map()-funktiota, joka käy koko taulukon läpi iteroiden alkio kerrallaan.
          * map()-funktion callbackissa otetaan vastaan argumentteina senhetkisen iteraation 'Tehtava'-objekti ja sen järjestysluku taulukossa.
        */}
        {tehtavat.map((tehtava : Tehtava, idx : number) => {
          /*
            * map()-metodin callbackissa (se mitä tehdään joka iteraatiolla) toteutetaan JSX-palautus.
            * Palautuksessa muodostetaan listaelementti (<li>-tag), joka saa sisällökseen iteraatiossa käsiteltävän 'Tehtava'-objektin nimen.
            * Jokaiselle <li>-elementille määritetään avain (key) perustuen samaan järjestyslukuun, joka taulukon alkiolla on.
            * Jokaiselle <li>-elementille määritetään 'onClick'-tapahtumakäsittelijä, jossa kutsutaan 'merkitseTehdyksi'-funktiota argumenttinaan avain-indeksi.
                * Eli painamalla listassa olevaa tehtävää, sen tehty arvo käännetään päinvastaiseksi (true --> false JA false --> true)
          */
          return (
           <li key={idx} onClick={ () => { merkitseTehdyksi(idx); }}>
            {/*
              * <li>-elementin sisällä tehdään tarkistus perustuen käsiteltävän tehtävän 'tehty'-tietoon ja toteutetaan ehdollinen tulostus.
                * Jos tehtävä on tehty (tehtava.tehty === true), palautetaan kysymysmerkin (?) jälkeinen JSX-rakenne.
                    * <del>-tageilla saadaan yliviivattua tehtävän nimi, jolloin se näkyy käyttöliittymässä tehtynä.
                * Muussa tapauksessa (jos tehtävä ei ole tehty), palautetaan kaksoispisteen (:) jälkeinen osa, eli tehtävän nimi sellaisenaan.
            */}
            {(tehtava.tehty === true)
            ? <del>{tehtava.nimi}</del>
            : tehtava.nimi
            }
           </li> 
          );
        })}
      </ul>
      }
    </>
  );
}

/*
  * Lopuksi komponentti pitää määrittää vietäväksi (export), jolloin se voidaan tuoda mukaan toisessa tiedostossa.
  * Jos katsot main.tsx -tiedostoon, siellä tuodaan App-komponentti ennen sen kutsua root-renderissä
*/
export default App;
