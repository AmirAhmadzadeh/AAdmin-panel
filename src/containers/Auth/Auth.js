import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button, FormControl, FormGroup } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useInputState } from '../../hooks';
import { login } from '../../store/action';
import { Redirect } from 'react-router-dom';

const auth = (props) => {

  const [email, setEmail] = useInputState('');
  const [password, setPass] = useInputState('');
  const dispatch = useDispatch();
  const loginHandler = (email, pass) => dispatch(login(email, pass));
  const auth = useSelector(state => state.auth);

  function authenticate(e) {
    e.preventDefault();
    loginHandler(email, password);
  }

  useEffect(() => {

    ValidatorForm.addValidationRule('isPass', (value) => {
      if (value.length < 5) return false;
      return true
    });
  }, [password]);

  if (auth.auth) return <Redirect to="/" />
  return (

    <ValidatorForm onSubmit={authenticate} className="auth">
      <h1 className="auth_heading">

          FunnyCoding Admin panel 
    </h1>
      <FormGroup>

        <FormControl className="form__controller">
          <TextValidator
            label="email"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            value={email}
            validators={['required', 'isEmail']}
            errorMessages={['this field is required', 'email is not valid']}
          />
        </FormControl>


        <FormControl className="form__controller">

          <TextValidator
            label="password"
            onChange={(e) => setPass(e.target.value)}
            name="password"
            value={password}
            validators={['required', 'isPass']}
            errorMessages={['this field is required', 'pass is short']}
          />
        </FormControl>
        <FormControl className="form__controller">
          <Button type="submit" color="secondary"
            disabled={(email && password) ? false : true}
            className="button button__radios">
             Login
        </Button>
          <Button onClick={props.goback} color="primary" className="button button__radios">
                    GoTo App
              </Button>
        </FormControl>
      </FormGroup>
    </ValidatorForm>);
}

export default auth;


