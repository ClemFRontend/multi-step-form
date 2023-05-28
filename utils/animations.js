import { Easing } from 'react-native-reanimated';

export const horizontalTransition = {
    gestureDirection: 'horizontal',
    transitionSpec: {
        open: {
            animation: 'timing',
            config: {
                duration: 300,
                easing: Easing.inOut(Easing.ease),
            },
        },
        close: {
            animation: 'timing',
            config: {
                duration: 300,
                easing: Easing.inOut(Easing.ease),
            },
        },
    },
    cardStyleInterpolator: ({ current, next, layouts }) => {
        return {
            cardStyle: {
                transform: [
                    {
                        translateX: current.progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [layouts.screen.width, 0],
                        }),
                    },
                    {
                        translateX: next
                            ? next.progress.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, -layouts.screen.width],
                            })
                            : 0,
                    },
                ],
            },
        };
    },
};


// Without react native reanimated -> for web
export const horizontalTransitionWeb = {
    gestureDirection: 'horizontal',
    transitionSpec: {
        open: {
            animation: 'timing',
            config: {
                duration: 300,
            },
        },
        close: {
            animation: 'timing',
            config: {
                duration: 300,
            },
        },
    },
    cardStyleInterpolator: ({ current, next, layouts }) => {
        return {
            cardStyle: {
                transform: [
                    {
                        translateX: current.progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [layouts.screen.width, 0],
                            extrapolate: 'clamp',
                        }),
                    },
                    {
                        translateX: next
                            ? next.progress.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, -layouts.screen.width],
                                extrapolate: 'clamp',
                            })
                            : 0,
                    },
                ],
            },
            overlayStyle: {
                opacity: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 0.5],
                    extrapolate: 'clamp',
                }),
            },
        };
    },
};


