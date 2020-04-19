<<<<<<< HEAD





import React  from 'react';

=======
import React from 'react';
>>>>>>> e6ef226b4af024c7135f9a25fd4ba073ab703de6
import {
  FormControl,
  InputLabel,
  Select,
  Button,
  FormGroup,
  TextField
} from '@material-ui/core';

<<<<<<< HEAD
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'

import { useInputState , useValue } from './../../../hooks/';



function CreateCategory(props) {

  const [level, setLevel] = useValue(null);

  const [slug, setSlug] = useInputState('');

  const [name, setName] = useInputState('');

  // const [disabledButton, toggle, setDisabledButton] = useBoolean();

  

  const handleSubmit  = () => {
     
    props.createNewCategory({  name , slug , parent : level  }) ; 
  } 

=======
import { reduxForm, Field } from 'redux-form';

function CreateCategory(props) {

  // const [disabledButton, toggle, setDisabledButton] = useBoolean();
  const onSubmitHandler = (formValues) => {

    console.log(formValues);
    // props.createNewCategory({
    //   name: name,
    //   slug: slug,
    //   parent: level
    // });
  }
  const renderInput = (formProps) => {
    return (
      <FormControl className="form__controller">
        <TextField
          className="form__controller--inp"
          {...formProps.input}
        />
      </FormControl>
    )
  }

  const renderLevelSelector = (formProps) => {
    return (
      <FormControl className="form__controller">
        <InputLabel
          htmlFor="age-native-simple"
          className="form__controller--label">
          Category Level
               </InputLabel>
        <Select
          className="form__controller--select"
          native
          {...formProps}
        >
          {formProps.children}
        </Select>
      </FormControl>
    )
  }
>>>>>>> e6ef226b4af024c7135f9a25fd4ba073ab703de6
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
            <option value='none' className="form__controller--option">
              main category
               </option>
            {
              props.cats ? props.cats.map(catItme => {
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
        // disabled={disabledButton}
        >
          Create!
              </Button>
      </form>
    </div>

  )
}

export default reduxForm({
  form: 'createCategory'
})(CreateCategory);  