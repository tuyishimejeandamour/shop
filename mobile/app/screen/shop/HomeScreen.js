import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome</Text>
      </View>    
      <Text style={{ fontSize: 34, fontWeight: 'bold' }}>HomeScreen</Text>
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>All Products</Text>
    </View>
  )
}

const styles = StyleSheet.create({ 
  container: {      
    flex: 1,    
    alignItems: 'center',   
    backgroundColor: '#F5FCFF',
  },
  header: {
    backgroundColor: '#246EE9',   
    height: 150,    
    width: '90%',
    justifyContent: 'center', 
    alignItems: 'center',   
    marginTop: 15,
    marginBottom: 15, 
    paddingLeft: 20,  
    paddingRight: 20,     
    borderRadius: 10, 
    shadowColor: '#000',  
    shadowOffset: { width: 0, height: 2 },    
    shadowOpacity: 0.8, 
    shadowRadius: 2,  
    elevation: 1,

  },  
  headerText: {     
    color: 'white',
    fontSize: 30,   
    fontWeight: 'bold', 
    marginTop: 10,
    marginBottom: 10,     
  },    
  welcome: {  
    fontSize: 20,   
    textAlign: 'center',  
    margin: 10,   
    color: '#333333',
  }
})

export default HomeScreen