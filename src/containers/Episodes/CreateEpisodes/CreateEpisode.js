<<<<<<< HEAD

//add validation 




import React from 'react';

=======
import React from 'react';
>>>>>>> e6ef226b4af024c7135f9a25fd4ba073ab703de6
import {
  Button,
  FormGroup,
  TextField,
  FormControl,
<<<<<<< HEAD
  Select
} from '@material-ui/core';

// import { useInputState } from './../../../hooks';

=======
  Select,
  Input,
  MenuItem,
  Checkbox,
  ListItemText
} from '@material-ui/core';
>>>>>>> e6ef226b4af024c7135f9a25fd4ba073ab703de6
import {
  useSelector,
  useDispatch
} from 'react-redux';
import {
  makeNewEpisode,
} from './../../../store/action/index';
import { reduxForm, Field } from 'redux-form';

function CreateEpisode(props) {

  const state = useSelector(state => state.createEpisode);
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
  function renderInput(formProps) {
    return (
      <FormControl className="form__controller">
        <TextField
          className="form__controller--inp"
          {...formProps.input}
        />
      </FormControl>
    )
  }

  function renderCategoriesMultipleSelector(formProps) {
    return (
      <FormControl variant="filled" className="form__controller" style={{}}>
        <label className="form__controller--label">
          {formProps.input.label}
        </label>
        <Select
          {...formProps.input}
          multiple
          input={<Input id="select-multiple-checkbox" />}
          renderValue={selected => selected.join(', ')}
        >
          {
            this.props.cats ? this.props.cats.map(catItem => (
              <MenuItem key={catItem.name} value={catItem._id}>
                <Checkbox checked={this.props.categories.indexOf(catItem._id) > -1} />
                <ListItemText primary={catItem.name} />
              </MenuItem>
            )) : null
          }
        </Select>
      </FormControl>
    )
  }

  function renderTypeCourseSelector(formProps) {
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
  function renderRelatedCourseSelector(formProps) {
    return (
      <FormControl className="form__controller">
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
  function renderEditor(formProps) {
    return (
      <TextField
        multiline
        fullWidth
        {...formProps.input}
      />
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
          component={renderTypeCourseSelector}
        >
          <option value="free" className="form__controller--option">  Free </option>
          <option value="vip" className="form__controller--option">  Vip Access </option>
          <option value="cash" className="form__controller--option"> Cash </option>
        </Field>

        <Field
          name='relavantCourse'
          label='Relavant Course'
          component={renderRelatedCourseSelector}
        >
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
          <label className="form__controller--label"> توضیح ویدیو </label>
          {/* <EpisodeEditor /> */}
          <Field
            name='episodeTextConent'
            label='episodeTextContent'
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
        Create Episode !!!!
        </Button>
    </form>
  )
}



export default reduxForm({
  form: 'createEpisode'
})(CreateEpisode); 