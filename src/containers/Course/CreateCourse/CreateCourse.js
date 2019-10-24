


import React, { useEffect } from 'react'
import {
  Button,
  FormGroup, TextField, FormControl,
  Select, MenuItem, Input,
  Checkbox, ListItemText
} from '@material-ui/core';

import ImageUploader from './../../../components/ImageUploader/ImageUploader';

import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';

import useInputState  from './../../../hooks/useInputState' ;

function CreateCourse (props) {


  // const [title , setTitle] = useInputState(null) ; 


  return (

    <React.Fragment>

      <FormControl className="form__controller">
     
        <TextValidator
          label="عنوان دوره"
          className="form__controller--inp"
          // onChange={(e) => {setTitle(e.target.value)}}
          name="title"
          // value={title}
          validators={['required']}
          errorMessages={['this field is required']}
        />
      </FormControl>

     

      <Button> sakhtan</Button>

    </React.Fragment>

  )
}




export default CreateCourse;













  // const [kindOfCourse , setKindOfCourse] = useValueState('free') ;
  // const [categories , setCategories ] = useArrayValueState([]) ; 
  // const [price , setPrice] = useValueState(0) ; 
  // const [courseText, setCourseText ] = useInputState('') ; 
  // const [courseImage , setImage] = useFilePicker() ;  



  // handleChange = (event) => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // }


  // handleChangeMultiple = (event) => {
  //   this.setState({
  //     categories: event.target.value
  //   })
  // }


  // useEffect(() => {
  //     console.log(props.cats , 'amir is here'); 
  // }) ;  
/*

 {/* <FormControl className="form__controller">

        <TextField
          label="قیمت دوره"
          className="form__controller--inp"
          onChange={this.handleChange}
          inputProps={{
            name: "price"
          }}
        />
      </FormControl> 

       {/* <FormControl className="form__controller">

        <TextField
          label="اسلاگ دوره"
          className="form__controller--inp"
          onChange={this.handleChange}
          inputProps={{
            name: "slug"
          }}
        />
      </FormControl>  
      
       <FormControl className="form__controller">

        <TextField
          label="تگ های دوره"
          className="form__controller--inp"
          onChange={this.handleChange}
          inputProps={{
            name: "tags"
          }}
        />
      </FormControl> 
     
      <FormGroup>
      {/*  <FormControl className="form__controller">
          <label className="form__controller--label">
            نوع
            دوره
            </label>
          <Select
            className="form__controller--select"
            native
            value={this.state.selectedKindOfCourse}
            onChange={this.handleChange}

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


        {/* <FormControl className="form__controller">
          <label className="form__controller--label">
            دسته ها
            </label>
          <Select
            multiple
            value={this.state.categories}
            onChange={this.handleChangeMultiple}
            input={<Input id="select-multiple-checkbox" />}
            renderValue={selected => selected.join(', ')}
          // MenuProps={MenuProps}
          >
            {this.props.cats ? this.props.cats.map(catItem => (
              <MenuItem key={catItem._id} value={catItem.name}>
                <Checkbox checked={this.state.categories.indexOf(catItem.name) > -1} />
                <ListItemText primary={catItem.name} />
              </MenuItem>
            )) : null}
          </Select>
        </FormControl> 
      </FormGroup>














      {/* // <FormGroup>
      //   <label className="form__controller--label"> متن دوره </label>
      //    <Editor data={this.state.courseText}
      //     chagedData={this.onEditorChange}
      //   /> 

      //   <textarea name="courseText" onChange={this.handleChange} />
      // </FormGroup> 







{/* 
      // <FormGroup>
      //   <ImageUploader />
      // </FormGroup> 






*/