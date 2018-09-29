import React from "react";
// import CaptinAmerica from '../Assets/captinAmerica.jpg'
import merica from "../Assets/merica.jpg";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";

const styles = {
  mixCSS: {
    marginLeft: "40%",
    marginRight: "25%",
    marginTop: "5%",
    marginBottom: "25%"
  },
  card: {
    minWidth: "300px",
    maxWidth: "345px"
  },
  media: {
    objectFit: "cover",
    height: "100%",
    width: "100%"
  },
  container: {
    marginBottom: "5%"
  },
  textField: {
    marginLeft: "25%"
  },
  button: {
    marginLeft: "3%",
    marginRight: "3%"
  },
  header: {
    paddingTop: "8%"
  },
  root: {
    color: "red",
    fontSize: "15px"
  },
  buttonCSS: {
    margin: "2%"
  },
  buttonContainer: {
    marginTop: "20px"
  },
  "@media (max-width: 600px)": {
    mixCSS: {
      marginLeft: "30px",
      marginRight: "30px",
      marginTop: "25%"
    },
    card: {
      minWidth: "300px",
      maxWidth: "345px"
    }
  }
};

const LandingPV = props => {
  const { classes } = props;
  return (
    <div className={classes.mixCSS}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            className={classes.media}
            image={merica}
            title="Captin America"
          />
          <CardContent>
            <form className={classes.root}>
              <TextField
                id="email"
                label="Email"
                margin="normal"
                onChange={props.updateEmail}
                fullWidth
              />
              <TextField
                id="password-input"
                label="Password"
                type="password"
                onChange={props.updatePassword}
                autoComplete="current-password"
                margin="normal"
                fullWidth
              />
              <div className={classes.buttonContainer}>
                <Button
                  variant="contained"
                  className={classes.buttonCSS}
                  onClick={props.signInSubmit}
                >
                  {" "}
                  Sign In{" "}
                </Button>
                <Button
                  variant="contained"
                  className={classes.buttonCSS}
                  onClick={props.createSubmit}
                >
                  {" "}
                  Create Account{" "}
                </Button>
              </div>
            </form>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default withStyles(styles)(LandingPV);
