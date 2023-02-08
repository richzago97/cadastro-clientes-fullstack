# Full Stack Challenge

## Back End

1. To start this project, it is necessary to install the dependencies, which will be used in the tests. So use the command below to install such dependencies:

````
yarn
````
**Attention:** it is necessary to use `yarn` because this project was started with this package manager.

To check if you already have the yarn manager installed use the following command:

````
yarn --version
````

If you don't have yarn installed, use the command below to install it globally on your machine:

````
npm install --global yarn
````

2.You must configure the .env. Use the command, causes an .env file to be created based on .env.example.
````
cp .env.example .env
````

3.Run the command to migrate
````
yarn typeorm migration:run -d src/data-source.ts
````
4. With that done, to run your application, just use the command
````
yarn dev
````


# **About the tests**
This application has tests, which will be used to validate if all business rules were applied correctly.

The tests are located in `src/__tests__`.

In the `integration` subfolder are the tests.

In the `mocks` subfolder are the data that will be used for the tests.

In the `jest.config.json` file are some necessary settings for the tests to run.

**`Do not alter any of these files in any way.`** This could compromise the integrity of the tests.

Also, don't change the `test` script located in `package.json`. This will be used to run the tests.

<br>

# **Running the tests**

To run the tests it is necessary that in your terminal, you are inside the project directory.

Once you are in the terminal and within the correct path, you can use the following commands:
### Run all tests
````
yarn test
````
#
### Run all tests and have an even more complete log
````
yarn test --all
````
#

### Run tests from a specific folder
`detail: notice that tests is surrounded by 2 underscores. This is called dunder.`
````
yarn test ./scr/__tests__/integration/<subfolder>
````
#
### Run tests from a specific file
````
yarn test ./scr/__tests__/integration/<subfolder>/<file>
````
#
### Run a specific test
````
yarn test -t <describe or specific test wrapped in quotes>

#Front End
## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

First run the yarn command to install the dependencies

### `yarn`

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
