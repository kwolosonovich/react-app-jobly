import React, { useState, useEffect, useContext, Component } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import { Container, Card, CardContent, CardHeader } from "@material-ui/core";
import ListingsContext from "../ListingsContext";
import Company from "./Company";
import Search from "./Search"
import JoblyApi from "../JoblyApi"


import React, { useState, useEffect } from "react";
import SearchForm from "../common/SearchForm";
import JoblyApi from "../api/api";
import CompanyCard from "./CompanyCard";
import LoadingSpinner from "../common/LoadingSpinner";


function CompanyListing() {
  console.debug("CompanyList");

  const [companies, setCompanies] = useState(null);

  useEffect(function getCompaniesOnMount() {
    console.debug("CompanyList useEffect getCompaniesOnMount");
    search();
  }, []);

  /** Triggered by search form submit; reloads companies. */
  async function search(name) {
    let companies = await JoblyApi.getCompanies(name);
    setCompanies(companies);
  }

  if (!companies) return <LoadingSpinner />;

  return (
      <div className="CompanyList col-md-8 offset-md-2">
        <SearchForm searchFor={search} />
        {companies.length
            ? (
                <div className="CompanyList-list">
                  {companies.map(c => (
                      <CompanyCard
                          key={c.handle}
                          handle={c.handle}
                          name={c.name}
                          description={c.description}
                          logoUrl={c.logoUrl}
                      />
                  ))}
                </div>
            ) : (
                <p className="lead">Sorry, no results were found!</p>
            )}
      </div>
  );
}




//   return (
//     <Container>
//       <Card>
//         <CardHeader />
//         Companies
//         <Search searchFor={search}></Search>
//         <CardContent>
//           {
//             /* {searchCompanies
//             ? showCompanies.map((c) => (
//               <Company
//                 key={c.handle}
//                 handle={c.handle}
//                 name={c.name}
//                 num_employees={c.num_employees}
//                 description={c.description}
//                 logo_url={c.logo_url}
//               ></Company>
//             ))
//             : showCompanies.map((c) => (
//               <Company
//                 key={c.handle}
//                 handle={c.handle}
//                 name={c.name}
//                 num_employees={c.num_employees}
//                 description={c.description}
//                 logo_url={c.logo_url}
//               ></Company>
//             ))} */
//             companies.map((c) => (
//               <Company
//                 key={c.handle}
//                 handle={c.handle}
//                 name={c.name}
//                 num_employees={c.num_employees}
//                 description={c.description}
//                 logo_url={c.logo_url}
//               ></Company>
//             ))
//             }
//         </CardContent>
//       </Card>
//     </Container>
//   );
// }

export default CompanyListing;