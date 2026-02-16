/*
  * Alla on demo 1:n tärkeimmät koodit, jotka määrittävät tämän React-sovelluksen ainoan näkymän, jonka App-komponentti kattaa. Demoissa oleelliset koodit voivat sijaita muuallakin ohjelman lähdekoodissa.

  * Jokainen koodirivi on kommentoitu ohjelman logiikan selittämiseksi.

  * Tämä on kommentoitu versio samasta koodista, mikä on suoritettavassa ohjelmassa kommentoimattomana. Tätä koodia ei hyödynnetä sovelluksen toiminnassa, vaan on vain extrana.

  * Suosittelen lukemaan kommentit koodien ymmärtämiseksi paremmin.
*/

/*
  * Tuodaan (import) useState-hook -ominaisuus Reactista.
  * useState:n avulla voidaan luoda tilamuuttujia, jotka seuraavat sovelluksessa käsiteltäviä tietoja.
  * Ilman tilamuuttujia ei voida säilyttää tietoja esim. käyttäjän syötteestä React-komponentin päivitysten välillä.
  * React-komponentti päivittyy esim. joka kerta, kun sen näkymässä tapahtuu jokin tapahtuman käsittely (napin painaminen, syöttökentän täyttäminen jne.).
*/
import { useState } from "react";

/*
  * Tuodaan App-komponentin tyylitiedosto, jotta voidaan käyttää CSS-tyylejä (className-kutsut JSX-elementeissä).
  * Tuonnissa pitää määrittää tuotavan tiedoston sijainti suhteessa tuonnin tekevän tiedoston sijaintiin.
      * Tässä tuonnin tekee tämä tiedosto (App.tsx) ja tyylitiedosto on samassa sijainnissa (src-kansion alla)
      * './'-alku sijainnin osoitteessa kertoo, että tiedosto on samalla hakemiston tasolla.
      * '../'-alku nousisi yhden kansion verran ylemmäs hakemistossa (tässä demo01-kansio). 
*/
import "./App.css";

