




import React, { Component } from 'react'
import { FormControl, InputLabel, Select, TextField, Button } from '@material-ui/core';

class CreateMenu extends Component {

  state = {
    selectedMenuItemLevel: null,
    name: "",
    link: "",
    disabledButton: true
  }
  componentDidUpdate = () => {

    if (this.state.name.length > 1 && this.state.link.length > 1 && this.state.disabledButton) {
      this.setState({
        disabledButton: false
      });
    } 


     if (this.state.name.length <= 1 && this.state.link.length <= 1 && !this.state.disabledButton){
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
            label="عنوان منو"
            className="form__controller--inp"
            onChange={this.handleChange}
            inputProps={{
              name: "name"
            }}
          />
        </FormControl>



        <FormControl className="form__controller">
          <TextField
            label="لینک"
            className="form__controller--inp"
            onChange={this.handleChange}
            inputProps={{
              name: "link"
            }}
          />
        </FormControl>

        <FormControl className="form__controller">
          <InputLabel htmlFor="age-native-simple" className="form__controller--label">سطح منو</InputLabel>
          <Select
            className="form__controller--select"
            native
            value={this.selectedMenuItemLevel ? this.state.selectedMenuItemLevel.name : null}
            onChange={this.handleChange}

            inputProps={{
              name: 'selectedMenuItemLevel'
              // id: 'age-native-simple',
            }}
          >
            <option value={null} className="form__controller--option"> منوی اصلی </option>
            {
              this.props.menus ? this.props.menus.map(menuItme => {
                return <option
                  value={menuItme}
                  className="form__controller--option">
                  {menuItme.name}
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



export default CreateMenu;  