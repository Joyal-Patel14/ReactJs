import React from "react";
import ReactDOM from "react-dom/client";

// JSX - is not HTML in JS (HTML like syntax)
// JSX => Babel Transpiles to => React.createElement => ReactElement - JS Object => HTML Element(render)
// camleCase is used for attribute in JSX

// React Element
const headingElement = (
  <h1 id="heading" className="head">
    React using JSX
  </h1>
);

// React Component

// Class Based Components - OLD
// Functional Components - NEW

// Functional Component - It is simple JS function returning JSX

const TitleComponent = () => {
  return (
    <h1>Title</h1>
  );
}

const number = 1000;

// Component Composition - Component inside Component
const HeadingComponent = () => (
  <div id="container">

    <h1>This is a react functional component</h1>

    {TitleComponent()}
    
    <TitleComponent />

    <TitleComponent></TitleComponent>

    {headingElement}
    
    <h2>{number * 2}</h2>

  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);