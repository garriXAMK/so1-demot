/*
  * Alla on demo 3:n tärkeimmät koodit, jotka määrittävät tämän React-sovelluksen ainoan näkymän, jonka App-komponentti kattaa. Demoissa oleelliset koodit voivat sijaita muuallakin ohjelman lähdekoodissa.

  * Tässä demossa sovelluksen toiminta on jaettu myös muihin komponentteihin, jotka on kommentoitu omissa tiedostoissaan.

  * Jokainen koodirivi on kommentoitu ohjelman logiikan selittämiseksi.

  * Tämä on kommentoitu versio samasta koodista, mikä on suoritettavassa ohjelmassa kommentoimattomana. Tätä koodia ei hyödynnetä sovelluksen toiminnassa, vaan on vain extrana.

  * Suosittelen lukemaan kommentit koodien ymmärtämiseksi paremmin.
*/

/*
  * Tuodaan (import) useState- ominaisuus Reactista.
  * useState:n avulla voidaan luoda tilamuuttujia, jotka seuraavat sovelluksessa käsiteltäviä tietoja.
*/
import { useState } from 'react';

/*
  * Tuodaan sovelluksen muut komponentit App-komponentin käytettäväksi.
  * Komponenttien logiikka ja palautus on määritelty niiden omissa tiedostoissa.
  * Jotta komponenttia voidaan käyttää tässä tiedostossa, se pitää ensin määrittää vietäväksi (export) omassa tiedostossa ja sitten tuoda (import) tässä tiedostossa.
*/
import Otsikko from '../components/Otsikko';
import Yhteenveto from '../components/Yhteenveto';
import Laskurinappi from '../components/Laskurinappi';
import Sivu from '../components/Sivu';

/*
  * Määritetty liikennelaskurin toimintaan liittyvä tietorakenne 'kulkuneuvot'.
  * 'kulkuneuvot' on taulukko, jonka alkiot ovat merkkijonoja (TypeScript-tyyppi on 'string[]').
  * Kulkuneuvoja hyödynnetään liikennelaskuri-sovelluksen laskurinappien luomiseen alempana. 
*/
const kulkuneuvot : string[] = [
  "Henkilöauto",
  "Pakettiauto",
  "Linja-auto",
  "Kuorma-auto tai rekka",
  "Polkupyörä",
  "Moottoripyörä",
  "Sähköpotkulauta",
  "Muu kulkuneuvo"
]

/*
  * Kuten aiemmissa demoissa, alla määritellään React-komponentti 'App', joka määrittää sovelluksen käyttöliittymän ja sen toiminnan.
  * React-komponentti on funktio, jonka pitää vähintään tehdä jokin JSX-palautus.
  * Komponentissa voi olla myös muuta logiikkaa, esim. tilamuuttujien ja customoitujen funktioiden määrittelyjä, joita käytetään komponentin toiminnassa.
  
  * HUOMIOI, että erona aiempiin demoihin, tässä komponentin vienti on kirjoitettu suoraan osaksi funktion esittelyä. Tämä toimii siis näinkin.
*/
export default function App() {

  /*
    * Määritellään tilamuuttuja 'yhteensa', joka pitää kirjaa kaikista lisätyistä kulkuneuvoista.
    * Tilamuuttujan arvo on oletuksena nolla (0), eli yhtään ajoneuvoa ei ole nähty.
  */
  const [yhteensa, setYhteensa] = useState<number>(0);

  /*
    * Määritellään oma funktio 'lisaaYksi', jonka tehtävänä on kasvattaa kulkuneuvojen kokonaismäärää yhdellä.
  */
  const lisaaYksi = () => {
    /*
      * Sijoitetaan tilamuuttujan uudeksi arvoksi sen nykyinen arvo, johon on lisätty yksi.
    */
    setYhteensa(yhteensa + 1);
  }

  /*
    * App-komponentin palautus (return), joka on JSX-elementti.
    * Huomaa nyt, miten palautettava "ylätason" JSX-elementti on itse luotu 'Sivu'-komponentti, jonka lapsikomponentteja (children) kaikki muut JSX-elementit ovat.
    * Huomioi, että tässä demossa olevat esimerkit komponenteista ja niiden ominaisuuksista eivät kata kaikkia mahdollisuuksia ja käyttötapauksia. Tässä on vain muutama hieman erilainen esimerkki komponenttien määrittelystä ja kutsuista.
  */
  return (
    <Sivu> {/*
      * Kutsutaan Sivu-komponenttia. Huomioi sulkeva tunniste (</Sivu>)
      * Sivu-komponenttiin voidaan sijoittaa lapsikomponentteja (children). Tästä lisää komponentin omassa koodissa.
    */}

      {/*
        * Kutsutaan Otsikko-komponentteja.
        * Otsikot ottavat vastaan ominaisuudet 'taso' ja 'children' (lapsikomponentti). Näistä lisää komponentin omassa koodissa.
      */}
      <Otsikko taso="iso">Demo 3: React-komponentit</Otsikko>
      <Otsikko taso="keski">Liikennelaskuri</Otsikko>

      {/*
        * Kutsutaan Yhteenveto-komponenttia.
        * Yhteenveto ottaa vastaan ominaisuuden 'yhteensa'. Tästä lisää komponentin omassa koodissa.
      */}
      <Yhteenveto yhteensa={yhteensa} />
      
      {/*
        * Kutsutaan 'kulkuneuvot'-taulukolle map()-funktiota.
        * Callback-funktion argumentteina on map()-funktion senhetkisen iteraation alkio (yksittäinen kulkuneuvo) ja alkion järjestysluku.
      */}
      {kulkuneuvot.map((kulkuneuvo: string, idx: number) => {
        /*
          * Callback palauttaa Laskurinappi-komponentin, jonka ominaisuuksia ovat 'paivitaSumma'-tapahtumakäsittelijä, 'key' ja 'children'.
          * Myös napilla on sulkeva tunniste (</Laskurinappi>), koska se ottaa vastaan lapsikomponentteja.
        */
        return (
          <Laskurinappi paivitaSumma={lisaaYksi} key={idx}>{kulkuneuvo}</Laskurinappi>
        );
      })}

    </Sivu>
  )
}
