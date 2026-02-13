interface Props {
    yhteensa: number;
}

function Yhteenveto({ yhteensa }: Props) {
  return (
    <p>Kulkuneuvoja yhteensä: {yhteensa}</p>
  );
}

export default Yhteenveto;
