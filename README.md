# Rate-It-Backend
Backend files for Rate-It Frontend

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
