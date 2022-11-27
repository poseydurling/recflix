import { SetStateAction, useEffect, useState } from 'react';
import { setTextRange } from 'typescript';
import './main.css'
import axios from 'axios';
import { AutoComplete} from '@syncfusion/ej2-dropdowns';


//https://www.youtube.com/watch?v=Q2aky3eeO40

//define the array of complex data
let searchData: { [key: string]: Object; }[] = [
    { Name: 'Australia', Code: 'AU' },
    { Name: 'Bermuda', Code: 'BM' },
    { Name: 'Canada', Code: 'CA' },
    { Name: 'Cameroon', Code: 'CM' },
    { Name: 'Denmark', Code: 'DK' },
    { Name: 'France', Code: 'FR' },
    { Name: 'Finland', Code: 'FI' },
    { Name: 'Germany', Code: 'DE' },
    { Name: 'Greenland', Code: 'GL' },
    { Name: 'Hong Kong', Code: 'HK' },
    { Name: 'India', Code: 'IN' },
    { Name: 'Italy', Code: 'IT' },
    { Name: 'Japan', Code: 'JP' },
    { Name: 'Mexico', Code: 'MX' },
    { Name: 'Norway', Code: 'NO' },
    { Name: 'Poland', Code: 'PL' },
    { Name: 'Switzerland', Code: 'CH' },
    { Name: 'United Kingdom', Code: 'GB' },
    { Name: 'United States', Code: 'US' }];

//initiates the component
let atcObject: AutoComplete = new AutoComplete({
    // bind the country data to dataSource property
    dataSource: searchData,
    // maps the appropriate column to fields property
    fields: { value: "Name" },
    //set the placeholder to AutoComplete input
    placeholder: "Find a country",
     //enable the autofill property to fill a first matched value in input when press a down key
    autofill: true
});
atcObject.appendTo('#atcelement');

// function App() {
//   const [users, setUsers] = useState([]);
//   const [text, setText] = useState('');
//   const [suggestions, setSuggestions] = useState([]);
//   useEffect(() => {
//     const loadUsers = async () => {
//       const response = await axios.get('mockMovies.ts');
//       console.log(response)
//       //axios.get('put api here');
//       setUsers(response.data.data)
//     }
//     loadUsers();
//   }, [])
//   const onSuggestHandler = (text) =>{
//     setText(text);
//     setSuggestions([]);
//   }
//   const onChangeHandler = (text: SetStateAction<string>)=>{
//     let matches = []
//     if(text.length>0){
//       matches = users.filter(user=>{
//         const regex = new RegExp('${text}', "gi");
//         return users.email.match(regex)
//       })
//     }
//     console.log('matches', matches)
//     setSuggestions(matches);
//     setText(text)
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <input type="text" className="col-md-12 input" style={{marginTop: 10}}
//       onChange={e=>onChangeHandler(e.target.value)}
//       value={text}
//       onBlur={()=>{
//         setTimeout(() => {
//           setSuggestions([])
//         }, 100);
//       }}
//       />
//       {suggestions && suggestions.map((suggestion,i) =>
//         <div key={i} className="suggestion col-md-12 justify-contend-md-center"
//         onClick={() => onSuggestHandler(suggestion.email)}
//         >{suggestion.email} </div>
//         )}
//     </div>
//   );
// }

// export default App;
