import { View } from "react-native"
import { SearchInput } from "../components/SearchInput"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useState } from "react";



export const SearchScreen = () => {
const {top}=useSafeAreaInsets();
// const [isFetching, setIsFetching] = ;

  return (
    <View>
      <SearchInput/>
    </View>
  )
}
