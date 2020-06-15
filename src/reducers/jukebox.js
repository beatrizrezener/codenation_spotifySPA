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
    case JukeboxConstants.ADD_PLAYER_TRACK:
      return {
        ...state,
        playingNowId: payload.id,
        playingNowTrack: payload,
      };
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
    case JukeboxConstants.GET_PLAYLIST_TRACKS_REQUEST:
      return {
        ...state,
        tracks: [],
        status: 'running',
      };
    case JukeboxConstants.GET_PLAYLIST_TRACKS_SUCCESS:
      return {
        ...state,
        errorMessage: '',
        tracks: payload.filter(({track}) => track),
        status: 'success',
      };
    case JukeboxConstants.GET_PLAYLIST_TRACKS_FAILED:
      return {
        ...state,
        tracks: [],
        errorMessage: payload.message,
        status: 'error',
      };
    case JukeboxConstants.REMOVE_PLAYER_TRACK:
      return {
        ...state,
        playingNowId: null,
        playingNowTrack: null,
        playerHeight: 0,
      };
    case JukeboxConstants.SET_PLAYER_HEIGHT:
      return {
        ...state,
        playerHeight: payload,
      };
    default:
      return state
  }
}

export default jukeboxReducer;
