import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import DatePicker from 'react-native-date-picker';
import Check from 'react-native-vector-icons/Entypo';
import Back from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import moment from 'moment';
import {apiClient} from '../../service/Clients';
import {changeDate} from '../../redux/Actions/profileAction';

const ProfileBirthday = ({navigation}) => {
  const userInfo = useSelector(state => state.loginState);
  const [load, setLoad] = useState(false);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const redate = moment(date).format('DD/MM/YYYY');
  const [lastDate, setLastDate] = useState();
  const dispatch = useDispatch();

  const handleClick = async () => {
    const data = {
      date_of_birth: redate,
    };
    setLastDate(redate);
    const resultPut = await apiClient.put(`/user/${userInfo.id}`, data);

    Alert.alert('Trạng Thái', 'Thành công', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {text: 'OK'},
    ]);
    dispatch(changeDate(data));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Back
          name="chevron-back-sharp"
          size={20}
          color="#20A589"
          onPress={() =>
            navigation.navigate('ProfileScreen', {redate: lastDate})
          }></Back>
        <Text style={styles.headerText}>Thông tin chung</Text>
        <TouchableOpacity onPress={handleClick}>
          <Check name="check" size={20} color="#20A589"></Check>
        </TouchableOpacity>
      </View>
      <View style={styles.container2}>
        <Text style={{marginBottom: 10}}>Chọn ngày sinh</Text>
        <View style={styles.oldpassSection}>
          {load ? (
            <Text style={styles.oldpass}>{redate}</Text>
          ) : (
            <Text style={styles.oldpass}>{userInfo.date_of_birth}</Text>
          )}
          {/* <Text style={styles.oldpass} >{redate}</Text> */}

          <TouchableOpacity>
            <Icon
              name="date"
              size={20}
              color="#a5a8a6"
              backgroundColor="visible"
              style={styles.deleteIcon}
              onPress={() => setOpen(true)}
            />
          </TouchableOpacity>
          <DatePicker
            modal
            open={open}
            date={date}
            mode="date"
            onConfirm={date => {
              setOpen(false);
              setDate(date);
              setLoad(true);
            }}
            onCancel={() => {
              setOpen(false);
            }}
            androidVariant="iosClone"
          />
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
    paddingLeft: '3%',
    paddingRight: '3%',
    marginTop: 20,
  },
  oldpass: {
    flex: 1,
    fontSize: 15,
    color: '#000',
    marginLeft: 10,
  },
  deleteIcon: {
    marginRight: 10,
  },
  oldpassSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F1F1F1',
    height: 50,
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
export default ProfileBirthday;
