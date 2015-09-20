## River Chat Example

**This was base on [Flux Chat example](https://github.com/d6u/flux-chat), which was originated from Facebook Flux Chat example, but with [River](https://github.com/d6u/River) and [RxJS](https://github.com/Reactive-Extensions/RxJS) as its Flux implementation.**

## River

Instead of using the official Facebook Flux dispatcher, River Chat example is using [River](https://github.com/d6u/River) with no dispatcher. All actions are Rx Subjects. Stores are Rx hot replay last Observables. Please see details on official River repo.

You can compare this example with [Rx Chat](https://github.com/d6u/rx-chat).

## Running

You must have [npm](https://www.npmjs.org/) installed on your computer.
From the root project directory run these commands from the command line:

`npm install`

This will install all dependencies.

To build the project, first run this command:

`npm start`

This will perform an initial build and start a watcher process that will
update bundle.js with any changes you wish to make. This watcher is
based on [Webpack](http://webpack.github.io/), and it transforms
React's JSX syntax into standard JavaScript with [Babel](https://babeljs.io/).

After starting the watcher, you can open `index.html` in your browser to
open the app.
