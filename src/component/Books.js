import React, { useEffect } from "react"
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux"
import { requestBooks } from "../thunk/book"

export const Books = () => {
  const bookinfo = useSelector((state) => state.booksapi.book);
  console.log("books", bookinfo)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestBooks())
  }, [])
  return (
    <>
      <h1 className="text-center">Books Page</h1><hr />
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {bookinfo.map((data) => (
            <tr key={data.id}>
              <td>{data._id}</td>
              <td>{data.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
  </>
  )
}
