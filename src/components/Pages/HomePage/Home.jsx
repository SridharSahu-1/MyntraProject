import React from 'react'
import Product from '../../ProductContainer/Product'
import Footer from '../../Footer/Footer'
import Carousel from '../../Carousel/Carousel'

export default function Home() {

    const products =[
        {
          path:"DayDeals",
          text:"DEAL OF THE DAY"
        },
        {
          path:"BestExclusiveBrand",
          text:"BEST OF MYNTRA EXCLUSIVE BRANDS"
        },
        {
          path:"TopPicks",
          text:"TOP PICKS"
        },{
          path:"CatToBag",
          text:"CATEGORY TO BAG"
        },
      ] 

  return (
   <>
   <Carousel/>

    { products.map((obj)=><Product key={obj.path} path={obj.path} text={obj.text}/>)}
   </>
  )
}
