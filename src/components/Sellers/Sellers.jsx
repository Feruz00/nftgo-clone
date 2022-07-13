import React from 'react'
import './Seller.css'
import SpeedIcon from '@mui/icons-material/Speed';
const Sellers = () => {
  return (
    <div className='nft__selllers_head'>

        <div className='nft__sellers'>
            <div className="nft__sellers-item nft__sellers-item-1">
                <h4>Market Sentiment</h4>
                <SpeedIcon />
                <a href="/" className='nft__sellers-link'>28:</a>
                <span style={{ color: 'var(--blue)' }}>Cool💧️</span>
            </div>
            
            <div className="nft__sellers-item nft__sellers-item-2">
                <h4>Buyers</h4>
                <a href="/" className='nft__sellers-link'>17.61K</a>
                <div className='nft__sellers-item-2-rate'></div>
                
                <a href="/" className='nft__sellers-link'>21.42K</a>
                <h4>Sellers</h4>
            </div>

            <div className="nft__sellers-item nft__sellers-item-2">
                <h4>Volume(24H)</h4>
                <a href="/" className='nft__sellers-link'>$42.62M</a>
                <span className='nft__sellers-discount'>-17.19%</span>
            </div>

            <div className="nft__sellers-item nft__sellers-item-2">
                <h4>Market Cup</h4>
                <a href="/" className='nft__sellers-link'>$23.17B</a>
                <span className='nft__sellers-discount'>-0.78%</span>
            </div>
            
            <div className="nft__sellers-item nft__sellers-item-2">
                <h4>Holders</h4>
                <a href="/" className='nft__sellers-link'>2.76M</a>
                <span className='nft__sellers-increase'>+9.13%</span>
            </div>
            

            
            
        </div>

    </div>
  )
}

export default Sellers