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


  const handleImageChange = async () => {
    const options = {
      mediaType: 'photo',
      maxWidth: 500,
      maxHeight: 500,
      quality: 0.8,
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

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="SplachScreenChooseLanguage"
              component={SplachScreenChooseLanguage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OnboardingPage1"
              component={OnboardingPage1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomePage"
              component={Page6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChooseUserType"
              component={ChooseUserType}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OnboardingPage2"
              component={OnboardingPage2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Page1"
              component={Page1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Page4"
              component={Page4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VolunteerLogInSMSCode"
              component={VolunteerLogInSMSCode}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VolunteerLogIn1"
              component={VolunteerLogIn1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OnboardingPage"
              component={OnboardingPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VolunteerLogIn"
              component={VolunteerLogIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Page"
              component={Page}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Page2"
              component={Page2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Page3"
              component={Page3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Page5"
              component={Page5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VolunteerSignUp"
              component={VolunteerSignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VideocallPage"
              component={Videocall}
              options={{ headerShown: true }}
            />


            <Stack.Screen
              name="ocr"
              component={OCRDemo}
              options={{ headerShown: false }}
              />

          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;




