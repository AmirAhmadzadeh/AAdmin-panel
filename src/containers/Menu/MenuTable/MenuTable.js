import React from 'react';
import {
    Paper, Table, TableHead, TableRow, TableCell, TableBody, IconButton
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


const menuTable = (props) => {
    let menuItems = [];
    if (props.menus) {
        menuItems = props.menus.map(menuItem => {
            return (
                <TableRow key={menuItem._id}>
                    <TableCell className="table__cell" align="right"> {menuItem.name} </TableCell>
                    <TableCell className="table__cell" align="right">{menuItem.link}</TableCell>
                    <TableCell className="table__cell" align="right">
                        <IconButton className="table__icon" color="primary" aria-label="Edit">
                            <EditIcon
                                onClick={() => console.log('amir si here')}
                            />
                        </IconButton>
                        <IconButton onClick={() => props.deleteMenu(menuItem._id)} className="table__icon" color="secondary" aria-label="Edit">
                            <DeleteIcon />
                        </IconButton>
                    </TableCell>
                </TableRow>
            );
        });
    } else {
        menuItems = "Loading...";
    }
    return (
        <Paper >
            <Table className="table" >
                <TableHead className="table__head">
                    <TableRow className="table_row">
                        <TableCell align="right" className="table__cell"> menu name</TableCell>
                        <TableCell align="right" className="table__cell">link</TableCell>
                        <TableCell align="right" className="table__cell">opreations</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {menuItems}
                </TableBody>
            </Table>
        </Paper>
    );
}

export default menuTable;