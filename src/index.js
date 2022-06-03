import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';


import Home from './pages/Home'
import Error from './pages/Error';
import About from './pages/About';
import Houses from './pages/Houses';
import reportWebVitals from './reportWebVitals';


// //version react-router-dom 5.3.0
// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <Header />
//       <Switch>
//         <Route exact path="/">
//           <Home />
//         </Route>
//         <Route path="/house/:id">
//           {(props) => <Houses {...props} />}
//         </Route>
//         <Route path="/about">
//           <About />
//         </Route>
//         <Route>
//           <Error />
//         </Route>
//       </Switch>
//       <Footer />
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/house/:id">
          {(props) => <Houses {...props} />}
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
