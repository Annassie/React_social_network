import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dimych" id="1"/>
                <DialogItem name="Sasha" id="2"/>
                <DialogItem name="Andry" id="3"/>
                <DialogItem name="Sveta" id="4"/>
                <DialogItem name="Victoria" id="5"/>
                <DialogItem name="Anna" id="6"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi!!!"/>
                <Message message="How you?"/>
                <Message message="How was your tennis today!!!"/>
                <Message message="Is React easy?"/>
                <Message message="Do you like React!!!"/>
                <Message message="Yes, I do!!!"/>
            </div>
        </div>
    )
}

export default Dialogs;