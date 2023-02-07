# Back End

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

