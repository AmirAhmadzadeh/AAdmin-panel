




import React, { Component } from 'react';
import { FormControl, InputLabel, 
         Select, TextField, Button
} from '@material-ui/core';

class CreateCategory extends Component {

  state = {
    selectedMenuItemLevel: null,
    name: "",
    slug: "",
    disabledButton: true
  }
  componentDidUpdate = () => {

    if (this.state.name.length > 1 && this.state.slug.length > 1 && this.state.disabledButton) {
      this.setState({
        disabledButton: false
      });
    } 


     if (this.state.name.length <= 1 && this.state.slug.length <= 1 && !this.state.disabledButton){
      this.setState({
        disabledButton: true 
      });
    }

  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {

    return (
      <div className="menu__createMenu">



        <FormControl className="form__controller">

          <TextField
            label="نام دسته "
            className="form__controller--inp"
            onChange={this.handleChange}
            inputProps={{
              name: "name"
            }}
          />
        </FormControl>



        <FormControl className="form__controller">
          <TextField
            label="اسلاگ"
            className="form__controller--inp"
            onChange={this.handleChange}
            inputProps={{
                name: "slug"
            }}
          />
        </FormControl>

        <FormControl className="form__controller">
          <InputLabel htmlFor="age-native-simple" className="form__controller--label">سطح دسته</InputLabel>
          <Select
            className="form__controller--select"
            native
            value={this.selectedMenuItemLevel ? this.state.selectedMenuItemLevel.name : null}
            onChange={this.handleChange}

            inputProps={{
              name: 'selectedCategoryItemLevel'
              // id: 'age-native-simple',
            }}
          >
            <option value={null} className="form__controller--option"> دسته اصلی </option>
            {
              this.props.cats ? this.props.cats.map(catItme => {
                return <option
                  value={catItme}
                  className="form__controller--option">
                  {catItme.name}
                </option>
              }) : "Loading..."
            }   
          </Select>
        </FormControl>


        <FormControl className="form__controller">
          <Button color="primary" variant="contained" className="form__controller--button" disabled={this.state.disabledButton}>
                ساختن  
          </Button>
        </FormControl>

      </div>
    )
  }
}



export default CreateCategory;  