import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { animals } from '../app/data/animals.data';

type Props = {
  navigation: StackNavigationProp<any, any>;
};

const ListScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.background}>
      <Text style={styles.title}>Animais para adoção</Text>
      <FlatList
        data={animals}
        keyExtractor={(item) => item?.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('View', { animal: item })}
          >
            <Image source={item.imageUrl} style={styles.image} />
            <View style={styles.infoContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.details}>{item.species}</Text>
              <Text style={styles.details}>Idade: {item.age} ano(s)</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#6b96c2',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    color: '#eee',
    marginBottom: 15,
    textAlign: 'center'
  },
  card: {
    flexDirection: 'row',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
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
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 16,
  },
  infoContainer: {
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#08325e',
    marginBottom: 5
  },
  details: {
    fontSize: 14,
    color: '#08325e',
  },
});

export default ListScreen;
