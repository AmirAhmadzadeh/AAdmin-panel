import React, { Component } from 'react'
import { connect } from 'react-redux';
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
import {
  TextValidator,
  ValidatorForm
} from 'react-material-ui-form-validator';
import Editor from '../../components/Editor/postEditor';
import {
  postCourseImageChanged,
  postSetCategories,
  postTitleChanged,
  postTagChanged,
  postSlugChanged,
  postSetReqPremission,
  postChangeContent
} from '../../store/action/';

class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errorMsg: null
    }
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler() {
    this.setState({
      errorMsg: null
    });
    const data = {
      slug: this.props.slug,
      categories: this.props.categories,
      title: this.props.title,
      body: this.props.postContent,
      tags: this.props.tags,
      file: this.props.postImage
    }
    this.props.makeNewCourse(data);
    this.props.resetCreatePage();
  }

  render() {
    return (
      <React.Fragment>
        <h1> {this.state.errorMsg ? this.state.errorMsg : null} </h1>
        <ValidatorForm onSubmit={this.submitHandler}>
          <FormGroup>
            <FormControl className="form__controller">
              <TextValidator
                label="عنوان دوره"
                className="form__controller--inp"
                onChange={e => { this.props.postTitleChanged(e.target.value) }}
                name="title"
                validators={['required']}
                errorMessages={['لطفا چیزی  را بنویسید !']}
                value={this.props.title}
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
              value={this.props.slug}
              label="اسلاگ دوره"
              className="form__controller--inp"
              onChange={(e) => { this.props.postSlugChanged(e.target.value) }}
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
              value={this.props.tags}
              onChange={e => { this.props.postTagChanged(e.target.value) }}
              name='tag'
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

            <FormControl variant="filled" className="form__controller" style={{}}>
              <label className="form__controller--label">
                دسته ها
                  </label>
              <Select
                multiple
                value={this.props.categories}
                onChange={(e) => this.props.postSetCategories(e.target.value)}
                input={<Input id="select-multiple-checkbox" />}
                renderValue={selected => selected.join(', ')}
              >
                {
                  this.props.cats ? this.props.cats.map(catItem => (
                    <MenuItem key={catItem.name} value={catItem._id}>
                      <Checkbox checked={this.props.categories.indexOf(catItem._id) > -1} />
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

              className="form__controller--inp"
              name='file'
              value={this.props.postImage}
              onChange={e => { this.props.postCourseImageChanged(e.target.value) }}
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
}
const mapStateToProps = state => {
  return {
    slug: state.createPost.slug,
    categories: state.createPost.categories,
    title: state.createPost.title,
    postConetent: state.createPost.postConetent,
    tags: state.createPost.tag,
    postImage: state.createPost.postImage,
    cats: state.cats.categories
  }
};
export default connect(mapStateToProps, {
  postChangeContent,
  postCourseImageChanged,
  postSetCategories,
  postSlugChanged,
  postTagChanged,
  postTitleChanged,
  postSetReqPremission
})(CreatePost);