/*
  * Alla määritellään App-komponentti, joka on JavaScript-funktio.
  * Kaikki React-komponentit ovat JavaScript-funktioita, jotka palauttavat JSX-merkkausta.
  * Koska käytetään TypeScript-kieltä, merkataan JSX-tiedostot .tsx-päätteellä.
*/
function App() {
  /*
    * Määritetään kaksi React-tilamuuttujaa 'nimi' ja 'tervehdys'.
    * Oletuksena tilamuuttujat saavat arvoksi tyhjän merkkijonon.
    * useState()-metodin kutsun yhteydessä määritetään TypeScript-tyyppi <>-tagien väliin.
    * TypeScript-tyyppi kuvaa kyseisen tiedon JavaScript-tietotyyppiä.
  */
  const [nimi, setNimi] = useState<string>("");
  const [tervehdys, setTervehdys] = useState<string>("");

  /*
    * Määritetään funktio 'tervehdi', joka muodostaa 'tervehdys'-tilamuuttujan merkkijono-arvon.
    * 'setTervehdys'-metodi määrittää tilamuuttujan uuden arvon.
    * Funktio on kirjoitettu nuolifunktiona, jossa funktion logiikka sijoitetaan vakion 'tervehdi' arvoksi. Tämä on toinen tapa kirjoittaa funktio (vrt. App-komponentin funktion määritys).
    * Funktio ei palauta (return) arvoa, joten sen tyypiksi määritetään 'void'.
  */
  const tervehdi = (): void => {
    /*
      * Sijoitetaan 'tervehdys'-tilamuuttujaan merkkijono.
      * Merkkijono on kirjoitettu 'template literal'-muodossa (lainaus-/heittomerkkien sijasta backtick-merkit ``).
      * Kun merkkijono kirjoitetaan template literal -muodossa, siihen voidaan suoraan upottaa JavaScript-arvoja käyttäen ${muuttujanNimi} -kirjoitustapaa.
    */
    setTervehdys(`Heippa maailma, ${nimi} kävi täällä!`);
  };

  /*
    * Tässä alkaa App-komponentin (App-funktio) palautus.
    * React-komponentti palauttaa aina JSX-merkkausta (muistuttaa HTML:ää muutamilla lisäominaisuuksilla).
    * Palautuksen täytyy olla vain yksittäinen JSX-elementti, jonka takia rinnakkaiset HTML-tunnisteet pitää kirjoittaa yhden tunnisteen sisään.
    * Alla JSX-elementit on sijoitettu tyhjien React Fragment -tunnisteiden väliin (<>...</> -tagit).
  */
  return (
    <>
      {/* Huomaa, että palautuksessa siirrytään JavaScript-koodista JSX-merkkaukseen, jolloin koodikommentit pitää kirjoittaa aaltosulkeiden {} sisään, kuten muutkin JavaScript-koodin viittaukset, esim. muuttujien nimet.
        * Alla on kaksi otsikkoelementtiä (h-tunnisteet).
        * Vaikka tunnisteet kirjoitetaan HTML-tunnisteilla, ne ovat teknisesti JSX-elementtejä.
      */}
      <h1>Demo 1: React-perusteita</h1>
      <h2>"Hello World!"</h2>

      {/*
        * Syöttökentän JSX-elementti (<input>), joka sisältää teksti-tyyppisen arvon (type).
        * onChange-ominaisuus määrittää tapahtumakäsittelijän, joka suoritetaan kun kentän arvo muuttuu (käyttäjä kirjoittaa kenttään).
        * Tapahtumakäsittelijässä suoritetaan anonyymi funktio (nuolifunktiona), jossa kutsutaan 'nimi'-tilamuuttujan 'setNimi'-metodia, joka päivittää kyseisen tilamuuttujan arvon jokaisella muutoksella.
        * Kentän arvo voidaan poimia viittaamalla siihen (e.target.value), jossa
            * 'e' viittaa tapahtuman tietoihin,
            * 'target' on tapahtuman tiedoissa oleva kohteen tieto (tapahtuman kutsuja), ja
            * 'value' on tapahtuman kohteena olevan elementin senhetkinen arvo.
      */}
      <input
        type="text"
        placeholder="Kirjoita nimesi..."
        onChange={(e) => {
          setNimi(e.target.value);
        }}
      />

      {/*
        * Painikkeen JSX-elementti (<button>), joka sisältää tapahtumakäsittelijän painallukselle (onClick)
        * Tapahtumakäsittelijä ei suorita tässä anonyymia funktiota (nuolifunktiona), vaan kutsuu yllä määriteltyä 'tervehdi'-funktiota.
        * Ohjelman suoritus siis hyppää nappia painaessa tämän ohjelmakoodin riville 26 ja suorittaa funktion sisältämän logiikan.
      */}
      <button onClick={tervehdi}>Tervehdi</button>

      {/*
        * Tässä on toteutettu ehdollinen tulostus pohjautuen totuusarvoon (Boolean)
        * Ehdollinen tulostus tarkoittaa nimensä mukaisesti sitä, että komponentin JSX-palautuksessa on osa, joka tulostetaan vain jonkin ehdon täyttyessä.
        * Alla tarkistetaan 'tervehdys'-tilamuuttujan totuusarvo, jonka perusteella (ehdon ollessa tosi) tulostetaan tervehdysviesti.
            * Vaikka 'tervehdys'-tilamuuttuja itsessään on tyypiltään merkkijono, siitä voidaan saada myös totuusarvo (Boolean) tyyppimuunnoksella (Boolean(muuttujanNimi)).
            * Merkkijonon ollessa tyhjä, totuusarvo on false. Muissa tapauksissa se on true ja ehto täyttyy.
        * Alla oleva ehtorakenne on yksi kolmesta Reactin ehtorakenteesta.
            * ehto (on tosi) && tulostus <-- Eli jos ehto on tosi, niin tulostetaan oikeanpuoleinen JSX-elementti. Tässä ei ole else-osaa.
            * Ehdon tarkistus voidaan myös tehdä ternary operator -rakenteella:
                * ehto ? jos true : jos false
      */}
      {Boolean(tervehdys) && <p className={`tervehdys`}>{tervehdys}</p>}
    </>
  );
}

/*
  * Lopuksi komponentti pitää määrittää vietäväksi (export), jolloin se voidaan tuoda mukaan toisessa tiedostossa.
  * Jos katsot main.tsx -tiedostoon, siellä tuodaan App-komponentti ennen sen kutsua root-renderissä
*/
export default App;
