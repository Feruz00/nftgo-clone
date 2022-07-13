import React, { useState } from 'react'
import { Theme } from '../../theme'
import './Submenu.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Submenu = () => {

    const {openSubMenu} = Theme()

    const [first, setFirst0] = useState(false)
    const [second, setSecond] = useState(false)
    const [third, setThird] = useState(false)
    const [four, setFour] = useState(false)
    const [five, setFive] = useState(false)
    

    const handleChange = (Item)=>{
        Item( p=>!p )
    }
  return (
    <div className={`nft__submenu ${!openSubMenu ? '': 'nft__close-submenu'}`}>
        <div className='nft__submenu-container'>

            <div className='nft__submenu-links-menu'> 
                <div className='nft__submenu-links-menu-item' onClick={()=>handleChange(setFirst0)}> 
                    <div>
                        <a href="/analytics">Analytics</a> 
                        {
                            !first ?
                            <ChevronRightIcon fontSize='large'  />:
                            <KeyboardArrowDownIcon fontSize='large'  />
                        }
                    </div>
                    
                </div>
                {
                    first && (
                        <div className='nft__submenu-links-dropdown'>
                            <div>
                                <a href='/'>Market Overview</a>
                            </div>
                            <div>
                                <a href='/'>LeadBoard</a>
                            </div>
                            <div>
                                <a href='/'>Top Sales</a>
                            </div>
                            <div>
                                <a href='/'>MarketPlace</a>
                            </div>
                            
                        </div>
                    )
                }
            </div>
            <div className='nft__submenu-links-menu'> 
                <div className='nft__submenu-links-menu-item' onClick={()=>handleChange(setSecond)}> 
                    <div>
                        <a href="/whales">Whales</a> 
                        {
                            !second ?
                            <ChevronRightIcon fontSize='large'  />:
                            <KeyboardArrowDownIcon fontSize='large'  />
                        }
                    </div>
                    
                </div>
                
            </div>
            
            <div className='nft__submenu-links-menu'> 
                <div className='nft__submenu-links-menu-item' onClick={()=>handleChange(setThird)}> 
                    <div>
                        <a href="/products">Products</a>
                        {
                            !third ?
                            <ChevronRightIcon fontSize='large'  />:
                            <KeyboardArrowDownIcon fontSize='large'  />
                        }
                    </div>
                    
                </div>
                
            </div>
            
            <div className='nft__submenu-links-menu'> 
                <div className='nft__submenu-links-menu-item' onClick={()=>handleChange(setFour)}> 
                    <div>
                        <a href="/research">Research</a>
                        {
                            !four ?
                            <ChevronRightIcon fontSize='large'  />:
                            <KeyboardArrowDownIcon fontSize='large' />
                        }
                    </div>
                    
                </div>
                
            </div>

            <div className='nft__submenu-links-menu'> 
                <div className='nft__submenu-links-menu-item' onClick={()=>handleChange(setFive)}> 
                    <div>
                        <a href="/drops">Drops</a> 
                        {
                            !five ?
                            <ChevronRightIcon fontSize='large' />:
                            <KeyboardArrowDownIcon fontSize='large'  />
                        }
                    </div>
                    
                </div>
                
            </div>

        </div>
    </div>
  )
}

export default Submenu

/*
{
                    opening[0] && (
                       <div className='nft__submenu-links-menu-dropdown'>
                            <div className="nft__submenu-links-menu-dropdown-menu">
                                <div>
                                    <AnalyticsIcon />
                                    <p>Market Overview</p>
                                </div>
                                <div className='nft__submenu-links-menu-dropdown-arrow'>
                                    <ArrowForwardIosIcon />
                                </div>
                            </div>
                        <div className="nft__submenu-links-menu-dropdown-menu">
                            <div>
                                <EmojiEvents />
                                <p>LeadBoard</p>
                            </div>
                                <div className='nft__submenu-links-menu-dropdown-arrow'>
                                    <ArrowForwardIosIcon />
                                </div>
                            </div>
                        
                            <div className="nft__submenu-links-menu-dropdown-menu">
                                <div>
                                    <LeaderboardIcon />
                                    <p>Top Sales</p>
                                </div>
                                <div className='nft__submenu-links-menu-dropdown-arrow'>
                                    <ArrowForwardIosIcon />
                                </div>
                            </div>
                            <div className="nft__submenu-links-menu-dropdown-menu">
                                <div>
                                    <StoreIcon />
                                    <p>MarketPlace</p>
                                </div>
                                <div className='nft__submenu-links-menu-dropdown-arrow'>
                                    <ArrowForwardIosIcon />
                                </div>
                            </div>
                        </div>
                   )
                }
                
*/