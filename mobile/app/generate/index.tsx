import { Header } from "@/components/header";
import Select from "@/components/input/select";
import { useDataStore } from "@/store/data";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { useForm } from "react-hook-form";
import { Pressable, ScrollView, Text, View } from "react-native";
import { z } from "zod";
import styles from "./styles";

const schema = z.object({
    gender: z.string().min(1, {message: "Selecione seu sexo"}),
    level: z.string().min(1, {message: "Selecione seu nível"}),
    objective: z.string().min(1, {message: "Selecione seu objetivo"})
})

type FormData = z.infer<typeof schema>

export default function Generate() {
    const { control, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({
            resolver: zodResolver(schema)
    });

    const setPageTwo = useDataStore(state => state.setPageTwo)

    const genderOptions = [
        { label: "Masculino", value: "masculino" },
        { label: "Feminino", value: "feminino" }
    ]

    const levelOptions = [
        { label: "Sedentário (pouco ou nenhuma atividade física)", value: "sendetário" },
        { label: "Levemente ativo (exercícios de 1 a 3 vezes na semana)", value: "levemente ativo (exercícios de 1 a 3 vezes na semana)" },
        { label: "Moderadamente ativo (exercícios de 3 a 5 vezes na semana", value: "moderadamente ativo (exercícios de 3 a 5 vezes na semana" },
        { label: "Altamente ativo (exercícios de 5 a 7 vezes na semana)", value: "altamente ativo (exercícios de 5 a 7 vezes na semana)" }
    ]

    const objectiveOptions = [
        { label: "Emagrecer", value: "emagrecer" },
        { label: "Hipertrofia", value: "hipertrofia" },
        { label: "Definição", value: "definição" },
        { label: "Hipertrofia + Definição", value: "hipertrofia e definição" }
    ]

    function handleCreate(data: FormData) {
        setPageTwo({
            gender: data.gender,
            level: data.level,
            objective: data.objective
        });

        router.push("/diet");
    }

    return (
        <View style={styles.container}>
            <Header step="Passo 2" title="Finalizando dieta" />

            <ScrollView style={styles.content}>
                <Text style={styles.label}>Sexo:</Text>
                <Select control={control} name="gender" placeholder="Selecione seu sexo..." error={errors.gender?.message}
                    options={genderOptions} 
                />

                <Text style={styles.label}>Selecione seu nível de atividade física:</Text>
                <Select control={control} name="level" placeholder="Selecione seu nível..." error={errors.level?.message}
                    options={levelOptions} 
                />

                <Text style={styles.label}>Selecione seu objetivo:</Text>
                <Select control={control} name="objective" placeholder="Selecione seu objetivo..." error={errors.objective?.message}
                    options={objectiveOptions} 
                />

                <Pressable style={styles.button} onPress={handleSubmit(handleCreate)}>
                    <Text style={styles.buttonText}>Gerar dieta</Text>
                </Pressable>
                
            </ScrollView>
        </View>
    )
}