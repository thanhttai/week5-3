import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState, useEffect } from "react";
import { Switch, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Categories from './pages/Categories';
import Sports from './pages/Sports';
import Health from './pages/Health';
import Science from './pages/Science';
const myKey = process.env.REACT_APP_API_KEY;

const App = () => {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("business");

  useEffect(() => {
    let limit = 5;
    const getData = async () => {
      let baseUrl = "https://newsapi.org/v2";
      let queryPath = `/everything?q=${query}`;
      let path = `/top-headlines?country=us&page=${currentPage}`;
      let categoryPath = `&category=${category}`;
      let keyPath = `&apiKey=${myKey}`;
      let url = baseUrl + path + keyPath;
      // console.log(url);
      if (query) {
        url = baseUrl + queryPath + keyPath;
      } else if (category) {
        url = baseUrl + path + categoryPath + keyPath;
      }

      try {
        const data = await fetch(url);
        const result = await data.json();
        setTotalPage(Math.ceil(result.totalResults) / limit);
        setData(result);
        console.log("result", result);
        console.log(url);
      } catch (error) {
        setData();
      }
    };
    getData();
  }, [currentPage, query, category]);


  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/categories/:id" component={Sports} />
        <Route exact path="/categories/:id" component={Health} />
        <Route exact path="/categories/:id" component={Science} />
      </Switch>
    </div>
  );
};

export default App;