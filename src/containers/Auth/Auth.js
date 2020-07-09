import React, { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, FormControl, FormGroup } from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { login } from "../../store/action";
import { Redirect } from "react-router-dom";

const EMAIL_CHANGED = "EMAIL_CHANGED";
const PASS_CHANGED = "PASS_CHANGED";

const auth = (props) => {
  const [authState, authDispatche] = useReducer(
    (state, action) => {
      switch (action.type) {
        case EMAIL_CHANGED:
          return {
            ...state,
            email: action.payload,
          };
        case PASS_CHANGED:
          return {
            ...state,
            pass: action.payload,
          };
      }
    },
    {
      email: "",
      pass: "",
    }
  );

  const dispatch = useDispatch();
  const loginHandler = (email, pass) => {
    dispatch(login(authState.email, authState.pass));
  };
  const auth = useSelector((state) => state.auth);

  function authenticate(e) {
    e.preventDefault();
    loginHandler(authState.email, authState.pass);
  }

  useEffect(() => {
    ValidatorForm.addValidationRule("isPass", (value) => {
      if (value.length < 5) return false;
      return true;
    });
  }, [authState.pass]);

  if (auth.auth) return <Redirect to="/" />;
  return (
    <ValidatorForm onSubmit={authenticate} className="auth">
      <h1 className="auth_heading">FunnyCoding Admin panel</h1>
      <FormGroup>
        <FormControl className="form__controller">
          <TextValidator
            label="email"
            onChange={(e) =>
              authDispatche({ type: EMAIL_CHANGED, payload: e.target.value })
            }
            name="email"
            value={authState.email}
            validators={["required", "isEmail"]}
            errorMessages={["this field is required", "email is not valid"]}
          />
        </FormControl>

        <FormControl className="form__controller">
          <TextValidator
            label="password"
            onChange={(e) =>
              authDispatche({ type: PASS_CHANGED, payload: e.target.value })
            }
            name="password"
            value={authState.pass}
            validators={["required", "isPass"]}
            errorMessages={["this field is required", "pass is short"]}
          />
        </FormControl>
        <FormControl className="form__controller">
          <Button
            type="submit"
            color="secondary"
            disabled={authState.email && authState.pass ? false : true}
            className="button button__radios"
          >
            Login
          </Button>
          <Button
            onClick={props.goback}
            color="primary"
            className="button button__radios"
          >
            GoTo App
          </Button>
        </FormControl>
      </FormGroup>
    </ValidatorForm>
  );
};

export default auth;
