import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/navigator/Navigator';

export default function App() {
  return (
    //navigator
    <NavigationContainer>
      <Navigator/>
      {/* //todo tabs */}
    </NavigationContainer>
  );
}
