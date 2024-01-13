// App.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RoleSelection from './RoleSelection';
import LoginScreen from './LoginScreen';

const App = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  const handleSelectRole = (role) => {
    setSelectedRole(role);
  };

  return (
    <NavigationContainer>
      <View style={styles.container}>
        {!selectedRole ? (
          <RoleSelection onSelectRole={handleSelectRole} />
        ) : (
          <LoginScreen role={selectedRole} />
        )}
      </View>
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
