import React from 'react';
import { SvgIcon } from '@material-ui/core';


const icons = (props) => {

    let Icon = null;
    switch (props.IconName) {
        case "dashbord":

            Icon = (
                <SvgIcon className={props.classes}>
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                </SvgIcon>
            )
            break;
        case "posts":

            Icon = (
                <SvgIcon className={props.classes}>
                    <path fill="none" d="M0 0h24v24H0V0z" /> <circle cx="19.5" cy="19.5" r="1.5" /> <path d="M17 5.92L9 2v18H7v-1.73c-1.79.35-3 .99-3 1.73 0 1.1 2.69 2 6 2s6-.9 6-2c0-.99-2.16-1.81-5-1.97V8.98l6-3.06z" />
                </SvgIcon>
            )
            break;

        case "courses":

            Icon = (
                <SvgIcon className={props.classes}>
                    <path fill="none" d="M0 0h24v24H0V0z" /><circle cx="19.5" cy="19.5" r="1.5" /><path d="M17 5.92L9 2v18H7v-1.73c-1.79.35-3 .99-3 1.73 0 1.1 2.69 2 6 2s6-.9 6-2c0-.99-2.16-1.81-5-1.97V8.98l6-3.06z" />

                </SvgIcon>
            )
            break;

        case "episodes":

            Icon = (
                <SvgIcon className={props.classes}>
                    <path fill="none" d="M0 0h24v24H0V0z" /><circle cx="19.5" cy="19.5" r="1.5" /><path d="M17 5.92L9 2v18H7v-1.73c-1.79.35-3 .99-3 1.73 0 1.1 2.69 2 6 2s6-.9 6-2c0-.99-2.16-1.81-5-1.97V8.98l6-3.06z" />
                </SvgIcon>
            )
            break;

        case "category":

            Icon = (
                <SvgIcon className={props.classes}>
                    <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z" /><path d="M0 0h24v24H0z" fill="none" />

                </SvgIcon>
            )
            break;

        case "menus":

            Icon = (
                <SvgIcon className={props.classes}>
                    <path d="M0 0h24v24H0z" fill="none" /> <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                </SvgIcon>
            )
            break;


        case "comments":

            Icon = (
                <SvgIcon className={props.classes}>
                    <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z" /><path d="M0 0h24v24H0z" fill="none" />

                </SvgIcon>
            )
            break;

        case "users":

            Icon = (
                <SvgIcon className={props.classes} >
                    <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z" /><path d="M0 0h24v24H0z" fill="none" />

                </SvgIcon>
            )
            break;

        // headerIcons : 

        case 'headerHumanIcon':
            //focusable="false" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation" 
            Icon = (
                <SvgIcon  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path><path fill="none" d="M0 0h24v24H0z"></path>
                </SvgIcon>

            )
            break;


        case 'headerNotification':
            Icon = (
                <SvgIcon className={props.classes} focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
                    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z">
                    </path>
                </SvgIcon>
            );
            break;


        case 'headerSearch':
            Icon = (
                <SvgIcon className={props.classes} focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path><path fill="none" d="M0 0h24v24H0z"></path>
                </SvgIcon >
            );
            break;




        default:
            break;
    }


    return (Icon);
}

export default icons;