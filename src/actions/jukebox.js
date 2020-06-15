/*
 * Action Creators
 * https://redux.js.org/basics/actions#action-creators
 */
import JukeboxConstants from '../constants/jukebox';

/**
 * @param {string} track
 * @returns {{payload: *, type: string}}
 */
export const addTrackToPlayer = (track) => ({
  type: JukeboxConstants.ADD_PLAYER_TRACK,
  payload: track,
});

/**
 * @returns {{payload: *, type: string}}
 */
export const getCategoriesRequest = () => ({
  type: JukeboxConstants.GET_CATEGORIES_REQUEST,
});

/**
 * @param {object} payload
 * @returns {{payload: *, type: string}}
 */
export const getCategoriesSuccess = ({ categories  }) =>  {
  return {
    type: JukeboxConstants.GET_CATEGORIES_SUCCESS,
    payload: categories.items,
  };
};

/**
 * @param {object} payload
 * @returns {{payload: *, type: string}}
 */
export const getCategoriesFailed = ({ message }) => ({
  type: JukeboxConstants.GET_CATEGORIES_FAILED,
  payload: { message },
});

/**
 * @returns {{payload: *, type: string}}
 */
export const getCategoryPlaylistRequest = () => ({
  type: JukeboxConstants.GET_CATEGORY_PLAYLIST_REQUEST,
});

/**
 * @param {object} payload
 * @returns {{payload: *, type: string}}
 */
export const getCategoryPlaylistSuccess = ({ playlists  }) =>  ({
  type: JukeboxConstants.GET_CATEGORY_PLAYLIST_SUCCESS,
  payload: playlists.items,
});

/**
 * @param {object} payload
 * @returns {{payload: *, type: string}}
 */
export const getCategoryPlaylistFailed = ({ message }) => ({
  type: JukeboxConstants.GET_CATEGORY_PLAYLIST_FAILED,
  payload: { message },
});

/**
 * @returns {{payload: *, type: string}}
 */
export const getPlaylistTracksRequest = () => ({
  type: JukeboxConstants.GET_PLAYLIST_TRACKS_REQUEST,
});

/**
 * @param {object} payload
 * @returns {{payload: *, type: string}}
 */
export const getPlaylistTracksSuccess = ({ items  }) =>  ({
  type: JukeboxConstants.GET_PLAYLIST_TRACKS_SUCCESS,
  payload: items,
});

/**
 * @param {object} payload
 * @returns {{payload: *, type: string}}
 */
export const getPlaylistTracksFailed = ({ message }) => ({
  type: JukeboxConstants.GET_PLAYLIST_TRACKS_FAILED,
  payload: { message },
});

/**
 * @returns {{payload: {}, type: string}}
 */
export const removeTrackToPlayer = () => ({
  type: JukeboxConstants.REMOVE_PLAYER_TRACK,
});

/**
 * @returns {{payload: {}, type: string}}
 */
export const setPlayerHeight = (height) => ({
  type: JukeboxConstants.SET_PLAYER_HEIGHT,
  payload: height,
});
