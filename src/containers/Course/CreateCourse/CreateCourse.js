import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Button,
  FormGroup,
  FormControl,
  Select,
  Input,
  MenuItem,
  Checkbox,
  ListItemText,
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

  const isNumber = (n) => (!isNaN(parseFloat(n)) && isFinite(n))
  function renderEditor(formProps) {
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
  const renderInput = (formProps) => {
    return (
      <FormControl className="form__controller">
        <TextField
          {...formProps.input}
          className="form__controller--inp"
          fullWidth
          margin="normal"
          variant="filled"
          helperText="Full width!"
        />
      </FormControl>
    )
  }
  const renderKindCourseSelector = (formProps) => {
    return (
      <FormControl className="form__controller" variant="filled">
        <label className="form__controller--label">
          {formProps.input.label}
        </label>
        <Select
          className="form__controller--select"
          native
          {...formProps.input}
        >
          {formProps.children}
        </Select>
      </FormControl>
    )
  }
  const renderCategorySelector = (formProps) => {
    return (
      <FormControl variant="filled" className="form__controller" style={{}}>
        <label className="form__controller--label">
          {formProps.input.label}
        </label>
        <select
          multiple
          {...formProps.input}
        >
          {formProps.children}
        </select>
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
          label='slug'
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

          <label className="form__controller--label">
            Picture Of Cousrse
                </label>
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

          {/* <Editor
          /> */}
        </FormGroup>

        <Button
          // disabled={!state.canSendReq}
          type="submit"
          color="primary"
          variant="contained"
          style={{
            fontSize: "1.5rem"
            , margin: "3.5rem 0"
          }}> ایجاد دوره
            </Button>
      </form>
    </>
  )
}

export default reduxForm({
  form: 'createCourse'
})(CreateCourse);