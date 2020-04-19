import React from 'react';
import {
  FormControl,
  InputLabel,
  Select, Button,
  FormGroup,
  TextField
} from '@material-ui/core';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
<<<<<<< HEAD

import { useInputState , useValue } from './../../../hooks/';

=======
import { useInputState, useValue } from './../../../hooks/';
import { Field, reduxForm } from 'redux-form';
>>>>>>> e6ef226b4af024c7135f9a25fd4ba073ab703de6


function CreateMenu(props) {

<<<<<<< HEAD
  const [level, setLevel] = useValue(null);

  const [link, setLink] = useInputState('');

  const [name, setName] = useInputState('');

  // const [disabledButton, toggle, setDisabledButton] = useBoolean();
=======
>>>>>>> e6ef226b4af024c7135f9a25fd4ba073ab703de6

  function handleSubmit() {
    console.log(props);
    props.createNewMenu({
      name: props.form.createMenu.values.name,
      link: props.createMenu.values.link,
      parent: props.createMenu.values.level
    });
  }

  function renderError(meta) {
    if (meta.touched && meta.error) {
      return (
        meta.error
      )
    } else {
      return null;
    }
  }

  function renderInput(formProps) {
    console.log(formProps);
    return (
      <FormControl className="form__controller">
        <TextField
          {...formProps.input}
          className="form__controller--inp"
          name="name"
        />
      </FormControl>
    )
  }

  function renderLevelSelector(formProps) {
    return (
      <FormControl className="form__controller">
        <InputLabel
          htmlFor="age-native-simple"
          className="form__controller--label"> menu Level</InputLabel>
        <Select
          className="form__controller--select"
          native
          {...formProps.input}
        >
          <option value='none' className="form__controller--option"> Main Level </option>
          {
            props.menus ? props.menus.map(menuItme => {
              return (
                <option
                  value={menuItme._id}
                  className="form__controller--option">
                  {menuItme.name}
                </option>
              )
            }) : "Loading..."
          }
        </Select>
      </FormControl>
    )
  }

  return (
    <div className="menu__createMenu">
      <ValidatorForm onSubmit={handleSubmit}>
        <FormGroup>

          <Field
            component={renderInput}
            name='name'
            label='menuTitle'
          />
          <Field
            label='link'
            name='link'
            component={renderInput}
          />

          <Field
            label='menuLevel'
            name='level'
            component={renderLevelSelector}
          />
        </FormGroup>
        <Button
          color="primary"
          variant="contained"
          className="form__controller--button"
          type="submit"
        // disabled={disabledButton}
        >
          create !
            </Button>
      </ValidatorForm>
    </div>
  )
}

export default reduxForm({
  form: 'createMenu'
})(CreateMenu);  