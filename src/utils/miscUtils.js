import Toast from 'react-native-root-toast';

export const showToast = (message, duration = Toast.durations.LONG, position = Toast.positions.BOTTOM) => {
    Toast.show(message, {
        duration,
        position,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
    })
}