import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import { Container, Card, CardContent, CardHeader } from "@material-ui/core";
import ListingsContext from "../ListingsContext";
import { MDCTextFieldIcon } from "@material/textfield/icon";
import { MDCTextField } from "@material/textfield";
import JoblyApi from "../JoblyApi";
import UserContext from "../context/UserContext";


import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Profile({ item }) {
  const classes = useStyles();
  
  let getContext = useContext(UserContext);
  let showUser = getContext[item];

  const { user, setUser } = useContext(UserContext);
   
  const [formData, setFormData] = useState({
     firstName: user.firstName,
     lastName: user.lastName,
     email: user.email,
     username: user.username,
     password: "",
   });
   const [formErrors, setFormErrors] = useState([]);
   // switch to use our fancy limited-time-display message hook
   const [saveConfirmed, setSaveConfirmed] = useState(false);
   // const [saveConfirmed, setSaveConfirmed] = useTimedMessage()

   async function handleSubmit(evt) {
     evt.preventDefault();

     let profileData = {
       firstName: formData.firstName,
       lastName: formData.lastName,
       email: formData.email,
       password: formData.password,
     };

     let username = formData.username;
     let updatedUser;

      try {
        updatedUser = await JoblyApi.saveProfile(username, profileData);
      } catch (errors) {
        setFormErrors(errors);
        return;
      }


     setFormData((f) => ({ ...f, password: "" }));
     setFormErrors([]);
     setSaveConfirmed(true);

     // trigger reloading of user information throughout the site
     setUser(updatedUser);
   }

   /** Handle form data changing */
   function handleChange(evt) {
     const { name, value } = evt.target;
     setFormData((f) => ({
       ...f,
       [name]: value,
     }));
     setFormErrors([]);
   }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Profile
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                value={user.username}
                label="Username"
                name="username"
                label={formData.username}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                // label="First Name"
                autoFocus
                value={formData.firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                // label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={formData.lastName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                // label="Email Address"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                // label="Password"
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Update
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default Profile;
