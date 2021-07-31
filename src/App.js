import { Grid, Typography } from "@material-ui/core";
import { useState } from "react";
import "./App.css";
import Cards from "./Cards";

function App() {
  const [score, setScore] = useState({
    highScore: 0,
    currentScore: 0,
    over: false,
  });

  return (
    <Grid container spacing={3} item xs={12} justifyContent="center">
      <Grid item xs={12}>
        <Typography align="center" color="primary" variant="h3">
          {"Memory Game"}
        </Typography>
        <Typography align="center" color="secondary" variant="h6">
          {"Select a norse god that you have not selected. "}
        </Typography>
      </Grid>
      <Grid container spacing={3} item xs={12} justifyContent="center">
        <Grid item xs={1}>
          <Typography color="primary" variant="h6">
            {"Score: " + score.currentScore}
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography color="primary" variant="h6">
            {"High Score: " + score.highScore}
          </Typography>
        </Grid>
      </Grid>
      <Cards score={score} setScore={setScore} />
    </Grid>
  );
}

export default App;
