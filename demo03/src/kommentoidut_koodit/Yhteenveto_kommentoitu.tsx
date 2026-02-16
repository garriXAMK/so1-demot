/*
  * Yhteenvedolle on määritelty ominaisuutena vain yksi arvo 'yhteensä', joka on number-tyyppiä
*/
interface Props {
    yhteensa: number;
}

/*
  * Yhteenveto-komponentin määrittely, joka palauttaa <p>-elementin.
  * Palautuksessa tulostetaan kulkuneuvojen määrä, joka välitetään App-komponentista Yhteenveto-komponentin ominaisuutena (props)
*/
function Yhteenveto(props: Props) {
  return (
    <p>Kulkuneuvoja yhteensä: {props.yhteensa}</p>
  );
}

export default Yhteenveto;
