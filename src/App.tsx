import './App.css';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';

import { Layout } from 'antd';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from 'react-router-dom';

import AuthorizedRoute from './AuthorizedRoute';
import { Waiting } from './components';
import { useUserSlice } from './features/user/store';
import { selectUserAuthenticated } from './features/user/store/selectors';
import Home from './pages/Home';
import Login from './pages/Login';
import Manager from './pages/Manager';
import Webgis from './pages/Webgis';

const AppLayout = ({ signedIn }: { signedIn: boolean }) => (
  <Suspense fallback={<Waiting />}>
    {signedIn ? (
      <Layout style={{ width: '100vw', backgroundColor: 'white' }}>
        <Layout.Content>
          <Outlet />
        </Layout.Content>
      </Layout>
    ) : (
      <Outlet />
    )}
  </Suspense>
);

function App() {
  const dispatch = useDispatch();
  const { actions } = useUserSlice();

  useEffect(() => {
    return onAuthStateChanged(getAuth(), (user) => {
      if (!user) {
        dispatch(actions.signOut());
        return;
      }
      dispatch(actions.signIn(user));
    });
  }, [actions, dispatch]);

  const userAuth = useSelector(selectUserAuthenticated);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<AppLayout signedIn={userAuth} />}>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/webgis" element={<Webgis />} />
        <Route path="/manager" element={<AuthorizedRoute />}>
          <Route path="" element={<Manager />} />
        </Route>
      </Route>
    ),
    {
      basename: import.meta.env.REACT_APP_STAGE === 'development' ? '' : '/rescue-station',
    }
  );

  return <RouterProvider router={router} />;
}

export default App;
