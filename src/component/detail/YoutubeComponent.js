import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {useState, useCallback, useRef, useEffect} from 'react';
import IntroductComponent from './IntroductComponent';
import YouTube from 'react-native-youtube';
import {useSelector} from 'react-redux';

export default function YoutubeComponent() {
  const [isReady, setIsReady] = useState(false);
  const [status, setStatus] = useState(null);
  const [quality, setQuality] = useState(null);
  const [error, setError] = useState(null);
  const [urlYoutube, setUrlYoutube] = useState(null);
  const dataYoutube = useSelector(state => state.youtubeState);
  const [apiKeyYoutube, setKeyYoutube] = useState(dataYoutube);
  const subjectLesson = useSelector(state => state.youtubeState);
  const [lesson, setLesson] = useState(subjectLesson);

  useEffect(() => {
    setKeyYoutube(dataYoutube);
  });
  return (
    <View style={styles.viewYtbComponent}>
      <YouTube
        autoplay={true}
        apiKey={apiKeyYoutube.linkYouTube}
        videoId={apiKeyYoutube.idYoutube} // The YouTube video ID
        loop // control whether the video should loop when ended
        onReady={e => setIsReady(true)}
        onChangeState={e => setStatus(e.state)}
        onChangeQuality={e => setQuality(e.quality)}
        onError={e => setError(e.error)}
        style={{alignSelf: 'stretch', height: 200}}
      />

      <View style={styles.viewTitleLesson}>
        <Text numberOfLines={2} style={styles.textLesson}>
          {apiKeyYoutube.titleSubject}
        </Text>
      </View>
      <View style={styles.viewTime}>
        <Text style={styles.textTileTime1}>Thời gian: </Text>
        <Text style={styles.textTileTime2}>30/06/2022</Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <IntroductComponent handleCLick={setUrlYoutube} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  styleImage: {
    width: '100%',
    height: '26%',
  },

  viewTitleLesson: {
    marginHorizontal: 18,
    marginTop: 20,
  },

  textLesson: {
    fontSize: 25,
    color: '#000000',
    fontWeight: '600',
  },

  viewTime: {
    flexDirection: 'row',
    marginHorizontal: 18,
    marginTop: 10,
  },

  textTileTime1: {
    fontSize: 16,
    fontWeight: '600',
  },

  textTileTime2: {
    fontSize: 16,
    color: '#f39c12',
    fontWeight: '600',
  },

  viewYtbComponent: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
});
