import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons//Entypo';
import Back from 'react-native-vector-icons//Ionicons';
import {apiClient} from '../../service/Clients';
import {changeName} from '../../redux/Actions/profileAction';
import {useDispatch, useSelector} from 'react-redux';

const InforProfile = ({navigation}) => {
  const userInfo = useSelector(state => state.loginState);
  const username1 = useSelector(state => state.loginState.username);
  const avatar1 = useSelector(state => state.loginState.avatar);

  const dispatch = useDispatch();

  const [inputtext, setinputtext] = useState(username1);

    const handleClick = async () => {
        const data = {
            username: inputtext
        }
        const resultPut = await apiClient.put(`/user/${userInfo.id}`, data)
        Alert.alert(  
            'Trạng Thái',  
            'Thành công',  
            [  
                {  
                    text: 'Cancel',  
                    style: 'cancel',  
                },  
                {text: 'OK'},  
            ]  
        );  
        dispatch(changeName(data))
        
    }



    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Back name='chevron-back-sharp' size={20} color='#20A589' onPress={() => navigation.navigate('ProfileScreen', {inputtext: inputtext})}></Back>
                <Text style={styles.headerText} >Thông tin chung</Text>
                <TouchableOpacity onPress={handleClick}>
                    <Icon name='check' size={20} color='#20A589'></Icon>
                </TouchableOpacity>
            </View>

            <View style={styles.avatarWrap}>
                <Image
                    style={styles.avatar}
                    source={{ uri: avatar1 }}
                />
                <View style={styles.iconView}>
                    <Icon name="camera" size={25} color="#3D9C8A" style={styles.icon} />
                </View>
                <View style={styles.text}>
                    <TextInput maxLength={50} style={styles.inputText} onChangeText={setinputtext} value={inputtext} />
                    {inputtext &&
                        (<Icon.Button name='circle-with-cross' size={20} color="#a5a8a6"
                            backgroundColor="#fff" style={{ marginTop: 10 }} onPress={() => setinputtext('')}>
                        </Icon.Button>)}
                </View>
            </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  avatar: {
    width: '100%',
    height: '80%',
  },
  avatarWrap: {
    position: 'relative',
    marginTop: 10,
  },

  iconView: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '68%',
    right: 0,
    marginLeft: '5%',
  },
  icon: {
    backgroundColor: '#F2EFF0',
    borderRadius: 20,
    padding: 8,
  },
  inputText: {
    width: '90%',
  },
  text: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#EFEFEF',
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



export default InforProfile;
