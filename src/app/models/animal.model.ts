import { ImageSourcePropType } from "react-native";

export type Animal = {
  id: string;
  name: string;
  imageUrl: ImageSourcePropType;
  age: string;
  species: string;
  description: string;
};