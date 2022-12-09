import React from 'react'
import BackHome from '../components/LandingPage/BackHome'

function GiftShop(props) {
  return (
    <div className='GiftShopPageView'>
    <header className='PageHeaderBack'>
        <BackHome></BackHome>
        <h1>Gift Shop</h1>
      </header>
      <main>
        <section>
        <h2>Blessed Mother Gift Shop</h2>
        <p>
        Gift shop  is open on Sunday's 9:30-11:30. You can also come in most Tuesdays from 10:00-1:00 as there is normally someone in the office. 
        </p>
        </section>

        <section>

        <h2>ARE YOU LOOKING FOR SOMETHING FOR THAT SPECIAL OCCASION.</h2>
        <p>We have what you may be looking for.  Crucifix of all sizes as well as, standing and hanging. Religious artifacts, medals and statues. Browse through some inexpensive pieces of jewelry. We have a great assortment of reading material for young and old alike.</p>
        </section>

      </main>
      </div>
  )
}


export default GiftShop
