import { View, Text, StatusBar, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { Video, ResizeMode } from 'expo-av';


const post ={
    id: '1',
    video: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-videos/2.mp4',
}

export default function FeedScreen() {
  return (
    <View style={{flex : 1}}>
        <StatusBar style='auto' />
        <Video
            source={{ uri: post.video }}
            style={[StyleSheet.absoluteFill, {}]}
            resizeMode={ResizeMode.COVER}
            useNativeControls
        />

    </View>
  )
}