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

2.You must configure the .env

3. Run the command to migrate
````
yarn typeorm migration:run -d src/data-source.ts
````
4. With that done, to run your application, just use the command
````
yarn dev
````

