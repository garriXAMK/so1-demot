/*
  * Komponentille on määritelty Props-tyyppi TypeScript interfacella.
  * Teknisesti tyyppi on JavaScript-objekti, joka sisältää alla määritellyt avaimet ja niiden alkeistietotyypit (esim. string, number, jne.).
  * Interfacen avulla luodun TypeScript-tyypin tehtävä on määrittää ns. sopimus, jonka mukaan tietoja käsitellään, eli komponenttiin ominaisuuksiin ei voida ohjata muuta tietotyyppiä kuin mitä on sallittu.
  * 
  * TypeScript-ohjelmoinnissa React-komponentin ominaisuudet kannattaa määritellä objekti-tyyppinä, joka sisältää jokaisen komponentille välitettävän ominaisuuden ja sen salliman tietotyypin.
  * 
  * 'children'-ominaisuus tarkoittaa tämän komponentin lapsikomponentiksi annettavaa tietoa, joka voi olla mitä tahansa React.Node -tyyppiä (kattaa useita eri tyyppejä). Tässä children on määritelty tarkemmin merkkijonoksi.
  * 'taso'-ominaisuudella on määritetty kolme arvoa, joita käytetään määrittämään komponentin ehdollinen palautus alempana.
      * Kolmella arvolla "pieni" | "keski" | "iso" määritetään ns. union-tyyppi, jolloin ominaisuuden arvon pitää olla täsmälleen jokin näistä arvoista 
      * HUOMIOI, että 'taso' on määritelty vapaaehtoiseksi ominaisuudeksi (kysymysmerkki nimen perässä 'taso?'), eli tätä ominaisuutta ei ole pakko antaa Otsikko-komponenttia kutsuessa. Tällöin 'taso'-tiedon tyyppi on 'undefined' eli määrittämätön.

*/
interface Props {
  children: string;
  taso?: "pieni" | "keski" | "iso";
}

/*
  * Tässä määritellään varsinainen Otsikko-komponentti.
  * React-komponentti on JavaScript-funktio, joka palauttaa JSX-merkkausta.
  * React-komponenttiin voidaan myös määrittää ominaisuus/ominaisuuksia.
  * JSX-palautus ja ominaisuudet (props) ovat tärkeimmät React-komponentin määritykset.
*/
function Otsikko(props: Props) {

  /*
    * Switch-rakenne, jolla tehdään tarkistus mahdollisesti välitettyyn 'taso'-ominaisuuteen.
    * Switch-rakenne on samalla tavalla ehtorakenne kuin if-rakenne. Voit lukea lisää JavaScriptin ehtorakenteista netistä
    * Switch-rakenne määrittää ehdossa tiedon, jota tarkastellaan. Jokainen case määrittää tapauksen, joka suoritetaan jos ehdon arvo vastaa kyseista casea.
  */
  switch (props.taso) {
    /*
      Jos case == "pieni", palautetaan JSX-elementtinä <h3>-tason elementti, jonka sisältönä määritetään Otsikon lapsiominaisuus (string).
    */
    case "pieni": return <h3
                          style={{
                            fontSize: "18px"
                          }}
                        >{props.children}</h3>
    /*
      * Jos case == "keski", palautetaan <h2>-tason elementti.
    */
    case "keski": return <h2
                          style={{
                            fontSize: "24px"
                          }}
                        >{props.children}</h2>
    /*
      * Jos case == "iso", palautetaan <h1>-tason elementti.
    */
    case "iso": return <h1
                          style={{
                            fontSize: "32px"
                          }}
                        >
                          {props.children}
                        </h1>
    /*
      * Jos 'taso'-ominaisuutta ei välitetty, suoritetaan Switch-rakenteen oletustilanne (default), joka tässä tapauksessa palauttaa <h2>-tason elementin eli keskikokoisen otsikon.
    */
    default: return <h2>{props.children}</h2>
  }
}

/*
  * Lopuksi Otsikko-komponentti määritetään vietäväksi (export) muihin tiedostoihin. Tämän olisi voinut myös kirjoittaa funktion esittelyn yhteyteen, kuten App-komponentissa.
*/
export default Otsikko;

/*
  * Alla on toinen esimerkki, miten komponentin ominaisuudet voisi määrittää suoraan funktion kutsuun.
  * Tässä tapauksessa olisi turha määrittää erillistä TypeScript-tyyppiä interfacen avulla
*/

// function Otsikko(children: string, taso?: "pieni" | "keski" | "iso") {

//   switch (taso) {
//     case "pieni": return <h3
//                           style={{
//                             fontSize: "18px"
//                           }}
//                         >{children}</h3>
//     case "keski": return <h2
//                           style={{
//                             fontSize: "24px"
//                           }}
//                         >{children}</h2>
//     case "iso": return <h1
//                           style={{
//                             fontSize: "32px"
//                           }}
//                         >
//                           {children}
//                         </h1>
//     default: return <h2>{children}</h2>
//   }
// }
