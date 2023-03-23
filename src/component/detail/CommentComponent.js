import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ItemComment from './ItemCommentComponent';
import {useSelector, useDispatch} from 'react-redux';
import moment from 'moment';
import {set} from 'date-fns';

import {commentRequest} from '../../redux/Actions/listStudy';

export default function CommentComponent() {
  const user = useSelector(state => state.loginState);
  const course = useSelector(state => state.listStateHome.comment);
  const dispatch = useDispatch();

  const [message, setMessage] = useState('');
  // const [id, setId] = useState();

  const [data, setData] = useState(course);

  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    setData(course);
  }, []);

  const sendMessage = message => {
    if (message) {
      const reDate = moment(Date.now()).format('DD/MM/YYYY');
      const itemComment = {
        id: course.length + 2,
        username: user.username,
        date: reDate,
        image: user.avatar,
        contents: message,
      };
      dispatch(commentRequest(itemComment));
      setMessage('');
    }
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={course}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ItemComment data={item} />}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              dispatch(commentRequest(itemComment));
            }}
          />
        }
        style={{paddingTop: 8, flex: 1}}
      />
      <View style={styles.container2}>
        <View style={{width: '12%', marginTop: 3}}>
          <Image
            style={styles.avatar}
            source={{
              uri: user.avatar,
            }}
          />
        </View>
        <View style={styles.styleTextInputChat}>
          <TextInput
            style={styles.inputMessenge}
            onChangeText={setMessage}
            value={message}
            placeholder="Viết câu hỏi của bạn..."
          />

          <TouchableOpacity
            onPress={() => sendMessage(message)}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Ionicons name="send-sharp" size={32} color="green" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  styleContent: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  styleComment: {
    width: '100%',
    height: '48%',
    backgroundColor: '#FFFFFF',
    paddingBottom: 100,
  },
  styleCommentList: {
    padding: 18,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    flex: 1,
  },

  styleViewImage: {
    paddingHorizontal: 15,
    paddingVertical: 30,
    flexDirection: 'row',
  },
  avatar: {
    width: '10%',
    borderRadius: 100,
    borderWidth: 22,
  },
  styleTitleComment: {
    fontSize: 16,
  },

  container2: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
    paddingVertical: 3,
  },
  inputMessenge: {
    flex: 1,
    borderRadius: 20,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    backgroundColor: '#dcdde1',
  },
  buttonSent: {
    width: '10%',
    borderRadius: 20,
  },
  styleTextInputChat: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingBottom: 8,
  },
});
