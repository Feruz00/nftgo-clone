import React from 'react'
import './Active.css'
import {trading} from './metadata'
import {Table} from 'antd'
import { Avatar } from '@mui/material'

const Active = () => {
  return (
    <div className='nft__active'>
        <div className="nft__active_body">
            <div className="nft__active_body-head">
                <div className="nft__active_body-head-left">
                    <a href="/" className='btn btn-light-primary'>
                        Top Trending🔥
                    </a>
                    <a href="/" className='btn btn-light-secondary'>
                        Leaderboard🏆
                    </a>
                    <a href="/" className='btn btn-light-secondary'>
                        Marketplace📊
                    </a>
                </div>
                <div className='nft__active_body-head-left'>
                    <a href="/" className='btn btn-light'>
                        View More
                    </a>
                </div>
            </div>
            {/* <div className="nft__active_body-main"> */}
                <Table
                    dataSource={trading}
                    className='nft__active_body-main'
                    
        pagination={false} 
                >
                    <Table.Column title='Icon' dataIndex="icon" key="feruz"  render={text=>
                            
                            (
                                <Avatar style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} src={ text } />
                            )
                            }

                        />
                    <Table.Column title="Name" dataIndex="name" key="name" />
                        
                    <Table.Column title="Volume(24H)" dataIndex="volume" key="start" render={(text)=>(<p>{text}</p>)} />
                    <Table.Column title="Δ Volume(24H)" dataIndex="delta" key="finish" render={(text)=>(<p>{text}</p>)} />
                    <Table.Column title="Floor Price" dataIndex="price" key="price" render={(text)=>(<p>{text}</p>)} />
                    <Table.Column title="Market Cup" dataIndex="cap" key="dereje" />
                
                </Table>
            {/* </div> */}

            <div className='nft__active_body-bottom'>
                <h2 className='nft__active_body-bottom-title'>Newly Added</h2>
                {
                    trading.map( (i,item)=>
                    
                    <Avatar style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }} src={ i.icon } key={item} />
                )
                }
            </div>
        </div>
    </div>
  )
}

export default Active