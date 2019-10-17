import React, { Component } from 'react';
import DisApprovedComments from './disApprovedComments/disApprovedComments';
import ApprovedComments from './approvedComments/ApprovedComments';
import { Tabs, Tab } from '@material-ui/core';
import { connect } from 'react-redux';
import { fetchComment } from '../../store/action/';
import useValue from './../../hooks/useValue';




function Commnet(props) {
    const [value, setValue] = useValue();

    useEffect(() => {
        console.log(`Hello In  Mount`);
        props.loadcomments(value === 0 ? false : true);
    })


    function getContent() {

        if (state.value === 0) {
            return <ApprovedComments comments={props.comments} />
        }
        else {
            return <DisApprovedComments comments={props.comments} />
        }
    }
    // shouldComponentUpdate = (nextProps, nextstate) => {
    //     return (value !== value);
    // }


    return (
        <div className="menu">
            <h1 className="heading__scondary">
                کامنت ها
                </h1>
            <Tabs
                value={value}
                onChange={(e,value) => setValue(value)}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="کامنت های تایید شده" className="menu__tab-label" />
                <Tab label="کامنت های تایید نشده" className="menu__tab-label" />
            </Tabs>
            <div className="menu__cmpArea">
                {getContent()}
            </div>
        </div>);


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


