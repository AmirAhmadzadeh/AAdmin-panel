





import React, { Component } from 'react'
import Aux from '../../../hoc/Aux';
// import Editor from '../../../components/Editor/Editor';
import {
  Button, 
  FormGroup, TextField, FormControl,
  Select

} from '@material-ui/core';



class CreateEpisode extends Component {

  state = {
    title: null,
    selectedKindOfCourse: "free",
    categories: [],
    price: 0,
    tags: null,
    slug: "",
    courseText: " سلام",
    courseImage: null,
    relavantCourse: null
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
    console.log(this.props.courses, '[hello some tsst]');
  }




  onEditorChange(event) {

    console.log(event.editor.getData(), `[<== test]`);
    const courseText = event.editor.getData();
    this.setState({
      courseText
    });
  }



  // changeCourseText = (event) => {
  //   console.log(event.target.value, `[<== test 2]`);
  // }



  render() {
    return (

      <Aux>
        {/* <Paper> */}

        <FormControl className="form__controller">
          <TextField
            label="عنوان ویدیو"
            className="form__controller--inp"
            onChange={this.handleChange}
            inputProps={{
              name: "title"
            }}
          />
        </FormControl>



        <FormControl className="form__controller">
          <TextField
            label="زمان ویدیو"
            className="form__controller--inp"
            onChange={this.handleChange}
            inputProps={{
              name: "time"
            }}
          />
        </FormControl>



        <FormControl className="form__controller">
          <TextField
            label="شماره ی ویدیو"
            className="form__controller--inp"
            onChange={this.handleChange}
            inputProps={{
              name: "numberOfVideo"
            }}
          />
        </FormControl>

        <br />


        <FormGroup>

          <FormControl className="form__controller">
            <TextField
              label=" لینک ویدیو"
              className="form__controller--inp"
              onChange={this.handleChange}
              inputProps={{
                name: "numberOfVideo"
              }}
            />
          </FormControl>
        </FormGroup>
        <FormControl className="form__controller">
          <label className="form__controller--label">
            نوع
            ویدیو
              </label>
          {/* <InputLabel htmlFor="age-native-simple" className="form__controller--label">نوع دوره</InputLabel> */}
          <Select
            className="form__controller--select"
            native
            value={this.selectedMenuItemLevel ? this.state.selectedMenuItemLevel.name : null}
            onChange={this.handleChange}

            inputProps={{
              name: 'selectedKindOfEpisode'
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
            دوره مربوطه
              </label>
          <Select

            className="form__controller--select"
            native
            value={this.state.relavantCourse}
            onChange={this.handleChange}
            inputProps={{
              name: 'relavantCourse'
              // id: 'age-native-simple',
            }}

          // MenuProps={MenuProps}
          >
            {this.props.courses ? this.props.courses.map(courseItem => (
              <option value={courseItem._id} key={courseItem._id} className="form__controller--option">  {courseItem.title} </option>
            )) : null}
          </Select>
        </FormControl>
        <FormGroup>




          <FormControl>
            <label className="form__controller--label"> توضیح ویدیو </label>
            {/* <Editor data={this.state.courseText}
              chagedData={this.onEditorChange}
            /> */}

            <textarea name="courseText" onChange={this.handleChange} />       
          </FormControl>
        </FormGroup>








        <Button> sakhtan</Button>










        {/* </Paper > */}



      </Aux>

    )
  }
}


export default CreateEpisode; 
