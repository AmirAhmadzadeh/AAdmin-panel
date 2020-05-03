import React from 'react';
import {
  Button,
  FormGroup,
  TextField,
  FormControl,
  Select,
  Input,
  MenuItem,
  Checkbox,
  ListItemText
} from '@material-ui/core';
import {
  useDispatch
} from 'react-redux';
import {
  makeNewEpisode,
} from './../../../store/action/index';
import { reduxForm, Field } from 'redux-form';

function CreateEpisode(props) {

  const dispatch = useDispatch();

  function onSubmitHandler(formValues) {
    console.log('heloo', formValues);

    const data = {
      title: formValues.title,
      time: formValues.time,  
      number: formValues.number,
      course: formValues.relavantCourse,
      videoUrl: formValues.link,
      body: formValues.episodeTextConent,
      type: formValues.selectedKindOfEpisode,
    }
    dispatch(makeNewEpisode(data));
    props.gotoTable();
  }
  

  const renderError = meta => {
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
  function renderTypeEpisodeSelector(formProps) {
    return (
      <FormControl className="form__controller" variant="filled">
        <label className="form__controller--label">
          {formProps.label}
        </label>
        <Select
          className="form__controller--select"
          native
          {...formProps.input}
        >
          {formProps.children}
        </Select>
        {renderError(formProps.meta)}
      </FormControl>
    )
  }
  function renderRelatedCourseSelector(formProps) {
    return (
      <FormControl className="form__controller">
        <label className="form__controller--label">
          {formProps.label}
        </label>
        <Select
          className="form__controller--select"
          native
          {...formProps.input}
        >
          {formProps.children}
        </Select>
        {renderError(formProps.meta)}
      </FormControl>
    )
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
    )
  }
  return (
    <form onSubmit={props.handleSubmit(onSubmitHandler)}>
      <Field
        name='title'
        component={renderInput}
        label='Episode Title'
      />
      <Field
        label='Video Time'
        name='time'
        component={renderInput}
      />

      <Field
        label='Video number'
        name='number'
        component={renderInput}
      />
      <FormGroup>
        <Field
          label='Video Link'
          name='link'
          component={renderInput}
        />
        <Field
          name='selectedKindOfEpisode'
          label='Select Type Of episode'
          component={renderTypeEpisodeSelector}
        >
          <option></option>
          <option value="free" className="form__controller--option">  Free </option>
          <option value="vip" className="form__controller--option">  Vip Access </option>
          <option value="cash" className="form__controller--option"> Cash </option>
        </Field>

        <Field
          name='relavantCourse'
          label='Relavant Course'
          component={renderRelatedCourseSelector}
        >
         <option></option>
          {
            props.courses ? props.courses.map(courseItem => (
              <option value={courseItem._id}
                key={courseItem._id}
                className="form__controller--option">  {courseItem.title}
              </option>
            )) : null
          }
        </Field>
      </FormGroup>
      <FormGroup>
        <FormControl>
          {/* <label className="form__controller--label">  ویدیو </label> */}
          {/* <EpisodeEditor /> */}
          <Field
            name='episodeTextConent'
            label='Episdoe Description !!!!'
            component={renderEditor}
          />
        </FormControl>
      </FormGroup>

      <Button
        type="submit"
        color="primary"
        variant="contained"
        style={{
          fontSize: "1.5rem"
        , margin: "3.5rem 0"
        }}
      >
        Create Episode 
        </Button>
    </form>
  )
}

const validate = values => { 
  const errors = {} ; 
  const isNumber = (n) => (!isNaN(parseFloat(n)) && isFinite(n))
  const fields = [
    'title' ,
    'number' ,
    'link' , 
    'time' ,
    'selectedKindOfEpisode' , 
    'relavantCourse' ,
    'episodeTextConent'
  ] ; 
  fields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required !!!'
    };
  });
  if (values['number'] && !isNumber(values['number'])) { 
    errors['number'] = 'plese Fill this input with a number !!!' ; 
  } 
  // if (values['categoires'] && values['categoires'].length < 1) {
  //   errors['categoires'] = 'Required !!';
  // }
  console.log('hello errors is ????' , errors) ; 
  return errors ;  
}

export default reduxForm({
  form: 'createEpisode' , 
  validate
})(CreateEpisode); 