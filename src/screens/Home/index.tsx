import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export function Home() {
  const handleParticipantAdd = () => {
    console.log('Você clicou no botão de adicionar.')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Sexta, 23 de junho de 2023</Text>

      <TextInput
      style={styles.input}
      placeholder='Nome do participante'
      placeholderTextColor="#6B6B6B"
      />

      <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}