import { SetStateAction, useEffect, useState } from "react";

// //https://www.youtube.com/watch?v=Q2aky3eeO40

// export default function autocompleteSearch() {
//     const [users, setUsers] = useState([]);
//     const [text, setText] = useState('');
//     const [suggestions, setSuggestions] = useState([]);
//     useEffect(() => {
//     const loadUsers = async () => {
//       const response = await fetch('put api here');
//       //axios.get('put api here');
//       setUsers(response.data.data)
//     }
//     loadUsers();
//     }, [])
//     const onChangeHandler = (text: SetStateAction<string>)=>{
//         let matches = []
//         if(text.length>0){
//             matches = users.filter(user=>{
//             const regex = new RegExp('${text}', "gi");
//             return users.email.match(regex)
//         })
//     }
//     setSuggestions(matches);
//     setText(text)
//   }

//     return (
//         <div className="container">
//          <input type="text" className="search-box" placeholder="Enter a movie title here!"
//           onChange = {e => onChangeHandler(e.target.value)}
//           value={text}
//         />
//           {suggestions && suggestions.map((suggestion,i) =>
//           <div key={i} className="col-md-12 justify-contend-md-center"> {suggestion.email} </div>
//         )}
//         </div>
//     );
// }

// export {autocompleteSearch}