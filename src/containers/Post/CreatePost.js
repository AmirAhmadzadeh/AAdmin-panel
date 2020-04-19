import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
  Button, FormGroup,
  FormControl, TextField
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
  }

  submitHandler(formValues) {
    this.setState({
      errorMsg: null
    });

    console.log('In create Post ', formValues);
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
    return (
      <FormControl className="form__controller">
        <TextField
          className="form__controller--inp"
          fullWidth
          margin="normal"
          variant="filled"
          helperText="Full width!"
          InputLabelProps={{
            shrink: true,
          }}

          {...formProps.input}
        />
      </FormControl>
    )
  }

  renderCategoriesMultipleSelector(formProps) {
    console.log(formProps, 'DOOOOOOO');
    return (
      <select
        multiple
        {...formProps.input}
      >
        {formProps.children}
      </select>
    )
  }



  renderEditor(formProps) {
    return (
      <FormControl>
        <label className="form__controller--label"> Post Text Content </label>
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
                this.props.cats ? this.props.cats.map(catItem => (
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
            <label className="form__controller--label">
              Post's Link Address
             </label>
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
const mapStateToProps = state => {
  return {
    cats: state.cats.categories
  }
};
export default connect(mapStateToProps)(reduxForm({
  form: 'createPost'
})(CreatePost));

