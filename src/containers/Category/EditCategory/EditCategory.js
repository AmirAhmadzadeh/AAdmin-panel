import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { useInputState, useValue } from './../../../hooks/';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { FormControl, FormGroup, InputLabel, Select, Paper, Button } from '@material-ui/core';
import { editCategory } from '../../../store/action/';
import { useDispatch } from 'react-redux';


//useStyles
const useStyles = makeStyles((theme) => {
  return {
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: '#fff',
      border: '2px solid #000',
      top: '50%',
      left: '50%',
      transform: `translate(-50%,-50%)`
    }
  }
});

export default function (props) {

  const classes = useStyles();
  const [level, setLevel] = useValue(null);
  const [slug, setSlug] = useInputState('');
  const [name, setName] = useInputState('');
  // const [disabledButton, toggle, setDisabledButton] = useBoolean();
  const dispatch = useDispatch();
  const editCategoryHandler = (catId, data) => dispatch(editCategory(catId, data));

  //handle submit
  const handleSubmit = () => {
    editCategoryHandler(props.categoryId, { name, slug, parent: level });
    props.closeClicked();
  }
  //useEffect


  //View
  return (
    <Paper className={classes.paper}>
      <div className="menu__createMenu">
        <ValidatorForm onSubmit={handleSubmit}>
          <FormGroup>
            <FormControl className="form__controller">
              <TextValidator
                value={name}
                label="category name"
                className="form__controller--inp"
                onChange={(e) => setName(e.target.value)}
                name="name"
                validators={['required']}
                errorMessages={['Please Fill this Field!']}
              />
            </FormControl>
            <FormControl className="form__controller">
              <TextValidator
                value={slug}
                label="اسلاگ"
                className="form__controller--inp"
                onChange={(e) => setSlug(e.target.value)}
                name="slug"
                validators={['required']}
                errorMessages={['Please Fill this Field!']}
              />
            </FormControl>
            <FormControl className="form__controller">
              <InputLabel htmlFor="age-native-simple" className="form__controller--label">level</InputLabel>
              <Select
                className="form__controller--select"
                native
                value={level ? level.name : null}
                onChange={(e) => setLevel(e.target.value)}
                name="level">
                <option value='none' className="form__controller--option"> Main Category </option>
                {
                  props.cats ? props.cats.map(catItme => {
                    return <option
                      value={catItme._id}
                      className="form__controller--option">
                      {catItme.name}
                    </option>
                  }) : "Loading..."
                }
              </Select>
            </FormControl>
          </FormGroup>
          <Button
            color="primary"
            variant="contained"
            className="form__controller--button"
            type="submit"
          // disabled={disabledButton}
          >
            Edit
              </Button>
          <Button
            color='secondary'
            variant='outlined'
            className="form__controller--button"
            onClick={props.closeClicked}
          >
            cancel
              </Button>
        </ValidatorForm>
      </div>
    </Paper>
  );
}

