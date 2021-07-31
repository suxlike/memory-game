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

const Cards = ({ setScore, score }) => {
  let shuffledCards = cards;
  return (
    <Grid container spacing={3} item xs={11}>
      {!score.over &&
        shuffledCards.map((c) => (
          <Grid item xs={2} key={c.id}>
            <Card>
              <CardActionArea
                onClick={() => {
                  // switch (c.clicked) {
                  //   case false && score.currentScore === score.highScore:
                  //     c.clicked = true;
                  //     let s = score.currentScore;
                  //     setScore({ ...score, currentScore: s + 1 });
                  //     for (let i = shuffledCards.length - 1; i > 0; i--) {
                  //       const j = Math.floor(Math.random() * i);
                  //       const temp = shuffledCards[i];
                  //       shuffledCards[i] = shuffledCards[j];
                  //       shuffledCards[j] = temp;
                  //     }
                  //     break;

                  //   default:
                  //     console.log("game over");
                  //     break;
                  // }
                  if (
                    c.clicked === false &&
                    score.currentScore === score.highScore
                  ) {
                    c.clicked = true;
                    let s = score.currentScore;
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
                    let s = score.currentScore;
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
                <CardMedia component="img" src={c.image} title={c.name} />
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
        <Button
          onClick={() => setScore({ ...score, currentScore: 0, over: false })}
        >
          Restart
        </Button>
      )}
    </Grid>
  );
};

export default Cards;
  