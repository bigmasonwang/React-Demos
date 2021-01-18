import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'song 1', duration: '4:00' },
    { title: 'song 2', duration: '3:40' },
    { title: 'song 3', duration: '4:30' },
    { title: 'song 4', duration: '5:20' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
