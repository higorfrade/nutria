import { Header } from "@/components/header";
import { api } from "@/services/api";
import { useDataStore } from "@/store/data";
import { Data } from "@/types/data";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useQuery } from "@tanstack/react-query";
import { Link, router } from "expo-router";
import { Pressable, ScrollView, Share, Text, View } from "react-native";
import styles from "./styles";

interface ResponseData {
    data: Data
}

export default function Diet() {
    const user = useDataStore(state => state.user);

    const { data, isFetching, error } = useQuery({
        queryKey: ["diet"],
        queryFn: async () => {
            try {
                if (!user) {
                    throw new Error("Falha ao carregar a dieta");
                }

                const res = await api.get<ResponseData>("test");
                // const res = await api.post("/create", {
                //     name: user.name,
                //     age: user.age,
                //     gender: user.gender,
                //     weight: user.weight,
                //     height: user.height,
                //     objective: user.objective,
                //     level: user.level
                // });

                return res.data.data;

            } catch (error) {
                console.log(error);
                return null;
            }
        }
    })

    async function handleShare() {
        try {
            if(data && Object.keys(data).length === 0) return;

            const diet = `${data?.refeicoes.map(item => `\n - ${item.nome}\n- Horário: ${item.horario}\n- Alimentos: ${item.alimentos.map(alimento => ` ${alimento}`)}`)}`

            const supplements = `${data?.suplementos.map(item => ` ${item}`)}`

            const message = `Dieta: ${data?.nome} - Objetivo: ${data?.objetivo}\n\n${diet}\n\n- Suplementos: ${supplements}`

            await Share.share({
                message: message
            })

        } catch (error) {
            console.log(error)
        }
    }

    if(isFetching) {
        return (
            <View style={styles.loading}>
                <Header step="" title="Gerando dieta" />
                <Text style={styles.loadingText}>Consultando IA...</Text>
            </View>
        )
    }

    if(error) {
        return (
            <View style={styles.loading}>
                <Header step="" title="Falha ao gerar dieta" />
                <View style={styles.loadingContent}>
                    <Text style={styles.loadingText}>Lamentamos pelo ocorrido.</Text>
                    <Link href="/step">
                        <Text style={styles.errorText}>Tente novamente</Text>
                    </Link>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <View style={styles.contentHeader}>
                    <Text style={styles.title}>Minha dieta</Text>
                    <Pressable style={styles.buttonShare} onPress={handleShare}>
                        <Text style={styles.buttonShareText}>Compartilhar <Feather name="share" size={16} /></Text> 
                    </Pressable>
                </View>
            </View>

            <View style={{ paddingLeft: 16, paddingRight: 16, flex: 1 }}>
                {data && Object.keys(data).length > 0 && (
                    <>
                        <Text style={styles.name}>{data.nome}</Text>
                        <Text style={styles.objective}>Foco: {data.objetivo}</Text>

                        <Text style={styles.label}>Refeições:</Text>
                        <ScrollView>
                            <View style={styles.mealPlan}>
                                {data.refeicoes.map((refeicao) => (
                                    <View key={refeicao.nome} style={styles.food}>
                                        <View style={styles.foodHeader}>
                                            <Text style={styles.foodType}>{refeicao.nome}</Text><Ionicons name="restaurant" size={16} color={"#000000"} />
                                        </View>

                                        <View style={styles.foodContent}>
                                            <Feather name="clock" size={14} color={"#000000"} /> 
                                            <Text style={{ fontWeight: 'bold' }}>Horário: </Text>
                                            <Text>{refeicao.horario}</Text>
                                        </View>

                                        <Text style={styles.foodName}>Alimentos:</Text>
                                        {refeicao.alimentos.map(alimento => (
                                            <Text key={alimento} style={{ marginBottom: 16 }}>{alimento}</Text>
                                        ))}
                                    </View>
                                ))}
                            </View>

                            <View style={styles.supplements}>
                                <Text style={styles.supplementName}>Suplementos:</Text>
                                {data.suplementos.map(item => (
                                    <Text key={item} style={{ marginBottom: 16 }}>{item}</Text>
                                ))}
                            </View>

                            <Pressable style={styles.button} onPress={() => router.replace("/")}>
                                <Text style={styles.buttonText}>Gerar nova dieta</Text>
                            </Pressable>
                        </ScrollView>
                    </>
                )}
            </View>
        </View>
    )
}