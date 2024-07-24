import { useInjectReducer, useInjectSaga } from '../../../redux/redux-injectors';
import { actions, key, reducer } from './reducer';
import saga from './saga';

export const useWebgisSlice = () => {
  useInjectReducer({ key, reducer });
  useInjectSaga({
    key,
    saga,
  });
  return { actions };
};
