import React, { Component } from 'react';
import {
  Paper, Table, TableHead,
  TableRow, TableCell, TableBody, IconButton
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { connect } from 'react-redux';
import { deletePost, fetchPosts } from '../../store/action/';

class PostTable extends Component {
  constructor(props) {
    super(props);
    this.getContent = this.getContent.bind(this);
  }
  componentDidMount() {
    this.props.fetchPosts();
  }
  getContent() {
    return (
      this.props.posts.map(postItem => {
        return (
          <TableRow key={postItem._id} className="table__row">
            <TableCell className="table__cell" align="right"> {postItem.title} </TableCell>
            <TableCell className="table__cell" align="right">{postItem.viewCount}</TableCell>

            <TableCell className="table__cell" align="right">
              <IconButton className="table__icon" color="primary" aria-label="Edit">
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => this.props.deletePost(postItem._id)} className="table__icon" color="secondary" aria-label="Edit">
                <DeleteIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        );
      })
    )
  };
  getSpinner() {
    return 'Loading...'
  };
  render() {
    return (
      <Paper >
        <Table className="table" >
          <TableHead className="table__head">
            <TableRow className="table_row">
              <TableCell align="right" className="table__cell">Title</TableCell>
              <TableCell align="right" className="table__cell">Views</TableCell>
              <TableCell align="right" className="table__cell"> Opreations </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="table__body">
            {this.props.posts ? this.getContent() : this.getSpinner()}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}



const mapStateToProps = state => {
  return {
    posts: state.post.posts
  }
};



export default connect(mapStateToProps, {
  deletePost,
  fetchPosts
})(PostTable);  
