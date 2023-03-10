import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../requests'

const Home = () => {
  return (
    <div>
        <Main />
        <Row rowId="1"  title="Upcomming Movies" fetchUrl={requests.requestUpcoming}/>
        <Row rowId="2" title="Popular Movies" fetchUrl={requests.requestPopular}/>
        <Row rowId="3" title="Trending Movies" fetchUrl={requests.requestTrending}/>
        <Row rowId="4" title="Horror Movies" fetchUrl={requests.requestHorror}/>
    </div>
  )
}

export default Home