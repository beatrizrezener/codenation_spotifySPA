import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, useRouteMatch } from 'react-router-dom';

import {
  getCategoriesFailed,
  getCategoriesRequest,
  getCategoriesSuccess,
  getUserFailed,
  getUserRequest,
  getUserSuccess,
  logout,
} from '../actions';

import { endpoints } from '../services/endpoints';
import { request } from '../services/request';

import { WelcomeBox } from '../components';
import {
  Categories,
  Dashboard,
  PrivateRoute,
  Topbar,
} from '../containers';

import PlaylistsRoute from './PlaylistsRoute';

const { getCategories, getUserProfile } = endpoints;

const DashboardRoute = () => {
  const { auth, jukebox, user } = useSelector(state => state);
  const { path, url } = useRouteMatch();
  const dispatch = useDispatch();

  useEffect(() => {
    const requestOptions = {
      ...getUserProfile.options,
      headers: { 'Authorization': `Bearer ${auth.accessToken}` }
    }

    dispatch(getUserRequest());

    request(getUserProfile.url, requestOptions)
      .then(data => dispatch(getUserSuccess(data)))
      .catch(error => {
        if (error === 401) {
          dispatch(logout());
        } else {
          dispatch(getUserFailed(error));
        }
      });

  }, [auth, dispatch]);

  useEffect(() => {
    const requestOptions = {
      ...getCategories.options,
      headers: { 'Authorization': `Bearer ${auth.accessToken}` }
    }

    dispatch(getCategoriesRequest());

    request(getCategories.url, requestOptions)
      .then(data => dispatch(getCategoriesSuccess(data)))
      .catch(error => {
        if (error === 401) {
          dispatch(logout());
        } else {
          dispatch(getCategoriesFailed(error))
        }
      });

  }, [auth, dispatch]);

  return (
    <Dashboard>
      <Topbar />
      <Switch>
        <PrivateRoute exact path={path}>
          <WelcomeBox name={user.name} />
          <Categories
            isLoading={jukebox.status === 'running' && jukebox.categories.length === 0}
            data={jukebox.categories}
            url={url}
          />
        </PrivateRoute>

        <PrivateRoute exact path={`${path}/:categoryId`}>
          <PlaylistsRoute path={path} />
        </PrivateRoute>
      </Switch>
    </Dashboard>
  );
}

export default DashboardRoute;
