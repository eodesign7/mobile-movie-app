import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 gap-2 items-center justify-center">
      <Text className="text-5xl font-bold text-center text-primary">
        Welcome to the Movie App
      </Text>
      <Text className="text-2xl font-light text-center text-secondary">
        Discover the latest movies and TV shows
      </Text>
      
    </View>
  );
}
