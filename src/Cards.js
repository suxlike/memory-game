import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
import cards from "./cards";
import Baldur from "./img/baldur.png";
import Bragi from "./img/bragi.png";
import Freya from "./img/freya.png";
import Freyr from "./img/freyr.png";
import Frigg from "./img/frigg.png";
import Heimdallr from "./img/heimdallr.png";
import Loki from "./img/loki.png";
import Njord from "./img/njord.png";
import Odin from "./img/odin.png";
import Thor from "./img/thor.png";
import Thr from "./img/tyr.png";
import Ymir from "./img/ymir.png";

const Cards = ({ setScore, score }) => {
  const imgs = [
    Baldur,
    Bragi,
    Freya,
    Freyr,
    Frigg,
    Heimdallr,
    Loki,
    Njord,
    Odin,
    Thor,
    Thr,
    Ymir,
  ];
  let shuffledCards = cards;
  return (
    <Grid container spacing={3} item xs={11} justifyContent="center">
      {!score.over &&
        shuffledCards.map((c) => (
          <Grid item xs={2} key={c.id}>
            <Card>
              <CardActionArea
                onClick={() => {
                  if (
                    c.clicked === false &&
                    score.currentScore === score.highScore
                  ) {
                    c.clicked = true;
                    const s = score.currentScore;
                    setScore({
                      ...score,
                      currentScore: s + 1,
                      highScore: s + 1,
                    });
                    for (let i = shuffledCards.length - 1; i > 0; i--) {
                      const j = Math.floor(Math.random() * i);
                      const temp = shuffledCards[i];
                      shuffledCards[i] = shuffledCards[j];
                      shuffledCards[j] = temp;
                    }
                  } else if (c.clicked === false) {
                    c.clicked = true;
                    const s = score.currentScore;
                    setScore({ ...score, currentScore: s + 1 });
                    for (let i = shuffledCards.length - 1; i > 0; i--) {
                      const j = Math.floor(Math.random() * i);
                      const temp = shuffledCards[i];
                      shuffledCards[i] = shuffledCards[j];
                      shuffledCards[j] = temp;
                    }
                  } else {
                    setScore({ ...score, over: true });
                    console.log("game over");
                  }
                }}
              >
                <CardMedia component="img" image={imgs[c.id]} title={c.name} />
                <CardContent>
                  <Typography
                    gutterBottom
                    align="center"
                    variant="h5"
                    component="h2"
                  >
                    {c.name}
                  </Typography>
                  <Typography
                    align="center"
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {c.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      {score.over && (
        <Grid item xs={1}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              setScore({ ...score, currentScore: 0, over: false });
              shuffledCards.forEach((c) => (c.clicked = false));
            }}
          >
            Restart
          </Button>
        </Grid>
      )}
    </Grid>
  );
};

export default Cards;
