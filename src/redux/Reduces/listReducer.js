import {LIST_REQUEST, COMMENT_REQUEST} from '../Constants';

const initialStale = {
  categoryId: 0,
  comment: [],
  content: '',
  dateTime: 0,
  id: '',
  image: '',
  introduce: '',
  linkYtb: '',
  name: '',
  progress: 0,
  time: '',
  arrSubject: [],
};
const listReducer = (state = initialStale, action) => {
  switch (action.type) {
    case LIST_REQUEST:
      return {
        ...state,
        categoryId: action.payload.categoryId,
        comment: action.payload.comment,
        content: action.payload.content,
        dateTime: action.payload.dateTime,
        id: action.payload.id,
        image: action.payload.image,
        introduce: action.payload.introduce,
        linkYtb: action.payload.linkYtb,
        name: action.payload.name,
        progress: action.payload.progress,
        time: action.payload.time,
        arrSubject: action.payload.arrsubject,
      };
    case COMMENT_REQUEST:
      return {
        ...state,
        comment: [...state.comment, action.payload],
      };
    default:
      return state;
  }
};
export default listReducer;
