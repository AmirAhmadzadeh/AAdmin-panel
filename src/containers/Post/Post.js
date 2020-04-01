import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Tab, Tabs } from '@material-ui/core';
import {
  fetchPosts, fetchCategory,
  createPost, createPostInit,
} from '../../store/action/';
import CreatePost from './CreatePost';
import PostTable from './PostTable';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    }
    this.resetCreatePageHandler = this.resetCreatePageHandler.bind(this);
    this.createPostHandler = this.createPostHandler.bind(this);
    this.removePostHandler = this.removePostHandler.bind(this);
    this.getContent = this.getContent.bind(this);
  }

  resetCreatePageHandler() {
    this.props.onResetCreatePost();
  }
  createPostHandler(data) {
    this.props.onCreatePost(data);
    this.setState({
      value: 0
    });
  }

  removePostHandler() {
    this.props.onDeletePost();
  }

  getContent() {
    if (this.state.value === 0) {
      return <PostTable />
    }
    return <CreatePost
      resetCreatePage={this.resetCreatePageHandler}
      makeNewCourse={this.createPostHandler}
      created={this.props.created} />
  }

  render() {
    return (
      <div className="menu">
        <h1 className="heading__scondary heading">
          پست ها
        </h1>
        <Tabs
          value={this.state.value}
          onChange={(e, value) => this.setState({ value })}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="مشاهده ی لیست دوره ها" className="menu__tab-label" />
          <Tab label="ایجاد دوره جدید " className="menu__tab-label" />
        </Tabs>
        <div className="menu__cmpArea">
          {this.getContent()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.post.posts,
    error: state.post.error,
    created: state.post.created,
  }
};

const mapDispatchToProps = dispatch => {
  return {

    onLoadCats: () => dispatch(fetchCategory()),
    onCreatePost: (data) => dispatch(createPost(data)),
    onResetCreatePost: () => dispatch(createPostInit())
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Post); 