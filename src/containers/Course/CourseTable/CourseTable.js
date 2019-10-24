

import React from 'react';

import {
    Paper, Table, TableHead, TableRow, TableCell, TableBody, IconButton
} from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';

import EditIcon from '@material-ui/icons/Edit';


const courseTable = (props) => {

    let courseItems = [];
  
    if (props.courses) {

        courseItems = props.courses.map(courseItem => {

            let type = "free";

            if (courseItem.type === "vip") {

                type = " دسترسی با عضویت ویژه";

            }

            else if (courseItem.type === "free") {

                type = "رایگان";

            }
            else {

                type = "نقدی";
            }

            return (

                <TableRow key={courseItem._id} className="table__row">

                    <TableCell className="table__cell" align="right"> {courseItem.title} </TableCell>

                    <TableCell className="table__cell" align="right">{courseItem.commentCount}</TableCell>

                    <TableCell className="table__cell" align="right">{courseItem.viewCount}</TableCell>

                    <TableCell className="table__cell" align="right">{courseItem.viewCount}</TableCell>

                    <TableCell className="table__cell" align="right">

                        {
                            type
                        }
                    </TableCell>


                    <TableCell className="table__cell" align="right">

                        <IconButton className="table__icon" color="primary" aria-label="Edit">

                            <EditIcon />

                        </IconButton>

                        <IconButton onClick={() => props.deleteCourse(courseItem._id)} className="table__icon" color="secondary" aria-label="Edit">

                            <DeleteIcon />

                        </IconButton>

                    </TableCell>

                </TableRow>
            );
        });

    } else {

        courseItems = "Loading...";

    }
    return (

        <Paper >

            <Table className="table" >

                <TableHead className="table__head">

                    <TableRow className="table_row">

                        <TableCell align="right" className="table__cell">عنوان دوره</TableCell>

                        <TableCell align="right" className="table__cell">تعداد نظرات</TableCell>
                        <TableCell align="right" className="table__cell">تعداد بازدید</TableCell>

                        <TableCell align="right" className="table__cell">تعداد شرکت کنندگان</TableCell>

                        <TableCell align="right" className="table__cell">  وضعیت دوره</TableCell>

                        <TableCell align="right" className="table__cell">   	تنظیمات</TableCell>



                    </TableRow>

                </TableHead>

                <TableBody className="table__body">

                    {courseItems}

                </TableBody>

            </Table>

        </Paper>

    );

}

export default courseTable;