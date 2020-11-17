import React from 'react'
import { StyleSheet, Text, View ,Image} from 'react-native'

const items = [
    {
        source:require('../../assets/food.jpeg')
    },
    {
        source:require('../../assets/food.jpeg')
    },
]
export default function ListingItem() {
    return (
        <View style = {styles.container}>
            {/* <Image
                style = {styles.image}
                source={require('../../assets/food.jpeg')}
            /> */}
            <Gallery
                style={{ flex: 1, backgroundColor: 'black' }}
                initialPage="1"
                //initial image to show
                images={items}
            />
            <Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:300
    },
    image: {
        width: null,
        height: 300,
        resizeMode: 'cover'
    }
})
