import React from "react";

const Blogs = () => {
  return (
    <div className="container mx-auto  ">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="block p-6 my-7  bg-[#111827] rounded-lg border border-gray-200 shadow-lg  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h3 className="text-white">
            Difference between javascript and nodejs
          </h3>
          <p className="text-[#969DA9]">
            <span className="text-lg font-bold">javascript </span>
            is a Scripting language. It is mostly abbreviated as JS. It can be
            said that Javascript is the updated version of the ECMA script.
            Javascript is a high-level programming language that uses the
            concept of Oops but it is based on prototype inheritance.
          </p>
          <br />
          <p className="text-[#969DA9]">
            <span className="text-lg font-bold">NodeJs </span>
            is a cross-platform and opensource Javascript runtime environment
            that allows the javascript to be run on the server-side. Nodejs
            allows Javascript code to run outside the browser. Nodejs comes with
            a lot of modules and mostly used in web development.
          </p>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <h3 className="text-white">javascript</h3>
              <li className="text-[#969DA9]">
                Javascript is a programming language that is used for writing
                scripts on the website.
              </li>
              <li className="text-[#969DA9]">
                It is basically used on the client-side.
              </li>
              <li> Javascript can only be run in the browsers</li>
            </div>
            <div>
              <h3 className="text-white">NodeJs</h3>
              <li className="text-[#969DA9]">
                NodeJS is a Javascript runtime environment
              </li>
              <li className="text-[#969DA9]">
                It is mostly used on the server-side.
              </li>
              <li className="text-[#969DA9]">
                We can run Javascript outside the browser with the help of
                NodeJS.
              </li>
            </div>
          </div>
        </div>
        <div className="block p-6 my-7 bg-[#111827] rounded-lg border border-gray-200 shadow-lg  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h3 className="text-white"> Use case NodeJS and MongoDb</h3>
          <p className="text-[#969DA9]">
            <span className="text-lg font-bold">NodeJS </span>
            Built on Chrome’s V8 JavaScript engine, Node.js is an asynchronous
            event-driven JavaScript runtime. By using the
            event-callback/non-blocking approach, Node.js offers a
            single-threaded event-io model that allows orchestration of tasks
            running in parallel. It supports multiple connections without a need
            for a large memory footprint. The usage of Node.js is not only
            limited to building web applications, but also for implementing
            various kinds of services.
          </p>
          <li className="text-[#969DA9]">Backends and servers</li>
          <li className="text-[#969DA9]">Frontends</li>
          <li className="text-[#969DA9]">Developing API</li>
          <li className="text-[#969DA9]">Microservices</li>
          <br />
          <p className="text-[#969DA9]">
            <span className="text-lg font-bold">MongoDB</span> is built on a
            scale-out architecture that has become popular with developers of
            all kinds for developing scalable applications with evolving data
            schemas. As a document database, MongoDB makes it easy for
            developers to store structured or unstructured data. It uses a
            JSON-like format to store documents. This format directly maps to
            native objects in most modern programming languages, making it a
            natural choice for developers, as they don’t need to think about
            normalizing data. MongoDB can also handle high volume and can scale
            both vertically or horizontally to accommodate large data loads.
          </p>
          <li className="text-[#969DA9]">
            It is a natural form to store data.
          </li>
          <li className="text-[#969DA9]">It is human-readable.</li>
          <li className="text-[#969DA9]">
            Structured and unstructured information can be stored in the same
            document.
          </li>
          <li className="text-[#969DA9]">
            You can nest JSON to store complex data objects.
          </li>
          <li className="text-[#969DA9]">
            JSON has a flexible and dynamic schema, so adding fields or leaving
            a field out is not a problem.
          </li>
        </div>
        <div>
          <div className="block p-6 mb-7 bg-[#111827] rounded-lg border border-gray-200 shadow-lg  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h3 className="text-white">
              Difference between SQL and noSQL database
            </h3>
            <p className="text-[#969DA9]">
              <span className="text-lg font-bold">SQL </span>A Relational
              database stores data in a structured and tabular way. That is, it
              stores information in tables, which you can think of as storage
              containers for the data. For example, a company could have an
              employees table to store data on its employees.Relational
              databases have a strict, static, and pre-defined logical schema.
            </p>
            <br />
            <p className="text-[#969DA9]">
              <span className="text-lg font-bold">NOSQL </span>A non-relational
              Databases is also referred to as a NoSQL database. You will often
              see that NoSQL stands for both "Not only SQL" and also "Non-SQL".
              Either way, a non-relational database refers to a database that
              doesn't use the relational data model.
            </p>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <h3 className="text-white">NOSQl</h3>

                <li className="text-[#969DA9]">
                  Non-relational or distributed database system.
                </li>
                <li className="text-[#969DA9]">They have dynamic schema</li>
                <li className="text-[#969DA9]">
                  These databases are best suited for hierarchical data storage.
                </li>
                <li className="text-[#969DA9]">
                  These databases are not so good for complex queries
                </li>
              </div>
              <div>
                <h3 className="text-white">SQL</h3>
                <li className="text-[#969DA9]">
                  RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)
                </li>
                <li className="text-[#969DA9]">
                  These databases have fixed or static or predefined schema{" "}
                </li>
                <li className="text-[#969DA9]">
                  These databases are not suited for hierarchical data storage.
                </li>
                <li>These databases are best suited for complex queries </li>
              </div>
            </div>
          </div>
        </div>
        <div className="block p-6 mb-7 bg-[#111827] rounded-lg border border-gray-200 shadow-lg  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h3 className="text-white">
            {" "}
            What is the purpose of `jwt` and how does it work
          </h3>
          <p className="text-[#969DA9]">
            JWT, or JSON Web Token, is an open standard used to share security
            information between two parties — a client and a server. Each JWT
            contains encoded JSON objects, including a set of claims. JWTs are
            signed using a cryptographic algorithm to ensure that the claims
            cannot be altered after the token is issued.
          </p>
          <br />
          <p className="text-[#969DA9]">
            A JWT is a string made up of three parts, separated by dots (.), and
            serialized using base64. In the most common serialization format,
            compact serialization, the JWT looks something like this:
            xxxxx.yyyyy.zzzzz.
          </p>
          <p className="text-[#969DA9]">
            Once decoded, you will get two JSON strings
          </p>
          <li className="text-[#969DA9]">The header and the payload.</li>
          <li className="text-[#969DA9]">The signature.</li>
          <p className="text-[#969DA9]">
            <span className="text-lg font-bold">headers</span> The JOSE (JSON
            Object Signing and Encryption) header contains the type of token —
            JWT in this case — and the signing algorithm.{" "}
          </p>
          <p className="text-[#969DA9]">
            <span className="text-lg font-bold">payload</span>The payload
            contains the claims. This is displayed as a JSON string, usually
            containing no more than a dozen fields to keep the JWT compact. This
            information is typically used by the server to verify that the user
            has permission to perform the action they are requesting.
          </p>
          <p className="text-[#969DA9]">
            <span className="text-lg font-bold">signature</span>
            The signature ensures that the token hasn’t been altered. The party
            that creates the JWT signs the header and payload with a secret that
            is known to both the issuer and receiver, or with a private key
            known only to the sender. When the token is used, the receiving
            party verifies that the header and payload match the signature.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
