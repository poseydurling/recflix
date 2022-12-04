import {useState} from 'react';

//cedric sprint 3

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

export{REPLInput}