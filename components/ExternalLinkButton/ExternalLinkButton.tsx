import { Linking, TouchableOpacity, StyleSheet } from "react-native";
import { BodyText } from "../Text/Text";
import { colorsPalette } from "../../styles";
import { IconShare } from "../../assets/icons/icons";

interface Props {
    url: string,
    buttonTitle: string,
}

export const ExternalLinkButton = (props: Props) => {
    const handlePress = () => {
        Linking.openURL(props.url);
    };

    return (
        <TouchableOpacity style={styles.button} onPress={handlePress}>
            <IconShare />
            <BodyText fontWeigth="bold" size="L" customStyle={styles.text}>{props.buttonTitle}</BodyText>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 60,
        width: 250,
        borderRadius: 10,
        backgroundColor: "#1E1E1E",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: colorsPalette.white.color,
        marginLeft: 10,
    },
})
