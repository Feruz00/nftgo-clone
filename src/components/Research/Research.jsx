import React from 'react'
import './Research.css'
import airdrop from '../../asserts/meta/nftgo_air_drop.jpg'
import nft_eth from '../../asserts/meta/nft_eth.jpg'
import watchlist from '../../asserts/meta/nft_watchlist.jpg'
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';

const Research = () => {
  return (
    <div className='nft__research-container'>
        <div className='nft__research'>
            <div className='nft__research-title'>
                <div className='nft__research-title-left'>
                    <h1>Research 📄</h1>
                    <p>Read the latest articles covering industry news, NFTGo’s latest features, insights, and more.</p>
                </div>
                <div className='nft__research-title-right'>
                    <a href="/" className='btn btn-primary'>Read More</a>
                </div>
            </div>
            <div className='nft__research-news'>
                <div className='nft__research-news-left'>
                    <div className='nft__research-news-new'>
                        <div className='nft__research-news-new-pic'>
                            <img src={airdrop} alt="nft airdrop" />
                        </div>
                        <div className='nft__research-news-new-content'>
                            <h2>How Is the Market Reacting to NFT Airdrops?</h2>
                            <p>Key Takeaways</p>
                            <ul>
                                <li>Before an airdrop occurs, primary collections pump...</li>
                                
                            </ul>
                            <div className='nft__research-new-time'>
                                <p>Jul 08, 2022</p>
                                <div><HourglassEmptyIcon/> 9 min read </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='nft__research-news-right'>
                    <div className='nft__research-news-new'>
                        <div className='nft__research-news-new-pic'>
                            <img src={watchlist} alt="nft watchlist" />
                        </div>
                        
                        <div className='nft__research-news-new-content'>
                            <div className='nft__research-news-new-content-top'>
                                <h2>How to Track NFT Collections and Whales to Find Potential Alpha?</h2>
                                <p>There are hundreds of new projects coming out on the...</p>    
                            </div>
                            
                            <div className='nft__research-new-time'>
                                <p>Jul 04, 2022</p>
                                <div><HourglassEmptyIcon/> 5 min read </div>
                            </div>
                        </div>
                    </div>

                    <div className='nft__research-news-new nft__research-news-right-last'>
                        <div className='nft__research-news-new-pic'>
                            <img src={nft_eth} alt="nft watchlist" />
                        </div>
                        
                        <div className='nft__research-news-new-content'>
                            <div className='nft__research-news-new-content-top'>
                                <h2>What is the Correlation Between NFTs and ETH?</h2>
                                <p>Introduction</p>
                                <p>The NFT market is facing its first... </p>
                            </div>
                            
                            <div className='nft__research-new-time'>
                                <p>Jul 01, 2022</p>
                                <div><HourglassEmptyIcon/> 14 min read </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Research