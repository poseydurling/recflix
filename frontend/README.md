# Frontend
fshim (Faith Shim), icebear200 (Angela Osei-Ampadu), and poseydurling (Margaret Durling)

### `About`
This is the frontend of our Movie Recommender project. It is responsible for creating the user-interactive page that takes in three movies from the user and displays a recommended movie for them to watch.

### `Components`
- RecommendButton.tsx and NextButton.tsx contain functions responsible for both sending a post request to our backend and sending a subsequent request to the api to fetch information regarding the recommended movie.

### `Controller`
- Search.tsx contains functions responsible for sending a request to the backend server at the titles_to_ids endpoint to populate the master list of movie titles to ids. It is also responsible for creating the list of three user-inputted movies to send as a post request

### `Views`
- 

### `Testing`
- Our tests cover:
    - fetches to backend titles_to_ids endpoint
    - fetches to backend recommednations endpoint
    - fetches to api 
    - getRecommendation() function in controller search.tsx

### `Configuration`
- To run the program :
    - install npm
    - install ...

- To run tests:
    - make sure you have npm installed
    - navigate into the frontend folder
    - run "npm test" in the terminal