import React from 'react';
import {
  Button,
  FormGroup,
  TextField,
  FormControl,
  Select
} from '@material-ui/core';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import {
  setRelaventCourse,
  setKindEpisode,
  titleChangedEpisode,
  changeTimeVideo,
  setNumberVideo,
  setVideoLink,
  makeNewEpisode,
  resetEpisodeCreatePage
} from './../../../store/action/index';
import EpisodeEditor from '../../../components/Editor/EpisodeEditor';
export default function CreateEpisode(props) {

  const state = useSelector(state => state.createEpisode);
  const dispatch = useDispatch();

  function handleSubmit() {
    const data = {
      title: state.title,
      time: state.time,
      number: state.number,
      course: state.relavantCourse,
      videoUrl: state.EpisodeVideoLink,
      body: state.EpisodeText,
      type: state.selectedKindOfEpisode,
    }
    dispatch(makeNewEpisode(data));
    dispatch(resetEpisodeCreatePage());
    props.gotoTable();
  }

  return (
    <React.Fragment>
      <FormControl className="form__controller">
        <TextField
          label="عنوان ویدیو"
          className="form__controller--inp"
          onChange={e => { dispatch(titleChangedEpisode(e.target.value)) }}
          name="title"
        />
      </FormControl>

      <FormControl className="form__controller">
        <TextField
          label="زمان ویدیو"
          className="form__controller--inp"
          onChange={e => { dispatch(changeTimeVideo(e.target.value)) }}
          inputProps={{
            name: "time"
          }}
        />
      </FormControl>
      <FormControl className="form__controller">
        <TextField
          label="شماره ی ویدیو"
          className="form__controller--inp"
          onChange={(e) => dispatch(setNumberVideo(e.target.value))}
          inputProps={{
            name: "number"
          }}
        />
      </FormControl>
      <FormGroup>
        <FormControl className="form__controller">
          <TextField
            label=" لینک ویدو"
            className="form__controller--inp"
            onChange={(e) => dispatch(setVideoLink(e.target.value))}
            inputProps={{
              name: "link"
            }}
          />
        </FormControl>
        <FormControl className="form__controller">
          <label className="form__controller--label">
            نوع
            ویدیو
            </label>
          <Select
            className="form__controller--select"
            native
            // value={selectedMenuItemLevel ? state.selectedMenuItemLevel.name : null}
            onChange={(e) => dispatch(setKindEpisode(e.target.value))}

            inputProps={{
              name: 'selectedKindOfEpisode'
              // id: 'age-native-simple',
            }}
          >
            <option value="free" className="form__controller--option">  رایگان </option>
            <option value="vip" className="form__controller--option">  دسترسی با عضویت ویژه </option>
            <option value="cash" className="form__controller--option">نقدی </option>

          </Select>
        </FormControl>

        <FormControl className="form__controller">
          <label className="form__controller--label">
            دوره مربوطه
            </label>
          <Select

            className="form__controller--select"
            native
            value={state.relavantCourse}
            onChange={(e) => dispatch(setRelaventCourse(e.target.value))}
            inputProps={{
              name: 'relavantCourse'
              // id: 'age-native-simple',
            }}

          >
            {
              props.courses ? props.courses.map(courseItem => (
                <option value={courseItem._id}
                  key={courseItem._id}
                  className="form__controller--option">  {courseItem.title}
                </option>
              )) : null
            }
          </Select>
        </FormControl>
      </FormGroup>
      <FormGroup>
        <FormControl>
          <label className="form__controller--label"> توضیح ویدیو </label>
          <EpisodeEditor />
        </FormControl>
      </FormGroup>

      <Button
        type="submit"
        color="primary"
        variant="contained"
        style={{
          fontSize: "1.5rem"
          , margin: "3.5rem 0"
        }}
        onClick={handleSubmit}> ساختن
        </Button>
    </React.Fragment>
  )
}



