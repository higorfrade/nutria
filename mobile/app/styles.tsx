import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 16,
        paddingRight: 16
    },
    image: {
        width: 300,
        height: 300
    },
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        color: colors.logoPrimary
    },
    text: {
        fontSize: 16,
        color: colors.white,
        width: 240,
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 8
    },
    button: {
        backgroundColor: colors.button,
        width: '100%',
        height: 40,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 34
    },
    buttonText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export default styles;