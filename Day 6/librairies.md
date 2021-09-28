# what is a library?

Pieces of JS code put together in a separated JS file, to be reused.
They tend to be very generic: math functions, graph creation, DOM manipulation (jQuery), etc.

exemple: lodash
https://lodash.com/docs/4.17.15
generic functions that can mostly be reused everywhere --> popularity

# What is a framework

A more complex library? 
Usually, it provides more than a list of functions to reuse, but also manage a lot of things for you: routing, templating, HTTP calls, etc

They may also offer some guidances or patterns to structure your application.

examples: Angular, Vue, React, etc.

# Using a simple library: jQuery

Download (https://code.jquery.com/jquery-3.6.0.js) and save the code in a new file in your project.

Then, use it in a script tag:
`<script src="jquery-3.6.0.js"></script>`

or use a CDN: content delivery network
This leverages browser cache as many people will use the library from the same domain (e.g. 'cdn.domain.com').

https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js

# NPM / Node / deps management

## NPM
https://www.npmjs.com/

NPM is our (JS ecosystem) package manager. 
We also call it a dependencies manager. 

Java equivalent: Maven
Php: Composer

It is a tool available on your computer when installing Node.js. And also a repository where all the libraries and frameworks and tools from the JS ecosystem are published (like a big hard drive). 
It can be used to install libraries (that become then, dependencies of your project), manage their version, etc.

/!\ NPM gather everything:
- some tools, like browserify, webpack, etc.
- some frontend only libs: jQuery (DOM manipulation only make sense in a browser), as there is nothing 'visible' and no DOM in a backend.
- some backend only libs: express.js (web server)
- some frontend frameworks: Angular, etc.
- some backend frameworks: Nest.js, etc.
- some frontend and backend compatible libraries: lodash

## Let's create a basic node app

Create a new 'app' folder.

Open bash (Git bash) in the newly created folder.

verify node is installed/its version
`node -v`
or install it (https://nodejs.org/)

verify npm is installed/its version
`npm -v`
Install npm latest version:
`npm install -g npm@latest`

Initialize npm in our folder
`npm init` (press enter multiple times for default)

A package.json was created. it's the main config file for JS projects (backend and frontend)

installing our first dependency
`npm install lodash`

Lodash's files (functions) got added to the `node_modules` folder.

A new package-lock.json was created. It is used by npm, you don't really need to modify it. It helps NPM keeping track of the different version of the dependencies you are using, and also of your dependencies' dependencies.

Best practices:
- package.json and package-lock.json should be pushed and shared alongside your code
- node_modules should be ignore in the `.gitignore` file

Create a small Node.js 'application' or 'script' by creating an app.js file.

Run this script with `node app.js` command.

--> This is a full working Node.js application, no configuration is required anymore. 

Node.js will be using the `require()` function to load or use libraries installed (copied) in the 'node_modules' folder (like lodash).

## Browser compatible JS apps, and bundling

This app cannot be used in the browser for various reasons: 
- we cannot really publish the node_modules in our server,
- the `require` function does not exist in the browser
- this whole process and tooling was designed to be used in the backend, for Node.js

Years ago, the community came up with a way to make this tooling compatible with frontend apps: the bundling.
Because lodash code is very useful and could be used in the browser too. 
Making NPM/node_modules, etc. compatible with the browser is the responsibility of bundling tools, or bundlers. Browserify (one of the easiest to use and oldest one), Webpack (use in React and Angular), Rollup, etc.
https://browserify.org/
https://webpack.js.org/

They are more or less complex, but mostly do the same thing. Bundling your code to make it usable by a browser, even if you used backend tooling (require function for example).

To bundle our app with browserify it requires only two steps: 

install browserify in our project
`npm install browserify`

Run the browserify command (beware the 'npX', it's important if we want to load browserify from our current folder):
`npx browserify app.js -o bundle.js`

We now have a `bundle.js` file containing: 
- a 'fake' `require` function so the browser can use it like Node.js
- our code
- The code from the libraries we are using: Lodash's code

You can now load the index.html file in our browser.

# versioning

Nearly all the libraries, frameworks or open-source projects are using the same versioning system: semantic versioning.
https://semver.org/

Key takeaway: if a library version was update and only the MINOR or PATCH changed, it should be safe to update. 
If the MAJOR number changed too, you ust be careful and assess if your code is compatible with the new changes. 
i.e. have a look at the library new version changelog and verify if you are using anything that changed.

v5.0.0
--> v5.0.1 // SAFE (only small changes and bugfixes)
--> v5.1.0 // MOSTLY SAFE (only new features and fixes)
--> v6.0.0 // POTENTIALLY UNSAFE (maybe a syntax or a feature behavior were changed)