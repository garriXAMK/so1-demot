/**
 * Toin sovellukseen mukaan visuaalisuutta asentamalla roboto-fontin osaksi ohjelman lähdekoodeja ja tuomalla ne node_modules-kansiosta.
 * Fontit otetaan käyttöön Sivu-komponentin tasolla, jolloin fontit välitetään myös kaikille lapsikomponenteille.
 */
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

/**
 * Sivu-komponentti ottaa vastaan ominaisuutena taulukon, joka sisältää lapsikomponentteja. Koska Sivun sisällä kutsuttavat komponentit voivat olla mitä vain tyyppiä, käytetään Reactin yleistä ReactNode-tyyppiä.
 * Koska Sivu voi sisältää useita komponentteja, määritetään ominaisuus taulukkona ReactNode-tyyppisiä tietoja.
 */
interface Props {
    children: React.ReactNode[];
}

/**
 * Sivu-komponentin määrittely
 */
export default function Sivu({ children }: Props) {
    /**
     * Komponentti palauttaa yhden div-elementin, jonka sisään kaikki muut komponentit tuodaan lapsikomponentteina.
     */
    return (
        <div
            style={{
                maxWidth: "900px",
                margin: "auto",
                fontFamily: "Roboto"
            }}
        >
            {children}
        </div>
    );
}