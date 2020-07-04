import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import { fetchSurah } from './api';
import Verse from './components/Verse/Verse';
// import data from './data/'


const App = () => {
  const [surah, setSurah] = useState([]);
  useEffect(() => {
    const getData = async () => {
      setSurah(await fetchSurah());
    };
    getData();
  }, []);

  return (
    <Provider store={store}>
      <Fragment>
        <Header data={surah} />
        <Router>
          <Switch>
            <Route exact path='/' component={() => <Home data={surah} />} />
            <Route exact path='/:id' component={() => <Verse data={surah} />} />
          </Switch>
        </Router>
      </Fragment>
    </Provider>
  );
};

export default App;
