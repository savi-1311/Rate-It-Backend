# Rate-It-Backend 
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
Backend files for Rate-It Frontend

The Backend Website for API calls is hosted [Here](https://backend-rate-it.herokuapp.com/)

The Frontend Files can be found at [Rate-It-Project](https://github.com/tend2infinity/Rate-It-Project)

### The following API calls can be made with this project

***

#### GET Requests

* > __/browse/leaderboard__

It scans the database and an array containing the movieID and the votes casted to that movie in decreasing order is returned.

<br>

* > __/browse/list?email=\<email\>__

The array of movies nominated by the user with the passed email is returned.

<br>

* > __/browse/find?email=\<email\>&id=\<movieID\>__

Returns a boolean value true if the movie is nominated by the passed user or false if the movie isn't nominated by the user.

<br>

* > __/browse/remove?idu=\<email\>&idm=\<movieID\>__

Deletes the tuple which has the passed email and movieID.


***

#### POST Requests

* > __/browse/add__

Required data : Json Object template = {"movieID": movieID,"userID": userID}

Pushes the values of movieID and userID into the database.

***

### Setting Up the Project

1. Clone the repo
   ```sh
   git clone https://github.com/savi-1311/Rate-It-Backend
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create a .env file using the template .env.template and add values accordingly.
   
### Usage

1.  To run the server
    ```sh 
    npm start 
    ```
***

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://portfolio-shambhavi.netlify.app/"><img src="https://avatars.githubusercontent.com/u/56017960?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Shambhavi</b></sub></a><br /><a href="https://github.com/savi-1311/Rate-It-Backend/commits?author=savi-1311" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!