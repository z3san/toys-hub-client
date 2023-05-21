import React from 'react';
import useTitle from '../../../Hook/useTitle';

const Blogs = () => {

  useTitle("Blogs");


  return (
    <div className="container mx-auto py-16">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">What is an access token and refresh token?</h2>
          <p className="text-gray-800 leading-relaxed">
            An access token is a credential that is used to authenticate and authorize a user. It is typically
            short-lived and contains information about the user's identity and permissions. Access tokens are often
            used in stateless authentication systems, such as JSON Web Tokens (JWT), where the token is signed by the
            server and can be verified on subsequent requests.
          </p>
          <p className="text-gray-800 leading-relaxed">
            A refresh token is a long-lived credential that is used to obtain a new access token when the current one
            expires. Refresh tokens are securely stored on the client-side and are used to request a new access token
            from the server without requiring the user to re-authenticate. They provide a way to maintain the user's
            session and improve the user experience.
          </p>
          <p className="text-gray-800 leading-relaxed">
            It is recommended to store access tokens in memory or browser storage (e.g., local storage or session
            storage) on the client-side. Refresh tokens should be stored securely, such as in an HTTP-only cookie, to
            prevent them from being accessed by malicious scripts.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Compare SQL and NoSQL databases</h2>
          <p className="text-gray-800 leading-relaxed">
            SQL (Structured Query Language) databases are relational databases that use tables to store structured data
            and support a fixed schema. They provide ACID (Atomicity, Consistency, Isolation, Durability) properties
            and are suitable for applications that require complex queries and transactions. SQL databases ensure data
            integrity and enforce data consistency through relationships and constraints.
          </p>
          <p className="text-gray-800 leading-relaxed">
            NoSQL (Not Only SQL) databases are non-relational databases that store data in flexible, schema-less
            formats, such as key-value pairs, documents, column families, or graphs. They are horizontally scalable
            and can handle large amounts of unstructured or semi-structured data. NoSQL databases are suitable for
            applications that require high scalability, low latency, and flexible data models.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">What is Express.js?</h2>
          <p className="text-gray-800 leading-relaxed">
            Express.js is a minimal and flexible web application framework for Node.js. It provides a set of features
            and middleware that simplifies the process of building web applications and APIs. Express.js allows
            developers to define routes, handle HTTP requests and responses, and manage middleware to add functionality
            to their applications. It is widely used in the Node.js ecosystem and is known for its simplicity and
            extensibility.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">What is Nest.js?</h2>
          <p className="text-gray-800 leading-relaxed">
            Nest.js is a progressive and opinionated Node.js framework for building efficient, scalable, and
            maintainable server-side applications. It is built with TypeScript and uses modern JavaScript features. Nest.js
            takes inspiration from Angular's architecture and provides a modular and structured approach to develop
            applications. It leverages decorators, dependency injection, and other design patterns to create highly
            testable and extensible code. Nest.js is suitable for building both traditional server-rendered
            applications and modern APIs.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">What is MongoDB aggregate and how does it work?</h2>
          <p className="text-gray-800 leading-relaxed">
            MongoDB's aggregation framework is a powerful tool for performing advanced data analysis and manipulation
            operations on collections of documents. It allows you to process and transform data using a pipeline of
            stages, such as filtering, grouping, sorting, joining, and calculating aggregations (e.g., sum, average,
            count). Aggregation pipelines consist of multiple stages, where each stage takes the output of the previous
            stage as input and applies a specific operation.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Aggregation pipelines in MongoDB are defined using an array of stages, each stage represented by an
            object with an operation and its corresponding parameters. The stages are executed sequentially, and the
            result of each stage is passed to the next stage. This allows for complex data transformations and analysis
            to be performed efficiently on large datasets.
          </p>
          <p className="text-gray-800 leading-relaxed">
            The MongoDB aggregation framework is highly flexible and provides a wide range of operators and functions
            to manipulate and aggregate data. It is particularly useful for generating reports, generating statistics,
            and performing complex data analysis tasks in MongoDB.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
