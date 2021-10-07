# Top 10 Movies

This React application displays cards in a grid layout (styled with Bootstrap), each showing an image and some basic data for a movie.

## Install the Dependencies

To install the dependencies, run:

```
npm install
```

## Add Data

In the `src/assets/data.json` file, edit/add the data for each movie (or book, cd, etc.). The data file is an array of objects in the following format:

```
{
    "id": 1,
    "title": "Pulp Fiction",
    "director": "Quentin Tarantino",
    "year": 1994,
    "img": {
      "src": "http://www.example.com/images/image01.jpg",
      "alt": "pulp fiction"
    },
    "ranking": 1
},
```

## Run the App

To run the app in development mode, in the project directory run:

```
npm start
```

Open [http://localhost:8080](http://localhost:8080) in the browser to view the application.

The page will reload if you make edits.

## Build the App

To build the app for production into a `dist/` directory, run:

```
npm run build
```

This will bundle React in production mode and optimize the build for best performance.

The application is ready to be deployed.
