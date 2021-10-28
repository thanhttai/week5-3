import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import React, { useState, useEffect } from "react";
import SearchBox from '../Components/SearchBox';
import SideMenu from '../Components/SideMenu';
import MainPage from '../Components/MainPage';
import PaginationNews from '../Components/PaginationNews';

const myKey = process.env.REACT_APP_API_KEY;

const Categories = () => {
    const [query, setQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [data, setData] = useState([]);
    const [category, setCategory] = useState("");

    useEffect(() => {
        let limit = 5;
        const getData = async () => {
            let url = `https://newsapi.org/v2/top-headlines?country=us&page=${currentPage}&category=${category}&apiKey=fc7be1929def4fab9690a2ecd32ee815`

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
            <SearchBox setQuery={setQuery} setCategory={setCategory} />
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

export default Categories;


