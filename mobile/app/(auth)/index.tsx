import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import useScreenBackground from "../../hooks/useScreenBackground";

export default function SignInScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const Background = useScreenBackground();

  return (
    <View style={{ flex: 1 }}>
      <Background />

      {/* Content */}
      <View className="flex-1 px-10 justify-between mt-20">
        <View className="flex-col gap-0">
          <View className="items-center">
            <Image
              className="size-90"
              resizeMode="contain"
              source={require("../../assets/images/android-icon-foreground.png")}
            />
          </View>

          <View className="items-center bottom-16">
            <Text className="text-3xl font-bold text-gray-600">
              Sign in to continue
            </Text>
          </View>

          <View className="flex-col bottom-10">
            <TouchableOpacity
              className="flex-row justify-center border border-gray-300 rounded-full py-3 items-center"
              onPress={() => setIsLoading(!isLoading)}
              style={{ backgroundColor: "#ffffff", elevation: 2 }}
            >
              {isLoading ? (
                <ActivityIndicator size="large" color="#C4D9FF" />
              ) : (
                <View className="flex-row items-center">
                  <Image
                    className="size-10 mr-3"
                    source={require("../../assets/images/react-logo.png")}
                  />
                  <Text className="font-bold text-gray-600">
                    Sign in with Google
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
