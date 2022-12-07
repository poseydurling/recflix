import {useState} from 'react';

import { FeatureCollection } from "geojson";

//cedric sprint 3

export async function getMovieAutocomplete(name:String) : Promise<string> {

  //change this local host once backend is done
  
  return await fetch(`http://localhost:3232/getMap?minLat=${name}`)
  .then(response =>  {
    // return response.json()
    let statsResp = response.json()
    return statsResp.then(data => {
        let respType = data.response_type;
        if (respType === "success") {
            return data.stats.toString()
        } else{
            return "Error"
        }
} )})
}

interface REPLInputProps {
    parseCommand : (command: string) => any
  }

function REPLInput({parseCommand} : REPLInputProps) {
    const [value, setValue] = useState('')
    return (
      <div className="repl-input">
        <input type="text" value={value} onChange={(ev) => setValue(ev.target.value)} placeholder="Enter command here" className="repl-input"></input>
        <button className="submit-button-itself" onClick={() => {
        console.log('clicked')
          parseCommand(value);
          setValue('');
        }}>
          Submit
        </button>
      </div>
    );
  }