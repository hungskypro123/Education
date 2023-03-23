
import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
const Home = () => {
    return (
        <View style={styles.contianer}>
            <Text>Hello</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    contianer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});