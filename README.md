# InteractiveMap
Interactive Map full stack for informatics 151. State data is web scraped from https://simple.wikipedia.org/wiki/List_of_U.S._states in the table's tbody tag. It is then parsed and put into our SQL databse with Django models where our front end sends a GET request to our request handler on start-up to receive all state data as a JSON response. onClick() prop unimplemented.

 [Link to npm ReactJS package](https://www.npmjs.com/package/react-usa-map)
# Pictures of beta version
![image](https://github.com/JaylenLuc/InteractiveMap/assets/91278747/9efc6e91-d50b-4ac0-8328-92f3dfbba576)

![image](https://github.com/JaylenLuc/InteractiveMap/assets/91278747/510d72d4-c3d3-4943-9304-51df66002c45)

![image](https://github.com/JaylenLuc/InteractiveMap/assets/91278747/e5d55ba8-0333-4d45-928d-e8dcea3726b9)



 # HOW TO RUN CODE ON YOUR LOCAL COMPUTER:

 # Getting Started with Create React App and Django

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

start Django Server by running in the django folder:

### `python manage.py runserver `

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
