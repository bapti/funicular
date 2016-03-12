# React Cosmos
A very opinionated framework for building a universal react app

### My motivation

I haven't found a application framework for building a universal react app that I believe to be fully production ready with solid documentation and tools for speeding up developers working with the framework

### The plan

##### Command line app

This is what most users will interact with - it will be a fully featured cli for the most common functions required by developers using the main framework.  Using the cli will enforce a strict set of conventions that should hopefully remove most of the normal choices a developer faces when tackling a building a universal react app.  

The goal of the cli is to automate all the things with liberal use of templating and helpful error messages.

##### Framework

A high level library that puts together a production ready univeral react application.  I'll probably use HapiJs as the underlying web server and build in react, routing and static asset packaging.  The goal here is to provide a very robust production ready framework for building your application with.  In addition it should be easy to write plugins to extend the behaviour of the web server so if you wish to add functionality like logging, monitoring, request timing it should be super easy to write your own plugin and use it following the conventions outlined by the framework.

##### Atom package

As a stretch goal I'd like to build out an atom package that supports all the same functionality as the cli that will make the development experience seamless.  

### Existing libraries and starter projects

I've drawn a lot of inspiration from what I've found out there already, there's some really great work being done by lots of folk in the open source community.  My feeling is that no one is approaching this of building a framework that you could launch a big new app with.  There's few development shops out there that could handle the complexity of what these offer without a incurring a huge learning curve before being able to deliver at a reasonable cadence.

##### Libraries

- Universal redux
 - https://github.com/bdefore/universal-redux
 - Good that it works but limited documentation and not easy to follow how it goes together

- Universal react easy
 - https://github.com/keystonejs/react-easy-universal
 - Made by some very prominent js guys tho uses browserify instead of webpack

##### Starters

- Universal hapi example
 - https://github.com/luandro/hapi-universal-redux
 - Good example but not a library, lots of boilerplate

- Universal react
 - https://github.com/DominicTobias/universal-react

- Universal redux starter
 - https://github.com/erikras/react-redux-universal-hot-example
 - Good but complex
