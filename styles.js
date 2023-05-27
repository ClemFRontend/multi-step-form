import { StyleSheet } from "react-native";

export const colorsPalette = StyleSheet.create({
    bg: {
        color: "#EFF5FF",
    },
    denim: {
        color: "#022959",
    },
    white: {
        color: "#fff",
    },
    skyBlue: {
        color: "#BEE2FD",
    },
    veryLightGrey: {
        color: "#F8F9FF",
    },
    lightGrey: {
        color: "#D6D9E6"
    },
    grey: {
        color: "#9699AA",
    },
    purple: {
        color: "#483EFF",
    },
    red: {
        color: "#EE374A",
    },

    borderColor: {
        color: "#D6D9E6",
    },
})

export const globalStyles = StyleSheet.create({
    stepContainer: {
        display: "flex",
        flex: 1,
        justifyContent: "space-between",
    },
    stepSubContainer: {
        backgroundColor: colorsPalette.white.color,
        marginHorizontal: 16,
        paddingHorizontal: 24,
        paddingVertical: 32,
        borderRadius: 10,
    },
})