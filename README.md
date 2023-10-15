# React Film App

## Backend

Written in Typescript with Mongoose for a MongoDb Backend.

In terminal navigate to `backend` Compile typescript with

`tsc`

Run with npm with:

`npm start`

Runs on port 3030.

## Frontend

In a new terminal window navigate to `frontend` and build in reactJS start with:

`npm start`

Runs on port 3000.

### Application Overview

This React application consists of four files: `App.js`, `SearchForm.js`, `ItemDetails.js`, and `ItemList.js`. The application is designed to allow users to search for films and display details about the selected film. Below is an explanation of each file:

**App.js:**

- `App.js` is the main component of the application.
- It manages the state for several variables using `useState`. These variables include `selectedFilmId`, `data`, `loading`, `searchTerm`, and `searchResults`.
- The `handleSearch` function is used to perform a search based on the user's input. It sets the `searchTerm`, triggers the loading state, fetches data from the API based on the search term, and updates the `data`, `searchResults`, and `loading` states accordingly.
- The `handleFilmSelect` function is used to set the `selectedFilmId` when a film is selected from the list.
- The `return` statement renders the main UI of the application. It includes a search form, loading indicators, and components like `ItemList` and `ItemDetails`. The rendering logic depends on the loading state and the availability of data. If data is available, it's displayed; otherwise, loading or error messages are shown.

**SearchForm.js:**

- `SearchForm.js` is a functional component responsible for rendering the search form.
- It uses `useState` to manage the `searchTerm` state, which represents the user's input in the search field.
- The `handleSearch` function is called when the "Search" button is clicked. It invokes the `onSearch` callback passed as a prop and provides the current `searchTerm`.
- The component renders an input field and a button, and it updates the `searchTerm` state based on user input.

**ItemDetails.js:**

- `ItemDetails.js` is a functional component responsible for displaying details of the selected film.
- It uses `useState` and `useEffect` to manage the `data` and `loading` states. The component fetches film details based on the `selectedFilmId`.
- The `useEffect` hook runs when `selectedFilmId` changes. It fetches data from the API, updates the `data` and `loading` states accordingly, and handles errors.
- The component then renders the film details, including the title, certificate, image, description, and release date. It also handles loading states and error states.

**ItemList.js:**

- `ItemList.js` is a functional component responsible for rendering a list of films.
- It receives `items` (film data) and an `onFilmSelect` callback as props.
- The component maps over the `items` and renders each film's title and a "Show Details" button. When the button is clicked, it invokes the `onFilmSelect` callback with the film's ID.
- It returns a list of films and handles interactions with them.

In summary, this React application allows users to search for films using a search form, displays a list of search results, and provides detailed information about the selected film. It demonstrates the use of state management, data fetching, and component composition in a React application.