import { useState } from "react";
import { StyleSheet, FlatList, Image, Platform, Pressable } from "react-native";
type Props = {
  onSelect: React.Dispatch<React.SetStateAction<null>>;
  onCloseModal: () => void;
};
export default function EmojiList({ onSelect, onCloseModal }: Props) {
  const [emoji] = useState([
    require("../assets/images/smile.png"),
    require("../assets/images/smile-teeth.png"),
    require("../assets/images/face-with-tears-of-joy.png"),
    require("../assets/images/grinning-face-with-sweat.png"),
    require("../assets/images/smiling-face-with-halo.png"),
    require("../assets/images/upside-down-face.png"),
  ]);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === "web" ? true : false}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => {
        return (
          <Pressable
            onPress={() => {
              onSelect(item);
              onCloseModal();
            }}>
            <Image source={item} key={index} style={styles.image} />
          </Pressable>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});
