import React, { useEffect } from 'react'
import { Tabs, Tab } from '@material-ui/core';
import EpisodeTable from './EpisodeTable/EpisodeTable';
import CreateEpisode from './CreateEpisodes/CreateEpisode';
import { connect } from 'react-redux';
import { fetchEpisode, fetchCourse } from '../../store/action/';
import { useValue } from './../../hooks';


function Episode(props) {

    const [value, setValue] = useValue();

    useEffect(() => {
        props.loadCourses();
        props.loadEpsiodes();
    }, [value])

    function getContent() {

        if (value === 0) {
            return <EpisodeTable episodes={props.episodes} />
        }
        return <CreateEpisode
            courses={props.courses}
            gotoTable={() => setValue(0)} />
    }

    return (
        <div className="menu">
            <h1 className="heading__scondary">
                Episodes !!!
        </h1>
            <Tabs
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="All Episodes" className="menu__tab-label" />
                <Tab label="Make New Episode" className="menu__tab-label" />
            </Tabs>
            <div className="menu__cmpArea">
                {getContent()}
            </div>
        </div>
    )

}

const mapDispatchToProps = dispatch => {
    return {
        loadEpsiodes: () => dispatch((fetchEpisode())),
        loadCourses: () => dispatch(fetchCourse())
    }
}

const mapStateToProps = state => {

    return {
        courses: state.course.courses,
        cats: state.cats.categories,
        episodes: state.episode.episodes
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Episode);  