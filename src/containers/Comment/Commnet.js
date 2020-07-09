import React, {   useEffect } from 'react';
import DisApprovedComments from './disApprovedComments/disApprovedComments';
import ApprovedComments from './approvedComments/ApprovedComments';
import { Tabs, Tab } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { fetchComment , approveComment } from '../../store/action/';
import { useValue } from './../../hooks';




function Commnet(props) {
    const [value, setValue] = useValue();
    const dispatch = useDispatch()  ;
    const  comments = useSelector(state => state.comments.comments)
    useEffect(() => {
        console.log(`Hello In  Mount`);
        dispatch(fetchComment(value === 0 ? true : false))
    }, [value]);

    function addToApprovedHandler(cmId) {
        console.log('amir in addTo Approved Handler', cmId);
        dispatch(approveComment(cmId))
        setValue(0);
    }

    function getContent() {

        if (value === 0) {
            return <ApprovedComments
                comments={comments} />
        }
        else {
            return <DisApprovedComments
                addToApproved={addToApprovedHandler}
                comments={comments} />
        }
    }



    return (
        <div className="menu">
            <h1 className="heading__scondary">
                Comments
                </h1>
            <Tabs
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="ApprovedComments" className="menu__tab-label" />
                <Tab label="DisApprovedComments" className="menu__tab-label" />
            </Tabs>
            <div className="menu__cmpArea">
                {getContent()}
            </div>
        </div>
    );

}



export default Commnet;


