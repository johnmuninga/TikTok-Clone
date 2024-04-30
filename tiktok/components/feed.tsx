import { View, Text, StatusBar, SafeAreaView, StyleSheet, Pressable } from 'react-native'
import React, { useRef, useState } from 'react'
import { Video, ResizeMode, AVPlaybackStatus } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';




const post ={
    id: '1',
    video: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-videos/2.mp4',
    caption: 'Check out this video',
}

export default function FeedScreen() {
    const [status, setStatus] = useState<AVPlaybackStatus>({} as any)
    const video = useRef<Video>(null)
    const isPlaying = status.isLoaded && status.isPlaying;
    const onPress = ()  => {
        console.warn('Post Liked');
        if(!video.current){
            return;
        }
        if(isPlaying){
            video.current.pauseAsync();
        }
        else{
            video.current.playAsync();
        }
        
    }
  return (
    <View style={styles.container}>
        <StatusBar barStyle={'light-content'}  />
        <Video
            ref={video}
            source={{ uri: post.video }}
            style={[StyleSheet.absoluteFillObject, styles.video]}
            resizeMode={ResizeMode.COVER}
            isLooping
            onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
        <Pressable onPress={onPress} style={styles.content}>
            <LinearGradient colors={['transparent', 'rgba(0,0,0,0.6)']}
            style={[StyleSheet.absoluteFillObject, styles.overlay]}
            />
            <SafeAreaView style={{flex:1}}>
                <View style={styles.footer}>
                    <View style={styles.leftColumn}>
                        <Text style={styles.caption}>{post.caption}</Text>
                    </View>
                    <View style={styles.rightColumn}>
                        <Ionicons name="heart" size={35} color="white" />
                        <Ionicons name="share-social-sharp" size={35} color="white" />
                        <FontAwesome name="commenting" size={35} color="white" />
                        <Ionicons name="bookmark" size={35} color="white" />
                    </View>
                </View>
            </SafeAreaView>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {flex : 1},
    video: {
        
    },
    content: {
        flex: 1,
        padding: 10
    },
    footer:{
       marginTop: 'auto', 
       flexDirection: 'row',
       alignItems: 'flex-end',
    },
    caption: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Avenir'
        
    },
    overlay: {
        top: '50%'
    },
    leftColumn: {
        flex: 1
    },
    rightColumn: {
        gap: 10,
    }
})