import { TextInput, View } from "react-native"
import  Icon  from "react-native-vector-icons/Ionicons"

export const SearchInput = () => {
  return (
    <View>
        <View>
            <TextInput/>
            <Icon size={30} name="search-outline" color={'gray'}/>
        </View>
    </View>
  )
}
