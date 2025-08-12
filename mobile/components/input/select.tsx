import { colors } from "@/constants/colors";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { FlatList, Modal, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

interface OptionsProps {
    label: string;
    value: string | number;
}

interface SelectProps {
    name: string;
    control: any;
    placeholder?: string;
    error?: string;
    options: OptionsProps[];
}

export default function Select({ name, control, placeholder, error, options }: SelectProps) {

    const [visible, setVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Controller control={control} name={name}
                render={({ field: { onChange, onBlur, value } }) => (
                   <>
                    <TouchableOpacity style={styles.select} onPress={() => setVisible(true)}>
                        <Text>
                            {value ? options.find(option => option.value === value)?.label : placeholder}
                        </Text>
                        <Feather name="arrow-down" size={16} color={colors.black} />
                    </TouchableOpacity>

                    <Modal visible={visible} animationType="fade" transparent={true} onRequestClose={() => setVisible(false)}>

                        <TouchableOpacity style={styles.modalContainer} activeOpacity={1} onPress={() => setVisible(false)}>
                            <TouchableOpacity style={styles.modalContent} activeOpacity={1}>
                                <FlatList contentContainerStyle={{ gap: 4 }} data={options} keyExtractor={(item) => item.value.toString()} 
                                    renderItem={({ item }) => (
                                        <TouchableOpacity style={styles.option} onPress={() => {
                                            onChange(item.value)
                                            setVisible(false)
                                        }}>
                                            <Text>{item.label}</Text>
                                        </TouchableOpacity>
                                    )} 
                                />
                            </TouchableOpacity>
                        </TouchableOpacity>

                    </Modal>
                   </> 
                )}
            />

            {error && <Text style={styles.errorText}>{error}</Text>}

        </View>
    )
}