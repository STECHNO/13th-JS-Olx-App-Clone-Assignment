import React from 'react';
import Header from '../components/Header/Header.jsx';
import Categories from '../components/Categories/Categories.jsx';
import Slider from '../components/Slider/Slider.jsx';
import Footer from '../components/Footer/Footer.jsx';
import RecommendedAds from '../components/RecommendedAds/Recommended_Ads.jsx';
import OlxAds from '../components/OlxAds/OlxAds.jsx'

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Categories />
                <Slider />
                <OlxAds />
                <Footer />
            </div>
        )
    }
}

export default Home;