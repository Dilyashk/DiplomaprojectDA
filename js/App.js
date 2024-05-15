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


const App = () => {
  LogBox.ignoreAllLogs();
  const [hideSplashScreen, setHideSplashScreen] = useState(true);

  // useEffect(() => {
  //   // Функция для запроса разрешения на использование камеры
  //   const requestCameraPermission = async () => {
  //     try {
  //       const cameraGranted = await PermissionsAndroid.request(
  //         PermissionsAndroid.PERMISSIONS.CAMERA,
  //         {
  //           title: 'Разрешение на использование камеры',
  //           message: 'Для использования этой функции необходимо разрешение на доступ к камере.',
  //           buttonNeutral: 'Позже',
  //           buttonNegative: 'Отмена',
  //           buttonPositive: 'OK',
  //         },
  //       );
  //       if (cameraGranted === PermissionsAndroid.RESULTS.GRANTED) {
  //         console.log('Разрешение на использование камеры получено');
  //       } else {
  //         console.log('Разрешение на использование камеры не получено');
  //       }
  //     } catch (err) {
  //       console.warn(err);
  //     }
  //   };
  
  //   // Функция для запроса разрешения на использование микрофона
  //   const requestMicrophonePermission = async () => {
  //     try {
  //       const microphoneGranted = await PermissionsAndroid.request(
  //         PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
  //         {
  //           title: 'Разрешение на использование микрофона',
  //           message: 'Для использования этой функции необходимо разрешение на доступ к микрофону.',
  //           buttonNeutral: 'Позже',
  //           buttonNegative: 'Отмена',
  //           buttonPositive: 'OK',
  //         },
  //       );
  //       if (microphoneGranted === PermissionsAndroid.RESULTS.GRANTED) {
  //         console.log('Разрешение на использование микрофона получено');
  //       } else {
  //         console.log('Разрешение на использование микрофона не получено');
  //       }
  //     } catch (err) {
  //       console.warn(err);
  //     }д
  //   };
