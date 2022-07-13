import React, { useState } from 'react'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Navbar.css'
import asynco from '../../asserts/async.png' 
import cryptoPunks from '../../asserts/cryptoPunks.png'
import KennelKlup from '../../asserts/kannelKlub.png'
import YachtKlup from '../../asserts/YachtKlup.png'
import ArtBlocks from '../../asserts/unnamed.jpg'
import Othered from '../../asserts/othered.jpg'

import AnalyticsIcon from '@mui/icons-material/Analytics';
import StoreIcon from '@mui/icons-material/Store';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import EmojiEvents from '@mui/icons-material/EmojiEvents';
import { Theme } from '../../theme';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const links = [
    {name: 'CryptoPunks', url: cryptoPunks}, 
    {name: 'Bored Ape Kennel Club',url: KennelKlup },
    {name: 'Bored Ape Yacht Club',url: YachtKlup },
    {name: 'Async Blueprints',url: asynco },
    {name: 'Art Blocks',url: ArtBlocks },
    {name: 'Othered',url: Othered },
]

const Menu = ()=>{
    return (
        <>
            <p className='nft__navbar-links-menu'> 
                <a href="/analytics">Analytics</a> 
                <div className='nft__navbar-links-menu-dropdown'>
                    <div className="nft__navbar-links-menu-dropdown-menu">
                        <div>
                            <AnalyticsIcon />
                            <p>Market Overview</p>
                        </div>
                        <div className='nft__navbar-links-menu-dropdown-arrow'>
                            <ArrowForwardIosIcon />
                        </div>
                    </div>
                    <div className="nft__navbar-links-menu-dropdown-menu">
                        <div>
                            <EmojiEvents />
                            <p>LeadBoard</p>
                        </div>
                        <div className='nft__navbar-links-menu-dropdown-arrow'>
                            <ArrowForwardIosIcon />
                        </div>
                    </div>
                    
                    <div className="nft__navbar-links-menu-dropdown-menu">
                        <div>
                            <LeaderboardIcon />
                            <p>Top Sales</p>
                        </div>
                        <div className='nft__navbar-links-menu-dropdown-arrow'>
                            <ArrowForwardIosIcon />
                        </div>
                    </div>
                    <div className="nft__navbar-links-menu-dropdown-menu">
                        <div>
                            <StoreIcon />
                            <p>MarketPlace</p>
                        </div>
                        <div className='nft__navbar-links-menu-dropdown-arrow'>
                            <ArrowForwardIosIcon />
                        </div>
                    </div>
                </div>
            </p>
            <p className='nft__navbar-links-menu'> <a href="/whales">Whales</a> </p>
            <p className='nft__navbar-links-menu'> <a href="/products">Products</a> </p>
            <p className='nft__navbar-links-menu'> <a href="/research">Research</a> </p>
            <p className='nft__navbar-links-menu'> <a href="/drops">Drops</a> </p> 
        </>
    )
}


