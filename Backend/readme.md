
# Backend API Documentation

## `/users/register` Endpoint

### Description

Registers a new user by creating a user account with the provided information.

### HTTP Method

`POST`



### Request Body

The request body should be in JSON format and include the following fields:

- `fullname` (object):
  - `firstname` (string, required): User's first name (minimum 3 character).
  - `lastname` (string, optional): User's last name (minimum 3 character).
- `email` (string, required): User's email address (must be a valid email).
- `password`(string, required): User's password(minimum 6 characters).  

### Example Response

- `user` (object):
  - `fullname`(object).
    - `firstname` (string): User's first name (minimum 3 character).
    - `lastname` (string): User's last name (minimum 3 character). 
  - `email` (string): User's email address (must be a valid email).
  - `password`(string): User's password(minimum 6 characters).  
- `token`(string): JWT Token.

## `/user/login` Endpoint

### Description

Authontcates a user using their email and password, returning a JWT token upon success

### HTTP Method

`POST`

### Request Body

The request body should be in JSON format and include the following fields:
- `email` (string, required): User's email address (must be a valid email).
- `password` (string, required): User's password (minimum 6 characters).

### Example Response

- `user` (object):
  - `fullname`(object).
    - `firstname` (string): User's first name (minimum 3 character).
    - `lastname` (string): User's last name (minimum 3 character). 
  - `email` (string): User's email address (must be a valid email).
  - `password`(string): User's password(minimum 6 characters).  
- `token`(string): JWT Token.

## `/users/profile` Endpoint

### Description

Retrieves the profile information of the currently authenticated user.

### HTTP Method

`GET`

### Authentication

requires a valid JWT token in the Authentication header:
`Authorization: Bearer<token>`

### Example Response

- `user` (object):
  - `fullname`(object).
    - `firstname` (string): User's first name (minimum 3 character).
    - `lastname` (string): User's last name (minimum 3 character). 
  - `email` (string): User's email address (must be a valid email).



  ## `/users/logout` Endpoint

  ### Description

  Logout the current user and blacklist the token provided in cookie or headers

  ### HTTP Method

  `GET`

  ### Authentication

  Requires a valid JWT token in the Authorization header or cookie:


  ## `/captain/register` Endpoint

  ### Description

  Registers a new captain by creating a captain account with the provided information.

  ### HTTP Method

  `POST`

  ### Request Body

  The request body should be in JSON format and include the following fields:

  - `fullname` (object):
    - `firstname` (string, required): Captain's firstname (minimum 3 caracters)
    - `lastname` (string, optional): Captain's lastname 
  - `email` (string): User's email address (must be a valid email).
  - `password`(string): User's password(minimum 6 characters). 
  - `vehicle`(object):
    - `color` (string, required): Vehicle color (minimum 3 characters).
    - `plate` (string, required): Vehicle plate number (minimum 3 characters).
    - `capacity` (string, required): Vehicle passenger capacity (minimum 1).
    - `vehicleType` (string, required): Type of vehicle (must be 'car', 'motorcycle', 'auto').


    ### Example Response

- `captain` (object):
  - `fullname`(object).
    - `firstname` (string): Captain's first name.
    - `lastname` (string): Captain's last name. 
  - `email` (string): Captain's email address.
  - `password`(string): Captain's password.
  - `vehicle` (object):
    - `color` (string): vehicle color.
    - `capacity` (number): vehicle capacity.
    - `vehicleType` (string): vehicle type.
    - `plate` (string): vehicle number plate.

- `token`(string): JWT Token.


      

  





