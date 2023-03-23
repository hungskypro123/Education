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
  SafeAreaView,
} from 'react-native';
import React, {useState, useRef, useCallback, useEffect} from 'react';
import {List} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CircularProgress from 'react-native-circular-progress-indicator';
import Entypo from 'react-native-vector-icons/Entypo';
import {useDispatch, useSelector} from 'react-redux';
import {youtubeAction} from '../../redux/Actions/youtubeAction';

export default function ContentComponent() {
  const [idSubject, setIdSubject] = useState();
  const [idTitleCourse, setTitleCourse] = useState();
  const dispatch = useDispatch();
  const arrSubject = useSelector(state => state.listStateHome.arrSubject);
  const [idProgress, setIdProgress] = useState(0);

  //Component Lesson
  const ItemList = ({itemList}) => {
    return (
      <List.Section style={{width: '100%'}}>
        <List.Accordion
          title={itemList.title}
          style={{
            backgroundColor: '#FFFFFF',
            paddingLeft: '2%',
          }}
          titleStyle={styles.titleStyleList}
          left={() => (
            <CircularProgress
              value={itemList.title <= idTitleCourse ? 1 : idProgress}
              radius={22}
              titleColor="#f39c12"
              inActiveStrokeColor="#f39c12"
              inActiveStrokeOpacity={0.4}
              inActiveStrokeWidth={4}
              maxValue={4}
              activeStrokeColor="#f39c12"
              activeStrokeWidth={5}
              titleFontSize={1000}
              valueSuffix={'/4'}
              progressValueFontSize={20}
              progressValueStyle={{
                marginHorizontal: -3,
              }}
              valueSuffixStyle={{
                marginRight: 5,
                fontSize: 15,
              }}></CircularProgress>
          )}>
          {/* FlatList Subject */}
          <View style={{width: '100%'}}>
            <FlatList
              data={itemList.dataSubject}
              renderItem={item => renderSubject(item)}
              keyExtractor={item => item.id}
            />
          </View>
        </List.Accordion>
      </List.Section>
    );
  };
  const renderItem = ({item}) => {
    return <ItemList itemList={item} />;
  };

  //COMPONET SUBJECT
  const ItemSubject = ({itemSubject}) => {
    return (
      <View style={styles.stViewSubject}>
        <TouchableOpacity
          style={styles.viewTouchableOpacity}
          onPress={() => onclickItemSubject(itemSubject)}>
          <View style={styles.viewIconSubject1}>
            <View style={styles.viewIconSubject2}>
              <View style={styles.viewCustomVertical}>
                <View
                  style={{
                    ...styles.customVertical1,
                    ...{
                      backgroundColor:
                        itemSubject.id <= idSubject + 1 &&
                        itemSubject.idTitle <= idTitleCourse
                          ? '#f39c12'
                          : '#dfe4ea',
                    },
                  }}
                />
              </View>
              <MaterialIcons
                name={
                  itemSubject.id <= idSubject &&
                  itemSubject.idTitle <= idTitleCourse
                    ? 'check-circle'
                    : 'circle'
                }
                size={22}
                color={
                  itemSubject.id <= idSubject &&
                  itemSubject.idTitle <= idTitleCourse
                    ? '#f39c12'
                    : '#dfe4ea'
                }
              />
              <View style={styles.viewCustomVertical}>
                <View
                  style={{
                    ...styles.customVertical,
                    ...{
                      backgroundColor:
                        itemSubject.id <= idSubject &&
                        itemSubject.idTitle <= idTitleCourse
                          ? '#f39c12'
                          : '#dfe4ea',
                    },
                  }}></View>
              </View>
            </View>
          </View>

          <View style={styles.viewBoxText}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  ...styles.textTitleSubject,
                  ...{
                    color:
                      itemSubject.id <= idSubject &&
                      itemSubject.idTitle <= idTitleCourse
                        ? '#f39c12'
                        : '#ced6e0',
                  },
                }}>
                {itemSubject.oder}
              </Text>
              <Text
                numberOfLines={2}
                style={{
                  ...styles.textOderSubject,
                  ...{
                    color:
                      itemSubject.id <= idSubject &&
                      itemSubject.idTitle <= idTitleCourse
                        ? '#f39c12'
                        : '#000000',
                  },
                }}>
                {itemSubject.titleSubject}
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginLeft: 35, marginTop: 10}}>
              <Text style={{fontWeight: '500'}}>Video</Text>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Entypo name="dot-single" size={20} />
              </View>
              <Text style={{fontWeight: '500'}}>13:00</Text>
            </View>
          </View>

          <View style={styles.viewIconPlay}>
            <AntDesign
              name="playcircleo"
              size={23}
              color={
                itemSubject.id <= idSubject &&
                itemSubject.idTitle <= idTitleCourse
                  ? '#f39c12'
                  : '#95a5a6'
              }
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderSubject = ({item}) => {
    return <ItemSubject itemSubject={item} />;
  };

  const onclickItemSubject = item => {
    setIdSubject(item.id);
    setTitleCourse(item.idTitle);
    console.log('componentYTB', item.titleSubject);
    dispatch(
      youtubeAction(item.linkYoutube, item.idYoutube, item.titleSubject),
    );
    setIdProgress(item.id);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={arrSubject}
        renderItem={item => renderItem(item)}
        keyExtractor={item => item.id}></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  stViewSubject: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  viewTouchableOpacity: {
    flexDirection: 'row',
  },
  viewIconSubject1: {
    flexDirection: 'column',
    width: '30%',
    marginRight: 28,
  },
  viewIconSubject2: {
    marginLeft: '73%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewCustomVertical: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  customVertical: {
    width: 1,
    height: 50,
  },
  viewBoxText: {
    flexDirection: 'column',
    width: '84%',
    marginTop: 20,
  },
  textTitleSubject: {
    fontSize: 16,
    fontWeight: '600',
    marginRight: 10,
  },
  textOderSubject: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    width: '84%',
  },
  viewIconPlay: {
    width: '10%',
    marginRight: 15,
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  titleStyleList: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000000',
    marginLeft: 8,
  },
  customVertical1: {
    width: 1,
    height: 20,
    backgroundColor: '#dfe4ea',
  },

  listSection: {
    borderBottomWidth: 0.5,
  },
});
