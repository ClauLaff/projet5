import './Home.scss';
import Banner from '/src/components/Banner/Banner.jsx';
import Gallery from '/src/components/Gallery/Gallery.jsx';

function Home() {
  
  return (
    <main>
      <div className="main">
          <Banner bannerName="banner-home" overlayName="overlay-home" innerText="Chez vous, partout et ailleurs"/>
          <Gallery/>
      </div>
    </main>
  )
}

export default Home
