import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../Utils/Utils';
import NotificationItem from './NotificationItem';
import closeIcon from '../assets/close-icon.png';


export default function Notifications() {
    return (
        <div className='Notifications'>
            <p>Here is the list of notifications</p>
            <button
                className='btn-notification'
                aria-label="Close"
                onClick={() => alert('clicked')}>
                <img src={closeIcon} alt='Close' width="15px"/>
            </button>
            <ul>
            <NotificationItem data-priority="default">New course available</NotificationItem>
                    <NotificationItem data-priority="urgent">New resume available</NotificationItem>
                    <NotificationItem data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></NotificationItem>
            </ul>
        </div>
    )
}