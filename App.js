import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getDocs, collection, query, where,  addDoc, getFirestore } from 'firebase/firestore';
import Login from './Components/Log-in';
import SignUp from './Components/signup';
import Home from './Components/Home';


const Stack = createNativeStackNavigator();

export default function App() {

  const db = getFirestore();

  const [profile, setProfile] = useState({});

  const productsCollection = collection(db, 'profiles')

    const getProfile = async() =>{
        const q = query(productsCollection, where('email', '==', auth.currentUser.email));
        const querySnapShots = await getDocs(q);
    
        let tmpProfile = [];
    
        querySnapShots.forEach(
        (profile) => {
            console.log(profile.data());
        //   tmpProfile.push({...profile.data(), id: profile.id});
          tmpProfile = profile.data();
          console.log(tmpProfile);
        }
        );
    
        setProfile(tmpProfile);
    }

      console.log(profile)

    useEffect(()=>{
        // console.log( auth.currentUser.email);
        getProfile();
      },[])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' options={{title:'Login'}}>
          {(props) => <Login {...props} />}
        </Stack.Screen>

        <Stack.Screen name='SignUp' options={{title:'SignUp'}}>
          {(props) => <SignUp {...props} />}
        </Stack.Screen>

        <Stack.Screen name='Home' options={{title:'Home'}}>
          {(props) => <Home {...props} />}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
