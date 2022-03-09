import React from 'react';

import { View, Text, StyleSheet, Image } from 'react-native';
import styles from './style'

export default function ChatRoomItem(){
    return (
        <View style={styles.container}>
            <Image source={{ uri:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png' }} style={styles.image}/>
            <View style={styles.badgeContainer}>
                <Text style={styles.badgeText}>4</Text>  
            </View>
            <View style={styles.containerR}>
                <View style={styles.row}>
                    <Text style={styles.name}>Elon Musk</Text>
                    <Text style={styles.hour}>11:11 AM</Text>
                </View>  
                <Text numberOfLines={1} style={styles.text}>¿Encontraste lo que te encargue? Puede ser que no tengamos más tiempo.</Text>
            </View>
        </View>
    );
}