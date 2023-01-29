import React from 'react'
import AutoComplete from '../components/AutoComplete';
import StockList from '../components/StockList';
// import tradeImage from '../trade.jpg'
import tradeImage from '../trade-removebg-preview.png'

const StockOverview = () => {
  return (
    <div className='mt-5'>
      <div className='text-center'>
        <h1>TradeMatic</h1>
        <img src={tradeImage} alt="Trade" className='mb-3 trade-image' style={{width: '150px'}} />
      </div>
        <AutoComplete />
        <StockList />
    </div>
  )
}

export default StockOverview;