import { View } from "react-native";
import LottieView from 'lottie-react-native';
import { useRef } from "react";

export const PokeballLoading = () => {
    const animation = useRef(null);
    return (
        <View>
            <LottieView
                autoPlay
                loop
                ref={animation}
                source={require('../assets/pokeball-loading.json')}
                style={{position: "absolute", width:50, height: 50}}
            />
        </View>
    )
}
