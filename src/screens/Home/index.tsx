import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Sexta, 23 de junho de 2023</Text>

      <TextInput
        style={styles.input}
        placeholder='Nome do participante'
        placeholderTextColor="#6B6B6B"
      />
    </View>
  );
}