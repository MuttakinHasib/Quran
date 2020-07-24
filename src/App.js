import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Verse from './components/Verse/Verse';
import { useStateValue } from './context/StateProvider';
import axios from 'axios';
import { FETCH_DATA } from './context/types';
import Settings from './components/Settings/Settings';

const App = () => {
  const [, dispatch] = useStateValue();
  const fetchChaptersData = async () => {
    const { data } = await axios.get('data/chapters.json');
    dispatch({
      type: FETCH_DATA,
      chapters: data,
    });
  };

  useEffect(() => {
    fetchChaptersData();
  }, []);
  return (
    <Router>
      <Header />
      <div>
        <Settings />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/:id' component={Verse} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
