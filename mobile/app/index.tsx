import { colors } from '@/constants/colors';
import { Link } from 'expo-router';
import { Image, Pressable, Text, View } from 'react-native';
import styles from './styles';

export default function Index() {
  return (
    <View style={styles.container}>
      <Image style={styles.image}
        source={require('../assets/images/logoNutrIA.png')}
      />
      <Text style={styles.title}>
        Nutr<Text style={{ color: colors.logoSecondary }}>IA</Text>
      </Text>

      <Text style={styles.text}>Crie dietas personalizadas com Inteligência Artificial.</Text>

      <Link href="/step" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Vamos lá</Text>
        </Pressable>
      </Link>

    </View>
  );
}