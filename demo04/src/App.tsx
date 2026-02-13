import { Button, Checkbox, Container, FormControlLabel, TextField, Typography } from "@mui/material";
import { useState } from "react";

interface FormData {
  nimi: string;
  mail: string;
  terms: boolean;
}

export default function App() {

  const [lomaketiedot, setLomaketiedot] = useState<FormData>();

  return (
    <>
      <Container maxWidth="md">
        <Typography>Demo 4: MUI-komponentit</Typography>

        <Typography>Uutiskirjeen tilaus</Typography>

        <TextField
          label="Nimi"
          placeholder="Etunimi Sukunimi"
          fullWidth
          required
        />

        <TextField
          label="Sähköpostiosoite"
          placeholder="user@domain"
          fullWidth
          required
        />

        <FormControlLabel required control={<Checkbox />} label="Hyväksyn käyttöehdot" />

        <Button
          variant="contained"
          fullWidth
          size="large"
          //disabled={!lomaketiedot}
          onClick={(e) => { alert("Olet tilannut uutiskirjeemme, kiitos!")}}
        >
          Tilaa uutiskirje
        </Button>
      </Container>
    </>
  );
}

