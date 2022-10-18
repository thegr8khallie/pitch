import { FaUsers } from 'react-icons/fa';
import { BsFillSkipEndFill, BsFillSkipStartFill, BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';
import person1 from '../../../assets/photos/person1.jpg';
import person2 from '../../../assets/photos/person2.jpg';
import person3 from '../../../assets/photos/person3.jpg';
import person4 from '../../../assets/photos/person4.jpg';



export const Activity = (props) => {
    return (
        <section className="activity-section">
            <article className="friends-activity-log">
                <div className="friends-titlebar">
                    <div className="titlebar-text">
                        <h3>Friends Activity</h3>
                        <p>250 Friends</p>
                    </div>
                    <div className="friend-icon"><FaUsers /></div>
                </div>
                <ul className="friends">
                    <li className="friend">
                        <div>
                            <img src={person1} alt="" />
                        </div>
                        <div className="friend-info">
                            <h4 className="friend-name">Guy Hawkins</h4>
                            <p className="listening-to">Listening to Sam Smith</p>
                        </div>
                    </li>
                    <li className="friend">
                        <div>
                            <img src={person2} alt="" />
                        </div>
                        <div className="friend-info">
                            <h4 className="friend-name">Omotayo Adekunle</h4>
                            <p className="listening-to">Listening to Coldplay</p>
                        </div>
                    </li>
                    <li className="friend">
                        <div>
                            <img src={person3} alt="" />
                        </div>
                        <div className="friend-info">
                            <h4 className="friend-name">Bessie Cooper</h4>
                            <p className="listening-to">Listening to Burna Boy</p>
                        </div>
                    </li>
                    <li className="friend">
                        <div>
                            <img src={person4} alt="" />
                        </div>
                        <div className="friend-info">
                            <h4 className="friend-name">Kathryn Murphy</h4>
                            <p className="listening-to">Listening to Linkin Park</p>
                        </div>
                    </li>
                </ul>
            </article>
            <article className="now-playing">
                <img src={props.currentSong.cover} alt="" className="song-cover" />
                <div className="now-playing-info">
                    <h2 className="song-name">{props.currentSong.song}</h2>
                    <p className="artiste">{props.currentSong.artist}</p>
                    <div className="more-info">
                        <div className="buttons-tab">
                            <button className='prev' style={props.currentSong.song === 'Not Playing' ? { display: 'none' } : { display: 'block' }} onClick={props.prev}>
                                <BsFillSkipStartFill /></button>
                            <button className='pause-play' onClick={props.onClick}>
                                <span style={props.isPlaying ? { display: 'inline' } : { display: 'none' }}><BsFillPauseFill /></span>
                                <span style={props.isPlaying ? { display: 'none' } : { display: 'inline' }}><BsFillPlayFill /></span></button>
                            <button className='next' style={props.currentSong.song === 'Not Playing' ? { display: 'none' } : { display: 'block' }} onClick={props.next}><BsFillSkipEndFill /></button>
                        </div>
                        <div className="seek-container">
                            <input type="range" id="" className='seek' value={props.progress} step='1' min='0' max={props.duration ? props.duration : `${props.duration}`} onChange={(e) => props.seek(e.target.value)} onMouseUp={props.seekEnd} onKeyUp={props.seekEnd} />
                        </div>
                        <div className="timer-container">
                            <span className="time-played">{props.playedLength}</span>
                            <span className="time-left">{props.songLength}</span>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}

