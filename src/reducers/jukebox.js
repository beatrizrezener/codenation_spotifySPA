import JukeboxConstants from '../constants/jukebox';

const jukeboxInitialState = {
  categories: [],
  playlists: [],
  tracks: [],
  playingNowId: null,
  playingNowTrack: null,
  playerHeight: 0,
  status: 'idle',
  errorMessage: '',
}

const jukeboxReducer = (state = jukeboxInitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case JukeboxConstants.GET_CATEGORIES_REQUEST:
      return {
        ...state,
        categories: [],
        status: 'running',
      };
    case JukeboxConstants.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        errorMessage: '',
        categories: payload,
        status: 'success',
      };
    case JukeboxConstants.GET_CATEGORIES_FAILED:
      return {
        ...state,
        categories: [],
        errorMessage: payload.message,
        status: 'error',
      };
    case JukeboxConstants.GET_CATEGORY_PLAYLIST_REQUEST:
      return {
        ...state,
        playlists: [],
        status: 'running',
      };
    case JukeboxConstants.GET_CATEGORY_PLAYLIST_SUCCESS:
      return {
        ...state,
        errorMessage: '',
        playlists: payload,
        status: 'success',
      };
    case JukeboxConstants.GET_CATEGORY_PLAYLIST_FAILED:
      return {
        ...state,
        errorMessage: payload.message,
        playlists: [],
        status: 'error',
      };
    default:
      return state
  }
}

export default jukeboxReducer;
