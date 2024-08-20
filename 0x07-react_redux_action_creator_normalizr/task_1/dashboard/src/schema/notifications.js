import * as notification from '../../notifications.json';


export default getAllNotificationsByUser = (userId) => {
    const notifications = notification.default;
    const userNotifications = Object.values(notifications).filter((notification) => notification.author.id === userId);
    return userNotifications;
};