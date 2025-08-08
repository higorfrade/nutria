import { Header } from '@/components/header';
import Input from '@/components/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import { useForm } from 'react-hook-form';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { z } from 'zod';
import styles from './styles';

const schema = z.object({
    name: z.string().min(1, {message: "Nome obrigatório"}),
    weight: z.string().min(1, {message: "Peso obrigatório"}),
    height: z.string().min(1, {message: "Altura obrigatória"}),
    age: z.string().min(1, {message: "Idade obrigatória"})
})

type FormData = z.infer<typeof schema>

export default function Step() {
    const { control, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    function handleCreate(data: FormData) {
        console.log(data);

        router.push("/generate");
    }

    return (
        <View style={styles.container}>
            <Header step='Passo 1' title='Vamos começar' />

            <ScrollView style={styles.content}>
                <Text style={styles.label}>Nome:</Text>
                <Input name='name' control={control} placeholder='Nome completo' error={errors.name?.message} keyboardType={'default'} />

                <Text style={styles.label}>Peso:</Text>
                <Input name='weight' control={control} placeholder='Peso atual' error={errors.weight?.message} keyboardType={'numeric'} />

                <Text style={styles.label}>Altura:</Text>
                <Input name='height' control={control} placeholder='Altura (Ex: 1.70)' error={errors.height?.message} keyboardType={'numeric'} />

                <Text style={styles.label}>Idade:</Text>
                <Input name='age' control={control} placeholder='Idade atual' error={errors.age?.message} keyboardType={'numeric'} />

                <Pressable style={styles.button} onPress={handleSubmit(handleCreate)}>
                    <Text style={styles.buttonText}>Avançar</Text>
                </Pressable>
            </ScrollView>
        </View>
    )
}