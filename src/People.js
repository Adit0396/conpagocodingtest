import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { AgGridReact } from "ag-grid-react";
// import Ag-grid structure stylesheet and theme
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
const People = () => {
    //const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const count =2; //Keeps count of the page
    let url = `https://swapi.dev/api/people/?page=${count}` //Changes the URL as soon as the count is changed
    const columns = [
        {
          headerName: "Name",field: "name",
          },
        {
          headerName: "Birth Year",field: "birth_year",
        },
    
        { headerName: "Gender", field: "gender" },
      ];
    //Table heading
  const [data, setData] = useState([]);
  const [ loading, setLoading] = useState(true);
 // Use state for the api values
  const fetchData = async () => {
    try {
      const results = await axios.get(url);
      setData(results?.data.results);
    } catch (error) {
      console.log(error);
    }
  }
  // Function to get the api values 
  useEffect(() => {
    fetchData();
    setLoading(false)
  }, [])
  if (loading) {
    return <p>Loading...</p>
  }
  // For every change the value is 
  const defaultColDef = {
    flex: 1,
    filter: true,
    sortable: true,
  };
  
 return (
    <div className="container">
       <div
        className="ag-theme-alpine"
        style={{
          justifyContent: "center",
          height: "550px",
          marginLeft: "auto",
          marginRight: "auto",
          fontSize: "19px",
        }}
      >
          
        <AgGridReact
          rowData={data}
          columnDefs={columns}
          defaultColDef={defaultColDef}
          pagination={true}
        />
      </div>
      <button onclick="changePage()"> Next</button>
    </div>
 );
}

export default People;