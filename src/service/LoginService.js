import {apiClient} from './Clients';

//Api='https://62cd22e7066bd2b6991f8bd0.mockapi.io/api/course/user'
const Service = input => {
  console.log(input);
  return apiClient.get(
    'https://62cd22e7066bd2b6991f8bd0.mockapi.io/api/course/user',
  );
};

export default Service;
