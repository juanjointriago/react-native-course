import { View } from 'react-native';
import { FadeInImage } from './src/components/FadeInImage';

export default function App() {
  return (
    <View>
      <FadeInImage uri={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/5.png'}
        style={{
          width: 240,
          height: 300,
          position: 'absolute',
          alignSelf: 'center'
        }} />
    </View>
  );
}
