import {apiClient} from './Clients';
//Api='https://62cd22e7066bd2b6991f8bd0.mockapi.io/api/course/user'

const ServiceLearning = input => {
  return apiClient.get(`/user/${input}`);
};
export default ServiceLearning;
