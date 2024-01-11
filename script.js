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

export default RoleSelection;


//delete 
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


export default RoleSelection;



//delete 2
function resetAllMenus() {
  setTimeout(function () {
    var x = document.getElementsByClassName("multiSelect");
    var i;
    for (i = 1; i < x.length; i++) {
      x[i].style.transform = "translateX(100%)";
      x[i].style.clipPath = "polygon(0 0, 0 0, 0 100%, 0% 100%)";
    }
    document.querySelectorAll(".multiSelect")[0].style.transform =
      "translateX(0)";
    document.querySelectorAll(".multiSelect")[0].style.clipPath =
      "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
  }, 300);
}

