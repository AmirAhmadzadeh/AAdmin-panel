import React from 'react';
import {
  FormControl,
  Button,
  FormGroup,
  TextField
} from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';


function CreateMenu(props) {


  function onSubmitHandler(formValues) {
    props.createNewMenu({
      name: formValues.name,
      link: formValues.link,
      parent: formValues.level
    });
  }

  function renderError(meta) {
    return meta.touched &&
    ((meta.error && <span className='validation_error'>{meta.error}</span>) ||
    (meta.warning && <span className='validation_warning'>{meta.warning}</span>))
  }

  function renderInput(formProps) {
    return (
      <FormControl className="form__controller">
      <label
        className="form__controller--label"
       >
        {formProps.label}
      </label>
      <TextField
        {...formProps.input}
        className="form__controller--inp"
        fullWidth
        margin="normal"
        variant="filled"
        helperText={formProps.meta.touched && formProps.meta.invalid}
        error={formProps.meta.touched && formProps.meta.invalid}
      />
      {renderError(formProps.meta)}
    </FormControl>
    )
  }

  function renderLevelSelector(formProps) {
    return (
      <FormControl className="form__controller">
      <label
        className="form__controller--label">
        {formProps.label}
      </label>
      <select
        className="form__controller--select"
        native
        {...formProps.input}
      >
        {formProps.children}
      </select>
      {renderError(formProps.meta)}
    </FormControl>
    )
  }

  return (
    <div className="menu__createMenu">
      <form onSubmit={props.handleSubmit(onSubmitHandler)}>
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
          >
          <option></option>
           <option
            value='none'
            className="form__controller--option"> Main Level </option>
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
          </Field>
        </FormGroup>
        <Button
          color="primary"
          variant="contained"
          className="form__controller--button"
          type="submit"
        // disabled={disabledButton}
        >
          create!
            </Button>
      </form>
    </div>
  )
}
const validate = vals => {
  const errors =  {} ;  
  ['name',
  'link',
  'level'].forEach(field => { 
    if(!vals[field]) {
      errors[field] = 'Required...' 
    }
  })
  return errors ; 
}
export default reduxForm({
  form: 'createMenu' , 
  validate
})(CreateMenu);  