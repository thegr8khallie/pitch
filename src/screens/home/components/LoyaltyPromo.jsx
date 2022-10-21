export const LoyaltyPromo = (props) => {
    return (
        <section className="loyalty">
            <div className="loyalty-hero">
                <div className="loyalty-hero-info">
                    <h1 className="loyalty-hero-header">Pitch Rewards</h1>
                    <p className="loyalty-hero-text">Play, Get paid in our native token</p>
                </div>
                <div className="pitch-transact">
                    <div className="pitch-balance"><p>{props.playTime / 10} Pitch</p></div>
                    <div className="withdraw">
                        <button className="reveal-form" onClick={props.revealForm} style={props.isFormOpen ? { display: 'none' } : { display: 'block' }}>Withdraw</button>
                        <form className="withdraw-form" style={props.isFormOpen ? { display: 'block' } : { display: 'none' }} onSubmit={props.submitForm}>
                            <input type="number" placeholder="Enter amount" />
                            <input type="submit" value="Withdraw" />
                        </form>
                    </div>
                </div>

            </div>
            <div className="promo-info">
                <div className="time-listened">
                    <h2>Time Listened</h2>
                    <p>{props.playTime} seconds</p>
                </div>
                {
                    props.wallet.isConnected ? <div className="address-container"><p>{props.wallet.address}</p></div> : <button className="connect-wallet" onClick={props.connectWallet}>Connect Wallet</button>
                }
            </div>
            <section className="marketplace">
                <h1>Marketplace</h1>
                <p>Accumulated enough Pitch? Spend them Here</p>
                <h1 className="collection-name">The Music Memento Collection</h1>
                <ul className="marketplace-items">

                    {
                        props.nftList.map((i) => {
                            return (
                                <li className="marketplace-item" key={i.id}>
                                    <div className="nft-container"><img src={i.nft} alt={`NFT Id: ${i.id}`} className='nft' /></div>
                                    <p className="nft-name">{`#${i.id} The "${i.name}" NFT`}</p>
                                    <p className="nft-price">{i.price} $pit<div></div></p>
                                    <button className="buy-btn">Mint</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
        </section>
    )
}
