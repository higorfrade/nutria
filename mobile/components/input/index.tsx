import { Controller } from "react-hook-form";
import { KeyboardTypeOptions, Text, TextInput, View } from "react-native";
import styles from "./styles";

interface InputProps {
    name: string;
    control: any;
    placeholder?: string;
    rules?: object;
    error?: string;
    keyboardType: KeyboardTypeOptions;
}

export default function Input({ name, control, placeholder, rules, error, keyboardType }: InputProps) {
    return (
        <View style={styles.container}>
            <Controller control={control} name={name} rules={rules}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput style={styles.input}
                        placeholder={placeholder} onBlur={onBlur} value={value} onChangeText={onChange} keyboardType={keyboardType} />
                )}
            />

            {error && <Text style={styles.errorText}>{error}</Text>}

        </View>
    )
}