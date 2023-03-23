import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useSelector } from 'react-redux';

const ItemComment = ({ data }) => {
  const token = useSelector(state => state.listStateHome);
  return (
    <View style={styles.styleViewImageComment}>
      <View style={{ width: '12%' }}>
        <Image
          style={styles.avatar}
          source={{
            uri: data.image,
          }}
        />
      </View>

      <View style={styles.styleViewTextComment}>
        <Text style={styles.styleTextName}>
          {data.username}
        </Text>
        <Text style={styles.styleTime}>
          {data.date}
        </Text>
        <View>
          <Text
            style={styles.styleContents}>
            {data.contents}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: '10%',
    borderRadius: 100,
    borderWidth: 22,
  },
  styleViewImageComment: {
    marginBottom: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  styleViewTextComment: {
    flexDirection: 'column',
    alignItems: 'baseline',
    justifyContent: 'center',
    marginLeft: 15,
    width: '88%',
    borderBottomWidth: 1,
    borderColor: '#EFEFEF',
  },
  styleContents: {
    marginBottom: 10,
    fontWeight: '400',
    color: '#000000',
    marginTop: 10,
  },
  styleTime: {
    fontWeight: '500',
    marginTop: 2,
  },
  styleTextName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
  },
});

export default ItemComment;
