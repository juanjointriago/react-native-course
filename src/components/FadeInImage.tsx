import { useState } from "react";
import { ActivityIndicator, Animated, ImageErrorEventData, ImageStyle, NativeSyntheticEvent, StyleProp, View } from "react-native";

interface Props {
    uri: string;
    style: StyleProp<ImageStyle>
}

export const FadeInImage = ({ uri, style }: Props) => {

    const [isLoading, setIsLoading] = useState(true);

    const finishLoading = () => setIsLoading(false);

    const onError = (err: NativeSyntheticEvent<ImageErrorEventData>) => {
        console.warn({ err });
        setIsLoading(false);
    };



    return (
        <View style={{ justifyContent: 'center', alignItems: "center" }}>
            {
                isLoading
                && <ActivityIndicator
                    style={{ position: "absolute" }}
                    color={'gray'}
                    size={30}
                />
            }
            <Animated.Image source={{ uri }} onError={onError} onLoad={finishLoading} style={{}} />
        </View>
    )
}