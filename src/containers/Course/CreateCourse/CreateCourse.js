


import React, { Component } from 'react'
import Aux from '../../../hoc/Aux';
// import Editor from '../../../components/Editor/Editor';
import {
  Button, 
  FormGroup, TextField, FormControl,
  Select, MenuItem, Input,
  Checkbox, ListItemText
} from '@material-ui/core';



class CreateCourse extends Component {

  state = {
    title: null,
    selectedKindOfCourse: "free",
    categories: [],
    price: 0,
    tags: null,
    slug: "",
    courseText: " سلام",
    courseImage: null
  }


  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  handleChangeMultiple = (event) => {
    this.setState({
      categories: event.target.value
    })
  }


  componentDidMount = () => {
    console.log(this.props.cats);
  }




  onEditorChange(event) {

    console.log(event.editor.getData(), `[<== test]`);
    const courseText = event.editor.getData();
    this.setState({
      courseText
    });
  }


  componentDidUpdate = () => {
    console.log(this.state);
  }


  // changeCourseText = (event) => {
  //   console.log(event.target.value, `[<== test 2]`);
  // }


  render() {
    return (

      // <Paper>
<Aux>

        <FormControl className="form__controller">
          <TextField
            label="عنوان دوره"
            className="form__controller--inp"
            onChange={this.handleChange}
            inputProps={{
              name: "title"
            }}
          />
        </FormControl>

        <FormControl className="form__controller">

          <TextField
            label="قیمت دوره"
            className="form__controller--inp"
            onChange={this.handleChange}
            inputProps={{
              name: "price"
            }}
          />
        </FormControl> <FormControl className="form__controller">

          <TextField
            label="اسلاگ دوره"
            className="form__controller--inp"
            onChange={this.handleChange}
            inputProps={{
              name: "slug"
            }}
          />
        </FormControl> <FormControl className="form__controller">

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
          <FormControl className="form__controller">
            <label className="form__controller--label">
              نوع
              دوره
              </label>
            {/* <InputLabel htmlFor="age-native-simple" className="form__controller--label">نوع دوره</InputLabel> */}
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


          <FormControl className="form__controller">
            {/* <InputLabel htmlFor="select-multiple-checkbox" className="form__controller--label">دسته ها</InputLabel> */}
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














        <FormGroup>
          <label className="form__controller--label"> متن دوره </label>
          {/* <Editor data={this.state.courseText}
            chagedData={this.onEditorChange}
          /> */}

          <textarea name="courseText" onChange={this.handleChange} />       
        </FormGroup>














        <Button> sakhtan</Button>

        </Aux>
      // {/* // </Paper > */}





    )
  }
}


export default CreateCourse; 
