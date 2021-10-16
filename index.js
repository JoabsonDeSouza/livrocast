/**
 * @format
 */

import { AppRegistry, LogBox } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';
import TrackPlayer from 'react-native-track-player';

LogBox.ignoreLogs(['EventEmitter.removeListener']);

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => require('./player_service.js'));
TrackPlayer.setupPlayer();
