const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});



import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const RoleSelection = ({ onSelectRole }) => {
  return (
    <View style={styles.container}>
      <Button title="Volunteer" onPress={() => onSelectRole('volunteer')} />
      <Button title="User" onPress={() => onSelectRole('user')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RoleSelection;








