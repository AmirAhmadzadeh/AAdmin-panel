import React, { useEffect } from 'react';
import DisApprovedComments from './disApprovedComments/disApprovedComments';
import ApprovedComments from './approvedComments/ApprovedComments';
import { Tabs, Tab } from '@material-ui/core';
import { connect } from 'react-redux';
import { fetchComment, approveComment } from '../../store/action/';
import { useValue } from './../../hooks';




function Commnet(props) {
    const [value, setValue] = useValue();

    useEffect(() => {

        console.log(`Hello In  Mount`);
        props.loadcomments(value === 0 ? true : false);

    }, [value]);


    function addToApprovedHandler(cmId) {
        // console.log('amir in addTo Approved Handler', cmId);
        props.approveComment(cmId);
        setValue(0);
    }

    function getContent() {

        if (value === 0) {
            return <ApprovedComments
                comments={props.comments} />
        }
        else {
            return <DisApprovedComments
                addToApproved={addToApprovedHandler}
                comments={props.comments} />
        }
    }



    return (
        <div className="menu">
            <h1 className="heading__scondary">
                کامنت ها
                </h1>
            <Tabs
                value={value}
                onChange={(e, value) => setValue(value)}
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
        </div>
    );

}


const mapDispatchToProps = dispatch => {

    return {
        loadcomments: (approveSituation) => dispatch(fetchComment(approveSituation)),
        approveComment: (id) => dispatch(approveComment(id))
    }
}

const mapStateToProps = state => {

    return {
        comments: state.comments.comments
    }

}



export default connect(mapStateToProps, mapDispatchToProps)(Commnet);


