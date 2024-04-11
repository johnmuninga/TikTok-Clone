import { View, Text, StatusBar, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { Video, ResizeMode } from 'expo-av';


const post ={
    id: '1',
    video: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-videos/2.mp4',
    caption: 'Check out this video',
}

export default function FeedScreen() {
  return (
    <View style={styles.container}>
        <StatusBar style='auto' />
        <Video
            source={{ uri: post.video }}
            style={[StyleSheet.absoluteFillObject, styles.video]}
            resizeMode={ResizeMode.COVER}
        />
        <SafeAreaView>
            <View style={styles.content}>
                <Text style={styles.caption}>{post.caption}</Text>
                <View style={styles.footer}>
                    <Text style={styles.caption}>{post.caption}</Text>
                </View>
            </View>
        </SafeAreaView>

    </View>
  )
}

const styles = StyleSheet.create({
    container : {flex : 1},
    video: {
        
    },
    content: {
        flex: 1,
        //backgroundColor: `rgba(0,0,0,0.5)`
    },
    footer:{
       marginTop: 'auto', 
    },
    caption: {
        fontSize: 50,
        color: 'white',
        zIndex: 1, 
        position: 'absolute', 
        left: 20, 

    }
})