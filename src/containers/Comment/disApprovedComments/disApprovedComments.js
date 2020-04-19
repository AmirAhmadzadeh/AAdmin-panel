


import React from 'react';
import {
    Paper, Table, TableHead, TableRow, TableCell, TableBody, IconButton
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';



const DisapprovedCommnts = (props) => {
    let comments = [];

    if (props.comments) {
        comments = props.comments.map(commentItem => {
            return (
                <TableRow key={commentItem._id}>
                    <TableCell className="table__cell" align="right"> {commentItem.user.email} </TableCell>
                    {/* <TableCell className="table__cell" align="right">{commentItem.course.slug}</TableCell> */}
                    <TableCell className="table__cell" align="right">{commentItem.comment}</TableCell>

                    <TableCell className="table__cell" align="right">
                        <IconButton
                            className="table__icon"
                            color="primary"
                            aria-label="Edit"
                            onClick={() => props.addToApproved(commentItem._id)}>
                            <AddIcon />
                        </IconButton>
                        <IconButton className="table__icon" color="secondary" aria-label="Edit">
                            <DeleteIcon />
                        </IconButton>
                    </TableCell>
                </TableRow>
            );
        });

    } else {
        comments = "Loading...";
    }
    return (
        <Paper >
            <Table className="table" >
                <TableHead className="table__head">
                    <TableRow className="table_row">
                        <TableCell align="right" className="table__cell"> نام ارسال کننده	</TableCell>
                        <TableCell align="right" className="table__cell">مطلب</TableCell>
                        <TableCell align="right" className="table__cell">متن نظر	</TableCell>
                        <TableCell align="right" className="table__cell"> تنظیمات	</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {comments}
                </TableBody>
            </Table>
        </Paper>
    );
}

export default DisapprovedCommnts;

