import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList, Animated } from 'react-native'
import ImageInput from './ImageInput'

const { width } = Dimensions.get('window')

const Carousel = ({imageUris = [], onRemoveImage, onAddImage}) => {
    const scrollX = new Animated.Value(0)
    let position = Animated.divide(scrollX, width)
        const handleChange = (uri,isDelete)=>{
            if(isDelete) onRemoveImage(uri)
            else onAddImage(uri)
        }
        return (
            <View>
                <FlatList data={imageUris}
                    // ref = {(flatList) => {this.flatList = flatList}}
                    keyExtractor={(item, index) => 'key' + index}
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    snapToAlignment="center"
                    scrollEventThrottle={16}
                    decelerationRate={"fast"}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item}) => {
                        return <ImageInput imageUri={item.uri} onChangeImage = {(uri,isDelete)=>handleChange(uri,isDelete)} />
                    }}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        {useNativeDriver: false}
                    )}
                />
                <View style={styles.dotContainer}>
                    {imageUris.map((_, i) => {
                        let opacity = position.interpolate({
                            inputRange: [i - 1, i, i + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp'
                        })
                        return (
                            <Animated.View
                                key={i}
                                style={{ opacity, height: 10, width: 10, backgroundColor: 'black', margin: 8, borderRadius: 5 }}
                            />
                        )})}
                </View>
            </View>
        )
}

const styles = StyleSheet.create({
    dotContainer: { 
        flexDirection: 'row', 
        justifyContent: 'center',
        position:'absolute',
        alignSelf:'center',
        bottom:10
    }
})

export default Carousel