import React, {  useEffect, useReducer } from "react";
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Modal,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import EditCatBody from "./../EditCategory/EditCategory";
import { useSelector } from "react-redux";

function useCategoryTable() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "OPEN_MODAL":
          return {
            ...state,
            modalOpen: true,
          };
        case "SET_SELECTED_ID":
          return {
            ...state,
            selectedCatId: action.id,
          };
        case "CLOSE_MODAL":
          return {
            ...state,
            modalOpen: false,
          };

        default:
          return state;
      }
    },
    {
      modalOpen: false,
      selectedCatId: "",
    }
  );
  function setModalOpen() {
    dispatch({
      type: "OPEN_MODAL",
    });
  }
 function openModalHandler (categoryId) {
    dispatch({
      type: "OPEN_MODAL",
    });
    dispatch({ type: "SET_SELECTED_ID", id: categoryId });
  };

  const edited = useSelector((state) => state.cats.edited);

  useEffect(() => {
    if (edited) dispatch({ type: "CLOSE_MODAL" });
  }, [edited]);

  return { state, edited, setModalOpen, openModalHandler };
}

export default function (props) {
  const { state, edited, openModalHandler, setModalOpen } = useCategoryTable();
  useEffect(() =>{
    console.log(state, edited , openModalHandler , setModalOpen)
  })
  const getContent = () => {
    let catItems = [];

    if (props.cats) {
      catItems = props.cats.categories.map((catItem) => {
        return (
          <TableRow key={catItem._id}>
            <TableCell className="table__cell" align="right">
              {" "}
              {catItem.name}{" "}
            </TableCell>
            <TableCell className="table__cell" align="right">
              {catItem.slug}
            </TableCell>
            <TableCell className="table__cell" align="right">
              <IconButton
                className="table__icon"
                color="primary"
                aria-label="Edit"
              >
                <EditIcon onClick={() => openModalHandler(catItem._id)} />
              </IconButton>
              <IconButton
                onClick={() => props.deleteCategory(catItem._id)}
                className="table__icon"
                color="secondary"
                aria-label="Edit"
              >
                <DeleteIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        );
      });
    } else {
        //add spinner here
      catItems = "Loading...";
    }
    return catItems;
  };
  return (
    <Paper>
      <Modal
        open={state.modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="modify category"
        aria-describedby="modify category"
      >
        <EditCatBody
          cats={props.cats ? props.cats.categories : null}
          categoryId={state.selectedCatId}
          closeClicked={() => setModalOpen(false)}
        />
      </Modal>

      <Table className="table">
        <TableHead className="table__head">
          <TableRow className="table_row">
            <TableCell align="right" className="table__cell">
              Category Title
            </TableCell>
            <TableCell align="right" className="table__cell">
                slug
             </TableCell>
            <TableCell align="right" className="table__cell">
                opreations
              </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{getContent()}</TableBody>
      </Table>
    </Paper>
  );
}
