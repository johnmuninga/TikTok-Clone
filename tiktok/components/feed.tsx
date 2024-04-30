import { View, Text, StatusBar, SafeAreaView, StyleSheet, Pressable, FlatList } from 'react-native'
import React, { useCallback, useRef, useState } from 'react'
import { Video, ResizeMode, AVPlaybackStatus } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import VideoPost from './VideoPost';




const posts =[
    {
        id: '1',
        video: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-videos/1.mp4',
        caption: 'Hey There',
    },
    {
        id: '2',
        video: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-videos/2.mp4',
        caption: 'Check out this video',
    },
    {
        id: '3',
        video: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-videos/3.mp4',
        caption: 'We are committed',
    },
    {
    id: '4',
    video: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-videos/4.mp4',
    caption: 'Piano Practice',
},
{
    id: '5',
    video: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-videos/5.mp4',
    caption: 'Hello World',
}
]

export default function FeedScreen() {
    const [activePostId, setActivePostId] = useState(posts[0].id)
    const onViewableItemsChanged = useCallback(({changed, viewableItems}) => {
        if(viewableItems.length > 0 && viewableItems[0].isViewable){
            setActivePostId(viewableItems[0].item.id)
        }
    }, [])
   
  return (
    <View style={styles.container}>
        <StatusBar barStyle={'light-content'}  />
        <FlatList
            data={posts}
            renderItem={({item}) => <VideoPost post={item} activePostId={activePostId} />}
            pagingEnabled
            showsVerticalScrollIndicator={false}
            viewabilityConfig={{
                itemVisiblePercentThreshold: 50
            }}
            onViewableItemsChanged={onViewableItemsChanged}
        />

    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor: 'black',
    },

    
})