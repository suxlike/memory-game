import { Grid, Paper, Typography } from "@material-ui/core";
import { useState } from "react";
import "./App.css";
import Cards from "./Cards";

function App() {
  const [score, setScore] = useState({
    highScore: 0,
    currentScore: 0,
    Clicked: false,
  });

  return (
    <Grid container spacing={3} item xs={12} justifyContent="center">
      <Grid item xs={12}>
        <Typography align="center" color="primary" variant="h1">
          {"Memory Game"}
        </Typography>
        <Typography align="center" color="secondary" variant="h5">
          {"Select a norse god that you have not selected. "}
        </Typography>
      </Grid>
      <Grid container spacing={3} item xs={12} justifyContent="center">
        <Grid item xs={2}>
          <Paper>
            <Typography color="primary" variant="h6">
              {"Current Score: " + score.currentScore}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper>
            <Typography color="primary" variant="h6">
              {"High Score: " + score.highScore}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Cards score={score} setScore={setScore} />
    </Grid>
  );
}

export default App;
