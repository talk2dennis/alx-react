import * as notificationData from '../../notifications.json';
import { normalize, schema } from "normalizr";

// Define the user, message, and notification schemas
const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
    author: user,
    context: message
});

// Normalize the notification data
const normalizedData = normalize(notificationData.default, [notification]);

// Function to get all notifications for a specific user by user ID
export default function getAllNotificationsByUser(userId) {
    const notifications = normalizedData.entities.notifications;
    return Object.values(notifications)
        .filter(notification => notification.author === userId)
        .map(notification => normalizedData.entities.messages[notification.context]);
}

// Export the normalized data
export { normalizedData };
