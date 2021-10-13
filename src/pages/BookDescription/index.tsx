import React, { useEffect, useState } from 'react';

import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import {
  Container,
  Text,
  Image,
  ContainerTimer,
  CardImage,
  ContainerButtons,
  ContainerButtonsControl,
  ContainerBtnIcon,
} from './styles';

import TrackPlayer, {
  useProgress,
  useTrackPlayerEvents,
  Event,
} from 'react-native-track-player';

import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import { Book } from '../../model/book';
import Slider from '@react-native-community/slider';
import { MaterialIcon, MatComIcons } from '../../components/Icon';
import colors from '../../styles/colors';
import {
  calculateCurrentValue,
  calculateTotalValue,
} from '../../utils/formatTime';

import { useApp } from '../../context/app';
import { useTheme } from 'styled-components';

const events = [
  Event.PlaybackState,
  Event.PlaybackError,
  Event.PlaybackQueueEnded,
];

const BookDescription = () => {
  const navigation = useNavigation();
  const { changeTheme } = useApp();
  const theme = useTheme();

  const route: RouteProp<{ params: { book: Book } }, 'params'> = useRoute();
  const { book } = route?.params;

  const [playerState, setPlayerState] = useState(null);
  const [currentTime, setCurrentTime] = useState('00:00');
  const [seekValue, setSeekValue] = useState(0);
  const { position, duration } = useProgress();
  const [speed, setSpeed] = useState(1);

  useTrackPlayerEvents(events, event => {
    console.log(event);

    if (event.state === Event.PlaybackError) {
      console.warn('An error occured while playing the current track.');
    }
    if (event.state === 'playing') {
      setPlayerState(event.state);
    }

    if (event.state === 'paused') {
      setPlayerState(null);
    }

    if (event.state === 'stopped') {
      TrackPlayer.reset();
      TrackPlayer.stop();
      setPlayerState(null);
    }
  });

  const isPlaying = playerState === 'playing';

  const handleClick = () => {
    TrackPlayer.stop();
    navigation.goBack();
  };

  useEffect(() => {
    TrackPlayer.add({
      url: book.audio,
      title: book.title,
      artist: book.written,
      artwork: book.cover,
    });
  }, []);

  useEffect(() => {
    setCurrentTime(calculateCurrentValue(position));
    setSeekValue(position);
  }, [position]);

  const handlePlay = () => {
    if (playerState === 'playing') {
      TrackPlayer.pause();
      return;
    }

    TrackPlayer.setRate(speed);
    TrackPlayer.play();
  };

  const handleSkipPlus15 = async () => {
    await TrackPlayer.seekTo(seekValue + 15);
  };

  const handleSkipMinus15 = async () => {
    await TrackPlayer.seekTo(seekValue - 15);
  };

  const handleSpeed = async () => {
    const newSpeed = speed === 2 ? 1 : speed + 0.5;
    setSpeed(newSpeed);
    await TrackPlayer.setRate(newSpeed);
  };

  return (
    <Container>
      <SafeAreaView style={{ marginBottom: 50 }} />
      <TouchableOpacity
        style={{ left: 10, top: 56, position: 'absolute' }}
        onPress={handleClick}>
        <MaterialIcon
          name="keyboard-arrow-left"
          size={60}
          color={colors.secondary}
        />
      </TouchableOpacity>
      <CardImage
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.32,
          shadowRadius: 5.46,
          elevation: 9,
          marginVertical: 30,
        }}>
        <Image source={{ uri: book.cover }} />
      </CardImage>
      <Text size={24} color={theme.controlButton1} bold>
        {book.title}
      </Text>
      <Text bold size={15}>
        {book.written}
      </Text>
      <Slider
        style={{ width: '100%', height: 40 }}
        minimumValue={0}
        maximumValue={duration}
        value={seekValue}
        tapToSeek
        onValueChange={value => {
          TrackPlayer.seekTo(value);
          setSeekValue(value);
          setCurrentTime(calculateCurrentValue(value));
        }}
        minimumTrackTintColor={theme.controlButton1}
        maximumTrackTintColor={theme.controlButton2}
        thumbTintColor={theme.controlButton1}
      />
      <ContainerTimer>
        <Text>{currentTime}</Text>
        <Text>{calculateTotalValue(duration)}</Text>
      </ContainerTimer>

      <ContainerButtonsControl>
        <TouchableOpacity onPress={handleSkipMinus15}>
          <View>
            <MaterialIcon
              name="settings-backup-restore"
              size={50}
              color={colors.secondary}
            />
          </View>
          <Text
            style={{
              position: 'absolute',
              backgroundColor: theme.background,
              left: '34%',
              top: '24%',
              color: colors.secondary,
              fontWeight: 'bold',
            }}>
            15
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePlay}>
          <MaterialIcon
            name={!isPlaying ? 'play-arrow' : 'pause'}
            size={70}
            color={colors.orange}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSkipPlus15}>
          <View style={{ transform: [{ scaleX: -1 }] }}>
            <MaterialIcon
              name="settings-backup-restore"
              size={50}
              color={colors.secondary}
            />
          </View>
          <Text
            style={{
              position: 'absolute',
              backgroundColor: theme.background,
              left: '34%',
              top: '24%',
              color: colors.secondary,
              fontWeight: 'bold',
            }}>
            15
          </Text>
        </TouchableOpacity>
      </ContainerButtonsControl>
      <ContainerButtons>
        <TouchableOpacity onPress={handleSpeed}>
          <ContainerBtnIcon>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text bold size={18}>{`${speed}X`}</Text>
            </View>
            <Text style={{ marginTop: 10 }}>Velocidade</Text>
          </ContainerBtnIcon>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeTheme()}>
          <ContainerBtnIcon>
            <MatComIcons
              name="theme-light-dark"
              size={30}
              color={theme.inactiveTab}
            />
            <Text style={{ marginTop: 10 }}>{`Tema: ${theme.name}`}</Text>
          </ContainerBtnIcon>
        </TouchableOpacity>
        <ContainerBtnIcon>
          <MaterialIcon
            name="format-list-numbered"
            size={30}
            color={theme.inactiveTab}
          />
          <Text style={{ marginTop: 10 }}>Capitulos</Text>
        </ContainerBtnIcon>
      </ContainerButtons>
    </Container>
  );
};

export default BookDescription;
