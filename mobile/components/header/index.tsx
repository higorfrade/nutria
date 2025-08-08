import { colors } from "@/constants/colors";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import styles from "./styles";

interface HeaderProps {
    step: string;
    title: string;
}

export function Header({ step, title } : HeaderProps) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.row}>
                    <Pressable onPress={() => router.back()}>
                        <Feather name="arrow-left" size={24} color={colors.black} />
                    </Pressable>
                    <Text style={styles.text}>
                        {step} <Feather name="loader" size={16} color={colors.black} />
                    </Text>
                </View>

                <Text style={styles.title}>{title}</Text>
            </View>
        </SafeAreaView>
    )
}