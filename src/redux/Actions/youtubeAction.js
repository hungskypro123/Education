import {YOUTUBE_REQUEST} from '../Constants';

export function youtubeAction(linkYouTube, idYoutube, titleSubject) {
  return {
    type: YOUTUBE_REQUEST,
    linkYouTube: linkYouTube,
    idYoutube: idYoutube,
    titleSubject: titleSubject,
  };
}
