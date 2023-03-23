// import React, {useEffect} from 'react';
// import {View, Text} from 'react-native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import ProfileScreen from '../../src/screen/ProfileScreen';
// import Home from '../screen/Home';
// import LearningList from '../screen/LearningList';
// import DetailScreen from '../screen/DetailScreen';
// import PersonalStack from './personalStack';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// const Tab = createBottomTabNavigator();

// const TabBottom = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       screenOptions={{
//         headerShown: false,
//         tabBarHideOnKeyboard: true,
//         tabBarActiveTintColor: 'tomato',
//         tabBarInactiveTintColor: 'gray',
//       }}>
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{
//           title: 'Home',
//           tabBarIcon: ({focused}) => (
//             <MaterialIcons
//               name="home"
//               size={focused ? 35 : 24}
//               color={focused ? 'tomato' : 'gray'}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="LearningList"
//         component={LearningList}
//         options={{
//           title: 'LearningList',
//           tabBarIcon: ({focused}) => (
//             <Ionicons
//               name="md-glasses-outline"
//               size={focused ? 35 : 24}
//               color={focused ? 'tomato' : 'gray'}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Detail"
//         options={{
//           title: 'Detail',
//           tabBarIcon: ({focused}) => (
//             <Ionicons
//               name="notifications-outline"
//               size={focused ? 35 : 24}
//               color={focused ? 'tomato' : 'gray'}
//             />
//           ),
//         }}
//         component={DetailScreen}
//       />
//       <Tab.Screen
//         name="Profile"
//         options={{
//           title: 'Profile',
//           tabBarIcon: ({focused}) => (
//             <MaterialIcons
//               name="supervised-user-circle"
//               size={focused ? 35 : 24}
//               color={focused ? 'tomato' : 'gray'}
//             />
//           ),
//         }}
//         component={PersonalStack}
//       />
//     </Tab.Navigator>
//   );
// };

// export default TabBottom;
