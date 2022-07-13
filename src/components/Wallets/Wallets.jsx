import React from 'react'
import './Wallets.css'
import notIncluded from '../../asserts/ntfgo/NotIncludedSquare.svg'
import artBlocks from '../../asserts/ntfgo/Art-Blocks.png'
import Meebit from '../../asserts/ntfgo/Meebits.png'
import {Avatar} from 'antd'
import homeWhale from '../../asserts/home-whale.svg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Wallets = () => {
  return (
    <div className='nft__wallets_section'>
        <img src={homeWhale} alt="svg" className='ntf__wallet_whale' />
            
        <div className='nft__wallets'>
            <div className="nft__wallets-title">
                <h1>Track <span className='nft__wallets-title-word'> 1474 </span> Whale Wallets 🐋</h1>
                <p>🐋 Whales hold NFTs worth <span className='nft__wallets-title-word'> $5.71B </span>, 
                occupying <span className='nft__wallets-title-word'> 24.97% </span> of the global market cap of <span className='nft__wallets-title-word'> $22.86B </span></p>
            </div>
            <div className='nft__wallets-btns'>
                <div className='nft__wallets-btns-btn'>
                    <h4>In the past 24 hours</h4>
                    <div  className='nft__wallets-btns-btn-center'>  
                        <span className='nft__wallets-btns-btn-number'>21</span> 
                        
                        <span className='nft__wallets-whale'>Whales</span> 
                        
                        <svg class="" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.53935 4.85299L4.80273 6.58765L13.476 15.2707L15.2126 13.5361L6.53935 4.85299Z" fill="#F19100"></path><path d="M9.13968 2.24886L7.4043 3.98474L10.8761 7.45552L12.6114 5.71964L9.13968 2.24886Z" fill="#F19100"></path><path d="M3.93095 7.45748L2.19531 9.19312L5.66658 12.6644L7.40221 10.9287L3.93095 7.45748Z" fill="#F19100"></path><path d="M9.55905 14.5228H2.19531V15.7501H9.55905V14.5228Z" fill="#F19100"></path></svg> 
                        <span className='nft__wallets-btns-btn-first'>Minted </span>  </div>
                        
                        <div className="nft__wallets-btns-item">
                            <Avatar 
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} src={ notIncluded } />
                            <p>Bored & Dangerous</p>
                        </div>
                </div>
                <div className='nft__wallets-btns-btn'>
                    <h4>In the past 24 hours</h4>
                    <div className='nft__wallets-btns-btn-center'>  <span className='nft__wallets-btns-btn-number' >7</span> 
                    
                        <span className='nft__wallets-whale'>Whales</span>
                        <svg class="" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.3783 3.91786L3.62567 3.91786L3.62567 2L14.3783 2L14.3783 3.91786ZM9.99303 12.3246L9.99303 5.61977L8.01054 5.61977L8.01054 12.3331L4.40479 8.82873L3 10.182L8.98592 16L15 10.2096L13.6016 8.85021L9.99303 12.3246Z" fill="#57A0DF"></path></svg>
                        <span className='nft__wallets-btns-btn-second'>Bought</span>
                    </div>
                    <div className="nft__wallets-btns-item">
                        <Avatar style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} src={ artBlocks } />
                        <p>Art Blocks</p>
                    </div>
                </div>
                <div className='nft__wallets-btns-btn'>
                    <h4>In the past 24 hours</h4>
                    <div className='nft__wallets-btns-btn-center' >  <span className='nft__wallets-btns-btn-number'>10</span> 
                    
                        <span className='nft__wallets-whale'>Whales</span>
                        <svg class="" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.62171 14.0821L14.3743 14.0821L14.3743 16L3.62171 16L3.62171 14.0821ZM8.00697 5.67539L8.00697 12.3802L9.98946 12.3802L9.98946 5.66695L13.5952 9.17126L15 7.81802L9.01408 2L3 7.79041L4.39845 9.14978L8.00697 5.67539Z" fill="#BB6BD9"></path></svg>
                        <span className='nft__wallets-btns-btn-third'>Sold</span>
                    </div>
                    <div className="nft__wallets-btns-item">
                        <Avatar style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} src={ Meebit } />
                        <p>Meebits</p>
                    </div>
                </div>
                
                
            </div>
            <div className='nft__wallets-bottom'>
                
                <div className='nft__wallets-bottom-btn'>
                    <p>Explore Whale Tracking <ArrowForwardIcon /></p>
                    
                </div>
            </div>
        </div>

    </div>
    
  )
}

export default Wallets