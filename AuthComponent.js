import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, firestore } from '../../firebase';
// import { Chevron1 } from "../ExtraComponents/src/icons/Chevron1"
// import { Icon } from "../ExtraComponents/src/components/Icon"
// import { SignInUpBttnS } from "../ExtraComponents/src/components/SignInUpBttnS"
// import "../ExtraComponents/src/screens/VolunteerSignUp/style.css"
import { VolunteerSignUp } from "../ExtraComponents/src/screens/VolunteerSignUp/VolunteerSignUp"

const AuthComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [action, setAction] = useState('Sign Up'); 

  const handleAuthAction = async () => {
    if (action === 'Sign Up') {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        await updateProfile(userCredential.user, { displayName: email, role });

        const user = userCredential.user;
        console.log('User signed up:', user.uid);
      } catch (error) {
        console.error('Error signing up:', error);
      }
    } else if (action === 'Sign In') {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        const user = userCredential.user;
        console.log('User signed in:', user.uid);
      } catch (error) {
        console.error('Error signing in:', error);
      }
    }
  };

  return (
   <View>
     <VolunteerSignUp />
     </View>
   );
 
//     <View>
//       <Text>Authentication Component</Text>
//       <TextInput
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         placeholder="Password"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//       />

//       {action === 'Sign Up' && (
//         <TextInput
//           placeholder="Role (user or volunteer)"
//           value={role}
//           onChangeText={setRole}
//         />
//       )}

//       <Button title={action} onPress={handleAuthAction} />
//       <Button
//         title={action === 'Sign Up' ? 'Switch to Sign In' : 'Switch to Sign Up'}
//         onPress={() => setAction((prevAction) => (prevAction === 'Sign Up' ? 'Sign In' : 'Sign Up'))}
//       />
//     </View>
//   );
// };

export default AuthComponent;
