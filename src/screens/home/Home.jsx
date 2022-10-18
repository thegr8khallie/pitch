import { Menu, Dashboard, Activity } from './components'
import cover1 from '../../assets/audio/music cover/takeitOrleaveit.jpg'
import cover2 from '../../assets/audio/music cover/foryou.jpg'
import cover4 from '../../assets/audio/music cover/redemption.jpg'
import cover5 from '../../assets/audio/music cover/neomorph.jpg'
import cover6 from '../../assets/audio/music cover/spirit.jpg'
import cover7 from '../../assets/audio/music cover/gotme.jpg'
import cover8 from '../../assets/audio/music cover/sweet.jpg'
import placeHolderCover from '../../assets/audio/music cover/music-icon.jpg'
import song1 from '../../assets/audio/Aeden & Sketchez - Take It or Leave It [NCS Release].mp3'
import song2 from '../../assets/audio/CHENDA - For You [NCS Release].mp3'
import song4 from '../../assets/audio/Max Brhon - Redemption [NCS Release].mp3'
import song5 from '../../assets/audio/NO QVLT - Neomorph [NCS Release].mp3'
import song6 from '../../assets/audio/PLEEG - Spirit [NCS Release].mp3'
import song7 from '../../assets/audio/Poylow - Got Me (feat. Nito-Onna) [NCS Release].mp3'
import song8 from '../../assets/audio/Raptures & MAZAN - Sweet [NCS Release].mp3'
import { useState, useRef, useEffect } from 'react'
export const Home = () => {
  //Playlist
  const songs = [
    {
      song: 'Take it or Leave it',
      artist: 'Aeden & Sketchez',
      cover: cover1,
      audio: song1,
    },
    {
      song: 'For you',
      artist: 'CHENDA',
      cover: cover2,
      audio: song2,
    },
    {
      song: 'Redemption',
      artist: 'Max Brhon',
      cover: cover4,
      audio: song4,
    },
    {
      song: 'Neomorph',
      artist: 'NO QVLT',
      cover: cover5,
      audio: song5,
    },
    {
      song: 'Spirit',
      artist: 'PLEEG',
      cover: cover6,
      audio: song6,
    },
    {
      song: 'Got me (Feat. Nito-Onna)',
      artist: 'Poylow',
      cover: cover7,
      audio: song7,
    },
    {
      song: 'Sweet',
      artist: 'Raptures & MAZAN',
      cover: cover8,
      audio: song8,
    },
  ]
  //useState Hooks
  const [currentlyPlaying, setCurrentlyPlaying] = useState({
    song: 'Not Playing',
    artist: '',
    cover: placeHolderCover,
    audio: '',
  });
  const [isPlaying, setIsPlaying] = useState(false)
  const [trackProgress, setTrackProgress] = useState(0)
  //Current track index
  const currentSong = currentlyPlaying.song;
  const songIndex = songs.map((i, j) => {
    return i.song === currentSong && j;
  }).filter((i) => {
    return i !== false && i
  })
  const currentSongIndex = songIndex.length === 0 ? 0 : parseInt(`${songIndex[0]}`)
  //useRef
  const audio = useRef(new Audio(songs[currentSongIndex].audio));
  const intervalRef = useRef();
  const isReady = useRef(false)
  //Event Handlers
  const updateSongHandler = (song) => {
    audio.current.play()
    setCurrentlyPlaying(song)
    setIsPlaying(true)
  }
  const togglePlayHandler = () => {
    setIsPlaying(!isPlaying)
    if (!isPlaying && currentlyPlaying.song === 'Not Playing') {
      const index = Math.floor(Math.random() * songs.length)
      setCurrentlyPlaying(songs[index])
    }
  }

  const prevHandler = () => {
    setCurrentlyPlaying(currentSongIndex === 0 ? songs[songs.length - 1] : songs[currentSongIndex - 1])
  }
  const nextHandler = () => {
    setCurrentlyPlaying(currentSongIndex === songs.length - 1 ? songs[0] : songs[currentSongIndex + 1])
  }
  //Timer function
  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audio.current.ended) {
        nextHandler();
      } else {
        setTrackProgress(audio.current.currentTime);
      }
    }, [1000]);
  }

  // useEffect
  //Handle pause play
  useEffect(() => {
    if (isPlaying) {
      audio.current.play();
      startTimer();
    } else {
      clearInterval(intervalRef.current)
      audio.current.pause();
    }
  }, [isPlaying]);
  //Pause and clean up on unmount
  useEffect(() => {
    return () => {
      audio.current.pause();
      clearInterval(intervalRef.current);
    }
  }, []);
  //Handle track change
  useEffect(() => {
    audio.current.pause();
    audio.current = new Audio(songs[currentSongIndex].audio);
    setTrackProgress(audio.current.currentTime);
    if (isReady.current) {
      audio.current.play();
      setIsPlaying(currentlyPlaying.song !== 'Not Playing' && true);
      startTimer();
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [currentSongIndex]);
  const duration = audio.current.duration;
  const toMMSS = (time) => {
    if (isNaN(time)) {
      return;
    } else {
      var minutes = Math.floor(time / 60);
      var seconds = Math.floor(time) - (minutes * 60);
      if (minutes < 10) { minutes = `0${minutes}` }
      if (seconds < 10) { seconds = `0${seconds}` }
      return `${minutes}:${seconds}`
    }
  }
  const songLength = toMMSS(duration - trackProgress)
  const playedLength = toMMSS(trackProgress)
  const SeekHandler = (value) => {
    clearInterval(intervalRef.current);
    audio.current.currentTime = value;
    setTrackProgress(audio.current.currentTime)
  }
  const seekEndHandler = () => {
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  }
  return (
    <div className="homepage">
      <Menu />
      <Dashboard songsList={songs} onClick={updateSongHandler} />
      <Activity currentSong={currentlyPlaying} onClick={togglePlayHandler} isPlaying={isPlaying} prev={prevHandler} next={nextHandler} progress={trackProgress} duration={duration} seek={SeekHandler} seekEnd={seekEndHandler} songLength={songLength} playedLength={playedLength} />
    </div>
  )
}
