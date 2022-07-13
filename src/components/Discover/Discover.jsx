import React, { useState } from 'react'
import './Discover.css'
import SearchIcon from '@mui/icons-material/Search';
import {trading} from './metadata'
import homeDiscovery from '../../asserts/home-discover.svg'
import {Avatar} from 'antd'
export const Discover = () => {
    const [open, setOpen] = useState(false)

  return (
    <div className='nft__discover-section'>
        <div className="nft__discover">
            <div className="nft__discover-left">
                <h1>Discover Hidden Gems💎</h1>
                <p>User friendly rarity scores and rankings covering 1876 collections. Read more about our {' '}
                    <a className='nft__discover-left-link' href='/'>rarity model.</a>
                </p>
                <div className='nft__discover-left-search'>
                    <input type="text" placeholder='Search Collections' onFocus={()=>setOpen(true)} onBlur={()=>setOpen(false)} />
                    <div className='nft__discover-left-icon'>
                        <SearchIcon />
                    </div>
                    {
                        open && (
                            <div className='nft__discover-left-search-dropdown'>
                                {
                                    trading.map( (i,item)=>
                                        <div key={item} className='nft__discover-left-search-dropdown-menu'>
                                            <Avatar 
                                                style={{ marginRight:'1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }} 
                                                src={ i.icon } />
                                            <p>{i.name}</p>
                                        </div>
                                    )
                                }
                            </div>

                        )
                    }
                    
                </div>
                <div className="nft__dicover-left-recently">
                    <h1>Recently Updated</h1>
                    {
                        trading.map( (i,item)=>
                                <Avatar 
                                    style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }} 
                                    src={ i.icon } key={item} />
                            
                        )
                    }
                </div>
            </div>
            <div className="nft__discover-right">
                <img src={homeDiscovery} alt="svg" />
            </div>
        </div>
    </div>
  )
}
