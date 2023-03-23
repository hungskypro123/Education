import {apiClient} from './Clients';
//api=https://62cd22e7066bd2b6991f8bd0.mockapi.io/api/course/subject

const CommentLearning = (idCourse, data) => {
  return apiClient.put(`/subject/${idCourse}`, data);
};
export default CommentLearning;
