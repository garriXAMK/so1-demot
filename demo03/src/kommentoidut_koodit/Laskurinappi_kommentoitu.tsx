/*
    * Laskurinappi-komponentti sisältää oman tilan seurannan, joten tuodaan useState-hook mukaan Reactista.
    * Jokaiselle napille luodaan oma tila komponenttia kutsuttaessa, jolloin saadaan tulostettu oma laskuriarvo jokaiselle napille erikseen.
    * Samaa tilaa ei siis jaeta nappien välillä.
*/
import { useState } from "react";

/*
    * Laskurinapin ominaisuuksina määritetään 'children'-ominaisuus, eli ylemmältä tasolta välitetty merkkijono sekä tapahtumakäsittelijä 'paivitaSumma'.
    * Voimme siis määrittää omille komponenteille myös omia tapahtumakäsittelijöitä.
    * Tässä komponentin tapahtumakäsittelijä ottaa vastaan funktion, joka ei palauta mitään tietoa (tyyppi void).
*/
interface Props {
    children: string;
    paivitaSumma: () => void;
}

/*
    * Laskurinappi-komponentin esittely.
    * Komponentti ottaa vastaan lapsielementin ja funktion.
*/
export default function Laskurinappi(props: Props) {

    /**
     * Asetetaan komponentin tilamuuttuja 'laskuri', joka seuraa komponentista luodun ilmentymän tilaa.
     * Jokaiselle napille luodaan oma laskuri.
     */
    const [laskuri, setLaskuri] = useState<number>(0);

    /**
     * Komponentti palauttaa JSX-elementin button.
     * Kutsutaan button-elementin onClick-tapahtumakäsittelijää, joka suorittaa/välittää tiedon paivitaSumma-tapahtumakäsittelijälle.
            * Käytännössä siis kun nappia painetaan, niin paivitaSumma-tapahtumakäsittelijälle välitetty funktio App-komponentin tasolla suoritetaan. 
     * Napin painamisen yhteydessä painikkeen omaa laskuria kasvatetaan yhdellä ja lukumäärä tulostetaan napin tekstin yhteydessä.
    */
    return (
        <button
            style={{
                width: "300px",
                padding: "20px",
                marginBottom: "5px",
                display: "block"
            }}
            onClick={() => {
                props.paivitaSumma();
                setLaskuri(laskuri + 1);
            }}
        >
            {/**
             * Napin tekstille välitetään lapsielementtinä painikkeelle annettu nimi, jonka perään tulostetaan painikkeen oman laskurin lukema.
             */}
            {props.children} ({laskuri})
        </button>
    );
}