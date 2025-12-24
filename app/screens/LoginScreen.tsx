import Entypo from "@expo/vector-icons/Entypo";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";
export default function LoginScreen() {
  const navigate = useRouter();
  return (
    <ScrollView
      style={tw`flex-1 bg-indigo-500`}
      contentContainerStyle={tw`flex-grow`}
    >
      <View style={tw`flex-row mt-10 justify-start`}>
        <TouchableOpacity
          style={tw`bg-yellow-400 p-2 rounded-tr-2xl ml-4`}
          onPress={() => navigate.back()}
        >
          <Entypo name="arrow-long-left" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <View style={tw`flex-row justify-center`}>
        <Image
          style={{ width: 200, height: 200 }}
          source={require("../../assets/images/login.png")}
        />
      </View>
      <View
        style={tw`flex-1  bg-white px-8 py-8 pb-18 mt-8 rounded-tr-2xl rounded-tl-2xl`}
      >
        <View style={tw`form gap-y-2`}>
          <Text style={tw`text-gray-700 ml-4`}>Email address</Text>
          <TextInput
            style={tw` p-4 bg-gray-100 rounded-2xl mb-3 text-gray-700`}
            value="example@gmail.comm"
            placeholder="enter email"
          />
          <Text style={tw`text-gray-700 ml-4`}>Password</Text>
          <TextInput
            style={tw` p-4 bg-gray-100 rounded-2xl text-gray-700`}
            placeholder="Enter Password"
            value="test-1222"
            secureTextEntry
          />
          <TouchableOpacity style={tw`flex items-end mb-5`}>
            <Text style={tw`text-gray-700`}>Forget Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`py-3 bg-yellow-400 rounded-xl `}>
            <Text style={tw`text-xl font-bold text-center text-gray-700 `}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={tw`text-xl text-gray-700 font-bold py-5 text-center `}>
          Or
        </Text>

        <View style={tw`flex-row justify-center gap-x-12 `}>
          <TouchableOpacity style={tw`p-2 bg-gray-100 rounded-2xl`}>
            <Image
              style={tw`h-10 w-10`}
              source={require("../../assets/images/google.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={tw`p-2 bg-gray-100 rounded-2xl`}>
            <Image
              style={tw`h-10 w-10`}
              source={require("../../assets/images/apple.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={tw`p-2 bg-gray-100 rounded-2xl`}>
            <Image
              style={tw`h-10 w-10`}
              source={require("../../assets/images/facebook.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={tw` flex-row justify-center mt-7`}>
          <Text style={tw`text-gray-700 font-semibold `}>
            don&lsquo;t have an account?
          </Text>
          <TouchableOpacity
            onPress={() => navigate.push("/screens/SignupScreen")}
          >
            <Text style={tw`font-semibold text-yellow-500`}> Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
