import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import YoutubeComponent from '../component/detail/YoutubeComponent';
import IntroductComponent from '../component/detail/IntroductComponent';

export default function DetailScreen() {
  return (
    <View>
      <YoutubeComponent />
    </View>
  );
}

const styles = StyleSheet.create({});
