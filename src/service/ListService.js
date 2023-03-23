import Clients from './Clients';

//Api='https://62cd22e7066bd2b6991f8bd0.mockapi.io/api/course/user'
const ListService = input => {
  console.log(input);
  return Clients.apiClient.get(
    'https://62cd22e7066bd2b6991f8bd0.mockapi.io/api/course/category',
  );
};

export default ListService;
