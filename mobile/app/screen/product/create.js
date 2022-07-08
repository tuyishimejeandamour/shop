import { View, Text, Button, TextInput, TouchableWithoutFeedback, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { styles, toastConfig } from '../../../style';
import Toast from 'react-native-toast-message';
import Checkbox from 'expo-checkbox';
import { useRegisterUserMutation } from '../../../services/userAuthApi';
import { storeToken } from '../../../services/AsyncStorageService';
import { usePostAllMutation } from '../../../services/productsApi';

const CreateProductScreen = () => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setprice] = useState("")
  const [imageUrl, setImageUrl] = useState("")

  const clearTextInput = () => {
    setName('')
    setDescription('')
    setprice('')
    setImageUrl('')
  }
  const navigation = useNavigation()

  const [postAll] = usePostAllMutation()

  const handleFormSubmit = async () => {
    if (name && description && price && imageUrl ) {
      if (imageUrl.length > 10) {	
        const formData = { name,description,price, imageUrl}
        const res = await postAll(formData)
        if (res.data.status === "success") {
          clearTextInput()
          navigation.navigate('UserPanelTab')
        }
        if (res.data.status === "failed") {
          Toast.show({
            type: 'warning',
            position: 'top',
            topOffset: 0,
            text1: res.data.message
          })
        }
      } else {
        Toast.show({
          type: 'warning',
          position: 'top',
          topOffset: 0,
          text1: "url in invalid"
        })
      }
    } else {
      Toast.show({
        type: 'warning',
        position: 'top',
        topOffset: 0,
        text1: "All fields are Required"
      })
    }
  }
  return (
    <SafeAreaView>
      <Toast config={toastConfig} />
      <ScrollView keyboardShouldPersistTaps='handled'>
        <View style={{ marginHorizontal: 30,height: '100%',justifyContent: 'center' }}>
          <View style={styles.inputWithLabel}>
            <Text style={styles.labelText}>Name</Text>
            <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Write Your Name" />
          </View>
          <View style={[styles.inputWithLabel, { marginBottom: 10 }]}>
            <Text style={styles.labelText}>Description</Text>
            <TextInput style={styles.input} value={description} onChangeText={setDescription} placeholder="Write Your Description"  />
          </View>
          <View style={styles.inputWithLabel}>
            <Text style={styles.labelText}>price</Text>
            <TextInput style={styles.input} value={price} onChangeText={setprice} placeholder="Enter the price" keyboardType='numeric' />
          </View>
          <View style={styles.inputWithLabel}>
            <Text style={styles.labelText}>imageUrl</Text>
            <TextInput style={styles.input} value={imageUrl} onChangeText={setImageUrl} placeholder="Enter your Image url"  />
          </View>
    
          <View style={{ width: 200, alignSelf: 'center', margin: 20 }}>
            <Button title='Create' onPress={handleFormSubmit} color='#246EE9' />
          </View>
         
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default CreateProductScreen