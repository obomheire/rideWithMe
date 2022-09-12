import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RoootNavigator from "./src/navigations/RootNavigator";
import { DestinationContextProvider, OriginContextProvider } from "./src/contexts/contexts";

export default function App() {
  return (
    <SafeAreaProvider>
      <DestinationContextProvider>
        <OriginContextProvider>
          <RoootNavigator />
        </OriginContextProvider>
      </DestinationContextProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
