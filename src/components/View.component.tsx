import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../app/models/route.model';

type ViewScreenProps = {
  route: RouteProp<RootStackParamList, 'View'>;
  navigation: StackNavigationProp<RootStackParamList, 'View'>;
};

const ViewScreen: React.FC<ViewScreenProps> = ({ route, navigation }) => {
  const { animal } = route.params;

  const handleAdoptionForm = () => {
    navigation.navigate('Form', { animalName: animal.name });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{animal.name}</Text>
      <Image source={animal.imageUrl} style={styles.image} />
      <View style={styles.card}>
        <Text style={styles.titleDetails}>Idade: <Text style={styles.details}>{animal.age}</Text></Text>
        <Text style={styles.titleDetails}>Espécie: <Text style={styles.details}>{animal.species}</Text></Text>
        <Text style={styles.titleDetails}>Descrição: <Text style={styles.details}>{animal.description}</Text></Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleAdoptionForm}>
        <Text style={styles.buttonText}>Formulário de Adoção</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#6b96c2',
  },
  card: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#eee',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  image: {
    width: '100%',
    height: 350,
    marginBottom: 10,
  },
  details: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'normal'
  },
  titleDetails: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ViewScreen;
