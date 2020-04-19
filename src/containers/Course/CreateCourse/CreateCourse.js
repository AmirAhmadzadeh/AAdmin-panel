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
  ListItemText
} from '@material-ui/core';
import {  useValue } from './../../../hooks/';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import Editor from '../../../components/Editor/Editor';
import {
  titleChanged, priceChanged,
  slugChanged, tagChanged,
  setKindCourse, setCategories,
  courseImageChanged
} from '../../../store/action/index';

export default function ({ makeNewCourse, cats , resetCreatePage }) {


  const [errorMsg, setErrorMsg] = useValue(null);

  const state = useSelector(state => state.createCourse)
  const dispatch = useDispatch();


  function handleSubmit() {

    // if (state.canSendReq) {
      setErrorMsg(null);


      const data = {
        slug: state.slug,
        categories: state.categories,
        title: state.title,
        type: state.kindOfCourse,
        body: state.courseText,
        price: state.price,
        tags: state.tag,
        file: state.courseImage
      }
      makeNewCourse(data);
      resetCreatePage() ;  

    // } else {
      // setErrorMsg('لطفا ورودی های خود را کنترل کنید !!!');
    // }

  }




  const isNumber = (n) => (!isNaN(parseFloat(n)) && isFinite(n))


  useEffect(() => {
    ValidatorForm.addValidationRule('isNum', (value) => {
      if (isNumber(value)) return true;
      return false
    });

    // if (state.categories.length === 0) dispatch(setReqPremission(false));
    // else if (state.categories.length !== 0 && courseImage) dispatch(setReqPremission(true));


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
              onChange={e => { dispatch(titleChanged(e.target.value)) }}
              name="title"
              validators={['required']}
              errorMessages={['لطفا چیزی  را بنویسید !']}
              value={state.title}
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
            value={state.price}
            label="قیمت دوره"
            className="form__controller--inp"
            onChange={(e) => { dispatch(priceChanged(e.target.value)) }}
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
            value={state.slug}
            label="اسلاگ دوره"
            className="form__controller--inp"
            onChange={(e) => { dispatch(slugChanged(e.target.value)) }}
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
            value={state.tag}
            onChange={e => { dispatch(tagChanged(e.target.value)) }}
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
              value={state.kindOfCourse}
              onChange={(e) => { dispatch(setKindCourse(e.target.value)); }}

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
              value={state.categories}
              onChange={(e) => dispatch(setCategories(e.target.value))}
              input={<Input id="select-multiple-checkbox" />}
              renderValue={selected => selected.join(', ')}

            >
              {
                cats ? cats.map(catItem => (
                  <MenuItem key={catItem.name} value={catItem._id}>
                    <Checkbox checked={state.categories.indexOf(catItem._id) > -1} />
                    <ListItemText primary={catItem.name} />
                  </MenuItem>
                )) : null
              }

            </Select>
          </FormControl>
        </FormGroup>

        <FormGroup>

          <label className="form__controller--label">
            لینک تصویر دوره
                </label>

          <TextValidator
              // label="تگ های دوره"
              className="form__controller--inp"
              name='file'
              value={state.courseImage}
              onChange={e => { dispatch(courseImageChanged(e.target.value)) }}
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
        </FormGroup>

        <FormGroup style={{ margin: "4rem 0 0 0" }}>
          <label className="form__controller--label"> متن دوره </label>


          {/* <TextValidator
                multiline
                name="courseText"
                onChange={(e) => { setCourseText(e.target.value) }}
                validators={['required']}
                errorMessages={['لطفا چیزی  را بنویسید !']}
                value={courseText}
                validators={['required']}
                errorMessages={['لطفا چیزی  را بنویسید !']}
              /> */}
          <Editor

          />
        </FormGroup>



        <Button
          // disabled={!state.canSendReq}
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