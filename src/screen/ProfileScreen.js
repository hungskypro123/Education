import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Image,
  Switch,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import IconE from 'react-native-vector-icons/Entypo';
import {useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const ProfileScreen = ({route, navigation}) => {
  const userInfo = useSelector(state => state.loginState);
  const username1 = useSelector(state => state.loginState.username);
  const email1 = useSelector(state => state.loginState.email);
  const date1 = useSelector(state => state.loginState.date_of_birth);
  const gender1 = useSelector(state => state.loginState.gender);
  const school1 = useSelector(state => state.loginState.school);
  const image1 = useSelector(state => state.loginState.avatar);

  const [name, setName] = useState(username1);
  const [school, setSchool] = useState(school1);
  const [date, setDate] = useState(date1);
  const [gender, setGender] = useState(gender1);
  const [textColor, setColor] = useState(true);
  const [position, setPosition] = useState('');

  const [isEnabled, setIsEnabled] = useState(true);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const obData = route.params;

  useEffect(() => {
    navigation.addListener('focus', () => {
      if (obData?.inputtext) {
        setName(obData?.inputtext);
      } else if (obData?.school) {
        setSchool(obData?.school);
      } else if (obData?.redate) {
        setDate(obData?.redate);
      } else if (obData?.gender) {
        setGender(obData?.gender);
      }
    });
  });

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await auth().signOut();
      // Google Account disconnected from your app.
      // Perform clean-up actions, such as deleting data associated with the disconnected account.
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.safearea}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.title}>
            <Text style={styles.textTitle}>Tài khoản </Text>
          </View>
          <View style={styles.avatarView}>
            <View style={styles.avatarWrap}>
              <Image style={styles.avatar} source={{uri: image1}} />
              <View style={styles.iconView}>
                <IconE
                  name="camera"
                  size={25}
                  color="#3D9C8A"
                  style={styles.icon}></IconE>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate('InforProfile')}>
              <Text style={styles.avatarText}>{name}</Text>
            </TouchableOpacity>
            <Text style={{marginTop: 5}}>Hoc Vien</Text>
          </View>

          <View style={{marginLeft: '5%'}}>
            <Text style={styles.infoText}>Thông tin</Text>
          </View>

          <View style={styles.info}>
            <View style={styles.inforrow}>
              <Text style={styles.settingText}>Domain</Text>
              <Text>{email1}</Text>
              <Text></Text>
            </View>

            <View style={styles.inforrow}>
              <Text style={styles.settingText}>Tên Đăng Nhập</Text>
              <Text style={{marginRight: '21%'}}>{username1}</Text>
              <Text></Text>
            </View>

            <View style={styles.inforrow}>
              <Text style={styles.settingText}>Mật Khẩu</Text>
              <Text>*******</Text>
              <IconE
                name="chevron-thin-right"
                size={15}
                color="#000"
                style={{backgroundColor: '#FFF', marginRight: 20}}
                onPress={() =>
                  navigation.navigate('ProfileChangePassword')
                }></IconE>
            </View>

            <View style={styles.inforrow}>
              <Text style={styles.settingText}>Ngày sinh</Text>
              <Text>{date}</Text>
              <IconE
                name="chevron-thin-right"
                size={15}
                color="#000"
                style={{backgroundColor: '#FFF', marginRight: 20}}
                onPress={() => navigation.navigate('ProfileBirthday')}></IconE>
            </View>

            <View style={styles.inforrow}>
              <Text style={styles.settingText}>Giới tính</Text>
              <Text>{gender}</Text>
              <IconE
                name="chevron-thin-right"
                size={15}
                color="#000"
                style={{backgroundColor: '#FFF', marginRight: 20}}
                onPress={() => navigation.navigate('ProfileGender')}
              />
            </View>

            <View style={styles.inforrow}>
              <Text style={styles.settingText}>Trường học</Text>
              <Text>{school}</Text>
              <IconE
                name="chevron-thin-right"
                size={15}
                color="#000"
                style={{backgroundColor: '#FFF', marginRight: 20}}
                onPress={() => navigation.navigate('ProfileSchool')}
              />
            </View>
          </View>

          <View style={{marginTop: '3%', marginLeft: '5%', fontWeight: 'bold'}}>
            <Text style={styles.infoText}>Cài đặt</Text>
          </View>

          <View style={styles.setting}>
            <View style={styles.inforrow}>
              <Text style={styles.settingText}>Nhận thông báo</Text>

              <Text style={{marginLeft: '50%'}}>
                {isEnabled ? 'Bật' : 'Tắt'}
              </Text>
              <Switch
                trackColor={{false: '#767577', true: '#1FAD95'}}
                thumbColor={isEnabled ? '#FFFFFF' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>

            <View style={styles.inforrow}>
              <Text style={styles.settingText}>Báo lỗi</Text>
            </View>

            <View style={styles.inforrow}>
              <Text style={styles.settingText}>Thông tin phần mềm</Text>
            </View>
          </View>

          <View style={{marginTop: '3%', marginLeft: '5%', fontWeight: 'bold'}}>
            <Text style={styles.infoText}>Chuyển tài khoản</Text>
          </View>

          <View style={styles.changeAc}>
            <View style={styles.changeAc1}>
              <TouchableOpacity
                style={[
                  styles.button1,
                  {backgroundColor: textColor ? '#1FAD95' : '#fff'},
                ]}
                onPress={() => setColor(true)}
                onPressIn={() => setPosition('Học Viên')}>
                <Text style={{color: textColor ? '#fff' : '#1FAD95'}}>
                  Học viên
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.changeAc2}>
              <TouchableOpacity
                style={[
                  styles.button2,
                  {backgroundColor: textColor ? '#fff' : '#1FAD95'},
                ]}
                onPress={() => setColor(false)}
                onPressIn={() => setPosition('Giảng viên')}>
                <Text style={{color: textColor ? '#1FAD95' : '#fff'}}>
                  Giảng viên
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => {
                signOut();
                navigation.navigate('Login');
              }}
              style={{flexDirection: 'row'}}>
              <Icon
                name="poweroff"
                size={30}
                color="#F7980D"
                style={{marginLeft: 20}}
              />
              <Text
                style={{
                  fontSize: 20,
                  color: '#F7980D',
                  marginLeft: '2%',
                  fontWeight: 'bold',
                }}>
                Đăng xuất
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingBottom: 100,
  },
  safearea: {
    flex: 1,
  },
  title: {
    marginTop: '5%',
    marginLeft: '5%',
  },
  textTitle: {
    color: '#0F0F0F',
    fontSize: 25,
    fontWeight: 'bold',
  },
  avatar: {
    width: '10%',
    height: '20%',
    borderRadius: 200,
    borderWidth: 70,
  },
  avatarView: {
    alignItems: 'center',
    marginTop: 10,
  },
  avatarWrap: {
    position: 'relative',
  },
  avatarText: {
    fontSize: 20,
    color: '#0F0F0F',
    fontWeight: 'bold',
    marginTop: '5%',
    marginLeft: '5%',
  },
  info: {
    marginTop: '3%',
    marginLeft: '5%',
    justifyContent: 'space-around',
  },
  infoText: {
    fontSize: 22,
    color: '#0F0F0F',
    fontWeight: 'bold',
  },
  inforrow: {
    flexDirection: 'row',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#EFEFEF',
    paddingBottom: 10,
    justifyContent: 'space-between',
  },
  setting: {
    marginTop: '3%',
    marginLeft: '5%',
    justifyContent: 'space-around',
  },
  settingText: {
    fontSize: 15,
    color: '#0F0F0F',
    fontWeight: '500',
  },
  changeAc: {
    marginTop: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#1FAD95',
    margin: '5%',
  },
  changeAc1: {
    flex: 1,
  },
  changeAc2: {
    flex: 1,
  },
  button1: {
    padding: 10,
    borderTopLeftRadius: 9,
    borderBottomLeftRadius: 9,
    alignItems: 'center',
  },
  button2: {
    padding: 10,
    flex: 1,
    borderTopRightRadius: 9,
    borderBottomRightRadius: 9,
    alignItems: 'center',
  },
  iconView: {
    backgroundColor: '#FFF',
    borderRadius: 25,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  icon: {
    backgroundColor: '#F2EFF0',
    padding: 5,
    borderRadius: 25,
  },
});

export default ProfileScreen;
