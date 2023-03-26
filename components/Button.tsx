import {
  StyleSheet,
  View,
  Pressable,
  Text,
  type GestureResponderEvent,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
type Props = {
  label: string;
  theme?: string;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
};
export default function Button({ label, theme, onPress }: Props) {
  if (theme === "primary") {
    return (
      <View
        style={[
          styles.buttonContainer,
          { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 },
        ]}>
        <Pressable
          style={[styles.button, { backgroundColor: "#fff" }]}
          onPress={onPress}>
          <EvilIcons name="image" size={24} color="black" />
          <Text style={[styles.buttonLabel, { color: "#25292e" }]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});
