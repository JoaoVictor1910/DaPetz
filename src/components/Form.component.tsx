import React, { useState } from 'react';
import { View, TextInput, Button, Vibration, StyleSheet, Alert, Text, Image } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../app/models/route.model';
import { animals } from '../app/data/animals.data';

type FormScreenProps = {
  route: RouteProp<RootStackParamList, 'Form'>;
};

const FormScreen: React.FC<FormScreenProps> = ({ route }) => {
  const [name, setName] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const animalName = route.params?.animalName;

  const handleSubmit = () => {
    Vibration.vibrate();
    Alert.alert("Parabéns!", `Você entrou na fila de adoção para o animal: ${animalName}`);
  };
  const animalImage = animals.find((anm) => anm.name === animalName)?.imageUrl || require('../../assets/logo.png');

  return (
    <View style={styles.container}>
      {animalName && <Text style={styles.animalNameText}>Adotando Animal: {animalName}</Text>}
      <Image source={animalImage} style={styles.image} />
      <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        placeholderTextColor="#DDD"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        placeholderTextColor="#DDD"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#DDD"
        value={email}
        onChangeText={setEmail}
      />
      <View style={styles.button}>
        <Button title="Enviar" onPress={handleSubmit} color="#fff" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#6b96c2',
  },
  image: {
    width: '100%',
    height: 350,
    marginBottom: 10,
  },
  animalNameText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFF',
  },
  input: {
    height: 50,
    backgroundColor: '#08325e',
    borderColor: '#FFF',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: '#FFF',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FormScreen;