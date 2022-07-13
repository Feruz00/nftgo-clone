import React from 'react'
import './DataApi.css'
import openApi from '../../asserts/meta/home-open-api.svg'
const DataApi = () => {
  return (
    <div className='nft__dataapi-container'>
        <div className="nft__dataapi">
            <div className='nft__dataapi-left'>
                <h1 className='nft__dataapi-left-title'>Data API</h1>
                <div className='nft__dataapi-left-text'>Harness the power of NFTGo’s data API to enhance your applications.</div>
                <div className='nft__dataapi-left-list'>
                    <p>✅  Track real-time market data and transactions with a few short lines of code.</p>
                    <p>✅  Get historical transactions and charts to improve your research.</p>
                    <p>✅  Fast, stable, and easy to use.</p>
                    <p>✅  Support REST and GraphQL.</p>
                </div>
                <a href="/" className='btn btn-light nft__dataapi-left-btn'>
                    Get Early Access  ➝
                </a>
            </div>
            <div className="nft__dataapi-right">
                <img src={openApi} alt="svg" />
            </div>
        </div>

    </div>
  )
}

export default DataApi