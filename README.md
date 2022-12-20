# Recflix (formerly Movie Recommender)

Posey Durling (mdurling), Faith Shim (fshim), Angela Osei-Ampadu (aoseiamp), and Cedric Sirianni (csiriann)

[https://github.com/cs0320-f2022/term-project-aoseiamp-csiriann-fshim-mdurling]()

## Collaborators

N/A

## Overview

Recflix is a web application that provides users with movie recommendations. The user begins by providing three movie examples through an autocomplete text input component. The title and movie poster of the selected examples are displayed on the page. Then, the user clicks Recommend and is redirected to a page which displays the best recommendation. The user can also click a button to request up to nine more recommendations.

## Design Choices

The project contains two major section: `/frontend` and `/backend`. Each directory contains an additional `README.md` outlining design choices in more detail.

The project uses React with TypeScript in the frontend and Flask with Python in the backend.

## Errors/Bugs

N/A

## Testing

Both the frotend and backend contain tests. See their respective `README`s for more information.

## Instructions

Configuration is necessary initially. See the respective `README`s.

In order to run the frontend, `cd` into `/frontend` and run

```console
npm start
```

In order to run the backend, `cd` into `/backend` and run

```console
python3 -m src
```
