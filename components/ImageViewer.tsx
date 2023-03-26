import { StyleSheet, Image, type ImageSourcePropType } from "react-native";
type Props = {
  placeholderImageSource: ImageSourcePropType;
  selectedImage: string | null;
};
export default function ImageViewer({
  placeholderImageSource,
  selectedImage,
}: Props) {
  const imageSource =
    selectedImage !== null ? { uri: selectedImage } : placeholderImageSource;
  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
