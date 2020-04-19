


import {
    Paper, Table, TableHead, TableRow, TableCell, TableBody, IconButton
} from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';

import EditIcon from '@material-ui/icons/Edit';

import React from 'react';




const courseTable = (props) => {


   

    const getSpinner = () => ("Loading ...");

    const getTypeOfCourse = (type) => {

        console.log('what is type', type);

        switch (type) {
            case "free":
                return "رایگان";

            case "cash":
                return "نقدی";

            case "vip":
                return " دسترسی با عضویت ویژه"

            default:
                return "رایگان";
        }
    }

    const getContent = () => (
        props.courses.map(courseItem => {

            return (

                <TableRow key={courseItem._id} className="table__row">

                    <TableCell className="table__cell" align="right"> {courseItem.title} </TableCell>

                    <TableCell className="table__cell" align="right">{courseItem.commentCount}</TableCell>

                    <TableCell className="table__cell" align="right">{courseItem.viewCount}</TableCell>

                    <TableCell className="table__cell" align="right">{courseItem.viewCount}</TableCell>

                    <TableCell className="table__cell" align="right">

                        {
                            getTypeOfCourse(courseItem.type)
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
        })
    )

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

                    { props.courses ?  getContent() : getSpinner() }

                </TableBody>

            </Table>

        </Paper>

    );

}

export default courseTable;