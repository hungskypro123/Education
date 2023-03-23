import React from 'react';
import ProfileScreen from '../screen/ProfileScreen';
import ProfileChangePassword from '../component/profile/ProfileChangePassword.';
import ProfileBirthday from '../component/profile/ProfileBirthday';
import InforProfile from '../component/profile/InforProfile';
import ProfileSchool from '../component/profile/ProfileSchool';
import ProfileGender from '../component/profile/ProfileGender';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const PersonalStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerTitleAlign: 'center'}}
      initialRouteName="ProfileScreen">
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: 'ProfileScreen',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ProfileChangePassword"
        component={ProfileChangePassword}
        options={{
          title: 'Mật Khẩu',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ProfileBirthday"
        component={ProfileBirthday}
        options={{
          title: 'Ngày sinh',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="InforProfile"
        component={InforProfile}
        options={{
          title: 'Thông tin chung',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ProfileSchool"
        component={ProfileSchool}
        options={{
          title: 'Trường học',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ProfileGender"
        component={ProfileGender}
        options={{
          title: 'Giới tính',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default PersonalStack;
