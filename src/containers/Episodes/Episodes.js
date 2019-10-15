import React, { Component } from 'react'
import { Tabs, Tab } from '@material-ui/core';
import EpisodeTable from './EpisodeTable/EpisodeTable';
import CreateEpisode from './CreateEpisodes/CreateEpisode';
import { connect } from 'react-redux';
import { fetchEpisode ,fetchCourse } from '../../store/action/';



class Episode extends Component {

    state = {
        value: 0
    }

    componentDidMount = () => {
        this.props.loadCourses();
        this.props.loadEpsiodes() ; 
    }

    handleChange = (event, value) => {
        this.setState({
            value
        });
    }



    render() {
        
        let content = null;
        if (this.state.value === 0) {
            content = <EpisodeTable  episodes={this.props.episodes}/>
        }
        else if (this.state.value === 1) {
            content = <CreateEpisode courses={this.props.courses} />
        }

        return (
            <div className="menu">
                <h1 className="heading__scondary">
                ویدیو ها
            </h1>

                
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab label="مشاهده ی لیست ویدیوها " className="menu__tab-label" />
                        <Tab label="ایجاد ویدیو جدید " className="menu__tab-label" />
                    </Tabs>
                    <div className="menu__cmpArea">
                        {content}
                    </div>
                


            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        loadEpsiodes: () => dispatch((fetchEpisode()))  , 
        loadCourses : () => dispatch(fetchCourse())
    }
}

const mapStateToProps = state => {

    return {
        courses: state.course.courses , 
        cats : state.cats.categories ,
        episodes : state.episode.episodes
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Episode);  