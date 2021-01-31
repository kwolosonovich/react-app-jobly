import React, { useState, useEffect, useContext} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './style/App.css';
import Home from "./components/Home.js"
import NavBar from "./NavBar"
import ListingsContext from "./ListingsContext";
import CompanyListing from "./components/CompanyListing";
import JoblyApi from "./JoblyApi"
import jwt from "jsonwebtoken";
import Form from "./components/Form"
import Register from "./components/Register"
import Login from "./components/Login"
import Logout from "./components/Logout";
import Profile from "./components/Profile"
import UserContext from "./UserContext";
import Jobs from "./components/Jobs"
import JobList from "./components/JobList"
import JobListing from "./components/JobListing"
 

function App() {

  // development state
  const [dev, setDev] = useState(true)
  // job state
  const [jobs, setJobs] = useState([]);
  // company state
  const [companies, setCompanies] = useState([]);
  // active user state
  const [active, setActive] = useState(false);
  // api token
  const [token, setToken] = useState(null);
  // user state
  const [user, setUser] = useState(null);
  // application id state
  const [applicationIds, setApplicationIds] = useState(new Set([]));

  // get jobs when list is empty
  useEffect(() => {
    // async function getJobs() {
    // let jobs = await JoblyApi.getJobs();
    function getJobs() {
      let jobs = [
        {
          title: "Insurance underwriter",
          salary: null,
          equity: 0.008,
          company_handle: "hall-davis",
        },
        {
          title: "Race relations officer",
          salary: 97000,
          equity: 0.065,
          company_handle: "bauer-gallagher",
        },
        {
          title: "Astronomer",
          salary: 143000,
          equity: null,
          company_handle: "watson-davis",
        },
      ];
      setJobs(jobs);
    }
    getJobs();
  }, []);

  // get companies when list is empty
  useEffect(() => {
    if (dev) {
      function getCompanies() {
        let companies = [
          {
            handle: "bauer-gallagher",
            name: "Bauer-Gallagher",
            num_employees: 862,
            description: "Difficult ready trip question produce produce someone.",
            logo_url: "Logo1",
          },
          {
            handle: "hall-davis",
            name: "Hall-Davis",
            num_employees: 749,
            description:
              "Adult go economic off into. Suddenly happy according only common. Father plant wrong free traditional.",
            logo_url: "Logo2",
          },
          {
            handle: "watson-davis",
            name: "Watson-Davis",
            num_employees: 819,
            description: "Year join loss.",
            logo_url: "Logo3",
          },
        ];
        setCompanies(companies);
      }
      getCompanies();
    } else {
      async function getCompanies() {
        let companies = await JoblyApi.getCompanies();
        setCompanies(companies);
      }
    }
  }, []);

  // update setUser, setActive, setToken upon login and logout
    useEffect(
      function loadUserInfo() {
        console.debug("App useEffect loadUserInfo", "token=", token);

        if (dev) {
          function getCurrentUser() {
            if (token) {
              try {
                setUser('testUser');
                setApplicationIds(new Set(user.applications));
              } catch (err) {
                console.error("App loadUserInfo: problem loading", err);
                setCurrentUser(null);
              }
            }
            setInfoLoaded(true);
          }
          setInfoLoaded(false);
          getCurrentUser();
        
        } else {
          async function getCurrentUser() {
          if (token) {
            try {
              let { username } = jwt.decode(token);
              // put the token on the Api class so it can use it to call the API.
              JoblyApi.token = token;
              let user = await JoblyApi.getCurrentUser(username);
              setUser(user);
              setApplicationIds(new Set(user.applications));
            } catch (err) {
              console.error("App loadUserInfo: problem loading", err);
              setCurrentUser(null);
            }
          }
          setInfoLoaded(true);
        }

        // set infoLoaded to false while async getCurrentUser runs; once the
        // data is fetched (or even if an error happens!), this will be set back
        // to false to control the spinner.
        setInfoLoaded(false);
        getCurrentUser();
        }
      },
      [token]
    );

  // login returning user
  function login(loginData) {
    if (dev) {
      setToken('testToken'),
      setActive('true')
    } else {
      async function login(loginData) {
        try {
           let token = await JoblyApi.login(loginData);
          setToken(token);
          return { success: true };
        } catch (errors) {
          console.error("login failed", errors);
          return { success: false, errors };
        }
      }
    }
  }

  // register new user 
  function register(registerData) {
    if (dev) {
      setToken('testToken')
      return { success: true };
    } else {
      async function reg(signupData) {
        try {
          let token = await JoblyApi.signup(signupData);
          setToken(token);
          return { success: true };
        } catch (errors) {
          console.error("signup failed", errors);
          return { success: false, errors };
        }
      }
      reg(registerData)
    }
  }

  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <ListingsContext.Provider value={{ jobs, companies }}>
          <NavBar />
          <main>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route exact path="/jobs">
                <JobListing name="jobs" jobs={jobs} title="Jobs" />
              </Route>
              <Route path="/jobs/:id">
                <JobListing items={jobs} cantFind="/jobs" />
              </Route>

              <Route exact path="/companies">
                <CompanyListing
                  name="companies"
                  companies={companies}
                  title="Companies"
                />
              </Route>
              <Route path="/companies/:id">
                <CompanyListing items={companies} cantFind="/companies" />
              </Route>

              <Route exact path="/profile">
                <Profile
                  name="profile"
                  // profile={profile}
                  title="Profile"
                />
              </Route>
              <Route path="/profile/:id">
                <Profile
                  // items={profile}
                  cantFind="/profile"
                />
              </Route>

              <Route exact path="/login">
                <Login name="login" login={login} title="Login" />
              </Route>
              <Route path="/login/:id">
                <Form items={login} login={login} cantFind="/login" />
              </Route>

              <Route exact path="/profile">
                <Profile
                  name="profile"
                  // profile={profile}
                  title="profile"
                />
              </Route>
              <Route path="/profile">
                <Profile
                  // items={login}
                  // profile={profile}
                  cantFind="/profile"
                />
              </Route>

              <Route exact path="/register">
                <Register
                  name="register"
                  register={register}
                  title="Register"
                />
              </Route>
              <Route path="/register">
                <Register
                  items={login}
                  register={register}
                  cantFind="/register"
                />
              </Route>

              <Route exact path="/logout">
                <Logout
                  name="logout"
                  logout={logout}
                  title="Logout"
                />
              </Route>
              <Route path="/logout/:id">
                <Logout
                  items={logout}
                  cantFind="/logout"
                />
              </Route>

              <Route>
                <p>Sorry this page doesn't exist.</p>
              </Route>
            </Switch>
          </main>
        </ListingsContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

