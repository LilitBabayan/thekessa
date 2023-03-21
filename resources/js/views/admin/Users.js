import {withRouter} from "react-router-dom";
import Header from "./Header";
import React, {useEffect, useState} from "react";
import {Load} from "../../components/Loading/Load";
import ReactPaginate from "react-paginate";

function Users(props) {
    const [users, setUsers] = useState([])
    const [showLoading, setShowLoading] = useState(true);
    const [pagesCount, setPagesCount] = useState(0);
    const [skip, setSkip] = useState(0)


    useEffect(() => {
        getUsers().then((response) => {
            setUsers(response.data.users)
            setPagesCount(Math.ceil(+response.data.count / 10))
            setShowLoading(false)
            console.log(111, response.data.users)
        })
    }, [skip])

    function getUsers() {
        let data = {
            params: {
                skip: skip ? skip : 0
            }
        };
        return new Promise((resolve, reject) => {
            axios.get(api_routes.user.users(),data).then((response) => {
                return response;
            }).then(json => {
                resolve(json);
            }).catch(error => {
                reject(error)
            });
        });
    }

    function nextPage(e) {
        setSkip(e.selected * 15)
    }



    return (
        <div>
            <Header/>

            <div className={`container mt-5`}>
                {!showLoading ? (
                    <div className={`table-responsive`}>
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First name</th>
                                <th scope="col">Last name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Admin</th>
                            </tr>
                            </thead>
                            <tbody>
                            {users.map((elem, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{elem.id}</th>
                                        <td>{elem.first_name}</td>
                                        <td>{elem.last_name}</td>
                                        <td>{elem.email}</td>
                                        <td>{elem.is_admin}</td>
                                    </tr>
                                )
                            })}

                            </tbody>
                        </table>

                        {pagesCount > 1 ? (
                            <ReactPaginate
                                nextLabel=">"
                                onPageChange={(e) => nextPage(e)}
                                pageRangeDisplayed={3}
                                marginPagesDisplayed={2}
                                pageCount={pagesCount}
                                previousLabel="<"
                                pageClassName="page-item"
                                pageLinkClassName="page-link"
                                previousClassName="page-item mainColor"
                                previousLinkClassName="page-link mainColor"
                                nextClassName="page-item"
                                nextLinkClassName="page-link mainColor"
                                breakLabel="..."
                                breakClassName="page-item"
                                breakLinkClassName="page-link mainColor"
                                containerClassName="pagination flex justify-content-center"
                                activeLinkClassName="bg-mainColor text-white"
                                renderOnZeroPageCount={null}
                            />
                        ) : null}
                    </div>
                ) : (
                    <div>
                        <Load/>
                    </div>
                )}

            </div>

        </div>
    )

}

export default withRouter(Users)
