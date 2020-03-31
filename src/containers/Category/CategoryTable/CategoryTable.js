import React, { useState, useEffect } from 'react';
import {
    Paper, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Modal, Button
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import EditCatBody from './../EditCategory/EditCategory';
import { useSelector } from 'react-redux';

const categoryTable = (props) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCatId, setSelectedCatId] = useState('');
    const openModalHandler = (categoryId) => {
        setModalOpen(true);
        setSelectedCatId(categoryId);
    };
    const edited = useSelector(state => state.cats.edited);

    useEffect(() => {
        if (edited) setModalOpen(false);
    }, [edited]);
    const getContent = () => {
        let catItems = [];
        if (props.cats) {
            catItems = props.cats.map(catItem => {
                return (
                    <TableRow key={catItem._id}>
                        <TableCell className="table__cell" align="right"> {catItem.name} </TableCell>
                        <TableCell className="table__cell" align="right">{catItem.slug}</TableCell>
                        <TableCell className="table__cell" align="right">
                            <IconButton className="table__icon" color="primary" aria-label="Edit">
                                <EditIcon
                                    onClick={() => openModalHandler(catItem._id)}
                                />
                            </IconButton>
                            <IconButton onClick={() => props.deleteCategory(catItem._id)
                            } className="table__icon" color="secondary" aria-label="Edit">
                                <DeleteIcon />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                );
            });
        } else {
            catItems = "Loading...";
        }

        return catItems;
    }

    return (
        <Paper >
            <Modal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                aria-labelledby="تغییر دسته"
                aria-describedby="تغییر دسته"
            >
                <EditCatBody cats={props.cats}
                    categoryId={selectedCatId}
                    closeClicked={() => setModalOpen(false)} 
                    />

            </Modal>

            <Table className="table" >
                <TableHead className="table__head">
                    <TableRow className="table_row">
                        <TableCell align="right" className="table__cell">عنوان دسته </TableCell>
                        <TableCell align="right" className="table__cell">اسلاگ</TableCell>
                        <TableCell align="right" className="table__cell">تنظیمات</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {getContent()}
                </TableBody>
            </Table>
        </Paper>
    );
}

export default categoryTable;


