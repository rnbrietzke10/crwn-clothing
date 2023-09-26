import { Routes, Route } from 'react-router';
import Home from './routes/Home/Home';
import Navigation from './routes/Navigation/Navigation';

const Shop = () => {
  return (
    <div>
      <h2>This is the shop page.</h2>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
