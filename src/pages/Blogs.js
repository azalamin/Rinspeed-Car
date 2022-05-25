import React from "react";

const Blogs = () => {
  const filteringNames = `function searchProduct(products, searchText) {
    const matchProducts = products.filter(product => product.name.includes(searchText));
    return matchProducts}`;
  return (
    <div>
      <h3 className="text-4xl text-center py-16 font-bold">Welcome to our Blog</h3>
      <div className="px-10">
        <div className="mb-10">
          <h3 className="text-2xl font-bold py-3">
            How will you improve the performance of a React Application?
          </h3>
          <p>
            <strong>1. Avoiding Anonymous Functions </strong>
            Functions that are inside the main body of a component are usually
            event handlers, or callbacks. In many cases you might be tempted to
            use anonymous functions for them, Since anonymous functions aren’t
            assigned an identifier (const/let/var), they aren’t persistent
            whenever this functional component inevitably gets rendered again.
            <br />
            <strong>2. Use Immutable Data Structures </strong>
            Data immutability, which comes from the functional programming
            world, can be applied to the design of front-end apps. It can have
            many benefits, such as:
            <br />
            - Zero side-effects; <br />
            - Immutable data objects are very simpler to create, testing, and
            using. <br />
            - Helps prevent temporal coupling. <br />
            - Easier to track changes. <br />
            <br />
            There are lots of technics to improve performance of react app.
          </p>
        </div>
        <div className="mb-10">
          <h3 className="text-2xl font-bold py-3">
            What are the different ways to manage a state in a React
            application?
          </h3>
          <p>
            <strong>Context API</strong> <br />
            React has an amazing tool for providing data across multiple
            components that is context api. The primary goal of Context is to
            avoid prop-drilling. Our goal is to get an easy-to-use tool to
            manage the state in various scenarios. <br /> <br />
            <strong>Prop Drilling</strong> <br />
            Prop drilling is basically a situation when the same data is being
            sent at almost every level due to requirements in the final level.
            <br /> <br />
            <strong>Redux React </strong>
            Redux is a popular data store library for React applications. It
            follows a central principle that data binding should flow in one
            direction and should be stored as a single source of truth. Redux
            gained popularity because of the simplicity of the design concept
            and the relatively small implementation.
          </p>
        </div>
        <div className="mb-10">
          <h3 className="text-2xl font-bold py-3">
            How does prototypical inheritance work?
          </h3>
          <p>
            JavaScript has only primitives types, null, undefined, and objects.
            A big world of objects. In JavaScript, contrary to languages like
            Java or PHP, there’s no concept of class that serves as a template
            to create objects. In JavaScript, an object can inherit properties
            of another object. The object from where the properties are
            inherited is named prototype. Every object with its methods and
            properties contains an internal and hidden property known as
            Prototype. The Prototypal Inheritance is a feature in javascript
            used to add methods and properties in objects. It is a method by
            which an object can inherit the properties and methods of another
            object.
          </p>
        </div>
        <div className="mb-10">
          <h3 className="text-2xl font-bold py-3">
            You have an array of products. Each object has a name, price,
            description, etc. How will you implement a search to find products
            by name?
          </h3>
          <p>{filteringNames}</p>
        </div>
        <div className="mb-10">
          <h3 className="text-2xl font-bold py-3">
            What is a unit test? Why should write unit tests?
          </h3>
          <p>
            A unit test is a way of testing a unit - the smallest piece of code
            that can be logically isolated in a system. A unit can be almost
            anything you want it to be -- a line of code, a method, or a class.
            Generally though, smaller is better. In most programming languages,
            that is a function, a subroutine, a method or property. Modern
            versions of unit testing can be found in frameworks like JUnit, or
            testing tools like TestComplete. For the best practice, all projects
            must be under unit testing thats why we should write unit tests, but normally it is used for larger
            projects. Smaller projects can still benefit from unit tests, but
            project managers and clients should evaluate the time needed to
            develop unit tests during the project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
