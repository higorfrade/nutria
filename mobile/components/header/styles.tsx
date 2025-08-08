import { colors } from "@/constants/colors";
import { Platform, StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderBottomRightRadius: 14,
        borderBottomLeftRadius: 14,
        marginBottom: 14,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight! + 36 : 36
    },
    content: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 34,
        borderBottomRightRadius: 14,
        borderBottomLeftRadius: 14
    },
    row: {
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center'
    },
    text: {
        fontSize: 18
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.background,
        marginTop: 12
    }
})

export default styles;