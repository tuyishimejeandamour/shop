import { View, Text, StyleSheet } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from './HomeScreen';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { getToken } from '../../../services/AsyncStorageService';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
const Drawer = createDrawerNavigator();
const ShopTab = () => {
  const [userLToken, setUserLToken] = useState()
  const navigation = useNavigation()
  useEffect(() => {
    (async () => {
      const token = await getToken() // Getting Token from Storage
      setUserLToken(token)          // Store Token in Local State
    })();
  })
  const handleUserAuth = () => {
    if (userLToken) {
      navigation.navigate('UserPanelTab', { screen: 'Dashboard' })
    } else {
      navigation.navigate('UserLogin')
    }
  }

  return (
    <Drawer.Navigator screenOptions={{ headerStyle: { backgroundColor: 'white' }, headerTintColor: '#246EE9', drawerStyle: { backgroundColor: '#246EE9',paddingTop: 40 } }}>

      <Drawer.Screen name="Home" component={HomeScreen} options={{
        headerTitle: 'Welcome', drawerActiveTintColor: 'white', headerRight: () => <TouchableWithoutFeedback onPress={handleUserAuth}>
          {userLToken ? <FontAwesome5 name="dashcube" size={24} style={styles.login} /> : <AntDesign name="login" style={styles.login} size={24}  />}

        </TouchableWithoutFeedback>
      }} />

    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
   login:{
    color: '#246EE9',
    fontSize: 18, 
    fontWeight: 'bold',
    paddingRight: 20    
    
   }
}   
);     


export default ShopTab