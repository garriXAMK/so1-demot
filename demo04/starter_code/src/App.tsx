

import "./App.css";
import { Button, Container, Grid, TextField, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { useState } from "react";
import tuotekuva_1 from "./kuvat/Kuva1.png";
import tuotekuva_2 from "./kuvat/Kuva2.png";
import tuotekuva_3 from "./kuvat/Kuva3.png";
import tuotekuva_4 from "./kuvat/Kuva4.png";
import tuotekuva_5 from "./kuvat/Kuva5.png";
import tuotekuva_6 from "./kuvat/Kuva6.jpg";

/*==========================================*/
    /* Tuotteiden tietotyypit */
/*==========================================*/

interface Tuote {
  id: number;
  nimi: string;
  kuva:string;
  myynti_hinta: number; 
  veroton_hinta: number;    
} 

interface Tilatut_tuotteet {
  id: number;
  kpl: number;    
}

function App() {

/*==========================================*/
    /* Tuotteet */
/*==========================================*/

  const [tuote_1_Nimi, setTuote_1_Nimi] = useState<string>("Pappa-Tunturi");
  const [tuote_1_MyyntiHinta, setTuote_1_MyyntiHinta] = useState<number>(1300.00);

  const [tuote_2_Nimi, setTuote_2_Nimi] = useState<string>("Jääkiekkokypärä");
  const [tuote_2_MyyntiHinta, setTuote_2_MyyntiHinta] = useState<number>(26.50); 
  
  const [tuote_3_Nimi, setTuote_3_Nimi] = useState<string>("Suksipaketti");
  const [tuote_3_MyyntiHinta, setTuote_3_MyyntiHinta] = useState<number>(45.90); 

  const [tuote_4_Nimi, setTuote_4_Nimi] = useState<string>("Trabant 601");
  const [tuote_4_MyyntiHinta, setTuote_4_MyyntiHinta] = useState<number>(4600.00); 

  const [tuote_5_Nimi, setTuote_5_Nimi] = useState<string>("Tietokonepaketti");
  const [tuote_5_MyyntiHinta, setTuote_5_MyyntiHinta] = useState<number>(35.50);

  const [tuote_6_Nimi, setTuote_6_Nimi] = useState<string>("Solifer asuntovaunu");
  const [tuote_6_MyyntiHinta, setTuote_6_MyyntiHinta] = useState<number>(20.00);

  

  const [tuotteet, setTuotteet] = useState<Tuote[]>([
    {id: 0, nimi: tuote_1_Nimi, kuva: tuotekuva_1, myynti_hinta: tuote_1_MyyntiHinta, veroton_hinta: tuote_1_MyyntiHinta * 0.745},
    {id: 1, nimi: tuote_2_Nimi, kuva: tuotekuva_2, myynti_hinta: tuote_2_MyyntiHinta, veroton_hinta: tuote_2_MyyntiHinta * 0.745},
    {id: 2, nimi: tuote_3_Nimi, kuva: tuotekuva_3, myynti_hinta: tuote_3_MyyntiHinta, veroton_hinta: tuote_3_MyyntiHinta * 0.745},
    {id: 3, nimi: tuote_4_Nimi, kuva: tuotekuva_4, myynti_hinta: tuote_4_MyyntiHinta, veroton_hinta: tuote_4_MyyntiHinta * 0.745},
    {id: 4, nimi: tuote_5_Nimi, kuva: tuotekuva_5, myynti_hinta: tuote_5_MyyntiHinta, veroton_hinta: tuote_5_MyyntiHinta * 0.745},
    {id: 5, nimi: tuote_6_Nimi, kuva: tuotekuva_6, myynti_hinta: tuote_6_MyyntiHinta, veroton_hinta: tuote_6_MyyntiHinta * 0.745},
  ]);

   

  function OstosTuote_1 () {    
    LisaaOstoskoriin(0);    
    }

  function OstosTuote_2 () {   
    LisaaOstoskoriin(1);    
    }

  function OstosTuote_3 () {   
    LisaaOstoskoriin(2);    
    }

  function OstosTuote_4 () {   
    LisaaOstoskoriin(3);    
    }

  function OstosTuote_5 () {   
    LisaaOstoskoriin(4);    
    }

    function OstosTuote_6 () {   
    LisaaOstoskoriin(5);       
  }
 

  

/*==========================================*/
    /* Tilatut tuotteet*/
/*==========================================*/
  
  const [tilausLista, setTilausLista] = useState<Tilatut_tuotteet[]>([]);
  const [ostosKoriLkm, setOstosKoriLkm] = useState<number>(0);

  function LisaaOstoskoriin(id: number) {
    setOstosKoriLkm(ostosKoriLkm +1);
    const haettu_tuote = tilausLista.find(item => item.id === id)                

    if (haettu_tuote) {setTilausLista(prev => prev.map                       
      (item => item.id === id 
        ? {...item, kpl: item.kpl +1}: item))                               
    }
  else {
    setTilausLista(prev => [...prev, {id: id, kpl: 1}])                   
  }
  }

  function OstoslistaTilanne() {
    
    const maara = tilausLista.reduce((summa, item) => summa + item.kpl, 0)
    const kokoSumma = tilausLista.reduce((summa, item) => {
    const tuote = tuotteet.find(t => t.id === item.id); 
      return summa + item.kpl * tuote!.myynti_hinta;
    }, 0)

    if (maara === 0) {
      return "ei ole tuotteita";
    }
    if (maara === 1) {
      return `on 1 tuote, loppusumma on ${kokoSumma.toFixed(2)} \u20AC.`;
    }
    if (maara > 1) {
      return `on ${maara} tuotetta, loppusumma on ${kokoSumma.toFixed(2)} \u20AC.`;
    }
    }

function OstoslistaTilanne_Veroton() {    
    const maara = tilausLista.reduce((summa, item) => summa + item.kpl, 0)
    const kokoSumma = tilausLista.reduce((summa, item) => {
      const tuote = tuotteet.find(t => t.id === item.id); 
      return summa + item.kpl * tuote!.veroton_hinta;      
    }, 0)

    if (maara === 0) {
      return "ei ole tuotteita";
    }
    if (maara === 1) {
      return `on 1 tuote, loppusumma on ${kokoSumma.toFixed(2)} \u20AC.`;
    }
    if (maara > 1) {
      return `on ${maara} tuotetta, loppusumma on ${kokoSumma.toFixed(2)} \u20AC.`;
    }
}

  const [kirjautuminen, setKirjautuminen] = useState(false);
  const [tunnus, setTunnus] = useState<string>("");
  const [salasana, setSalasana] = useState<string>("");
  const [yritysTunnus, setYritysTunnus] = useState<string>("katselu")

 function kirjauduSisaan() {
  if (tunnus === "katselu" && salasana ==="passu123") {
  setKirjautuminen(true);
  setTunnus("");
  setSalasana("");
  }
  else {
    alert("Kirjautumistunnus tai salasana on väärin!")
  }
 }

 function kirjauduUlos() {
  setKirjautuminen(false);
 } 

 /* Dialog */

  const [dialogiAuki, setDialogiAuki] = useState(false);

  function AvaaDialogi() {
    setDialogiAuki(true);
  }
  
  function SuljeDialogi() {
    setDialogiAuki(false);
  }
    
  
  return (
      <Container maxWidth="lg">       
        <Grid container spacing={1} >

            {/*header*/}
          <Grid size={12} className= "header elementinRajaus">
            <Typography variant="h3">Nettikauppa Ö</Typography>
          </Grid>

            {/*tuotealue*/}
          <Grid size={9} container spacing={0.2} sx={{height: "100%"}} className= "tuoteBox">            
            <Grid id="tuote_1" className="tuoteRuutu" size={4}>              
              <div className="tuoteNimi">{tuotteet[0].nimi}</div>
              <div className="tuoteKuva"><img src={tuotteet[0].kuva}/></div>
              <div className="lisaaKoriin"><button id="valitseTuote_1" className="lisaaKoriinNappi" onClick={OstosTuote_1} >Lisää ostoskoriin</button></div>
              <div className="hinnat">
                <p id="tuote_1_hinta">{tuotteet[0].myynti_hinta.toFixed(2)} {"\u20AC"}</p>
                {kirjautuminen && (<p className="veroton_hinta">({tuotteet[0].veroton_hinta.toFixed(2)} {"\u20AC"})</p>)}                
              </div>
              </Grid>              
            <Grid id="tuote_2" className="tuoteRuutu" size={4}>
              <div className="tuoteNimi">{tuotteet[1].nimi}</div>
              <div className="tuoteKuva"><img src={tuotteet[1].kuva}/></div>
              <div className="lisaaKoriin"><button id="valitseTuote_2" className="lisaaKoriinNappi" onClick={OstosTuote_2} >Lisää ostoskoriin</button></div>
              <div className="hinnat">
              <p className="hinta" id="tuote_2_hinta">{tuotteet[1].myynti_hinta.toFixed(2)} {"\u20AC"}</p>
              {kirjautuminen && (<p className="veroton_hinta">({tuotteet[1].veroton_hinta.toFixed(2)} {"\u20AC"})</p>)}
              </div>
            </Grid>

            <Grid id="tuote_3" className="tuoteRuutu" size={4}>
              <div className="tuoteNimi">{tuotteet[2].nimi}</div>
              <div className="tuoteKuva"><img src={tuotteet[2].kuva}/></div>
              <div className="lisaaKoriin"><button id="valitseTuote_3" className="lisaaKoriinNappi" onClick={OstosTuote_3} >Lisää ostoskoriin</button></div>
              <div className="hinnat">
              <p className="hinta" id="tuote_3_hinta">{tuotteet[2].myynti_hinta.toFixed(2)} {"\u20AC"}</p>
              {kirjautuminen && (<p className="veroton_hinta">({tuotteet[2].veroton_hinta.toFixed(2)} {"\u20AC"})</p>)}
              </div>
            </Grid>
            <Grid id="tuote_4" className="tuoteRuutu" size={4}>
              <div className="tuoteNimi">{tuotteet[3].nimi}</div>
              <div className="tuoteKuva"><img src={tuotteet[3].kuva}/></div>
              <div className="lisaaKoriin"><button id="valitseTuote_4" className="lisaaKoriinNappi" onClick={OstosTuote_4} >Lisää ostoskoriin</button></div>
              <div className="hinnat">
              <p className="hinta" id="tuote_3_hinta">{tuotteet[3].myynti_hinta.toFixed(2)} {"\u20AC"}</p>
              {kirjautuminen && (<p className="veroton_hinta">({tuotteet[3].veroton_hinta.toFixed(2)} {"\u20AC"})</p>)}
              </div>
            </Grid>
            <Grid id="tuote_5" className="tuoteRuutu" size={4}>
              <div className="tuoteNimi">{tuotteet[4].nimi}</div>
              <div className="tuoteKuva"><img src={tuotteet[4].kuva}/></div>
              <div className="lisaaKoriin"><button id="valitseTuote_5" className="lisaaKoriinNappi" onClick={OstosTuote_5} >Lisää ostoskoriin</button></div>
              <div className="hinnat">
              <p className="hinta" id="tuote_3_hinta">{tuotteet[4].myynti_hinta.toFixed(2)} {"\u20AC"}</p>
              {kirjautuminen && (<p className="veroton_hinta">({tuotteet[4].veroton_hinta.toFixed(2)} {"\u20AC"})</p>)}
              </div>
            </Grid>
            <Grid id="tuote_6" className="tuoteRuutu" size={4}>
              <div className="tuoteNimi">{tuotteet[5].nimi}</div>
              <div className="tuoteKuva"><img src={tuotteet[5].kuva}/></div>
              <div className="lisaaKoriin"><button id="valitseTuote_6" className="lisaaKoriinNappi" onClick={OstosTuote_6} >Lisää ostoskoriin</button></div>
              <div className="hinnat">
              <p className="hinta" id="tuote_3_hinta">{tuotteet[5].myynti_hinta.toFixed(2)} {"\u20AC"}</p>
              {kirjautuminen && (<p className="veroton_hinta">({tuotteet[5].veroton_hinta.toFixed(2)} {"\u20AC"})</p>)}
              </div></Grid>             
          </Grid>

            {/*sivuosa*/}
          <Grid size={3}>
            <Grid container direction="column" spacing={1} sx={{height: "100%"}}>
              {/*kirjautumisbox*/}
              <Grid className="kirjautumisBox elementinRajaus" >
                {kirjautuminen ?(
                  <div>
                  <Typography >Olet kirjautunut sisään yritystunnuksella: <span className="yritysTunnus">{yritysTunnus}</span></Typography>
                  <Button variant="contained" id="kirjaudu_ulos_Nappi" onClick={kirjauduUlos}>kirjaudu ulos</Button>
                </div>
                ):
                (<div>
                  <TextField value={tunnus} id="tunnus" 
                  onChange={(e) => setTunnus(e.target.value)} className="input" label="Kirjautumistunnus" size="small" sx={{marginBottom: "10px"}}/>
                  <TextField value={salasana} id="salasana"
                  onChange={(e) => setSalasana(e.target.value)} className="input" label="Salasana" size="small" />
                  <Button variant="contained" id="kirjauduNappi" onClick={kirjauduSisaan}>kirjaudu</Button> 
                </div>                
                )}
              </Grid>  

              {/*ostoskori*/}         
              <Grid sx={{flexGrow:1}} className="elementinRajaus ostoskori">
                
                <div className="ostoskoriOtsikko"><Typography variant="h6" >Ostoskori</Typography></div>

                {kirjautuminen ? (
                <div>                  
                    <div id="pikaOstoskori"><Typography id="onkoKorissaJotain">Ostoskorissa {OstoslistaTilanne_Veroton()}</Typography></div>
                    <div id="maksaOstokset">{ostosKoriLkm > 0 && (<button id="tilaaTuotteet_Nappi" onClick={AvaaDialogi}>Tilaa tuotteet</button>)}</div>
                </div>
                    ) : (
                <div>
                  <div id="pikaOstoskori"><Typography id="onkoKorissaJotain">Ostoskorissa {OstoslistaTilanne()}</Typography></div>
                  <div id="maksaOstokset">{ostosKoriLkm > 0 && (<button id="tilaaTuotteet_Nappi" onClick={AvaaDialogi}>Tilaa</button>)}</div>  
                </div>  
                )} 
                          
              </Grid>
            </Grid>
          </Grid>

          {/*footer*/}
           <Grid size={12} className= "footer elementinRajaus">
            <div id="footer_content">
              <div className="yhteys">
                <ul>
                  <li className="yhteysTeksti">Myynti:</li>
                  <li className="yhteysTeksti">myyja@nettikauppao.com</li>
                </ul>
              </div>                  
              <div className="copyright"><p className="copyrightTeksti">{"\u00A9"} 2026</p></div>
              <div className="yhteys">
                <ul>
                  <li className="yhteysTeksti">Tekninen tuki:</li>
                  <li className="yhteysTeksti">nortti@nettikauppao.com</li>
                </ul>
              </div> 
            </div>
          </Grid>
        </Grid>
        
    <Dialog open={dialogiAuki} onClose={SuljeDialogi}>
      <DialogTitle>Tilaus suoritettu onnistuneesti!</DialogTitle>
      <DialogTitle>Tilattavat tuotteet:</DialogTitle>
      <DialogContent>       
      {tilausLista.map(item => {                                            
        const tuote = tuotteet.find(t => t.id === item.id);
        const kokHinta = item.kpl * tuote!.myynti_hinta;  
        return (
          <div key={item.id}>{tuote!.nimi} {item.kpl} kpl {kirjautuminen ? (kokHinta * 0.745).toFixed(2) : kokHinta.toFixed(2)} {"\u20AC"}</div>
        );
        })}
      </DialogContent>

      <DialogActions>
        <button onClick={SuljeDialogi}>Sulje</button>
      </DialogActions>
    </Dialog>
  </Container>
  );
}

export default App;