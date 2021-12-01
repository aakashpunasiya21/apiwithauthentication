import React, { useEffect } from "react"
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { requestCharacter } from "../thunk/character";
import { requestMovie } from "../thunk/movie";


export const Character = () => {
  const charcterinfo = useSelector((state) => state.booksapi.character);
  console.log("Character", charcterinfo)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestCharacter())
  }, [])
  return (
    <>
     <h1 className="text-center">Character Page</h1><hr />
     <select name="limit" >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
      </select>
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Gender</th>
              
            </tr>
          </thead>
          <tbody>
            {charcterinfo.map((data) => (
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
