import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  getPlaylistTracksRequest,
  getPlaylistTracksSuccess,
  getPlaylistTracksFailed,
  logout,
} from '../actions';

import { endpoints } from '../services/endpoints';
import { request, sanitizeUrl } from '../services/request';
import { getSongNameById } from '../helpers/song';

import { Tracks } from '../containers';

const { getPlaylistTracks } = endpoints;

const TracksRoute = ({ path }) => {
  const { auth, jukebox } = useSelector(state => state);
  const dispatch = useDispatch();
  const { playlistId } = useParams();

  useEffect(() => {
    const requestOptions = {
      ...getPlaylistTracks.options,
      headers: { 'Authorization': `Bearer ${auth.accessToken}` }
    }

    dispatch(getPlaylistTracksRequest());

    request(sanitizeUrl(getPlaylistTracks.url, { playlistId }), requestOptions)
      .then(data => dispatch(getPlaylistTracksSuccess(data)))
      .catch(error => {
        if (error === 401) {
          dispatch(logout());
        } else {
          dispatch(getPlaylistTracksFailed(error));
        }
      });

  }, [auth, playlistId, dispatch]);

  return (
    <Tracks
      categoryName={getSongNameById(playlistId, jukebox.playlists)}
      data={jukebox.tracks}
      isLoading={jukebox.status === 'running'}
      path={path}
    />
  );
}

export default TracksRoute;
