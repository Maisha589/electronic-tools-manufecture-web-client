import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2>This is blog</h2>
            <h2>1. How will you improve the performance of a React Application?</h2>
            <p>I can improve the performance in various ways. Such as, Splitting my code in different components , spreading props. We can load data in limit, when user wants to load more data we can then provide it in separate routes or by pagination. By using local image instead of global it also helps to improve.  </p>
            <h2>2. What are the different ways to manage a state in a React application?</h2>
            <p>Ww can manage a state in React application by UseState Hook, react reducer hook, Redux, Recoil, Jotai.</p>
            <h2>3. How does prototypical inheritance work?</h2>
            <p>It is a feature in javascript, a method by which an object can take control the properties and methods of another object.  </p>
            <h2>4. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
            <p>We use useState data in state , because it will trigger again again when the data is changed and re-render by itself. By using hardCodded data it do not re-render again and again.  </p>
            <h2>5. What is a unit test? Why should write unit tests?</h2>
            <p>Unit test is a development process. Main reason is to note down small parts of codes in unit for future. it helps to solve problems in small parts in a large project.  </p>
        </div>
    );
};

export default Blogs;