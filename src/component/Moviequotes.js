import React, { useEffect } from "react"
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { requestQuotes } from "../thunk/movieqoutes";

export const Moviequotes = () => {
  const dispatch = useDispatch();
  const movieQuotes = useSelector((state) => state.booksapi.quotes)
  console.log("dddd", movieQuotes)
  const { id } = useParams();

  useEffect(() => {
    dispatch(requestQuotes(id))
  }, [])

  return (
    <>
      <h1 className="text-center">MovieQuotes</h1><hr />
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Dialog</th>
          </tr>
        </thead>
        <tbody>
          {movieQuotes.map((data) => (
            <tr>
              <td>{data._id}</td>
              <td>{data.dialog}</td>
            </tr>
          ))}
        </tbody>
      </Table>


    </>
  )
}
