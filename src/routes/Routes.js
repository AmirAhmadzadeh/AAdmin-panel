import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from '../containers/Menu/Menu';
import Comments from '../containers/Comment/Commnet';
import Category from '../containers/Category/Category';
import Course from '../containers/Course/Course';
import Epsiodes from '../containers/Episodes/Episodes';
import Post from '../containers/Post/Post';
const routes = (props) => {
    return (
        <Switch>
            <div style={{
                padding: "2rem",
                height: "100%"
            }}>

                <Route path="/menu" component={Menu} />
                <Route path="/comments" component={Comments} />
                <Route path="/category" component={Category} />
                <Route path="/courses" component={Course} />
                <Route path="/episodes" component={Epsiodes} />
                <Route path="/posts" component={Post} />
            </div>
        </Switch>
    );
}



export default routes;