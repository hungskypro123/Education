import AsyncStorage from '@react-native-async-storage/async-storage';

async function saveItem(key, value) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log('AsyncStorage Error: ' + error.message);
  }
}
async function getItem(key) {
  try {
    await AsyncStorage.getItem(key);
  } catch (error) {
    console.log('AsyncStorage Error: ' + error.message);
  }
}
async function removeItem(key) {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log('AsyncStorage Error: ' + error.message);
  }
}
export default DeviceStorage = {saveItem, removeItem, getItem};
