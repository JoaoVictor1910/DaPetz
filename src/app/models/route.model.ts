import { Animal } from "./animal.model";

export type RootStackParamList = {
    Login: undefined;
    SignUp: undefined;
    List: undefined;
    View: { animal: Animal };
    Form: { animalName?: string };
  };