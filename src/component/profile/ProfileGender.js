import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, {useState} from 'react'
import Icon from 'react-native-vector-icons/dist/Entypo';
import Back from 'react-native-vector-icons/dist/Ionicons';
import { useDispatch, useSelector } from "react-redux";
import { apiClient } from '../../service/Clients';
import { changeSex } from '../../redux/Actions/profileAction';

const ProfileGender = ( {navigation} ) => {

    const userInfo = useSelector(state => state.loginState);
    const gender1 = useSelector(state => state.loginState.gender);
    const [textColor, setColor] = useState(gender1 === 'Nam')
    const [sex, setSex] = useState('')
    const dispatch = useDispatch()
    const handleClick = async () => {
        const data = {
            gender: sex
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
        dispatch(changeSex(data))
    }


    return (
        <SafeAreaView>

            <View style={styles.header}>
                <Back name='chevron-back-sharp' size={20} color='#20A589' onPress={() => navigation.navigate('ProfileScreen',  {gender : sex})} ></Back>
                <Text style={styles.headerText} >Giới tính</Text>
                <TouchableOpacity onPress={handleClick}>
                <Icon name='check' size={20} color='#20A589'></Icon>
                </TouchableOpacity>
                
            </View>

            <Text style={{ marginTop: 20, marginLeft: 20, marginBottom: 10 }}>Chọn giới tính</Text>
            <View style={styles.changeAc}>
                <View style={styles.changeAc1}>
                    <TouchableOpacity 
                        style={[styles.button1, {backgroundColor: textColor?'#1FAD95':'#fff'}]}
                        onPress={() => setColor(true)} onPressIn={() => setSex('Nam')} >
                        <Text style={{color: textColor ? '#fff' : '#1FAD95'  }}>Nam</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.changeAc2}>
                    <TouchableOpacity style={[styles.button2, {backgroundColor: textColor?'#fff':'#1FAD95'}]}
                    onPress={() => setColor(false)} onPressIn={() => setSex('Nữ')}>
                        <Text style={{ color: textColor ? '#1FAD95' : '#fff' }}>Nữ</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
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
        alignItems: 'center'
    },
    button2: {
        padding: 10,
        flex: 1,
        borderTopRightRadius: 9,
        borderBottomRightRadius: 9,
        alignItems: 'center'
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
export default ProfileGender