import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
  Button, FormGroup, FormControl, TextField,
} from '@material-ui/core';
import { reduxForm, Field } from 'redux-form';

class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errorMsg: null
    }

    this.submitHandler = this.submitHandler.bind(this);
    this.renderEditor = this.renderEditor.bind(this);
    this.renderCategoriesMultipleSelector = this.renderCategoriesMultipleSelector.bind(this);
    // this.renderError = this.renderError.bind(this) ;
    this.renderInput = this.renderInput.bind(this) ;
  }
  renderError(meta){
    return meta.touched &&
      ((meta.error && <span className='validation_error'>{meta.error}</span>) ||
        (meta.warning && <span className='validation_warning'>{meta.warning}</span>))
  }
  submitHandler(formValues) {
    this.setState({
      errorMsg: null
    });

    const data = {
      slug: formValues.slug,
      categories: formValues.categories,
      title: formValues.title,
      body: formValues.editor,
      tags: formValues.tag,
      file: formValues.file
    }
    this.props.makeNewCourse(data);
    // this.props.resetCreatePage();
  }

  renderInput(formProps) {
    // formProps.meta.touched
    // formProps.meta.invalid
    return (
      <FormControl className="form__controller">
        <label
          className="form__controller--label"
          for={formProps.label}>
          {formProps.label}
        </label>
        <TextField
          className="form__controller--inp"
          fullWidth
          margin="normal"
          variant="filled"
          helperText={formProps.meta.touched && formProps.meta.invalid}
          error={formProps.meta.touched && formProps.meta.invalid}
          InputLabelProps={{
            shrink: true,
          }}

          {...formProps.input}
        />
        {this.renderError(formProps.meta)}
      </FormControl>
    )
  }

  renderCategoriesMultipleSelector(formProps) {
    return (
      <FormControl className="form__controller" variant="filled">
        <label className="form__controller--label">
           {formProps.label}
        </label>
        <select
          multiple
          {...formProps.input}
        >
          {formProps.children}
        </select>
          {this.renderError(formProps.meta)}
      </FormControl>
    )
  }



  renderEditor(formProps) {
    return (
      <FormControl>
        <label
        className="form__controller--label"
        >
          {formProps.label} </label>
        <TextField
          className="form__controller--inp"
          fullWidth
          margin="normal"
          variant="filled"
          helperText="Full width!"
          InputLabelProps={{
            shrink: true,
          }}
          multiline
          {...formProps.input}
        />
        {this.renderError(formProps.meta)}
      </FormControl>
    );
  }


  render() {
    return (
      <>
        <h1> {this.state.errorMsg ? this.state.errorMsg : null} </h1>
        <form onSubmit={this.props.handleSubmit(this.submitHandler)}>
          <FormGroup>
            <Field
              label='Title of Post'
              name='title'
              component={this.renderInput}
            />
          </FormGroup>

          <Field
            label='Post Slug'
            name='slug'
            component={this.renderInput}
          />

          <Field
            name='tag'
            label='tags'
            component={this.renderInput}
          />


          <FormGroup>
            <Field
              name='categories'
              label='Post Categories'
              component={this.renderCategoriesMultipleSelector}
            >
              {
                this.props.cats ? this.props.cats.categories.map(catItem => (
                  <option
                    key={catItem.name}
                    value={catItem._id}
                    primaryTex={catItem.name}
                  >
                    {catItem.name}
                  </option>

                )) : null
              }
            </Field>
          </FormGroup>

          <FormGroup>
            <Field
              name='file'
              label='Enter File path'
              component={this.renderInput}
            />
          </FormGroup>

          <Field
            name='editor'
            label='Conent Text'
            component={this.renderEditor}
          />
          <Button
            // disabled={!state.canSendReq}
            type="submit"
            color="primary"
            variant="contained"
            disabled={this.props.pristine || this.props.submitting}
            style={{
              fontSize: "1.5rem"
              , margin: "3.5rem 0"
            }}> Create Post
            </Button>

          <Button
            type='button'
            disabled={this.props.pristine || this.props.submitting}
            onClick={this.props.reset}
          >Clear Values</Button>
        </form>
      </>
    )
  }
}

const validate = values => {
  const errors = {}
  const requiredFields = [
    'title',
    'slug',
    'tag',
    'categories',
    'file',
    'editor',
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  if (values['categories'] && values['categories'].length < 1) {
    errors['categories'] = 'Please Select Some Categories !'
  }
  return errors;
}
const mapStateToProps = state => {
  return {
    cats: state.cats.categories
  }
};
export default connect(mapStateToProps)(reduxForm({
  form: 'createPost',
  validate
})(CreatePost));

