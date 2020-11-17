import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import ImageInput from './ImageInput'


export default function ImageInputList({imageUris = [], onRemoveImage,onAddImage,}) {
    return (
        <ScrollView horizontal>
            <View style = {styles.container} >
                { imageUris.map((uri) => (
                        <ImageInput
                            imageUri = {uri}
                            key = {uri}
                            onChangeImage = {(uri)=>onChangeImage(uri)}
                        />
                    ))}
                <ImageInput onChangeImage = {(uri)=>onAddImage(uri)} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row'
    }
})
