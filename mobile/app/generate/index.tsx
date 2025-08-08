import { Header } from "@/components/header";
import { View } from "react-native";
import styles from "./styles";

export default function Generate() {
    return (
        <View style={styles.container}>
            <Header step="Passo 2" title="Finalizando dieta" />
        </View>
    )
}