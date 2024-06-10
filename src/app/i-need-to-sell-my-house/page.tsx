import { Metadata } from 'next'

export const metadata:Metadata = {
  title:{
    absolute:"Top Reasons To Sell Your Home in CA | CLM Homes",
  }
}


import React from 'react'
import WhySellHerosection from '../components/WhySellHerosection'
import ResponsiveWhyselltop from '../components/ResponsiveWhyselltop'
import Whysellsecond from '../components/Whysellsecond'
import Texteffectsection from '../components/Texteffectsection'
import ResponsiceWhysell2 from '../components/ResponsiceWhysell2'

const WhySell = () => {
  return (
    <div>
  <WhySellHerosection />
  <ResponsiveWhyselltop />
  <div className="flex items-center justify-center ">
      <Whysellsecond />
    </div>
    <Texteffectsection />
   
    </div>
  )
}

export default WhySell