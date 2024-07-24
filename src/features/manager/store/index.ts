import { useInjectReducer, useInjectSaga } from '../../../redux/redux-injectors';
import { actions, key, reducer } from './reducer';
import saga from './saga';

export const useManagerSlice = () => {
  useInjectReducer({ key, reducer });
  useInjectSaga({
    key,
    saga,
  });
  return { actions };
};
