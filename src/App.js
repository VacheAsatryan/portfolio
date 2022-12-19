import './App.css';
import './assets/global.css';
import Header from './components/header/Header';
import Foother from './components/foother/Foother';
import Chapter from './components/chapter/Chapter';
import Video from './components/videos/Video';
import Loader from './components/loader/Loader';
import usePreloader from './components/hook/userpleoader/Userpreloader';
import MyPages from './components/router/Index';
import Scrolling from './components/scrolling/Scrolling';
import image from  './components/img/Vach.jpg'


function App() {
  const { loading } = usePreloader();
  // if (loading) {
  //   return <Loader />
  // }
  return (
    <>

      <div className="App">
 
        <MyPages/>
      </div>
    </>
  );
}

export default App;
