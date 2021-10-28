import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState, useEffect } from "react";
import SearchBox from './Components/SearchBox';
import SideMenu from './Components/SideMenu';
import MainPage from './Components/MainPage';
import PaginationNews from './Components/PaginationNews';

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
      <SearchBox setQuery={setQuery} />
      <div className="container">
        <div className="row">
          <div className="col-3">
            <SideMenu setCategory={setCategory} />
          </div>
          <div className="col-9">
            <PaginationNews setCurrentPage={setCurrentPage} currentPage={currentPage} totalPage={totalPage} />
            <MainPage data={data} category={category} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;