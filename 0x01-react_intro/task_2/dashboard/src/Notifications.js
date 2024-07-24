import react from 'react';
import './Notifications.css';


export default function Notifications() {
    return (
        <div className='Notifications'>
            <p>Here is the list of notifications</p>
            <ul>
                <li>New course available</li>
                <li>New resume available</li>
                <li><strong>Urgent requirement</strong> - complete by EOD</li>
            </ul>
        </div>
    )
}