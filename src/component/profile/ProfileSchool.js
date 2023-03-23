import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/dist/Entypo';
import {apiClient} from '../../service/Clients';
import {changeSchool} from '../../redux/Actions/profileAction';
import {useDispatch, useSelector} from 'react-redux';
import Back from 'react-native-vector-icons/dist/Ionicons';
const ProfileSchool = ({navigation}) => {
  const userInfo = useSelector(state => state.loginState);
  const school1 = useSelector(state => state.loginState.school);
  const [inputtext, setinputtext] = useState(school1);

  const dispatch = useDispatch();

  const handleClick = async () => {
    const data = {
      school: inputtext,
    };
    const resultPut = await apiClient.put(`/user/${userInfo.id}`, data);
    Alert.alert('Trạng Thái', 'Thành công', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {text: 'OK'},
    ]);
    dispatch(changeSchool(data));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Back
          name="chevron-back-sharp"
          size={20}
          color="#20A589"
          onPress={() =>
            navigation.navigate('ProfileScreen', {school: inputtext})
          }></Back>
        <Text style={styles.headerText}>Trường học</Text>
        <TouchableOpacity onPress={handleClick}>
          <Icon name="check" size={20} color="#20A589"></Icon>
        </TouchableOpacity>
      </View>
      <View style={styles.container2}>
        <Text style={{marginTop: 10}}>Nhập tên trường học</Text>
        <View style={styles.oldpassSection}>
          <TextInput
            style={styles.oldpass}
            placeholder="Nhập tên trường học"
            onChangeText={setinputtext}
            value={inputtext}></TextInput>
          {inputtext && (
            <TouchableOpacity>
              <Icon
                name="circle-with-cross"
                size={20}
                color="#a5a8a6"
                backgroundColor="visible"
                onPress={() => setinputtext('')}
                style={styles.deleteIcon}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
  },
  container2: {
    flex: 1,
    paddingLeft: '3%',
    paddingRight: '3%',
    marginTop: 10,
  },
  oldpass: {
    flex: 1,
    fontSize: 15,
  },
  deleteIcon: {
    marginRight: 10,
  },
  oldpassSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F1F1F1',
  },
  header: {
    backgroundColor: '#FFF',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 15,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default ProfileSchool;
