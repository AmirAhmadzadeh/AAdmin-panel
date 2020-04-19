




import React  from 'react';

import {
  FormControl,
   InputLabel,
  Select, Button,
  FormGroup
} from '@material-ui/core';

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

  return (


    <div className="menu__createMenu">

      <ValidatorForm onSubmit={handleSubmit}>

        <FormGroup>

          <FormControl className="form__controller">

            <TextValidator
                value={name}

                label="نام دسته "

                className="form__controller--inp"

                onChange={(e) => setName(e.target.value)}

                name="name"

                validators={['required']}

                errorMessages={['لطفا چیزی  را بنویسید !']}
            />
          </FormControl>

          <FormControl className="form__controller">

            <TextValidator

              value={slug}

              label="اسلاگ"

              className="form__controller--inp"

              onChange={(e) => setSlug(e.target.value)}

              name="slug"

              validators={['required']}

              errorMessages={['لطفا چیزی  را بنویسید !']}

            />

          </FormControl>

          <FormControl className="form__controller">
            <InputLabel htmlFor="age-native-simple" className="form__controller--label">سطح دسته</InputLabel>
            <Select

              className="form__controller--select"

              native

              value={level ? level.name : null}

              onChange={(e) => setLevel(e.target.value)}

              name="level"

            >
              <option value='none' className="form__controller--option"> دسته اصلی </option>
              {
                props.cats ? props.cats.map(catItme => {
                  return <option
                    value={catItme._id}
                    className="form__controller--option">
                    {catItme.name}
                  </option>
                }) : "Loading..."

              }

            </Select>

          </FormControl>
        </FormGroup>


          <Button

            color="primary"
            variant="contained"
            className="form__controller--button"
            type="submit"   
          // disabled={disabledButton}
          >

            ساختن

              </Button>


      </ValidatorForm>

    </div>

  )
}
export default CreateCategory;  