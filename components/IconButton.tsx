import {
  Pressable,
  StyleSheet,
  Text,
  type GestureResponderEvent,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
type Props = {
  label: string;
  icon?: any;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
};
export default function IconButton({ icon, label, onPress }: Props) {
  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color="#fff" />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconButtonLabel: {
    color: "#fff",
    marginTop: 12,
  },
});
