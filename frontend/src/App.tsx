import { SetStateAction, useEffect, useState } from 'react';
import { setTextRange } from 'typescript';
import './main.css'
import axios from 'axios';

//https://www.youtube.com/watch?v=Q2aky3eeO40

function App() {
  const [users, setUsers] = useState([]);
  const [text, setText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const loadUsers = async () => {
      const response = await axios.get('put api here');
      //axios.get('put api here');
      setUsers(response.data.data)
    }
    loadUsers();
  }, [])
  const onSuggestHandler = (text) =>{
    setText(text);
    setSuggestions([]);
  }
  const onChangeHandler = (text: SetStateAction<string>)=>{
    let matches = []
    if(text.length>0){
      matches = users.filter(user=>{
        const regex = new RegExp('${text}', "gi");
        return users.email.match(regex)
      })
    }
    console.log('matches', matches)
    setSuggestions(matches);
    setText(text)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <input type="text" className="col-md-12 input" style={{marginTop: 10}}
      onChange={e=>onChangeHandler(e.target.value)}
      value={text}
      onBlur={()=>{
        setTimeout(() => {
          setSuggestions([])
        }, 100);
      }}
      />
      {suggestions && suggestions.map((suggestion,i) =>
        <div key={i} className="suggestion col-md-12 justify-contend-md-center"
        onClick={() => onSuggestHandler(suggestion.email)}
        >{suggestion.email} </div>
        )}
    </div>
  );
}

export default App;
