import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  ActivityIndicator,
  RefreshControl,
  Text,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  callApiLearningRequest,
  enableLoader,
} from '../redux/Actions/learningAction';
import Subject from '../ListScreen/Components/Subject/Subject';

const Data = [
  {
    id: 1,
    name: 'BGD Mon Dia Li THPT=GVPT(Twp Line Case)aaaaaaaaa',
    date: '30/06/2020',
    score: 20,
    process: 0.2,
    image: 'http://loremflickr.com/640/480',
  },
  {
    id: 2,
    name: 'BGD Mon Dia Li THPT=GVPT(Twp Line Case)aaaaaaaaa',
    date: '30/06/2020',
    score: 50,
    process: 0.5,
    image: 'http://loremflickr.com/640/480',
  },
  {
    id: 3,
    name: 'BGD Mon Dia Li THPT=GVPT(Twp Line Case)aaaaaaaaa',
    date: '30/06/2020',
    score: 50,
    process: 0.5,
    image: 'http://loremflickr.com/640/480',
  },
  {
    id: 4,
    name: 'BGD Mon Dia Li THPT=GVPT(Twp Line Case)aaaaaaaaa',
    date: '30/06/2020',
    score: 50,
    process: 0.5,
    image: 'http://loremflickr.com/640/480',
  },
  {
    id: 5,
    name: 'BGD Mon Dia Li THPT=GVPT(Twp Line Case)aaaaaaaaa',
    date: '30/06/2020',
    score: 50,
    process: 0.5,
    image: 'http://loremflickr.com/640/480',
  },
  {
    id: 6,
    name: 'BGD Mon Dia Li THPT=GVPT(Twp Line Case)aaaaaaaaa',
    date: '30/06/2020',
    score: 50,
    process: 0.5,
    image: 'http://loremflickr.com/640/480',
  },
  {
    id: 7,
    name: 'BGD Mon Dia Li THPT=GVPT(Twp Line Case)aaaaaaaaa',
    date: '30/06/2020',
    score: 50,
    process: 0.5,
    image: 'http://loremflickr.com/640/480',
  },
];

const {width, height} = Dimensions.get('window');
const LearningList = () => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = React.useState(false);

  const isLoading = useSelector(state => state.learningState.isLearningLoading);
  const ListRedux = useSelector(state => state.loginState.id);
  const arrDataList = useSelector(
    state => state.learningState.responseArrayLearning,
  );
  useEffect(() => {
    dispatch(callApiLearningRequest(ListRedux));
    if (arrDataList.length == 0) {
      dispatch(enableLoader());
    }
  }, []);
  return (
    <View style={{flex: 1, width: width, height: height}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={{flex: 1}}>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#000',
              fontSize: 29,
              marginLeft: 15,
              marginTop: 10,
            }}>
            Đang học
          </Text>
          <FlatList
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={() => {
                  () => dispatch(callApiLearningRequest(ListRedux));
                }}
              />
            }
            style={{width: width, height: width}}
            data={arrDataList}
            keyExtractor={item => item.id}
            renderItem={({item}) => <Subject data={item} width={width - 15} />}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default LearningList;
