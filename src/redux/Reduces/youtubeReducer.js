import {YOUTUBE_REQUEST} from '../Constants/index';

const initialStale = {
  linkYouTube: '',
  idYoutube: '',
  titleSubject: '',
};
const youtubeReducer = (state = initialStale, action) => {
  switch (action.type) {
    case YOUTUBE_REQUEST:
      return {
        ...state,
        linkYouTube: action.linkYouTube,
        idYoutube: action.idYoutube,
        titleSubject: action.titleSubject,
      };
    default:
      return state;
  }
};
export default youtubeReducer;
