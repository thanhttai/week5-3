import React from 'react'
import { Pagination } from 'react-bootstrap'
const PaginationNews = ({ setCurrentPage, currentPage }) => {
    let active = 1;
    let items = [];
    const handleClick = (number) => {

        setCurrentPage(number)
    }
    for (let number = 1; number <= 3; number++) {
        items.push(
            <Pagination.Item key={number} onClick={() => handleClick(number)} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }

    console.log(items)
    const paginationBasic = () => {



        return (
            <div>
                {/* <Pagination id="">{items}</Pagination>
                <br /> */}

                <Pagination id="" size="lg">{items}</Pagination>
                <br />

                {/* <Pagination id="" size="sm">{items}</Pagination> */}
            </div>
        )

    }

    return paginationBasic()
}

export default PaginationNews
