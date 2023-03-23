import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const ItemLeaning = ({data}) => {
  return (
    <View style={styles.itemView}>
      <View style={styles.viewImage}>
        <Image
          source={{
            uri: 'https://peterhung.org/wp-content/uploads/2022/05/learning_styles-1.jpg',
          }}
          style={styles.styleImage}
        />
        <View style={styles.itemScoreText}>
          <View style={styles.itemScore}>
            <Text
              style={{
                ...styles.textScore,
                ...{fontWeight: '900'},
              }}>
              50
            </Text>
            <View
              style={{
                width: '60%',
                height: '2%',
                backgroundColor: '#fff',
              }}></View>
            <Text
              style={{
                ...styles.textScore,
                ...{fontWeight: '300'},
              }}>
              100
            </Text>
          </View>
          <Text style={styles.textTitle} numberOfLines={2}>
            BGD Mon Dia Li THPT=GVPT(Twp Line Case)aaaaaaaaa
          </Text>
          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Text>Thoi han:</Text>
            <Text style={{color: '#FF8000', marginLeft: 4}}>30/06/2000</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemView: {
    margin: 10,
    width: width,
    height: height / 5,
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 10,
    padding: 5,
    backgroundColor: '#fff',
  },
  viewImage: {
    width: '100%',
    height: height / 5,
    borderRadius: 20,

    alignItems: 'center',
  },
  styleImage: {
    width: '4%',
    height: '60%',
  },
  itemScoreText: {
    width: '100%',
    height: '20%',
    marginTop: -30,
    marginLeft: 50,
  },
  itemScore: {
    backgroundColor: '#008B8B',
    width: '15%',
    height: '140%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ffff',
    borderWidth: 1.4,
  },
  textScore: {
    color: '#fff',
  },
  textTitle: {
    width: '90%',
    height: '100%',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 10,
    color: '#000',
    ellipsizeMode: 'tail',
  },
});

export default ItemLeaning;
