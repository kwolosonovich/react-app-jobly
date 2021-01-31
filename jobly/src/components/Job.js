import React, { useContext, useState } from "react";
import UserContext from "../UserContext";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles({
  card: {
    display: "flex",
    margin: "5px",
  },
  cardTitle: {
    flex: 1,
  },
  cardDetails: {
    flex: 1,
  },
});

function Job({ id, title, salary, equity, company_handle }) {
  const classes = useStyles();

  return (
    <div>
      <Grid item xs={12} md={6}>
        <CardActionArea component="a" href="#">
          <Card className={classes.card}>
            <div className={classes.cardDetails}>
              <CardContent>
                <Typography variant="subtitle1" color="primary">
                  {company_handle}
                </Typography>
              </CardContent>
            </div>
            <div className={classes.cardTitle}>
              <CardContent>
                <Typography component="h5" variant="h5">
                  {title}
                </Typography>
              </CardContent>
            </div>
            <div className={classes.cardDetails}>
              <CardContent>
                <Typography variant="subtitle1" color="textSecondary">
                  Salary: {salary}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Equity: {equity}
                </Typography>
              </CardContent>
            </div>
          </Card>
        </CardActionArea>
      </Grid>
    </div>

    // <div className="job">
    //   <div className="card-body">
    //     <h6 className="card-title">{title}</h6>
    //     <p>{companyName}</p>
    //     {salary && (
    //       <div>
    //         <small>Salary: {formatSalary(salary)}</small>
    //       </div>
    //     )}
    //     {equity !== undefined && (
    //       <div>
    //         <small>Equity: {equity}</small>
    //       </div>
    //     )}
    //   </div>
    // </div>
  );
}

/** Render integer salary like '$1,250,343' */

function formatSalary(salary) {
  const digitsRev = [];
  const salaryStr = salary.toString();

  for (let i = salaryStr.length - 1; i >= 0; i--) {
    digitsRev.push(salaryStr[i]);
    if (i > 0 && i % 3 === 0) digitsRev.push(",");
  }

  return digitsRev.reverse().join("");
}

export default Job;
