import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

//tipo de dato esperado
type gender = 'male' | 'female' | 'no-binary'

//Interfaz para tipar objetos con mas de una propidad
interface PersonInterface {
  name: string;
  lastName: string;
  email: string | null;
  age: number;
  gender: gender;
  isActive: boolean;
}



// console.log(incrementAgePerson(persona));


export default function App() {
  const incrementAgePerson = (person: PersonInterface, ageNumber: number = 9) => {
    const newAge = person.age + ageNumber;
    const newPerson: PersonInterface = {
      age: newAge,
      name: person.name,
      lastName: person.lastName,
      email: person.email,
      gender: person.gender,
      isActive: person.isActive
    }
    return newPerson;
  }

  const persona: PersonInterface = {
    name: 'Jose',
    lastName: 'Perez',
    email: null,
    age: 31,
    gender: 'male',
    isActive: true
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hola mundo bienevenidos a React Native!</Text>
      <Button
        onPress={() => {
          incrementAgePerson(persona);
          console.log('Ejecutando funcion de incrementar edad de persona');
          console.log({persona});
        }}
        title="Presioname"
        color="#841584"

      />
      <Text>{persona.name}</Text>
      <Text>{persona.lastName}</Text>
      <Text>{persona.age}</Text>
      <Text>{
        persona.gender === 'male'
          ? 'masculino'
          : persona.gender === 'female'
            ? 'femenino'
            : 'No binario'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: '70%',
    borderRadius: 30,
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: 'yellow',
  }
})