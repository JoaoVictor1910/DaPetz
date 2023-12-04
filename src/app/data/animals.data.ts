import { Animal } from "../models/animal.model";

export const animals = [
    {
        id: '1',
        name: 'Craudia',
        imageUrl: require('../../../assets/craudia.jpg'),
        age: '2',
        species: 'Cachorro - dog-kabelus',
        description: 'T',
    },
    {
        id: '2',
        name: 'Douglas',
        imageUrl: require('../../../assets/douglas.jpg'),
        age: '5',
        species: 'Cachorro - Husky',
        description: 'T',
    },
    {
        id: '3',
        name: 'Marcelo',
        imageUrl: require('../../../assets/marcelo.png'),
        age: '9',
        species: 'Cachorro - lata-vira',
        description: 'T',
    },
    {
        id: '4',
        name: 'Chico',
        imageUrl: require('../../../assets/chico.jpg'),
        age: '1',
        species: 'Gato - gatus-pao',
        description: 'T',
    },
] as Animal[]