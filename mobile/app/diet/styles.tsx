import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    containerHeader: {
        backgroundColor: colors.white,
        borderBottomLeftRadius: 14,
        borderBottomRightRadius: 14,
        paddingTop: 60,
        paddingBottom: 20,
        marginBottom: 16
    },
    contentHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 16,
        paddingRight: 16
    },
    title: {
        fontSize: 30,
        color: colors.background,
        fontWeight: 'bold'
    },
    buttonShare: {
        backgroundColor: colors.share,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        borderRadius: 4
    },
    buttonShareText:{
        color: colors.white,
        fontWeight: '500'
    },
    loading: {
        flex: 1,
        backgroundColor: colors.background,
    },
    loadingContent: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    loadingText: {
        fontSize: 18,
        color: colors.white,
        marginBottom: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    errorText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.white,
        marginBottom: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    name: {
        fontSize: 24,
        color: colors.white,
        fontWeight: 'bold',
        marginBottom: 10
    },
    objective: {
        color: colors.white,
        fontSize: 16,
        marginBottom: 24
    },
    label: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold'
    },
    mealPlan: {
        backgroundColor: colors.white,
        padding: 14,
        borderRadius: 8,
        marginTop: 8,
        gap: 8
    },
    food: {
        backgroundColor: 'rgba(208, 208, 208, 0.4)',
        padding: 8,
        borderRadius: 4
    },
    foodHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 4
    },
    foodType: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    foodContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    },
    foodName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
        marginTop: 14
    },
    supplements: {
        backgroundColor: colors.white,
        marginTop: 14,
        marginBottom: 14,
        padding: 14,
        borderRadius: 8
    },
    supplementName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4
    },
    button: {
        backgroundColor: colors.button,
        height: 40,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 56
    },
    buttonText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export default styles;