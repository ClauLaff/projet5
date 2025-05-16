import './App.scss';
import Banner from '/src/components/Banner/Banner.jsx';
import Gallery from '/src/components/Gallery/Gallery.jsx';

function App() {
  
  return (
    <main>
      <div>
        <header>
          <Banner/>
        </header>
        <main>
          <Gallery/>
        </main>
      </div>
    </main>
  )
}

export default App
