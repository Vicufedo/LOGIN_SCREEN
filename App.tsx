// import * as splashScreen from "expo-splash-screen";
// import {useEffect} from "react";
// import * as Font from "expo-font";
import {
  Feather,
  AntDesign,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";

import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
//splashScreen.preventAutoHideAsync();

// export default function App() {
  // useEffect(() => {
  //   const loadFont = async() => {
  //     await Font.loadAsync({
  //       Black: require("./assets/fonts/Roboto/static/Roboto-Black.ttf"),
  //       Bold: require("./assets/fonts/Roboto/static/Roboto-Bold.ttf"),
  //       Regular: require("./assets/fonts/Roboto/static/Roboto-Regular.ttf"),
  //       Italic: require("./assets/fonts/Roboto/static/Roboto-Italic.ttf"),
  //     });
  //     await splashScreen.hideAsync();
  //   }
  //   loadFont();
  // }, []);
// };
  
export default function Apps () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleLogin = () => {
      console.log("Email:", email);
      console.log("Password:", password);
      setEmail("");
      setPassword("");
    };
    
  return (
    <View style={styles.container}>
  <View style={styles.card}>

    <TouchableOpacity style={styles.closeButton}>
       <AntDesign name="close" size={24} color="black" />
    </TouchableOpacity>

    <View style={styles.profileContainer}>
      <Feather name="user" size={28} color="black" />
    </View>

    <Text style={styles.title}>Welcome to TheFork</Text>

    <TextInput
      style={styles.input}
      placeholder="Email*"
      keyboardType="email-address"
      value={email}
      onChangeText={setEmail}
    />

   <View style={styles.passwordContainer}>
  <TextInput
    style={styles.passwordInput}
    placeholder="Password*"
    secureTextEntry
    value={password}
    onChangeText={setPassword}/>
  <Ionicons name="eye-outline" size={22} color="#8E8E93"/>

</View>

    <TouchableOpacity>
      <Text style={styles.forgotPassword}>
        Forgot your password?
      </Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.loginButton}
      onPress={handleLogin}>
      <Text style={styles.continueText}>Continue</Text>
    </TouchableOpacity>

    <View style={styles.orContainer}>
      <View style={styles.line}/>
      <Text style={styles.orText}>or</Text>
      <View style={styles.line}/>
    </View>

    <TouchableOpacity style={styles.socialButton}>
    
       <Image source={require("./assets/f.png")}
       style={styles.socialIcon}/>
      <Text style={styles.socialText}>
        Continue with Facebook
      </Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.socialButton}>
      <Image source={require("./assets/G.png")}
       style={styles.socialIcon}/>
      <Text style={styles.socialText}>
        Continue with Google
      </Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.socialButton}>
       <Image source={require("./assets/a.png")}
       style={styles.socialIcon}/>
      <Text style={styles.socialText}>
        Continue with Apple
      </Text>
    </TouchableOpacity>

    <View style={styles.settingsRow}>
      <Text style={styles.settingsText}>Settings</Text>
     <AntDesign name="setting" size={24} color="black" />
    </View>

  </View>
</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: 400,
    backgroundColor: "#fdffff",
    borderRadius: 30,
    padding: 20,
    elevation: 6,
    borderWidth: 1,
  },

closeButton: {
  alignSelf: "flex-end",
  marginTop: 20,
  width: 40,
  height: 40,
  borderRadius: 20,
  backgroundColor: "#fff",
  justifyContent: "center",
  alignItems: "center",
  shadowColor: "#000", 
  shadowOpacity: 0.08,
  shadowRadius: 4,
  elevation: 5
  },

  profileContainer: {
    width: 40,
    height: 40,
    borderRadius: 17,
    backgroundColor: "#adebd8",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    elevation: 3,
  },

  title: {
    fontSize: 34,
    fontWeight: "800",
    color: "#0A2540",
    marginBottom: 25,
  },

  input: {
    borderWidth: 1,
    borderColor: "#9e9c9c",
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 55,
    marginBottom: 15,
    fontSize: 16,
  },

  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#9e9c9c",
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 55,
  },

  passwordInput: {
    flex: 1,
    fontSize: 16,
  },

  forgotPassword: {
    marginTop: 12,
    marginBottom: 25,
    textDecorationLine: "underline",
    color: "#000",
  },

  loginButton: {
    backgroundColor: "#0d7567",
    height: 55,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  continueText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },

  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#b6b6b6",
  },

  orText: {
    marginHorizontal: 15,
    fontSize: 16,
    color: "#302f2f",
  },

  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#666666",
    borderRadius: 10,
    height: 55,
    paddingHorizontal: 20,
    marginBottom: 15,

  },

  socialText: {
    fontSize: 17,
    marginLeft: 20,
    fontWeight: "500",
    textAlign: "center",
  },

  socialIcon: {
  width: 24,
  height: 24,
  resizeMode: "contain",
  marginRight: 15,
},

  settingsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },

  settingsText: {
    fontSize: 18,
    fontWeight: "500",
  },
});

