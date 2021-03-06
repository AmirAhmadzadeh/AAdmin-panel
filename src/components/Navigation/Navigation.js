import { NavLink } from 'react-router-dom';
import BrandIcon from './../../components/Icons/BrandIcon';
import React from 'react'
import Icon from '../Icons/Icons';

const navigation = (props) => {
    return (
        <nav className={`navigation ${props.classes}`}>
            <div className="navigation__brand">
                <BrandIcon className="navigation__brand--icon" />
                <h1 className="navigation__brand--name">
                    FunnyCoding
                    </h1>
            </div>
            <ul className="navigation__list">
                <li className="navigation__item">
                    <NavLink
                        to="/"
                        exact
                        className="navigation__link"
                        onClick={props.navItemClicked}
                        activeClassName="navigation__active"
                    >
                        <Icon IconName="dashbord" classes="navigation__link--icon" />
                        dashbord
                </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink
                        to="/posts"
                        className="navigation__link"
                        activeClassName="navigation__active"
                        onClick={props.navItemClicked}
                    >
                        <Icon IconName="posts" classes="navigation__link--icon" />
                        posts
                </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink
                        to="/courses"
                        className="navigation__link"
                        activeClassName="navigation__active"
                        onClick={props.navItemClicked}
                    >
                        <Icon IconName="courses" classes="navigation__link--icon" />

                        courses
                </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink
                        to="/episodes"
                        className="navigation__link"
                        activeClassName="navigation__active"
                        onClick={props.navItemClicked}

                    >
                        <Icon IconName="episodes" classes="navigation__link--icon" />

                        episodes                </NavLink>

                </li>
                <li className="navigation__item">
                    <NavLink
                        className="navigation__link"
                        to="/category"
                        activeClassName="navigation__active"
                        onClick={props.navItemClicked}
                    >
                        <Icon IconName="category" classes="navigation__link--icon" />
                        categories
                        </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink
                        className="navigation__link"
                        to="/menu"
                        activeClassName="navigation__active"
                        onClick={props.navItemClicked}
                    >
                        <Icon IconName="menus" classes="navigation__link--icon" />
                        menues
                        </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink
                        className="navigation__link"
                        to="/comments"
                        activeClassName="navigation__active"
                        onClick={props.navItemClicked}
                    >
                        <Icon IconName="comments" classes="navigation__link--icon" />
                        comments
                        </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink
                        className="navigation__link"
                        to="/users"
                        activeClassName="navigation__active"
                        onClick={props.navItemClicked}

                    >
                        <Icon IconName="users" classes="navigation__link--icon" />
                        users
                        </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink
                        className="navigation__link"
                        to="/trello"
                        activeClassName="navigation__active"
                        onClick={props.navItemClicked}>
                        <Icon IconName="users" classes="navigation__link--icon" />
                        Trello
                        </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default navigation;