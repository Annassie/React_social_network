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

    let dialogsData = [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Sasha' },
        { id: 3, name: 'Anna' },
        { id: 4, name: 'Victor' },
        { id: 5, name: 'Sveta' },
    ]

    let messagesData = [
        { id: 1, message: 'Heloo, how are you?' },
        { id: 2, message: 'I like to play tennis!!' },
        { id: 3, message: '' },
        { id: 4, message: '' },
        { id: 5, message: '' },
    ]

    let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = messagesData.map(message => <Message message={message.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;