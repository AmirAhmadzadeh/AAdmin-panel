import React from 'react';
import {
    Paper, Table, TableHead, TableRow, TableCell, TableBody, IconButton
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


const epsiodeTable = (props) => {

    let epsiodeItems = [];
    if (props.episodes) {
        epsiodeItems = props.episodes.map(episodeItem => {

            let type = "free";

            if (episodeItem.type === "vip") {
                type = "Vip Access"
            }
            else if (episodeItem.type === "free") {
                type = "Free Terials";

            }
            else {
                type = "Cash Access";
            }
            return (
                <TableRow key={episodeItem._id}>
                    <TableCell className="table__cell" align="right"> {episodeItem.title} </TableCell>
                    <TableCell className="table__cell" align="right">{episodeItem.downloadCounter}</TableCell>
                    <TableCell className="table__cell" align="right">{episodeItem.commentCount}</TableCell>
                    <TableCell className="table__cell" align="right">{episodeItem.viewCount}</TableCell>

                    {/* vip cash free */}

                    <TableCell className="table__cell" align="right">
                        {type}
                    </TableCell>
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
        epsiodeItems = "Loading...";
    }
    return (
        <Paper >
            <Table className="table" >
                <TableHead className="table__head">
                    <TableRow className="table_row">
                        <TableCell align="right" className="table__cell">Title </TableCell>
                        <TableCell align="right" className="table__cell">   Number of Downloads</TableCell>
                        <TableCell align="right" className="table__cell">  Comments</TableCell>
                        <TableCell align="right" className="table__cell"> Number of Viwers</TableCell>
                        <TableCell align="right" className="table__cell">  Video Type</TableCell>
                        <TableCell align="right" className="table__cell">   Opreations	</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {epsiodeItems}
                </TableBody>
            </Table>
        </Paper>
    );
}

export default epsiodeTable;