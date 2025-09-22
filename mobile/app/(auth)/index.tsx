import { useState } from "react";
import "../../global.css";
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window"); // screen width
const circleSize = width * 2; // large enough to cover full width
export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      {/* Background Gradient */}
      <LinearGradient
        colors={["#e9fdff", "#ffffff", "#e9fdff"]}
        style={StyleSheet.absoluteFill}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      />

      {/* Rounded top glow */}
      <LinearGradient
        colors={["#bdf8ff", "transparent"]}
        style={styles.topGlow}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      />

      {/* Rounded bottom glow */}
      <LinearGradient
        colors={["transparent", "#bdf8ff"]}
        style={styles.bottomGlow}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      />

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
              onPress={() => {
                // setIsLoading((prev) => !prev);
              }}
              // disabled={isLoading}
              style={{
                backgroundColor: "#ffffff",
                elevation: 2,
              }}
            >
              <View>
                {isLoading ? (
                  <ActivityIndicator size={"large"} color={"#C4D9FF"} />
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
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topGlow: {
    position: "absolute",
    top: -circleSize / 1.5,
    alignSelf: "center",
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2,
    overflow: "hidden",
    opacity: 0.5,
  },
  bottomGlow: {
    position: "absolute",
    bottom: -circleSize / 1.5,
    alignSelf: "center",
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2,
    overflow: "hidden",
    opacity: 0.5,
  },
});
