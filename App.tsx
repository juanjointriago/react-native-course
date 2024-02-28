import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/navigator/Navigator';
import { Tabs } from './src/navigator/Tabs';

export default function App() {
  return (
    //navigator
    <NavigationContainer>
      {/* <Navigator/> */}
      <Tabs/>
      {/* //todo tabs */}
    </NavigationContainer>
  );
}
