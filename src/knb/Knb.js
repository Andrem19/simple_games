import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import './Knb.css'
import rulse from './rulse.gif'
import stone from './stone.png'
import noj from './noj.png'
import paper from './paper.png'
import computerpic from './computerpic.gif'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Knb() {
  const classes = useStyles();

const [player, setPlayer] = useState("no");
const [computer, setComputer] = useState("");
const [res, setRes] = useState("");
const [hide1, setHide1] = useState(true);
const [hide2, setHide2] = useState(false);
const [hide3, setHide3] = useState(false);
const [hide4, setHide4] = useState(false);
const [hide1c, setHide1c] = useState(true);
const [hide2c, setHide2c] = useState(false);
const [hide3c, setHide3c] = useState(false);
const [hide4c, setHide4c] = useState(false);
const [test, setTest] = useState("")

const change1 = () => {
setPlayer('Камень');
setHide1(false);
setHide2(true);
setHide3(false);
setHide4(false);
compCh()
}
const change2 = () => {
setPlayer('Ножницы');
setHide1(false);
setHide2(false);
setHide3(false);
setHide4(true);
compCh()
}
const change3 = () => {
setPlayer('Бумага');
setHide1(false);
setHide2(false);
setHide3(true);
setHide4(false);
compCh()
}
const compCh = () => {
  let randomchoice = Math.random();

  if(randomchoice <= 0.33 ){
      setComputer("Камень");
      setHide1c(false);
      setHide2c(true);
      setHide3c(false);
      setHide4c(false);
  } else if(randomchoice <= 0.66){
      setComputer("Бумага");
      setHide1c(false);
      setHide2c(false);
      setHide3c(true);
      setHide4c(false);
  } else{
      setComputer("Ножницы");
      setHide1c(false);
      setHide2c(false);
      setHide3c(false);
      setHide4c(true);
  }
}
useEffect(() => {
      if (player == computer) {
      setRes("Ничья")

      } else if (player == "Ножницы" && computer == "Камень") {
      setRes("Компьютер выиграл")

      } else if (player == "Ножницы" && computer == "Бумага") {
      setRes("Вы выиграли")

      } else if (player == "Бумага" && computer == "Камень") {
      setRes("Вы выиграли")

      } else if (player == "Бумага" && computer == "Ножницы") {
      setRes("Компьютер выиграл")

      }else if (player == "Камень" && computer == "Бумага") {
      setRes("Компьютер выиграл")

      } else if (player == "Камень" && computer == "Ножницы") {
      setRes("Вы выиграли")

      }

}, [player, computer])

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}><h1>Камень-Ножницы-Бумага</h1></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          <h2>Выберите свой вариант:</h2>
          <Button onClick={change1} variant="contained">Камень</Button>
          <Button onClick={change2} variant="contained">Ножницы</Button>
          <Button onClick={change3} variant="contained">Бумага</Button>

          {hide1 ? <div className="pictures"><img src={rulse} alt="rulse" /></div> : null}
          {hide2 ? <div className="pictures"><img src={stone} alt="stone" /></div> : null}
          {hide3 ? <div className="pictures"><img src={paper} alt="paper" /></div> : null}
          {hide4 ? <div className="pictures"><img src={noj} alt="noj" /></div> : null}
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><div className="comppic"><img src={computerpic} alt="computerpic" /></div><h2>Выбор компьютера:</h2>
          <div className="space"></div>
          {hide1c ? <div className="pictures"></div> : null}
          {hide2c ? <div className="pictures"><img src={stone} alt="stone" /></div> : null}
          {hide3c ? <div className="pictures"><img src={paper} alt="paper" /></div> : null}
          {hide4c ? <div className="pictures"><img src={noj} alt="noj" /></div> : null}

          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}><h1>{res}</h1></Paper>
        </Grid>

      </Grid>
    </div>
  );
}
