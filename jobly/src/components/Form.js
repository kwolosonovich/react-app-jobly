import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import { Container, Card, CardContent, CardHeader } from "@material-ui/core";
import ListingsContext from "../ListingsContext";
import { MDCTextFieldIcon } from "@material/textfield/icon";
import { MDCTextField } from "@material/textfield";



function Form({name}) {

return (
  <Container>
			<label class="mdc-text-field mdc-text-field--filled">
				<span class="mdc-text-field__ripple"></span>
				<span class="mdc-floating-label" id="my-label-id">Username</span>
				<input class="mdc-text-field__input" type="text" aria-labelledby="my-label-id"></input>
				<span class="mdc-line-ripple"></span>
		</label>
  </Container>
);

}

export default Form