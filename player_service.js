import TrackPlayer from 'react-native-track-player';

module.exports = async function () {
  TrackPlayer.addEventListener('remote-play', () => PlayerStore.play());

  TrackPlayer.addEventListener('remote-pause', () => PlayerStore.pause());

  TrackPlayer.addEventListener('remote-stop', () => TrackPlayer.destroy());

  TrackPlayer.addEventListener('remote-next', () => PlayerStore.next());

  TrackPlayer.addEventListener('remote-previous', () => PlayerStore.prev());
};
