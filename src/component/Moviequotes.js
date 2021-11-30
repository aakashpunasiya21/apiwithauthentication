import React, { useEffect } from "react"
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { requestQuotes } from "../thunk/movieqoutes";


export const Moviequotes = () => {
  const dispatch = useDispatch();
  const movieQuotes = useSelector((state) =>state.booksapi.quotes)
const {id}=useParams();

//   const charcterinfo = useSelector((state) => state.booksapi.character);
//   console.log("Character", charcterinfo)
//   const dispatch = useDispatch();
useEffect(() => {
  dispatch(requestQuotes(id))
}, [])
debugger;
  return (
    <>
     <h1 className="text-center">MovieQuotes</h1><hr />
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Gender</th>
              
            </tr>
          </thead>
          <tbody>
            {movieQuotes.map((data) => (
              <tr key={data.id}>
                <td>{data._id}</td>
                <td>{data.name}</td>
                <td>{data.race}</td>
                <td>{data.budgetInMillions}</td>
                </tr>
            ))}

          </tbody>
        </Table>
     

    </>
  )
}
