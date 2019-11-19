This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation & Setup

In the project directory, first run

### `npm i`

This will load all required modules and libraries. There is no production build, so this is meant only for development and testing purposes.

Inside of index.php you will need to configure the following settings for your database:

$server = 'localhost'
$username = 'yourdbusername'
$password = 'yourdbpassword'
$dbname = 'pm_practical_test'

Please create a MYSQL database called 'leads' and create the following columns:

1. phone (int)
2. full_name (varchar)
3. work_email (varchar)
4. reason (varchar)

## App Configuration

Inside of src -> config -> config.js

Please update the host url to where the 'index.php' is on the external server.
