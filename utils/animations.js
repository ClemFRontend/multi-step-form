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
