import React from 'react';
import {
    Paper, Table, TableHead, TableRow, TableCell, TableBody, IconButton
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

<<<<<<< HEAD
import React from 'react';
=======
>>>>>>> e6ef226b4af024c7135f9a25fd4ba073ab703de6




const courseTable = (props) => {
    const getSpinner = () => ("Loading ...");
    const getTypeOfCourse = (type) => {
        switch (type) {
            case "free":
                return "free";
            case "cash":
                return "Cash Access";
            case "vip":
                return "Access For Vip Users"
            default:
                return "Free";
        }
    }
    const getContent = () => (
        props.courses.map(courseItem => {
            return (
                <TableRow key={courseItem._id} className="table__row">
                    <TableCell className="table__cell"
                        align="right"> {courseItem.title} </TableCell>
                    <TableCell className="table__cell"
                        align="right">{courseItem.commentCount}</TableCell>
                    <TableCell className="table__cell"
                        align="right">{courseItem.viewCount}</TableCell>
                    <TableCell className="table__cell"
                        align="right">{courseItem.viewCount}</TableCell>
                    <TableCell className="table__cell" align="right">
                        {
                            getTypeOfCourse(courseItem.type)
                        }
                    </TableCell>
                    <TableCell className="table__cell" align="right">
                        <IconButton className="table__icon" color="primary" aria-label="Edit">
                            <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => props.deleteCourse(courseItem._id)}
                            className="table__icon"
                            color="secondary"
                            aria-label="Edit">
                            <DeleteIcon />
                        </IconButton>
                    </TableCell>
                </TableRow>
            );
        })
    )
    return (
        <Paper >
            <Table className="table" >
                <TableHead className="table__head">
                    <TableRow className="table_row">
                        <TableCell align="right" className="table__cell"> Title</TableCell>
                        <TableCell align="right" className="table__cell">Comments</TableCell>
                        <TableCell align="right" className="table__cell"></TableCell>
                        <TableCell align="right" className="table__cell">Students</TableCell>
                        <TableCell align="right" className="table__cell"> Status</TableCell>
                        <TableCell align="right" className="table__cell"> Opreation</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody className="table__body">
                    {props.courses ? getContent() : getSpinner()}
                </TableBody>
            </Table>
        </Paper>
    );
}

export default courseTable;