This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation & Setup

In the project directory, first run

### `npm i`

This will load all required modules and libraries. There is no production build, so this is meant only for development and testing purposes.

## Database Configuration

Inside of index.php you will need to configure the following settings for your database:

$server = 'localhost'</br>
$username = 'yourdbusername'</br>
$password = 'yourdbpassword'</br>
$dbname = 'pm_practical_test'</br>

Note: default SQL port <b>3306</b> is assumed

Please create a MYSQL table called <b>'leads'</b> and create the following columns:

1. phone (int 25)
2. full_name (varchar 255)
3. work_email (varchar 255)
4. reason (varchar 255)

## App Configuration

Inside of <b>src -> config -> config.js</b>

Please update the host url to where the 'index.php' is on the external server.</br>
i.e host: 'localhost:8888/prizm-media',

## Run

To run the app simply use

### npm start

Database and App will have to be configured first before running this command.

## Design Decisions

While this app is simple in the sense that there are only 4 fields, scalability was kept in mind during the planning process. The project utilizes Redux, Redux Forms, and Thunk middleware to handle all states so that we do not have to pass everything with the typical "Top to Bottom" approach in React. Using Thunk as a middleware allows to dispatch asynchronous actions so that we do not run into any blocking code, this will benefit the app if it ever needs to scale while maintaining optimization.

With Redux, we can use the Containers within the container folder to connect our store to and pass down all our required props and states to all of our neccessary presentational components kept in the Components folder. Inside of the Components folder, we have our Form components as well as our Layout component.

Each field component was seperated into their own respective concerns so that they are easily resuable, easily modified and updated, and also because each of them have their own special validations. In the event that any of these ever need to change, it is easily doable by modifying the respective field component. Inside of the Renderfield.js, are a couple render fields for input and select which are reused across all of the field components. All validation rules are also kept in another file for ease of maintainability and usage. The Layout component is the base component that contains our app.

Material UI's CircularProgress component was used to provide some feedback during form submission and the loading of form options.

The DemoFormContainer deals with all of the logic required for the form to function and passes all required props, functions, and states into our field components.

## Components and Containers
Components:
1. Form
  - EmailField
  - NumberField
  - RenderField
    1. renderInputField
    2. renderSelectField
  - SelectField
  - TextField
2. App
3. Layout

Containers:
1. DemoForm

## Packages and Libraries

#### Node Fetch
Used to make our requests.
#### Redux and React-Redux
Redux is used to manage our store and states, react-redux is required for React bindings.
#### Redux Forms
Used to manage our form fields.
#### Material Ui
Provides stylized presentational components.
#### Redux Devtools Extension
Redux chrome extension to help inspect Redux activity, this includes dispatched actions, states, and more.
#### Redux Logger
Console logs state change and dispatched actions.
#### Thunk
Used in conjunction to Redux to provide asynchronous actions.

