import React, { Component } from 'react';
import DisApprovedComments from './disApprovedComments/disApprovedComments';
import ApprovedComments from './approvedComments/ApprovedComments';
import { Tabs, Tab } from '@material-ui/core';
import { connect } from 'react-redux';
import { fetchComment } from '../../store/action/';



class Commnet extends Component {



    state = {
        value: 0  
        }



    handleChange = (event, value) => {
        this.setState(prevState => {
            return {
                value
            }
        });
    }



    shouldComponentUpdate = (nextProps, nextstate) => {
        return (nextstate.value !== this.state.value)  ;
    }


   
    componentDidMount = () => {
        console.log(`Hello In  Mount` ) ; 
        this.props.loadcomments(this.state.value === 0 ? false : true );
    }


    render() {
        let content = null;

        if (this.state.value === 0) {
            content = <ApprovedComments comments={this.props.comments} />
        }
        else{
            content = <DisApprovedComments comments={this.props.comments} />
        }

        return (
            <div className="menu">
                <h1 className="heading__scondary">
                کامنت ها
                </h1>
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab label="کامنت های تایید شده" className="menu__tab-label" />
                        <Tab label="کامنت های تایید نشده" className="menu__tab-label" />
                    </Tabs>
                    <div className="menu__cmpArea">
                        {content}
                    </div>
            </div>);
    }
}


const mapDispatchToProps = dispatch => {

    return {
        loadcomments: (approveSituation) => dispatch(fetchComment(approveSituation))
    }
}

const mapStateToProps = state => {

    return {
        comments: state.comments.comments
    }

}



export default connect(mapStateToProps, mapDispatchToProps)(Commnet);


