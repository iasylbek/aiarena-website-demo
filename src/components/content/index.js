import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MotionPhotosAutoIcon from "@mui/icons-material/MotionPhotosAuto";
import PsychologyIcon from "@mui/icons-material/Psychology";
import PeopleIcon from '@mui/icons-material/People';

const learnMore = (
  <CardActions
    sx={{
      display: "flex",
      justifyContent: "right",
    }}
  >
    <Button size="small">Learn More</Button>
  </CardActions>
);

export default function ContentCards() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: 900,
          minWidth: 400,
          display: "grid",
        }}
      >
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="div">
              <SportsEsportsIcon />
              What is the Game?
            </Typography>
            <Typography variant="body2">
              AI Arena is a fighting game that is most similar to games like
              super smash bros and street fighter. However, there is one
              important distinction - you do not control your fighter...
            </Typography>
          </CardContent>
          {learnMore}
        </Card>

        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="div">
              <MotionPhotosAutoIcon />
              Autonomous Agents
            </Typography>
            <Typography variant="body2">
              If you don't control your fighter, then how does it fight? Each
              fighter is powered by AI that tells it which moves to do in
              certain situations. Overtime the goal is to make your AI better
              and better. Every fighter has a different AI, so it is up to you
              to mould it into the best possible fighter!
            </Typography>
          </CardContent>
          {learnMore}
        </Card>

        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="div">
              <PsychologyIcon />
              Coach your AI
            </Typography>
            <Typography variant="body2">
              You can view this game as one in which you are coaching a fighter
              who is preparing for battle. You can do this by configuring its
              training scheme or actually playing against it so that it learns
              to copy your moves!
            </Typography>
          </CardContent>
          {learnMore}
        </Card>

        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="div">
              <PeopleIcon />
              Collect Fighters
            </Typography>
            <Typography variant="body2">
              Users are able to grow their fighter collection by winning in
              battle. Each win gives them the oppportunity to clone the opponent
              fighter's intelligence, which they can use to merge with one of
              their own AIs to create a new fighter!
            </Typography>
          </CardContent>
          {learnMore}
        </Card>
      </Box>
    </Box>
  );
}
