import SideBar from './Components/SideBar/SideBar';
import './App.css';
import Item from './Components/Item/Item';

function App() {
  return (
    <div className="App">
      <SideBar/>
      <section className='home'>
        <div className='text'>E Commerce</div>
        <Item/>
      </section>
    </div>
  );
}

export default App;
