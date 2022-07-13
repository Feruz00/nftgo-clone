import './App.css'
import Active from './components/Active/Active';
import Collections from './components/Collections/Collections';
import DataApi from './components/DataApi/DataApi';
import { Discover } from './components/Discover/Discover';
import Estimatar from './components/Estimotor/Estimatar';
import Footer from './components/Footer/Footer';
import Join from './components/Join/Join';
import Main from './components/main/Main';
import Navbar from './components/Navbar/Navbar';
import Research from './components/Research/Research';
import Sellers from './components/Sellers/Sellers';
import Slides from './components/Slider/Slider';
import Submenu from './components/SubMenu/Submenu';
import Wallets from './components/Wallets/Wallets';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ marginTop: '4rem', width: '100%', maxWidth: '100%', backgroundColor: 'var(--page-color)', height: '100%' }}>
        <Main />
        <Sellers />
        <Active/>
        <Wallets />
        <Discover />
        <Estimatar/>
        <Collections />
        <DataApi />
        <Research />
        <Slides />
        <Join />
        <Footer />
      </div>
      
      <Submenu />
      </div>
  );
}

export default App;
