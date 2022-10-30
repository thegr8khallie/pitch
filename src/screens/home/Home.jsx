import { useState, useRef, useEffect } from 'react'
import { Menu, Dashboard, Activity, LoyaltyPromo } from './components'
//Audio Player Imports
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
//Loyalty Program imports
import play from '../../assets/NFTs/play.png'
import pause from '../../assets/NFTs/pause.png'
import previous from '../../assets/NFTs/previous.png'
import next from '../../assets/NFTs/next.png'
import rewind from '../../assets/NFTs/rewind.png'
import forward from '../../assets/NFTs/forward.png'
import headphone from '../../assets/NFTs/headphone.png'
import megaphone from '../../assets/NFTs/megaphone.png'
import microphone from '../../assets/NFTs/microphone.png'
//Algorand and Smart Contract imports
import { loadStdlib } from '@reach-sh/stdlib'
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib'
import * as backend from '../../reach/build/index.main.mjs'
//import algosdk from 'algosdk'
const stdlib = loadStdlib("ALGO");
stdlib.setWalletFallback(
  stdlib.walletFallback({ providerEnv: 'TestNet', MyAlgoConnect })
)
export const Home = () => {
  /********************************************************************************/
  /* Song Player Scripts start */
  /********************************************************************************/

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
  const [currentPage, setCurrentPage] = useState('dashboard');
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
  const navToLoyaltyHandler = () => {
    setCurrentPage('loyalty')
  }
  const navToDashboardHandler = () => {
    setCurrentPage('dashboard')
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

  /********************************************************************************/
  /* Song Player Scripts end */
  /********************************************************************************/

  /********************************************************************************/
  /* Loyalty Promo Scripts start */
  /********************************************************************************/
  const nfts = [
    {
      id: 1,
      name: 'Play',
      nft: play,
      price: 30,
      // assetID: 118109141
    },
    {
      id: 2,
      name: 'Pause',
      nft: pause,
      price: 30,
      // assetID: 118108733
    },
    {
      id: 3,
      name: 'Rewind',
      nft: rewind,
      price: 25,
      // assetID: 118110002
    },
    {
      id: 4,
      name: 'Forward',
      nft: forward,
      price: 35,
      // assetID: 118106792
    },
    {
      id: 5,
      name: 'Previous',
      nft: previous,
      price: 20,
      // assetID: 118109631
    },
    {
      id: 6,
      name: 'Next',
      nft: next,
      price: 40,
      // assetID: 118108532
    },
    {
      id: 7,
      name: 'Speak',
      nft: microphone,
      price: 100,
      // assetID: 118108042
    },
    {
      id: 8,
      name: 'Shout',
      nft: megaphone,
      price: 500,
      // assetID: 118107646
    },
    {
      id: 9,
      name: 'Listen',
      nft: headphone,
      price: 1000,
      // assetID: 118107106
    }
  ];
  let [currentSession, setCurrentSession] = useState(0);
  let [totalSession, setTotalSession] = useState(0);
  let interval = useRef()
  useEffect(() => {
    if (isPlaying) {
      interval.current = setInterval(() => {
        setCurrentSession(currentSession++)
      }, 1000)
    } else {
      clearInterval(interval.current);
      if (localStorage.getItem('total-playtime')) {
        const prevTimePlayed = localStorage.getItem('total-playtime');
        localStorage.setItem('total-playtime', parseInt(prevTimePlayed) + currentSession)
        setTotalSession(localStorage.getItem('total-playtime'))
        setCurrentSession(0)
      } else {
        localStorage.setItem('total-playtime', currentSession)
        const newTime = localStorage.getItem('total-playtime')
        setTotalSession(newTime)
        setCurrentSession(0)
      }
    }
  }, [isPlaying])
  /********************************************************************************/
  /* Loyalty Promo Scripts end */
  /********************************************************************************/

  /********************************************************************************/
  /* Reach Scripts starts */
  /********************************************************************************/

  const [account, setAccount] = useState({})
  const [myAlgo, setMyAlgo] = useState({
    address: '',
    isConnected: false,
  })
  const [pitchBal, setPitchBal] = useState()
  useEffect(() => {
    if (localStorage.getItem('account')) {
      setMyAlgo(JSON.parse(localStorage.getItem('account')))
    }
    if (localStorage.getItem('total-playtime')) {
      setTotalSession(localStorage.getItem('total-playtime'))
    }
    if (localStorage.getItem('acct')) {
      setAccount(JSON.parse(localStorage.getItem('acct')))
    }
    if (!localStorage.getItem('withdrawn')) {
      localStorage.setItem('withdrawn', 0)
      setPitchBal(totalSession / 10)
    }
    if (localStorage.getItem('withdrawn')) {
      const withdrawn = localStorage.getItem('withdrawn')
      setPitchBal((localStorage.getItem('total-playtime') / 10) - withdrawn)
    }

  }, [])

  const connectWalletHandler = async () => {
    try {
      const acct = await stdlib.getDefaultAccount();
      const accountInfo = {
        address: acct.networkAccount.addr,
        isConnected: true,
      }
      localStorage.setItem('account', JSON.stringify(accountInfo))
      localStorage.setItem('acct', JSON.stringify(acct))
      setMyAlgo(accountInfo)
      setAccount(acct)
    } catch (error) {
      console.log(error)
    }
  }

  const reachFunctions = async (nftName, nftPrice) => {
    const bal = stdlib.parseCurrency(100);
    const accPitch = await stdlib.newTestAccount(bal);
    const theNFT = await stdlib.launchToken(accPitch, nftName, "NFT", { supply: 1, })
    const nftId = theNFT.id;
    const price = nftPrice;
    const beneficiary = myAlgo.address;
    const params = { nftId, price, beneficiary };

    //Sale Ready function
    const startSale = async () => {
      const accUser = await stdlib.getDefaultAccount();
      await accUser.tokenAccept(nftId);
      const ctcUser = accUser.contract(backend, ctcPitch.getInfo())
      await ctcUser.participants.User({
        showOutcome: () => {
          alert(`The ${nftName} NFT has been Minted. Please check your address`)
        },
        deductPIT: () => {
          const oldUsedBal = localStorage.getItem('withdrawn');
          const newUsedBal = oldUsedBal + nftPrice;
          localStorage.setItem('withdrawn', newUsedBal);
          setPitchBal(pitchBal - nftPrice);
        }
      })
    }
    //Pitch Deploys Contract
    const ctcPitch = accPitch.contract(backend);
    await ctcPitch.participants.Pitch({
      getSale: () => {
        console.log('NFT Mint details: ', params);
        return params;
      },
      saleReady: () => {
        startSale();
      },
    })
  }

  /********************************************************************************/
  /* Reach Scripts end */
  /********************************************************************************/
  return (
    <div className="homepage">
      <Menu page={currentPage} dashboardLink={navToDashboardHandler} loyaltyLink={navToLoyaltyHandler} />
      {currentPage === 'dashboard' ? <Dashboard songsList={songs} onClick={updateSongHandler} /> : <LoyaltyPromo wallet={myAlgo} connectWallet={connectWalletHandler} nftList={nfts} playTime={totalSession} pitchBal={pitchBal} reachFunctions={reachFunctions} />}
      <Activity currentSong={currentlyPlaying} onClick={togglePlayHandler} isPlaying={isPlaying} prev={prevHandler} next={nextHandler} progress={trackProgress} duration={duration} seek={SeekHandler} seekEnd={seekEndHandler} songLength={songLength} playedLength={playedLength} />
    </div>
  )
}


//https://testnet.algoexplorer.io/dispenser