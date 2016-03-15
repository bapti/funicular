### Note this is an in development project

I'm writing all this  to get my thoughts clear before starting work on building a new framework. I've wanted to do an open source project for a while but I've struggled to find something that I really wanted to do that also fit with what I was doing at work. If I go ahead with this project I hope that I will gain expert level experience with the libraries I use and be able to build something people find useful and fun to use.

[Todo list](./docs/todo.md)

# React Cosmos
A very opinionated framework for building a universal react app

### My motivation

I haven't found an application framework for building a universal react app that I believe to be fully production ready with solid tooling and documentation.  I'd like it to ship with great tooling for speeding up developers working with the framework and also detailed and usable documentation on how to use the framework.

Having written 2 large js apps with knockout and tried various other frameworks like Angular, Ember with varying back ends. I believe there's a space for universal rendering to emerge because of two reasons. With the traditional approach you have to write all your templates twice, once in server templates like `erb` or `razor` and once in client templates like `knockout` or `jquery`. This adds serious overhead. The other approach is writing a full on single page application but you sacrifice SEO and initial rendering performance. People want the best of both worlds of writing one set of templates, getting good SEO performance, and also a simple way to build applications quickly.

### The plan

##### Command line interface

This is what most users will interact with. It will be a fully featured cli for all the functions required by developers using the framework.  Using the cli will enforce a strict set of conventions that should hopefully remove most of the normal choices a developer faces when tackling a big new application.  

The goal of the cli is to automate all the things with liberal use of templates and helpful error messages. I'll also look at support functions like debugging, logging and how best to support developers so that if they get stuck there's a good pattern for getting unstuck.

##### Framework

A high level library that puts together a production ready universal react application.  I'll probably start with HapiJs as the underlying web server and build in react, routing and static asset packaging.  The goal here is to provide a very robust production ready framework for building your application with.  In addition it should be easy to write plugins to extend the behaviour of the web server so if you wish to add functionality like logging, monitoring, request timing it should be super easy to write your own plugin and use it following the conventions outlined by the framework. Finally it needs to be simple to

##### Documentation

First class documentation is a must and it makes sense with a project like this to build the documentation site with the framework itself and eat some my own dogfood.  This will also give ample material for blogging about which should live with the documentation as well. Having a live application should give good real world feedback on performance as well which the learnings can be used to build back into the framework.

##### Atom package

As a stretch goal I'd like to build out an atom package that supports all the same functionality as the cli that will make the development experience seamless when using an IDE like Atom.  

### Execution

##### Running locally

Running locally will probably be under docker in some shape or form. I'm thinking that we should push for a docker deployment as standard and make it easy for people to put the application into production with the supplied dockerfiles. It'll be interesting to see how this plays out with hot reloading of the application when developers are making changes.

##### CI

This needs really good CI and I'll probably look to using circle and their docker containers and do most of the development that way. It should make developing between Mac/Windows a bit less painful I hope. I will also look at drone.io which is also pretty interesting.

##### Architecture patterns

As must as is possible I'll try to write code in a pure functional way.  This really helps push side effects to the edges and adopting the plugin style of the hexagonal architecture should make it easier to swap in and out different components.  An example might be the http server say express instead of hapi.

##### Experimentation

Experimentation is so important in the modern public facing applications that I feel this should be tackled as a first class feature. Facebook have done some nice work on this with a framework called [planout](https://facebook.github.io/planout/). I intend to implement this as a standard shipping feature of the framework.

##### Testing

I'd like to adopt a very rigorous approach to building this project having full suites of tests available that act as good documentation to the users.  Nightwatch and Mountebank seem like nice testing frameworks for browser level testing.  Using Enzyme for React components seems sensible as the community seems to have converged on it.  

### Existing libraries and starter projects

I've drawn a lot of inspiration from what I've found out there already, there's some really great work being done by lots of folk in the open source community.  My feeling is that no one is approaching this of building a framework that you could launch a big new app with.  There's few development teams out there that could take one of the existing options and handle the complexity of what these offer without a incurring a huge learning curve before being able to deliver at a reasonable cadence.

##### Libraries

- [Universal redux](https://github.com/bdefore/universal-redux)
 - Good that it works but limited documentation and not easy to follow how it goes together

- [Universal react easy](https://github.com/keystonejs/react-easy-universal)
 - Made by some very prominent js guys
 - Uses browserify instead of webpack

##### Starters

I'm not a fan of starters as you get something working at a single point in time.  When dependent libraries update it's up to the user of the starter to update these dependencies and could be a potential for a big source of change work as well as inconsistences.  

- [Universal hapi example](https://github.com/luandro/hapi-universal-redux)
 - Good example but not a library, lots of boilerplate

- [Universal react](https://github.com/DominicTobias/universal-react)
 - Doesn't look active

- Universal redux starter
 - https://github.com/erikras/react-redux-universal-hot-example
 - Good but complex
