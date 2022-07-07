import { View, Text } from 'react-native';
import React from 'react';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { useNavigation } from '@react-navigation/native';
import { removeToken } from '../../services/AsyncStorageService';
import { useSelector } from 'react-redux';
import { unSetUserInfo } from '../../features/userSlice';
import { unsetUserToken } from '../../features/authSlice';
const SideBar = ({ ...props }) => {

  const handleLogout = async () => {
    unSetUserInfo({ email: "", name: "" })
    unsetUserToken({ token: null })
    await removeToken('token')
    navigation.navigate('Home');
  }

  const navigation = useNavigation()
  // Getting User Data from Redux Store
  const myData = useSelector(state => state.user)
  // const myToken = useSelector(state => state.auth)
  // console.log(myToken)
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ margin: 0,paddingTop: 30, paddingLeft: 20, paddingBottom: 10,height: 90,backgroundColor:'#246EE9' }}>
        <Text style={{ fontSize: 18, marginBottom: 5, fontWeight: 'bold',color:'white' }}>{myData.name}</Text>
        <Text style={{ fontSize: 16, marginBottom: 5,color:'white' }}>{myData.email}</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem label='Logout' onPress={handleLogout} />
    </DrawerContentScrollView>
  );
};

export default SideBar