import React, { useContext, useState } from "react";
import UserContext from "../UserContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Hidden from "@material-ui/core/Hidden";
import Logo1 from "../images/Logo1";
import Logo2 from "../images/Logo2";
import Logo3 from "../images/Logo3";


const useStyles = makeStyles({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

function Company({ name, description, num_employees, logo_url, handle }) {
  const classes = useStyles();

  let logo = null;

  if (logo_url === "Logo1") {
    logo = <Logo1 />;
  } else if (logo_url === "Logo2") {
    logo = <Logo2 />;
  } else if (logo_url === "Logo3") {
    logo = <Logo3 />;
  }

  return (
    <div>
      <Grid item xs={12} md={6}>
        <CardActionArea component="a" href="#">
          <Card className={classes.card}>
            <div className={classes.cardDetails}>
              <CardContent>
                <Typography component="h2" variant="h5">
                  {name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {description}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Employees: {num_employees}
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  View open positions
                </Typography>
              </CardContent>
            </div>
            <div className={classes.cardMedia}>
              <Hidden xsDown>
                {logo ? logo : <img src={logo_url} alt={name} />}
              </Hidden>
            </div>
          </Card>
        </CardActionArea>
      </Grid>
    </div>
  );
}

export default Company