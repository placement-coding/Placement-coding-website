import React, {useState}from 'react'
import axios from "axios";
import {Button} from 'semantic-ui-react';


const Ques=()=>{
    const [Ques, setQues] = useState([]);
    const [error, setError] = useState("");
    axios
    .get("/array/q1")
    .then((response) => {
       console.log(response.data);

      setQues(response.data);
    })
    .catch((error) => {
       console.log(error);
      setError(
        "Failed to load resource: the server responded with a status of 500 (Internal Server Error)"
      );
    });
    return(
        <div>
            <h1>{error}</h1>
            {Ques.map((data)=>{
                return(
                <h1>
                    {data.q1}
                    {data.c1}
                </h1>

                )
            })}
        </div>
    )
}
export default Ques;