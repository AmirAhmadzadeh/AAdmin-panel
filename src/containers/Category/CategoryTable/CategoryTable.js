

import React from 'react';
import {
    Paper, Table, TableHead, TableRow, TableCell, TableBody, IconButton
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


const categoryTable = (props) => {
    let catItems = [];

    if (props.cats) {
        catItems = props.cats.map(catItem => {
            return (
                <TableRow key={catItem._id}>
                    <TableCell className="table__cell" align="right"> {catItem.name} </TableCell>
                    <TableCell className="table__cell" align="right">{catItem.slug}</TableCell>
                    <TableCell className="table__cell" align="right">
                        <IconButton className="table__icon" color="primary" aria-label="Edit">
                            <EditIcon />
                        </IconButton>
                        <IconButton className="table__icon" color="secondary" aria-label="Edit">
                            <DeleteIcon />
                        </IconButton>
                    </TableCell>
                </TableRow>
            );
        });
    } else {
        catItems = "Loading..." ;
    }

    return (
        <Paper >
            <Table className="table" >
                <TableHead className="table__head">
                    <TableRow className="table_row">
                        <TableCell align="right" className="table__cell">عنوان دسته </TableCell>
                        <TableCell align="right" className="table__cell">اسلاگ</TableCell>
                        <TableCell align="right" className="table__cell">تنظیمات</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                       {catItems} 
                </TableBody>
            </Table>
        </Paper>
    );
}

export default categoryTable;


