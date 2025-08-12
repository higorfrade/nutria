import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginBottom: 16
    },
    input: {
        height: 44,
        backgroundColor: colors.white,
        paddingHorizontal: 10,
        borderRadius: 4
    },
    errorText: {
        color: colors.error,
        marginTop: 4
    },
    select : {
        flexDirection: 'row',
        height: 44,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        borderRadius: 4
    },
    modalContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flex: 1,
        justifyContent: 'center'
    },
    modalContent: {
        backgroundColor: colors.white,
        marginHorizontal: 10,
        padding: 20,
        borderRadius: 8
    },
    option: {
        paddingVertical: 14,
        paddingHorizontal: 8,
        backgroundColor: 'rgba(208, 208, 208, 0.40)',
        borderRadius: 4
    }
})

export default styles;