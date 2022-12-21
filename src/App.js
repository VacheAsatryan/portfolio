import './App.css';
import './assets/global.css';
import usePreloader from './components/hook/userpleoader/Userpreloader';
import MyPages from './components/router/Index';



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
