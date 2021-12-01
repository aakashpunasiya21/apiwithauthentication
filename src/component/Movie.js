import React, { useEffect } from "react"
import { Table, Button, Form, FloatingLabel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { setMovieFilters } from "../actions";
import { requestMovie } from "../thunk/movie";

export const Movie = () => {
  const allmovie = useSelector((state) => state.booksapi.movie.movie);

  const filter = useSelector((state) => state.booksapi.movie.filter);
  const dispatch = useDispatch();
  const handleChangeFilter = (event) => {

    const { value, name } = event.target;
    dispatch(setMovieFilters({ [name]: value }));
    console.log("value", event.target)
  }

  useEffect(() => {
    const getMovie = () => {
      dispatch(requestMovie(filter))
    }
    getMovie();
  }, [filter.limit])
  return (
    <>
      <h1 className="text-center">Movie Page</h1><hr />
      <div className="container-fluid">
        <FloatingLabel controlId="floatingSelect" label="Works with Budgetinmillions">
          <Form.Select aria-label="Floating label select example" name="limit" value={filter.limit} onChange={handleChangeFilter}>
            <option value={100}>100</option>
            <option value={200}>200</option>
            <option value={300}>300</option>
            <option value={400}>400</option>
            <option value={600}>600</option>
          </Form.Select>
        </FloatingLabel>
      </div>
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
                <Link to={`movie/${data._id}/quotes`}><Button>Movie Quote</Button></Link></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}
