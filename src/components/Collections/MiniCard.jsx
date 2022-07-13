import React, { useEffect, useMemo, useState } from 'react'

const MiniCard = ({name, image, total, price, time, icons}) => {
    const [timer, setTimer] = useState(time)
    
    useEffect( ()=>{
        const inter = setInterval(()=>{
            if(timer === 0){
                clearInterval(inter)
            }
            setTimer(timer - 1)
        },1000)
        return ()=>clearInterval(inter)
    } )

    
    const ans = useMemo( ()=>{
        let g = new Date( timer * 1000 )
        return g
    },[ timer] )

    return (
    <div className='nft__collections-card'>
        
        <div className='nft__collections-card-top'>
            <div className='nft__collections-card-img'>
                <img src={image} alt="image" />
            </div>
            
            <h3>{name}</h3>

            <div className='nft__collections-links'>
                    {
                        icons.map((i,item)=>(
                        <div className='nft__collections-links-icon' key={item}>
                            <div className='nft__collections-links-icon-i'>    
                                {<i.icon className='nft__collections-links-icon-ii'/>}
                                <div className='nft__collections-links-icon-p'>{i.name}</div>
                            </div>
                        </div>
                        ))
                    }
                
            </div>

        </div>
        <div className='nft__collections-card-bottom'>
            
            <div className='nft__collections-price'>
                <div className='nft__collections-price-left'>
                    <p>Total</p>
                    <h4>{total}</h4>
                </div>
                <div className='nft__collections-price-right'>
                    <p>Price</p>
                    <h4>{price}</h4>
                </div>
            </div>

            <div className='nft__collections-btns'>
                <div className='nft__collections-btns-left'>
                    {timer > 0 ? 
                        <p> 
                            {
                                ans.toLocaleTimeString().replace(/:\d+ /, ' ')
                            }
                        </p>:
                        <p className='nft__collections-btns-left-live'>🔥Live</p>
                    }
                </div>
                <div className='nft__collections-btns-right btn-light'>
                    Mint
                </div>

            </div>
        </div>
        
    </div>
  )
}

export default MiniCard