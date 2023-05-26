import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Blogs = () => {
    const {setTitle} = useContext(AuthContext)
    setTitle('| Blogs')
    return (
        <section>
            <article className='article-body'>
                <h2 className="article-title">
                    What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </h2>
                <p className="article-text">
                    In JWT there is two token, access and refresh token. Access token is used to access the data from targeted api call. Access token has limited time for validity. When time of validity cross, then we can get another access token by using of refresh token.
                    <br />
                    There are two ways to store tokens in client site. One is local storage and another one is cookie or specifically HTTPOnly cookie. These two options are not perfectly secure but compare to one another HTTPOnly cookie is better then local storage.
                </p>
            </article>
            <article className='article-body'>
                <h2 className="article-title">
                    Compare SQL and NoSQL databases?
                </h2>
                <p className="article-text">
                    SQL and NoSQL are two different database management systems. SQL means Structured Query Language and NoSQL means not SQL. Both has their strong uses. SQL have a fixed schema, where as NoSQL have a flexible schema. Thats why when flexibility in data schema is required then, NoSQL is used. SQL database are vertically scalable, but NoSQL database are horizontally scalable. When there are too complex queries and joins, then SQL database is the perfect choice, but in case of dealing with large volumes of unstructured data, then NoSQL is best. One of the popular example of these two kinds of database are MySQL and MongoDB. MySQL is a SQL type database and on the other hand MongoDB id NoSQL type database.
                </p>
            </article>
            <article className='article-body'>
                <h2 className="article-title">
                    What is express js? What is Nest JS?
                </h2>
                <p className="article-text">
                    <span className='font-semibold'>Express.js:</span> Express.js is a minimalist and flexible web framework for Node.js
                    <br />
                    <span className="font-semibold">Node.js:</span> Node.js is a full-featured framework build on top of Express.js, providing additional structure, features and scalability options inspired by Angular.
                    <br />

                    So, Node.js and Express.js both are used for building backend applications. But there are some differences like,
                    <li className="mx-6 my-4">Node.js is a Run-time platform or environemnt designed for server-side execution of Javascript. Express.js is a small framework based on Node.js</li>
                    <li className="mx-6 my-4">Node.js doesn't have any middleware, where as Express.js uses middleware.</li>
                    <li className="mx-6 my-4">Express.js is more simplified than Node.js</li>
                    <li className="mx-6 my-">Express.js has more features than Node.js</li>
                    <li className="mx-6 my-4">Express.js is written with JavaScript but Node.js is written with C, C++, JavaScript</li>
                </p>
            </article>
            <article className='article-body'>
                <h2 className="article-title">
                    What is MongoDB aggregate and how does it work?
                </h2>
                <p className="article-text">
                    MongoDB aggregate is a framework. It is a very powerful tool that allows user to perform complex task like analysis of data. It has multiple stages, but in short it used for filter data based on specific condition by using Match Stage, reshape teh document by using Projection stage, sort document by using of Sort Stage, grouping document by using of Group Stage. You can also control number of document returned in result by using limit and skip.
                    <br />
                    In short, the aggregation framework is highly flexible and efficient, allowing you to process large datasets and generate meaningful insights from your data.
                </p>
            </article>
        </section>
    );
};

export default Blogs;