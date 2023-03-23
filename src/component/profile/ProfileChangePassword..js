import { View, Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/dist/Entypo';
import Back from 'react-native-vector-icons/dist/Ionicons';
import { apiClient } from '../../service/Clients';
import { changePass } from '../../redux/Actions/profileAction';
import { useSelector } from "react-redux";

const ProfileChangePassword = ({ navigation }) => {

    const userInfo = useSelector(state => state.loginState);
    const oldpass = useSelector(state => state.loginState.password);
    const [passwordVisible, setPasswordVisible] = useState(true);
    const [inputtext, setinputtext] = useState('');
    const [newpass, setnewpass] = useState('');
    const [renewpass, setRenewpass] = useState('');

    const handleClick = async () => {
        if(renewpass === newpass && oldpass === inputtext){
            const data = {
                password: newpass
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
            dispatch(changePass(data))
            
        }
        else{
            Alert.alert('Mật khẩu mới không khớp vui lòng nhập lại')
        }
    }

    return (

        <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                <Back name='chevron-back-sharp' size={20} color='#20A589' onPress={() => navigation.navigate('ProfileScreen')}></Back>
                <Text style={styles.headerText} >Mật khẩu</Text>
                <TouchableOpacity onPress={handleClick}>
                    <Icon name='check' size={20} color='#20A589'></Icon>
                </TouchableOpacity>

            </View>
            <View style={styles.container2}>
                <Text style={{ marginTop: 20 }}>Mật khẩu cũ</Text>
                <View style={styles.oldpassSection}>
                    <TextInput style={styles.oldpass} placeholder='Mật khẩu cũ' onChangeText={setinputtext}
                        value={inputtext} secureTextEntry={true}></TextInput>
                    {inputtext &&
                        (<TouchableOpacity><Icon name='circle-with-cross' size={20} color="#a5a8a6"
                            backgroundColor="visible" onPress={() => setinputtext('')} style={styles.deleteIcon} /></TouchableOpacity>)}
                </View>

                <Text style={{ marginTop: 10 }}>Mật khẩu mới</Text>
                <View style={styles.newpassSection} >
                    <TextInput style={styles.newpass} placeholder='Mật khẩu mới' onChangeText={setnewpass}
                        value={newpass} secureTextEntry={passwordVisible}></TextInput>
                    {newpass &&
                        (<Icon name={passwordVisible ? 'eye' : 'eye-with-line'} size={20} color="#a5a8a6"
                            backgroundColor="visible" onPress={() => setPasswordVisible(!passwordVisible)} style={styles.deleteIcon} />)}
                </View>
                <Text style={{ marginTop: 10 }}>Nhập lại mật khẩu</Text>
                <View style={styles.renewpassSection}>
                    <TextInput style={styles.renewpass} placeholder='Nhập lại mật khẩu' onChangeText={setRenewpass}
                        value={renewpass} secureTextEntry={passwordVisible}></TextInput>
                    {renewpass &&
                        (<Icon name={passwordVisible ? 'eye' : 'eye-with-line'} size={20} color="#a5a8a6"
                            backgroundColor="visible" onPress={() => setPasswordVisible(!passwordVisible)} style={styles.deleteIcon} />)}
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFF',
    },
    container2: {
        paddingLeft: '3%',
        paddingRight: '3%'
    },
    oldpass: {
        flex: 1,
        fontSize: 15,
    },
    newpass: {
        flex: 1,
        fontSize: 15,
    },
    renewpass: {
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
    newpassSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F1F1F1',
    },
    renewpassSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F1F1F1',
    },
    header: {
        backgroundColor: '#FFF',
        padding: 20,
        flexDirection: 'row',
        justifyContent: "space-between",
        elevation: 15,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000'
    }
})

export default ProfileChangePassword;