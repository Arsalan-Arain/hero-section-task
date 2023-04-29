import './App.css';
import HeroSection from './components/HeroSection/HeroSection';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <div style={{width: '100vw', height: '100vh', marginTop: '24px'}}>Page content</div>
    </div>
  );
}

export default App;
