import { Animal } from "../models/animal.model";

export const animals = [
    {
      id: '1',
      name: 'Craudia',
      imageUrl: require('../../../assets/craudia.jpg'),
      age: '2',
      species: 'Cachorro - dog-kabelus',
      description: 'A Craudia é a diva do bairro. Com seu pelo sempre impecável e um olhar que derrete corações, ela já tem dois anos de reinado no concurso de beleza canina local. Apenas não a contrarie, ou você conhecerá o significado de um "latido de diva".',
    },
    {
      id: '2',
      name: 'Douglas',
      imageUrl: require('../../../assets/douglas.jpg'),
      age: '5',
      species: 'Cachorro - Husky',
      description: 'Douglas é o filósofo do parque. Com olhos que parecem contemplar os mistérios do universo, ele passa seus dias meditando sobre a vida, o universo e a próxima refeição. Não se engane, por trás desse olhar profundo, está um amante de longas sonecas no sofá.',
    },
    {
      id: '3',
      name: 'Marcelo',
      imageUrl: require('../../../assets/marcelo.png'),
      age: '9',
      species: 'Cachorro - lata-vira',
      description: 'Marcelo é o aventureiro alegre que nunca perde um bom passeio, mesmo que seja apenas até o fim da rua. Com nove anos de experiência em farejar petiscos e um sorriso que nunca desaparece, ele é o parceiro perfeito para todas as suas aventuras - especialmente se elas incluírem lanches.',
    },
    {
      id: '4',
      name: 'Chico',
      imageUrl: require('../../../assets/chico.jpg'),
      age: '1',
      species: 'Gato - gatus-pao',
      description: 'Chico é o gato que desafiou as leis da física ao se encaixar perfeitamente em qualquer caixa, independentemente do tamanho. Aos um ano, ele já se tornou um mestre na arte do "se eu caber, eu sento". Não se surpreenda se encontrá-lo escondido em uma embalagem de pão pela manhã.',
    },
] as Animal[];
  