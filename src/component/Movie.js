import React, { useEffect } from "react"
import { Table,Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { requestBooks } from "../thunk/book"
import { requestMovie } from "../thunk/movie";

export const Movie = () => {
  const history = useHistory();
    const allmovie = useSelector((state) => state.booksapi.movie);
  console.log("Movies", allmovie)
  const dispatch = useDispatch();
  // const {id} =useParams();

  
  useEffect(() => {
    dispatch(requestMovie())
  }, 
  [])
    return(
        <>
        <h1 className="text-center">Movie Page</h1><hr />
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Runtimeinminutes</th>
              <th>Budgetinmillions</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allmovie.map((data) => (
              <tr key={data.id}>
                <td>{data._id}</td>
                <td>{data.name}</td>
                <td>{data.runtimeInMinutes}</td>
                <td>{data.budgetInMillions}</td>
                <td>
                  <Link to={`movie/${data._id}/qoutes`}><Button>Movie Quote</Button></Link></td>
                </tr>
            ))}

          </tbody>
        </Table>
       
        </>
    )
}
