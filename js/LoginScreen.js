import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@firebase/auth';
import { auth } from './firebase';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const LoginScreen = () => {
  const navigation = useNavigation(); // Use useNavigation hook to get navigation prop

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User logged in:', user);

      navigation.navigate('WelcomeScreen'); // Use navigation prop to navigate
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };

  const handleRegister = async () => {
    try {
      // Validate email format
      if (!validateEmail(email)) {
        console.error('Invalid email format');
        return;
      }

      await auth.createUserWithEmailAndPassword(email, password);
      console.log('Registration successful');

      navigation.navigate('WelcomeScreen'); // Use navigation prop to navigate
    } catch (error) {
      console.error('Registration failed:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    width: 200,
    paddingHorizontal: 10,
  },
});

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export default LoginScreen;
