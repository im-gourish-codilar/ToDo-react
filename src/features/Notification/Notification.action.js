export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';

export const showNotification = (msgType, msgText, msgDebug) => ({
    type: SHOW_NOTIFICATION,
    msgType,
    msgText,
    msgDebug
});
export const hideNotification = (id) => ({
    type: HIDE_NOTIFICATION,
    id
});
