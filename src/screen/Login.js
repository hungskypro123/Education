import React, {useCallback, useEffect, useState} from 'react';
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Eye from 'react-native-vector-icons/Entypo';
import validateLoginInput from '../utils/validate/loginValidata';
import {lockAndKey, logoGoogle} from '../access/images';
import {apiClient} from './../service/Clients';
import toast from '../toast/toast';
import {useDispatch} from 'react-redux';
import {login} from '../redux/Actions/loginAction';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const Login = ({navigation}) => {
  const [textEmail, onChangeText] = useState('');
  const [textpassWord, onChangeNumber] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [listUser, setListUser] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getUsers();
    GoogleSignin.configure({
      webClientId:
        '310795291423-5u52eev0098o2p9rtqgr74kc16rdsvfh.apps.googleusercontent.com',
    });
  }, []);

  const googleSignIn = async function () {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  };

  const dispatch = useDispatch();

  async function getUsers() {
    setIsLoading(true);
    const res = await apiClient.get('/user');
    const users = res.data;
    setListUser(users);
    setIsLoading(false);
    // console.log(users);
  }

  const handleLoginGoogle = () => {
    googleSignIn()
      .then(async res => {
        const userGoogle = res.user;
        let userExist = listUser?.find(user => user.email === userGoogle.email);
        // console.log(userGoogle);
        if (userExist) {
          dispatch(login(userExist));
          navigation.replace('TabBottom');
        } else {
          const userPost = {
            email: userGoogle.email,
            username: userGoogle.displayName,
          };
          const resultPost = await apiClient.post('/user', userPost);
          dispatch(login(resultPost.data));
          navigation.replace('TabBottom');
        }
      })
      .catch(error => console.log(error));
  };

  async function getUsers() {
    setIsLoading(true);
    const res = await apiClient.get('/user');
    const users = res.data;
    setListUser(users);
    setIsLoading(false);
    // console.log(users);
  }

  const handleLogin = () => {
    const {errors, isValid} = validateLoginInput({textEmail, textpassWord});
    if (isValid) {
      let userExist = listUser?.find(user => user.email === textEmail);
      if (userExist && userExist.password === textpassWord) {
        dispatch(login(userExist));
        navigation.replace('TabBottom');
      } else {
        toast.info({message: 'email hoặc password không đúng', duration: 1000});
      }
    } else {
      setPhoneError(errors.phone);
      setPasswordError(errors.password);
    }
  };

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

  const handleChangeEmail = e => {
    onChangeText(e);
    setPhoneError('');
  };

  const handleChangePassword = e => {
    onChangeNumber(e);
    setPasswordError('');
  };

  return (
    <View style={{flex: 1}}>
      {isLoading ? (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}>
          <Text style={{fontSize: 32, fontWeight: '700'}}>...LOADING</Text>
        </View>
      ) : (
        listUser && (
          <LinearGradient
            colors={['#024D91', '#024D91']}
            style={styles.container}>
            <View style={styles.header}>
              <Image
                source={{uri: lockAndKey}}
                style={styles.logo}
                resizeMode="stretch"
              />
            </View>
            <View style={styles.footer}>
              <TextInput
                style={styles.input}
                onChangeText={e => handleChangeEmail(e)}
                value={textEmail}
                placeholder="Email"
              />
              <Text style={styles.phoneError}>{phoneError}</Text>
              <View style={styles.inputPasswordWrap}>
                <TextInput
                  style={styles.inputPassword}
                  onChangeText={e => handleChangePassword(e)}
                  value={textpassWord}
                  placeholder="Password"
                  secureTextEntry={passwordVisible}
                />
                <Eye
                  name={passwordVisible ? 'eye' : 'eye-with-line'}
                  size={20}
                  color="black"
                  onPress={() => setPasswordVisible(!passwordVisible)}
                />
              </View>
              <Text style={styles.passwordError}>{passwordError}</Text>
              <TouchableOpacity>
                <Text style={styles.title}>Forgot password?</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={handleLogin}
                style={styles.buttonStyle}>
                <Text style={styles.textStyle} activeOpacity={0.5}>
                  Log In
                </Text>
              </TouchableOpacity>
              <View style={styles.loginGoogle}>
                <Text style={styles.titleOr}>or</Text>
                <TouchableOpacity
                  style={styles.buttonGoogle}
                  onPress={handleLoginGoogle}>
                  <Image
                    source={{uri: logoGoogle}}
                    style={styles.logoGoogle}
                    resizeMode="stretch"
                  />
                  <Text>Sign in with Google</Text>
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1.5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingVertical: 30,
  },
  logo: {
    width: '80%',
    height: '100%',
  },
  input: {
    marginTop: 10,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#D2D2D2',
    paddingHorizontal: 30,
  },
  inputPasswordWrap: {
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#D2D2D2',
    paddingHorizontal: 27,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputPassword: {
    flex: 1,
    paddingBottom: 5,
    marginRight: 15,
  },
  title: {
    paddingLeft: 30,
    marginTop: 20,
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  buttonStyle: {
    width: '80%',
    marginTop: 30,
    paddingVertical: 10,
    backgroundColor: '#969696',
    borderRadius: 20,
    alignSelf: 'center',
  },
  loginGoogle: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonGoogle: {
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    shadowColor: 'black',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 7,
    elevation: 4,
    flexDirection: 'row',
  },
  titleOr: {
    marginRight: 20,
  },
  logoGoogle: {
    width: 30,
    height: 30,
    marginRight: 20,
  },
  phoneError: {
    marginLeft: 20,
    color: 'red',
  },
  passwordError: {
    marginLeft: 20,
    color: 'red',
  },
});

export default Login;
