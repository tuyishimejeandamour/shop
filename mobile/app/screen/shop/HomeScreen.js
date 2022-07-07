import { View, Text, StyleSheet, FlatList, ImageBackground, TouchableHighlight } from 'react-native'
import React from 'react'
import { Feather, FontAwesome } from '@expo/vector-icons'
const HomeScreen = () => {
  const items = [
    {
      imageurl: "https://assets.gqindia.com/photos/5f08622d532fa7831d9d6dff/1:1/w_1080,h_1080,c_limit/most-expensive-perfumes.jpg",
      name: 'Perfume1',
      price: '$ 34.00',
      rate: 3
    },
    {
      imageurl: "https://assets.gqindia.com/photos/5f08622d532fa7831d9d6dff/1:1/w_1080,h_1080,c_limit/most-expensive-perfumes.jpg",
      name: 'Perfume2',
      price: '$ 35.00',
      rate: 4
    },
    {
      imageurl: "https://corporate.static-swaven.com/wp-content/uploads/2020/04/Luxury-perfume1-e1587657546523.jpg",
      name: 'Perfume3',
      price: '$ 44.00',
      rate: 5
    },
    {
      imageurl: "https://corporate.static-swaven.com/wp-content/uploads/2020/04/Luxury-perfume1-e1587657546523.jpg",
      name: 'Perfume4',
      price: '$ 34.00',
      rate: 2
    },
    {
      imageurl: "https://assets.gqindia.com/photos/5f08622d532fa7831d9d6dff/1:1/w_1080,h_1080,c_limit/most-expensive-perfumes.jpg",
      name: 'Perfume4',
      price: '$ 34.00',
      rate: 2
    },
    {
      imageurl: "https://assets.gqindia.com/photos/5f08622d532fa7831d9d6dff/1:1/w_1080,h_1080,c_limit/most-expensive-perfumes.jpg",
      name: 'Perfume4',
      price: '$ 34.00',
      rate: 2
    },
    {
      imageurl: "https://cdn.shopify.com/s/files/1/1343/1285/products/41jP71FNuoL_8a4e6be8-66bd-4ec4-a18b-268e40f9d5d9_480x480@2x.jpg?v=1639208534",
      name: 'Perfume5',
      price: '$ 54.00',
      rate: 5
    }
  ]

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome</Text>
      </View>
      <Text style={{ fontSize: 24, alignItems: 'flex-end', marginBottom: 20, fontWeight: 'bold' }}>New products</Text>
      <View style={styles.product_list}>
        <FlatList
          style={{ flex: 1, height: 400 }}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          data={items}
          renderItem={({ item, index, separator }) => (
            <TouchableHighlight
              key={index}
              style={styles.product_card}
            >
              <ImageBackground resizeMode='stretch' style={styles.card_background_cover} source={{
                uri: item.imageurl
              }}>
                <View style={styles.product_card_content}>
                  <View style={styles.product_header}>
                  </View>
                  <View style={{backgroundColor: '#000'}}>
                    <Text style={styles.product_name}>{item.name}</Text>
                    <View style={styles.product_discription}>
                      <Text style={styles.product_name}>{item.price}</Text>
                      <View style={styles.product_rate}>
                       
                      </View>
                    </View>
                  </View>
                </View>
              </ImageBackground>
            </TouchableHighlight>
          )}

        >
        </FlatList>
      </View>
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
  sort: {
    width: 55,
    padding: 5,
    borderRadius: 4,
    flexDirection: "row",
    backgroundColor: "#dde"

  }
  ,
  sortText: {
    fontSize: 11,

  },
  sort_container: {
    marginTop: 10,
    width: "100%",
    flexDirection: "row",
    paddingRight: 20,
    justifyContent: "flex-end"
  },
  product_card: {
    width: 170,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: '#fff',
    marginRight: 10,
    height: 170,
    borderRadius: 20,
    marginBottom: 10,
    backgroundColor: "#cce",
    shadowColor: "#475050",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.22,
    shadowRadius: 9.22,
    elevation: 12
  },
  product_card_content: {
    width: 142,
    height: 142,
    justifyContent: 'space-between'
  },
  card_background_cover: {
    borderRadius: 20,
    flex: 1,
    width: 170,
    justifyContent: "center",
    alignItems: 'center'
  },
  product_header: {
    flexDirection: "row",
    justifyContent: 'flex-end'
  }
  ,
  addcart: {
    marginLeft: 10
  },
  product_name: {
    color: 'white'
  }
  ,
  product_discription: {
    flexDirection: "row"
  },
  product_rate: {
    flexDirection: "row",
    marginLeft: 10
  },
  sort_icon: {
    justifyContent: "center",
    alignContent: "center",
  }
})

export default HomeScreen