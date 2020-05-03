import React from 'react';
import {
  Button,
  FormGroup,
  FormControl,
  Select,
  TextField,
} from '@material-ui/core';
import { useValue } from './../../../hooks/';

import { reduxForm, Field } from 'redux-form';

function CreateCourse(props) {
  const [errorMsg, setErrorMsg] = useValue(null);


  function onSubmitHandler(formValues) {
    console.log(formValues);

    setErrorMsg(null);
    const data = {
      slug: formValues.slug,
      categories: formValues.categoires,
      title: formValues.title,
      type: formValues.selectedKindOfCourse,
      body: formValues.courseContentText,
      price: formValues.price,
      tags: formValues.tags,
      file: formValues.file
    }
    props.makeNewCourse(data);
  }

  function renderEditor(formProps) {
    return (
      <FormControl>
        <label className="form__controller--label">
          {formProps.label}
        </label>
        <TextField
          className="form__controller--inp"
          fullWidth
          margin="normal"
          variant="filled"
          helperText={formProps.meta.touched && formProps.meta.invalid}
          error={formProps.meta.touched}
          InputLabelProps={{
            shrink: true,
          }}
          multiline
          {...formProps.input}
        />
        {renderError(formProps.meta)}
      </FormControl>
    );
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
          error={formProps.meta.touched}
        />

        {renderError(formProps.meta)}
      </FormControl>
    )
  }
  const renderKindCourseSelector = (formProps) => {
    return (
      <FormControl className="form__controller" variant="filled">
        <label className="form__controller--label">
          {formProps.input.label}
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

  const renderError = meta => {
    return meta.touched &&
      ((meta.error && <span className='validation_error'>{meta.error}</span>) ||
        (meta.warning && <span className='validation_warning'>{meta.warning}</span>))
  }
  const renderCategorySelector = (formProps) => {
    return (
      <FormControl variant="filled" className="form__controller" style={{}}>
        <label>
          {formProps.label}
        </label>
        <select
          multiple
          {...formProps.input}
        >
          {formProps.children}
        </select>

        {renderError(formProps.meta)}
      </FormControl>
    )
  }
  return (
    <>
      <h1> {errorMsg ? errorMsg : null} </h1>
      <form onSubmit={props.handleSubmit(onSubmitHandler)}>

        <FormGroup>
          <Field
            label='title Of Course'
            name='title'
            component={renderInput}
          />
        </FormGroup>

        <Field
          label='price'
          name='price'
          component={renderInput}
        />

        <Field
          label='slug'
          name='slug'
          component={renderInput}
        />
        <Field
          label='tags'
          name='tags'
          component={renderInput}
        />
        <FormGroup />

        <FormGroup>
          <Field
            name='selectedKindOfCourse'
            label='Type Of Course'
            component={renderKindCourseSelector}
          >
            <option></option>
            <option value="free" className="form__controller--option">  رایگان </option>
            <option value="vip" className="form__controller--option">  دسترسی با عضویت ویژه </option>
            <option value="cash" className="form__controller--option">نقدی </option>

          </Field>
        </FormGroup>

        <FormGroup>
          <Field
            name='categoires'
            label='Course Categories'
            component={renderCategorySelector}
          >
            {
              props.cats ? props.cats.map(catItem => (
                <option
                  key={catItem.name}
                  value={catItem._id}>
                  {catItem.name}
                </option>
              )) : null
            }
          </Field>
        </FormGroup>

        <FormGroup>
          <Field
            component={renderInput}
            name='file'
            label='Course Image Link'
          />

        </FormGroup>

        <FormGroup style={{ margin: "4rem 0 0 0" }}>
          <label className="form__controller--label"> Course Body Conetnt </label>
          <Field
            component={renderEditor}
            name='courseContentText'
            label='courseConetentTex'
          />
        </FormGroup>

        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={{
            fontSize: "1.5rem"
            , margin: "3.5rem 0"
          }}>  publish course 
            </Button>
      </form>
    </>
  )
}
const validate = values => {
  const errors = {};
  const isNumber = (n) => (!isNaN(parseFloat(n)) && isFinite(n))

  const fileds = [
    'title',
    'price',
    'slug',
    'tags',
    'selectedKindOfCourse',
    'categoires',
    'file',
    'courseContentText'
  ];
  fileds.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required !!!'
    };
  });

  if (values['price'] && !isNumber(values['price'])) {
    errors['price'] = 'plese write a number !!!!!';
  }
  if (values['categoires'] && values['categoires'].length < 1) {
    errors['categoires'] = 'Required !!';
  }
  console.log('hey errors ', errors);
  return errors;
}

export default reduxForm({
  form: 'createCourse',
  validate
})(CreateCourse);