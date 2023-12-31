import MainRoute from './AllRouter/MinRouter';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <>
      <Navbar/>
      <MainRouter/>
      <PrivateRoute/>
    </>
  );
}

export default App;