const Navbar = () => {
    const {darkMode, setDarkMode, openSubMenu, setOpenSubmenu} = Theme()
    const [openSearch, setOpenSearch] = useState(false)
    const [openLang, setOpenLang] = useState(false)
    
    const handleChangeTheme = ()=>{
        setDarkMode(!darkMode)
        document.documentElement.setAttribute('data-theme', darkMode ? 'light' : 'dark' )
    }
  
    return (
    <div className='ntf__navbar'>

        <div className='nft__navbar-logo'>
            {
                !darkMode ? 
            <svg width="180" height="44" viewBox="0 0 180 44" fill="none" xmlns="http://www.w3.org/2000/svg" style={{color: 'white'}}><path d="M35.036 44H8.81C3.962 44 0 40.02 0 35.159V8.84C0 3.976 3.962 0 8.81 0h26.226c4.843 0 8.81 3.976 8.81 8.841V35.16c0 4.86-3.966 8.841-8.81 8.841z" fill="#5A66F9"></path><path d="M27.082 14.506c-.305.106-.19.468.13.463l1.658-.036-3.316 8.922-3.13-5.775c-1.022-1.885-2.865-3.061-4.944-3.212h-.931a6.102 6.102 0 00-5.335 4.056L6.106 33.003a.145.145 0 00.135.196h7.648c.06 0 .115-.04.135-.096l3.211-8.866 3.115 5.75c1.167 2.156 3.411 3.393 5.846 3.217 2.439-.171 4.487-1.704 5.349-4.006l5.324-14.33 1.398-3.91a.146.146 0 00-.186-.186l-10.999 3.734z" fill="#fff"></path><path opacity="0.3" d="M11.209 18.92L6.105 33.002a.145.145 0 00.135.196h7.649c.06 0 .115-.04.135-.096l3.21-8.866 3.116 5.75c1.022 1.885 2.86 3.066 4.939 3.217h.911l-9.652-18.336c-2.454.181-4.497 1.734-5.339 4.051z" fill="#3B53FF"></path><path d="M13.623 23.483l-3.551 9.525a.145.145 0 00.135.196h3.687c.06 0 .115-.04.135-.096l3.21-8.866-.646-1.01c-.666-1.05-2.51-.905-2.97.251z" fill="#fff"></path><path opacity="0.3" d="M29.174 24.629l3.542-9.299a.292.292 0 00-.27-.397h-3.577l-3.316 8.942.646 1.01c.671 1.046 2.515.9 2.975-.256z" fill="#3B53FF"></path><path d="M72.124 26.124L59.407 13.787c-.996-.968-2.564-1.304-3.985-.852-1.421.453-2.344 1.572-2.344 2.857v15.466h4.532V17.875l12.717 12.337c.704.681 1.69 1.051 2.706 1.051.425 0 .86-.063 1.28-.2 1.42-.452 2.344-1.571 2.344-2.856V12.945h-4.532v13.179zM79.761 17.588v13.286h4.533V17.588c0-.545.547-1.008 1.191-1.008h15.257v-3.83H85.485c-3.155 0-5.724 2.171-5.724 4.838z" fill="#151D51"></path><path d="M100.742 20.07h-14.68v3.83h14.68v-3.83zM104.587 16.58h9.01V30.88h4.532V16.58h9.011v-3.83h-22.553v3.83zM134.234 23.832v-3.777c0-1.912 1.841-3.47 4.102-3.47h13.367v-3.83h-13.367c-4.761 0-8.634 3.276-8.634 7.3v3.777c0 4.024 3.873 7.3 8.634 7.3h8.322v-3.83h-8.322c-2.261-.005-4.102-1.558-4.102-3.47z" fill="#151D51"></path><path d="M147.236 20.026h-8.429v3.83h8.429c.64 0 1.177.34 1.177.744v6.278h4.532v-6.277c0-2.526-2.559-4.575-5.709-4.575z" fill="#5A66F9"></path><path d="M170.73 12.916h-5.626c-5.113 0-9.269 3.519-9.269 7.84v2.536c0 4.321 4.156 7.84 9.269 7.84h5.626c5.114 0 9.27-3.519 9.27-7.84v-2.536c0-4.326-4.156-7.84-9.27-7.84zm4.743 10.376c0 2.209-2.125 4.01-4.738 4.01h-5.626c-2.613 0-4.737-1.796-4.737-4.01v-2.536c0-2.21 2.124-4.01 4.737-4.01h5.626c2.613 0 4.738 1.796 4.738 4.01v2.536z" fill="#151D51"></path></svg>
                :
                <svg width="180" height="44" viewBox="0 0 156 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.364 38H7.636C3.434 38 0 34.562 0 30.364V7.636C0 3.434 3.434 0 7.636 0h22.728C34.562 0 38 3.434 38 7.636v22.728C38 34.562 34.562 38 30.364 38z" fill="#5A66F9"></path><path d="M23.472 12.528c-.265.091-.165.404.113.4l1.437-.031-2.874 7.705-2.713-4.988a5.277 5.277 0 00-4.284-2.774h-.808c-2.123.161-3.898 1.502-4.623 3.504L5.292 28.502c-.03.083.03.17.118.17h6.628c.052 0 .1-.035.117-.083l2.783-7.657 2.7 4.966a5.28 5.28 0 005.066 2.778 5.295 5.295 0 004.636-3.46l4.614-12.376 1.211-3.377a.126.126 0 00-.16-.16l-9.533 3.225z" fill="#fff"></path><path opacity="0.3" d="M9.715 16.34L5.292 28.501c-.03.083.03.17.117.17h6.629c.052 0 .1-.035.117-.083l2.782-7.657 2.7 4.966c.886 1.628 2.479 2.648 4.28 2.778h.79L14.343 12.84a5.28 5.28 0 00-4.628 3.5z" fill="#5A66F9"></path><path d="M11.808 20.281L8.73 28.507c-.03.082.03.17.117.17h3.195c.052 0 .1-.035.117-.083l2.783-7.658-.56-.872c-.577-.907-2.175-.781-2.574.217z" fill="#fff"></path><path opacity="0.3" d="M25.285 21.27l3.07-8.03a.253.253 0 00-.235-.343h-3.1l-2.873 7.722.56.873c.582.903 2.18.777 2.578-.222z" fill="#5A66F9"></path><path d="M62.507 22.562L51.485 11.907c-.863-.836-2.222-1.126-3.453-.735C46.8 11.562 46 12.529 46 13.639v13.357h3.928V15.438l11.021 10.654c.61.589 1.465.908 2.345.908.369 0 .745-.055 1.11-.172 1.23-.391 2.03-1.358 2.03-2.468V11.18h-3.927v11.382zM69.126 15.19v11.474h3.928V15.189c0-.47.474-.87 1.033-.87h13.222v-3.307H74.088c-2.734 0-4.96 1.874-4.96 4.178z" fill="#FCFCFF"></path><path d="M87.31 17.333H74.587v3.308H87.31v-3.308zM90.64 14.32h7.81v12.348h3.928V14.32h7.809v-3.308H90.641v3.307zM116.337 20.582v-3.261c0-1.652 1.596-2.997 3.555-2.997h11.585v-3.308h-11.585c-4.126 0-7.483 2.829-7.483 6.305v3.261c0 3.476 3.357 6.305 7.483 6.305h7.213v-3.308h-7.213c-1.959-.004-3.555-1.345-3.555-2.997z" fill="#FCFCFF"></path><path d="M127.604 17.295h-7.306v3.308h7.306c.554 0 1.02.294 1.02.643v5.422h3.928v-5.422c0-2.181-2.218-3.95-4.948-3.95z" fill="#5A66F9"></path><path d="M147.966 11.155h-4.875c-4.432 0-8.034 3.039-8.034 6.77v2.19c0 3.733 3.602 6.772 8.034 6.772h4.875c4.432 0 8.034-3.04 8.034-6.771v-2.19c0-3.737-3.602-6.771-8.034-6.771zm4.11 8.96c0 1.909-1.841 3.464-4.105 3.464h-4.876c-2.265 0-4.106-1.551-4.106-3.463v-2.19c0-1.908 1.841-3.463 4.106-3.463h4.876c2.264 0 4.105 1.55 4.105 3.463v2.19z" fill="#FCFCFF"></path></svg>
            }
            </div>

        <div className='nft__navbar-links'>
            <Menu />
        </div>
        <div className='nft__navbar-dropdown'>
            {
                openSubMenu ?
                <ChevronRightIcon fontSize='large' onClick={()=>setOpenSubmenu(!openSubMenu)} />:
                <KeyboardArrowDownIcon fontSize='large' onClick={()=>setOpenSubmenu(!openSubMenu)} />
            }
        </div>
        <div className='nft__navbar-search'>
                <div className={`nft__navbar-search-container ${openSearch && 'nft__navbar-search-popup'}`}>
                    <div className='nft__navbar-search-head'>
                        
                        <div className="nft__navbar-search-input">
                            <SearchOutlinedIcon className='nft__navbar-search_search' />
                            <input 
                                placeholder='Search Collections/ Addresses /' 
                                onFocus={()=>{setOpenSearch(true)}}  />
                        </div>
                        {
                            openSearch && 
                            <div className='nft__navbar-search-close'>
                                <CloseOutlinedIcon onClick = {()=>setOpenSearch(false)} />
                            </div>
                        }
                    </div>
                    {
                        openSearch && (
                            <div className='nft__navbar-search-content'>
                                <h5 className='nft__navbar-search-content-title'>Hot</h5>
                                {
                                    links.map( (i,item)=>(
                                        <div className='nft__navbar-search-content-btn' key={item}>
                                            <div className='nft__navbar-search-content-btn-user'>
                                                <img src={i.url} alt={i.name} />
                                                <p>{i.name}</p>
                                            </div>
                                            <div className='nft__navbar-search-content-btn-arrow'>
                                                <ArrowForwardIosIcon />
                                            </div>
                                        </div>
                                    ) )
                                }
                            </div>
                            
                        )
                    }
                    
                </div>
            
        </div>

        <div className='nft__navbar-right'>
            {
                !darkMode ? <DarkModeIcon onClick={handleChangeTheme} /> : <LightModeIcon onClick={handleChangeTheme} />
            }
            <div className='nft__navbar-right_language' onClick={()=>setOpenLang(!openLang)}>
                <p>En</p>
                <ArrowDropDownIcon className={`nft__navbar-right_language-icon ${openLang && 'nft__navbar-right_language-icon-open'}`} />
                {
                    openLang && (
                        <div className='nft__navbar-right_language-list'>
                            <div className='nft__navbar-right_language-list-item'>
                                <p>English</p>
                                <p className='nft__navbar-right_language-list-item-logo'>EN</p>
                            </div>
                            <div className='nft__navbar-right_language-list-item'>
                                <p>简体中文</p>
                                <p className='nft__navbar-right_language-list-item-logo'>ZH</p>
                            </div>
                            <div className='nft__navbar-right_language-list-item'>
                                <p>Spanish</p>
                                <p className='nft__navbar-right_language-list-item-logo'>ES</p>
                            </div>
                            
                            
                        </div>
                    )
                }
                
            </div>
            <div className='nft__navbar-right_icon'>
                <AccountCircleIcon className={`nft__navbar-right_icon-icon `} />
                
                <div className='nft__navbar-right_icon-list'>
                    <div className='nft__navbar-right_icon-list-item'>
                        <AccountCircleIcon className='nft__navbar-right_icon-list-item-logo'/>
                        
                        <p>My profile</p>
                    </div>
                    <div className='nft__navbar-right_icon-list-item'>
                        <LiveTvIcon className='nft__navbar-right_icon-list-item-logo'/>
                        <p>Watch List</p>
                    </div>
                    
                    
                    
                </div>
        
            </div>
            {/* <AccountCircleIcon/> */}
        </div>
    </div>
  )
}

export default Navbar