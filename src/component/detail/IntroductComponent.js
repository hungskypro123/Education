import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import CommentComponent from './CommentComponent';
import ContentComponent from './ContentComponent';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
export default function IntroductComponent({handleCLick}) {
  const content = useSelector(state => state.listStateHome);
  const Tab = createMaterialTopTabNavigator();

  const Introduces = () => {
    const lesson = useSelector(state => state.listStateHome.name);
    const introduce = useSelector(state => state.listStateHome.introduce);
    const avatar1 = useSelector(state => state.loginState.avatar);
    const nameLecturers = useSelector(state => state.loginState.username);

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.styleScrollView}>
        <View
          style={{
            width: '100%',
            height: '100%',
          }}>
          <View style={styles.styleViewContent}>
            <View style={{marginBottom: 10}}>
              <Text style={styles.textTiltelSubject}>{lesson}</Text>
            </View>

            <View>
              <Text numberOfLines={2} style={styles.textTitleLesson}>
                {introduce}
              </Text>
            </View>
          </View>

          <View style={styles.styleViewImage}>
            <Image
              style={styles.avatar}
              source={{
                uri: avatar1,
              }}
            />
            <View style={styles.styleViewTextTeacher}>
              <Text style={{fontWeight: '500'}}>Giảng viên</Text>
              <Text style={styles.textNameLecturers}>{nameLecturers}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: '700',
          textTransform: 'none',
        },
      }}>
      <Tab.Screen name="Giới Thiệu" component={Introduces} />
      <Tab.Screen name="Nội Dung" component={ContentComponent} />
      <Tab.Screen name="Bình Luận" component={CommentComponent} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  styleScrollView: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
  },
  styleComment: {
    width: '100%',
    height: '48%',
    backgroundColor: 'green',
    paddingBottom: 100,
  },
  textTiltelSubject: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  textTitleLesson: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
  },
  avatar: {
    width: '10%',
    borderRadius: 100,
    borderWidth: 22,
  },

  styleViewContent: {
    borderBottomWidth: 1,
    borderColor: '#EFEFEF',
    paddingVertical: 30,
    marginLeft: '5%',
    marginRight: '5%',
  },

  styleViewImage: {
    paddingHorizontal: 15,
    paddingVertical: 30,
    flexDirection: 'row',
  },

  styleViewTextTeacher: {
    flexDirection: 'column',
    alignItems: 'baseline',
    justifyContent: 'center',
    marginLeft: 15,
    width: '88%',
  },

  textNameLecturers: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
  },
});
