import Sound from 'react-native-sound';

export const createSoundClick = () => {
  let whoosh = new Sound('rgb_master_click.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('sound load failed');
      return;
    }
    console.log('sound loaded');
  });
  return whoosh;
};

export const createSoundWin = () => {
  return whoosh;
};

export const playSoundClick = whoosh => {
  if (!whoosh) {
    return;
  }
  whoosh.play(success => {
    if (success) {
      console.log('successfully finished playing');
    } else {
      console.log('playback failed due to audio decoding errors');
      // reset the player to its uninitialized state (android only)
      // this is the only option to recover after an error occured and use the player again
      whoosh.reset();
    }
  });
};
