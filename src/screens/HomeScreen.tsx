import { FlatList, Image, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context"

export const HomeScreen = () => {
    //si se encuantra instalado react native navigation react-native-screens react native safe area context
    //se puede utilizar el apartado del custom hook useSafeAreaInsets
    const { top } = useSafeAreaInsets()
    
    return (
        <>
            <Image
                source={require('../assets/pokebola.png')}
            />
            <View
            style={{alignItems: 'center'}}>
                {/* <FlatList

                /> */}
            </View>
        </>
    )
}
