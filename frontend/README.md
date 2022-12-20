# Frontend
fshim (Faith Shim), icebear200 (Angela Osei-Ampadu), and poseydurling (Margaret Durling)
collaborators: Tyler Gurth (tgurth)

### `About`
This is the frontend of our Movie Recommender project. It is responsible for creating the user-interactive page that takes in three movies from the user and displays a recommended movie for them to watch. Once the user selects 3 movies, the movies’ ids are added to a list which are sent in a fetch request to our backend to get a list of movie recommendations from our algorithm. Once the user clicks recommend, we direct them to our recommendation page which displays our first movie recommendation for them. There is a next button which the user can click to get the next movie recommendation from our recommendation list which displays in a component next to the original recommendation. 

### `Components`
- RecommendButton.tsx and NextButton.tsx contain functions responsible for both sending a post request to our backend and sending a subsequent request to the api to fetch information regarding the recommended movie.
-On button click, the recommend button directs users to the recommendation page and sends a post request to our backend to fetch the list of recommended movies we generated based on the user’s inputs. The user can get up to 10 recommendations (our original recommendation and 9 new recommendations), though not all movies have 10 recommendations. The first recommended movie is displayed on the recommendation page right when the user is directed there. The recommendation page also contains the “next” button which on button click, uses a useState that gives a user a new recommendation on each click. When the next button is clicked, it renders a new movie component which is the same component the following recommendations are displayed in.
-We create movie components which are updated with useStates to display the movie information (name and poster path) through the metaData interface. Our movie components are grey/empty, a choice we made to prompt users to select up to 3 movies to fill before we recommend them a movie.

### `Controller`
- Search.tsx contains functions responsible for sending a request to the backend server at the titles_to_ids endpoint to populate the master list of movie titles to ids. It is also responsible for creating the list of three user-inputted movies to send as a post request
-Media.tsx: The posterPath is displayed within the movie components. We fetch the posterPath from the external API using our fetchPoster method which takes in the name of the inputted movie, and a counter for keeping track of how many times the search button is clicked. The fetchPoster method is called when the user clicks search after each movie they look up. 

### `Views`
- Our App class renders the layout of our page. When the app is first rendered, the form page is the first page users see. Here, users can search up to 3 movies to get a movie recommendation for. Once the user selects 3 movies, the movies’ ids are added to a list which are sent in a fetch request to our backend to get a list of movie recommendations from our algorithm. Once the user clicks recommend, we direct them to our recommendation page which displays our first movie recommendation for them. There is a next button which the user can click to get the next movie recommendation from our recommendation list which displays in a component next to the original recommendation. 

### `Testing`
- Our tests cover:
    - fetches to backend titles_to_ids endpoint
    - fetches to backend recommednations endpoint
    - fetches to api 
    - getRecommendation() function in controller search.tsx

### `Configuration`
- To run the program :
    - run 'npm install'
    - run 'npm i rsuite' (our autocomplete is based on this library!)

- To run tests:
    - navigate into the frontend folder
    - run "npm test" in the terminal