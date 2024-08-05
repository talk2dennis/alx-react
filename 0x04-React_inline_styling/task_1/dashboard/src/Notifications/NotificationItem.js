import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";


const styles = StyleSheet.create({
  notifications: {
    padding: '1em',
    border: '2px dashed red',
    position: 'absolute',
    top: '1.8em',
    right: '0',
  },
  notificationHeader: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuItem: {
    textAlign: 'right',
  },
  defaultNotification: {
    color: 'blue',
  },
  urgentNotification: {
    color: 'red',
  },
});


class NotificationItem extends React.PureComponent {
  render() {
    const { type, value, html, markAsRead, id } = this.props;
    return (
      <>
        {type && value ? (
          <li onClick={() => markAsRead(id)} data-notification-type={type}>
            {value}
          </li>
        ) : null}
        {html ? <li onClick={() => markAsRead(id)} data-urgent dangerouslySetInnerHTML={{ __html: html }}></li> : null}
      </>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  type: "default",
  markAsRead: () => {
    console.log("empty func");
  },
  id: 0,
};

export default NotificationItem;
