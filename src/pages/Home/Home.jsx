import './Home.scss';
import Banner from '/src/components/Banner/Banner.jsx';
import Gallery from '/src/components/Gallery/Gallery.jsx';

function Home() {
  
  return (
    <main>
      <div>
        <header>
          <Banner bannerName="banner-home" overlayName="overlay-home" innerText="Chez vous, partout et ailleurs"/>
        </header>
        <main>
          <Gallery/>
        </main>
      </div>
    </main>
  )
}

export default Home
