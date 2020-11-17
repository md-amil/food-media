import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { SimpleLineIcons, Octicons,FontAwesome5,EvilIcons } from '@expo/vector-icons';


export default function ItemMenuCard() {
    return (
        <View style = {styles.container}>
            <View style = {styles.like}>
                <SimpleLineIcons name="fire" size={25} />
                <Text style = {styles.text}>1.2K</Text>    
            </View>
            <View style = {styles.comment}>
                <Octicons name="comment" size={25} />
                <Text style = {styles.text}>300</Text>    
            </View>
            <View style = {styles.share}>
                <FontAwesome5 name="telegram-plane" size={26} />      
            </View>
            <View style = {styles.tag}>
                <EvilIcons name="tag" size={36} color="black" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:"space-around",
        alignItems:'center',
        backgroundColor:'#fff',
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
        width:'90%',
        height:70,
        elevation:7,
        //for ios 
        // shadowColor: 'black',
        // shadowOffset: { width: 5, height: 5 },
        // shadowOpacity: 0.5,
        // shadowRadius: 5,
    },
    tag:{
        top:-10
    },
    share:{
        top:-10
    },
    text:{
        fontSize:12,
        textAlign:'center'
    }
})
