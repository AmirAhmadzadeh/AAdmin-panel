

import React, { useEffect } from 'react'

import {
  Button,
  FormGroup, TextField, FormControl,
  Select,
  Input,
  MenuItem,
  Checkbox,
  ListItemText,
  InputLabel
} from '@material-ui/core';

import useInputState from './../../../hooks/useInputState';

import useValueState from './../../../hooks/useValue';

import useArrayValueState from './../../../hooks/useArrayValueState';

import useFilePicker from './../../../hooks/useFilePicker';


import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import useBoolean from '../../../hooks/useBoolean';



export default function ({ makeNewCourse, cats }) {

  const [title, setTitle] = useInputState('');

  const [price, setPrice] = useValueState(null);

  const [slug, setSlug] = useInputState('');

  const [tag, setTag] = useInputState('');

  const [kindOfCourse, setKindOfCourse] = useValueState('free');

  const [categories, setCategories] = useArrayValueState([]);

  const [courseImage, setImage] = useFilePicker(null);

  const [canSendReq, toggleCanUse, setCanSendReq] = useBoolean(false);

  const [errorMsg, setErrorMsg] = useValueState(null);

  const [courseText, setCourseText] = useInputState('');


  function handleSubmit() {

    if (canSendReq) {
      setErrorMsg(null);
      console.log('helooooooo amir')

      const data = {
        slug, categories, title, type: kindOfCourse, body: courseText, price, tags: tag, file: courseImage
      }
      // console.log('amir is hre ', data);
      makeNewCourse(data);

    } else {
      setErrorMsg('Error In Creating Course Please Check youre Inputs');
    }
  }




  const isNumber = (n) => (!isNaN(parseFloat(n)) && isFinite(n))


  useEffect(() => {
    ValidatorForm.addValidationRule('isNum', (value) => {
      if (isNumber(value)) return true;
      return false
    });

    if (categories.length === 0 || courseImage === null) setCanSendReq(false);
    else if (categories.length !== 0 && courseImage) setCanSendReq(true);


  });

  return (
    <React.Fragment>

      <h1> {errorMsg ? errorMsg : null} </h1>
      <ValidatorForm onSubmit={handleSubmit}>

        <FormGroup>
          <FormControl className="form__controller">
            <TextValidator
              label="عنوان دوره"
              className="form__controller--inp"
              onChange={e => { setTitle(e.target.value) }}
              name="title"
              validators={['required']}
              errorMessages={['لطفا چیزی  را بنویسید !']}
              value={title}
              fullWidth
              margin="normal"
              variant="filled"
              // placeholder="Placeholder"
              helperText="Full width!"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </FormControl>
        </FormGroup>

        <FormControl className="form__controller">

          <TextValidator
            value={price}
            label="قیمت دوره"
            className="form__controller--inp"
            onChange={(e) => { setPrice(e.target.value) }}
            name="price"
            validators={['required', 'isNum']}
            errorMessages={['لطفا چیزی  را بنویسید !', 'لطفا رقم مبغ دوره را وارد کنید ']}
            // fullWidth
            margin="normal"
            variant="filled"
            // placeholder="Placeholder"
            helperText="Full width!"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </FormControl>

        <FormControl className="form__controller">

          <TextValidator
            value={slug}
            label="اسلاگ دوره"
            className="form__controller--inp"
            onChange={(e) => { setSlug(e.target.value) }}
            validators={['required']}
            errorMessages={['لطفا چیزی  را بنویسید !']}
            name='slug'
            // fullWidth
            margin="normal"
            variant="filled"
            // placeholder="لطفا اسلاگ دوره را وارد کنید!"
            helperText="Full width!"
            InputLabelProps={{
              shrink: true,
            }}

          />
        </FormControl>

        <FormControl className="form__controller">

          <TextValidator
            label="تگ های دوره"
            className="form__controller--inp"
            name='tag'
            value={tag}
            onChange={e => { setTag(e.target.value) }}
            validators={['required']}
            errorMessages={['لطفا چیزی  را بنویسید !']}
            margin="normal"
            variant="filled"
            // placeholder="لطفا اسلاگ دوره را وارد کنید!"
            helperText="Full width!"
            InputLabelProps={{
              shrink: true,
            }}

          />
        </FormControl>
        <FormGroup>
          <FormControl className="form__controller" variant="filled">
            <label className="form__controller--label">
              نوع
              دوره
            </label>
            <Select
              className="form__controller--select"
              native
              value={kindOfCourse}
              onChange={(e) => { setKindOfCourse(e.target.value); }}

              inputProps={{
                name: 'selectedKindOfCourse'
                // id: 'age-native-simple',
              }}

            >
              <option value="free" className="form__controller--option">  رایگان </option>
              <option value="vip" className="form__controller--option">  دسترسی با عضویت ویژه </option>
              <option value="cash" className="form__controller--option">نقدی </option>

            </Select>
          </FormControl>
        </FormGroup>
        <FormGroup>

          <FormControl variant="filled" className="form__controller" style={{}}>
            <label className="form__controller--label">
              دسته ها
            </label>
            <Select
              multiple
              value={categories}
              onChange={(e) => setCategories(e.target.value)}
              input={<Input id="select-multiple-checkbox" />}
              renderValue={selected => selected.join(', ')}
            // MenuProps={MenuProps}
            >
              {
                cats ? cats.map(catItem => (
                  <MenuItem key={catItem.name} value={catItem._id}>
                    <Checkbox checked={categories.indexOf(catItem._id) > -1} />
                    <ListItemText primary={catItem.name} />
                  </MenuItem>
                )) : null
                }
                
            </Select>
          </FormControl>
        </FormGroup>

        <FormGroup>
          {/* <ImageUploader
            // errorOcurred={handleImagePickerError}
            imageSelected={handlePickImage}    
            /> */}
          <label className="form__controller--label">
            تصویر دوره
            </label>
          {/* <TextValidator
            // value={JSON.stringify(courseImage)}
            type="file"
            name="file"
            onChange={(e) => { setImage(e.target.files[0]) }}
            validators={['required']}
            errorMessages={['لطفا چیزی  را بنویسید !']}
            variant="filled"
          /> */}

          <Input
            // value={courseImage}
            type="file"
            name="file"
            onChange={(e) => {
              // console.log(e.target.files[0]) ; 
              setImage(e.target.files[0])
            }}
            variant="filled"

          />
        </FormGroup>

        <FormGroup style={{ margin: "4rem 0 0 0" }}>
          <label className="form__controller--label"> متن دوره </label>


          <TextValidator
            multiline
            name="courseText"
            onChange={(e) => { setCourseText(e.target.value) }}
            validators={['required']}
            errorMessages={['لطفا چیزی  را بنویسید !']}
            value={courseText}
            validators={['required']}
            errorMessages={['لطفا چیزی  را بنویسید !']}
          />

        </FormGroup>
        <Button
          disabled={!canSendReq}
          type="submit"
          color="primary"
          variant="contained"
          style={{
            fontSize: "1.5rem"
            , margin: "3.5rem 0"
          }}> ایجاد دوره</Button>
      </ValidatorForm>
    </React.Fragment>
  )
}









