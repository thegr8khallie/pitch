export const LoyaltyPromo = (props) => {
    const mintNftHandler = (e) => {
        const itemCard = e.target.closest('.marketplace-item')
        const price = itemCard.querySelector('.nft-price > span').textContent;
        const name = itemCard.querySelector('.nft-name').textContent;
        if (price > props.pitchBal) {
            alert('You do not have enough Pitch Token to spend');
        } else {
            props.reachFunctions(name, price)
        }
    }
    return (
        <section className="loyalty">
            <div className="loyalty-hero">
                <div className="loyalty-hero-info">
                    <h1 className="loyalty-hero-header">Pitch Rewards</h1>
                    <p className="loyalty-hero-text">Play, Get paid in our native token</p>
                </div>
                <div className="pitch-transact">
                    <div className="pitch-balance"><p>{props.pitchBal} Pitch</p></div>
                </div>
            </div>
            <div className="promo-info">
                <div className="time-listened">
                    <h2>Time Listened</h2>
                    <p>{props.playTime} seconds</p>
                </div>
                {
                    props.wallet.isConnected ? <div className="address-container"><p>{props.wallet.address}</p></div> : <button className="connect-wallet" onClick={props.connectWallet}>Connect MyAlgoWallet</button>
                }
            </div>
            <section className="marketplace">
                <h1>Marketplace</h1>
                <p>Accumulated enough Pitch? Spend them Here</p>
                <h1 className="collection-name">The Music Memorabilia</h1>
                <ul className="marketplace-items">

                    {
                        props.nftList.map((i) => {
                            return (
                                <li className="marketplace-item" key={i.id}>
                                    <div className="nft-container"><img src={i.nft} alt={`NFT Id: ${i.id}`} className='nft' /></div>
                                    <p className="nft-name">{`#${i.id} The "${i.name}" NFT`}</p>
                                    <p className="nft-price"><span>{i.price}</span> $pit</p>
                                    <button className="buy-btn" onClick={mintNftHandler}>Mint</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
        </section>
    )
}
