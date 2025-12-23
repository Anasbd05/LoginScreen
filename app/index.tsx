import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";

export default function WelcomeScreen() {
  const navigate = useRouter();
  return (
    <SafeAreaView style={tw`flex-1 bg-indigo-500 h-full  `}>
      <View style={tw`flex-1 justify-around  items-center`}>
        <Text style={tw`text-4xl text-center font-bold text-white`}>
          Let&#39;s get started!
        </Text>
        <View style={tw` justify-center `}>
          <Image
            style={{ width: 350, height: 350 }}
            source={require("../assets/images/welcome.png")}
          />
        </View>
        <View style={tw` gap-y-4 px-7 w-full  `}>
          <Pressable
            onPress={() => navigate.push("/../screens/SignupScreen")}
            style={tw`py-3 w-full bg-yellow-400  rounded-xl`}
          >
            <Text style={tw`text-xl font-bold text-center text-gray-700`}>
              Sign up
            </Text>
          </Pressable>
          <View style={tw` flex-row justify-center`}>
            <Text style={tw`text-white font-semibold `}>
              Already have an account?
            </Text>
            <Pressable onPress={() => navigate.push("/../screens/LoginScreen")}>
              <Text style={tw`font-semibold text-yellow-400`}> Log in</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
