import React from 'react'
import AutoComplete from '../components/AutoComplete';
import StockList from '../components/StockList';


const StockOverview = () => {
  return (
    <div className='mt-5'>
        <h1>StockOverview</h1>
        <AutoComplete />
        <StockList />
    </div>
  )
}

export default StockOverview;