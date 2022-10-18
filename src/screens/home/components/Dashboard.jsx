import { HiOutlineSearch } from 'react-icons/hi'



export const Dashboard = (props) => {
    return (
        <section className="dashboard">
            <header className="header-nav">
                <ul className="header-menu-items">
                    <li className="header-menu-item">Songs</li>
                    <li className="header-menu-item">Playlists</li>
                    <li className="header-menu-item">Albums</li>
                    <li className="header-menu-item">Artists</li>
                </ul>
                <form className="search-form">
                    <input type="text" placeholder="Search songs here" />
                    <button type="submit"><HiOutlineSearch /></button>
                </form>
            </header>
            <section className="songs-queue">
                <h1>Songs</h1>
                <ul className="songs-list">
                    {
                        props.songsList.map((i, j) => {
                            return (
                                <li key={j} onClick={() => props.onClick(i)}>
                                    <div className="img-cont">
                                        <img src={i.cover} alt="" />
                                    </div>
                                    <div>
                                        <h3>{i.song}</h3>
                                        <p>{i.artist}</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
        </section>
    )
}
