import React from 'react';
import { FormControl,Button,FormGroup,TextField} from '@material-ui/core';
import { reduxForm, Field } from 'redux-form';

function CreateCategory(props) {
  const onSubmitHandler = (formValues) => {
    props.createNewCategory({
      name: formValues.name,
      slug: formValues.slug,
      parent: formValues.level
    });
  }
  const renderError = meta => {
    return meta.touched &&
      ((meta.error && <span className='validation_error'>{meta.error}</span>) ||
        (meta.warning && <span className='validation_warning'>{meta.warning}</span>))
  }
  const renderInput = (formProps) => {
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

  const renderLevelSelector = (formProps) => {
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
      <form onSubmit={props.handleSubmit(onSubmitHandler)} >
        <FormGroup>
          <Field
            label='name'
            name='name'
            component={renderInput}
          />

          <Field
            label='slug'
            name='slug'
            component={renderInput}
          />

          <Field
            name='level'
            label='Category Level'
            component={renderLevelSelector}
          >
            <option></option>
            <option value='none' className="form__controller--option">
              main category
               </option>
            {
              props.cats.categories ? props.cats.categories.map(catItme => {
                return (
                  <option
                    value={catItme._id}
                    className="form__controller--option">
                    {catItme.name}
                  </option>)
              }) : "Loading..."
            }
          </Field>
        </FormGroup>
        <Button
          color="primary"
          variant="contained"
          className="form__controller--button"
          type="submit"

        >
          Create!
              </Button>
      </form>
    </div>
  )
}

const validate = values => {
  const errors = {} ;
  ['name' , 'level' , 'slug'].forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required !'
    }
  });
  return errors ;
}
export default reduxForm({
  form: 'createCategory'
  ,validate
})(CreateCategory);
