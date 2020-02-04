

import React  from 'react' ; 

import {
  FormControl,
  InputLabel,
  Select, Button,
  FormGroup
} from '@material-ui/core';

import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'

import { useInputState, useBoolean, useValue } from './../../../hooks/';



function CreateMenu(props) {

  const [level, setLevel] = useValue(null);

  const [link, setLink] = useInputState('');

  const [name, setName] = useInputState('');

  const [disabledButton, toggle, setDisabledButton] = useBoolean();



  const handleSubmit = () => {

    props.createNewMenu({ name, link, parent: level });
  }

  return (
    <div className="menu__createMenu">

      <ValidatorForm onSubmit={handleSubmit}>

        <FormGroup>

          <FormControl className="form__controller">

            <TextValidator
              value={name}

              label="عنوان منو"

              className="form__controller--inp"

              onChange={(e) => setName(e.target.value)}

              name="name"

              validators={['required']}

              errorMessages={['لطفا چیزی  را بنویسید !']}
            />
          </FormControl>

          <FormControl className="form__controller">

            <TextValidator

              value={link}

              label="لینک"

              className="form__controller--inp"

              onChange={(e) => setLink(e.target.value)}

              name="link"

              validators={['required']}

              errorMessages={['لطفا چیزی  را بنویسید !']}

            />
          </FormControl>

          <FormControl className="form__controller">

            <InputLabel htmlFor="age-native-simple" className="form__controller--label">سطح منو</InputLabel>
            <Select
             
             className="form__controller--select"
             
              native
             
              value={level}

              onChange={(e) => setLevel(e.target.value)}

              name="level"

            >
              <option value='none' className="form__controller--option"> منوی اصلی </option>
              {
                props.menus ? props.menus.map(menuItme => {
                  return <option
                    value={menuItme._id}
                    className="form__controller--option">
                    {menuItme.name}
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


export default CreateMenu;  