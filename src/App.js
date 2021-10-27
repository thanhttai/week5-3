import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState, useEffect } from "react";
import SearchBox from './Components/SearchBox';
import SideMenu from './Components/SideMenu';
import MainPage from './Components/MainPage';
import PaginationNews from './Components/PaginationNews';

// const myKey = process.env.REACT_APP_API_KEY;
// console.log(myKey)
const App = () => {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("business");

  useEffect(() => {
    const getData = async () => {
      let baseUrl = "https://newsapi.org/v2";
      let queryPath = `/everything?q=${query}`;
      let categoryPath = `/top-headlines?country=us&category=${category}`;
      let pagePath = `/top-headlines?country=us&page=${currentPage}`;
      let keyPath = `&apiKey=fc7be1929def4fab9690a2ecd32ee815`;
      let url = baseUrl + categoryPath + keyPath;


      if (query) {
        url = baseUrl + queryPath + keyPath;
      } else if (category) {
        url = baseUrl + categoryPath + keyPath;
      } else if (currentPage) {
        url = baseUrl + pagePath + keyPath;
      }

      try {
        const data = await fetch(url);
        const result = await data.json();
        console.log(result)
        setData(result);
      } catch (error) {
        setData();

      }
    };
    getData();
  }, [query, category, currentPage]);


  return (
    <div className="App">
      <SearchBox setQuery={setQuery} />
      <div className="container">
        <div className="row">
          <div className="col-3">
            <SideMenu setCategory={setCategory} />
            <PaginationNews setCurrentPage={setCurrentPage} currentPage={currentPage} />
          </div>
          <div className="col-9">
            <MainPage data={data} category={category} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

