/*
 * Action Creators
 * https://redux.js.org/basics/actions#action-creators
 */
import JukeboxConstants from '../constants/jukebox';

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
