import React, { useEffect } from 'react'
import { Alert, StyleSheet,Image, TouchableWithoutFeedback, View ,Dimensions} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'

const windowWidth = Dimensions.get('screen').width;
export default function ImageInput({ imageUri , onChangeImage}) {
    useEffect( ()=> {
        requestPermission()
    }, [])
    
    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestCameraRollPermissionsAsync()
        if(!granted) alert('you need to give permission to use library')
    }
    const handleOnPress = () => {
        if(!imageUri ) selectImage()
        else Alert.alert("Delete","Are you sure you want to delete this image",[
            {text:"Yes",onPress:()=>onChangeImage(imageUri,true)},
            {text:"No"}
        ])
    }
    const selectImage = async()=>{
        try {
            const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
                mediaTypes:ImagePicker.MediaTypeOptions.Images
            })
            if(!cancelled) onChangeImage(uri,false)
        }catch(error){
          console.log(error)
        }
      }
    return (
        <TouchableWithoutFeedback onPress = {handleOnPress}>
            <View style = {styles.container}>
                { !imageUri && <MaterialCommunityIcons  name = "camera" size = {50}/> }
                { imageUri && <Image source = {{ uri:imageUri }} style = {styles.image}/> }
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#ccc',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        overflow:'hidden',
        height:windowWidth - 100,
        width:windowWidth,
    },
    image:{
        width:'100%',
        height:'100%',
    }
})
