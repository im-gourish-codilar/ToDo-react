import { HIDE_NOTIFICATION, SHOW_NOTIFICATION } from "./Notification.action";

export const getInitialState = () => ({
  notifications: {},
});

export const NotificationReducer = (state = getInitialState(), action) => {
  const notifications = { ...state.notifications };

  switch (action.type) {
    case SHOW_NOTIFICATION:
      const { msgType, msgText, msgDebug } = action;
      notifications[Date.now()] = { msgType, msgText, msgDebug };

      return {
        ...state,
        notifications,
      };

    case HIDE_NOTIFICATION:
      const { [action.id]: id, ...shownNotifications } = notifications;

      return {
        ...state,
        notifications: shownNotifications,
      };

    default:
      return state;
  }
};

export default NotificationReducer;
