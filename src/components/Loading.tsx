import { ActivityIndicator, StyleSheet, View } from "react-native"
import { PokeballLoading } from "./PokeballLoading"

export const Loading = () => {
    return (
        <View style={styles.activityContainer}>
            {/* <ActivityIndicator
                size={50} color={'gray'} /> */}
                <PokeballLoading/>

        </View>
    )
}
const styles = StyleSheet.create({
    activityContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})