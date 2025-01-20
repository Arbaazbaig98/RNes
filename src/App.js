import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import React from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router,Routes,Route,} from "react-router-dom";
// import wordsToNumbers from "words-to-numbers";
// import alanBtn from "@alan-ai/alan-sdk-web";




const App =()=> {

// useEffect(() => {
//   alanBtn({
//     // key: 'f9e1602fba686635e3db1a533c4b22df2e956eca572e1d8b807a3e2338fdd0dc/stage',
//     onCommand: (commandData) => {
//       if (commandData.command === 'go:back') {
//         // Call the client code that will react to the received command
//       }
//     }
//   });
// }, []);
  const pageSize=6;
  const apiKey=process.env.REACT_APP_NEWS_API_KEY
    return (
      <div className='App'>
      <Router basename='/RNes' >

    <Navbar
      // btn={btn}
      // search={search}
    />
      <Routes> 
      <Route exact path="/" element={<News key="general" pageSize={pageSize} apiKey={apiKey}  country='us' category='general'/>} />
      <Route exact path="/sports" element={<News key="sports"  pageSize={pageSize} apiKey={apiKey} country='us' category='sports'/>} />
      <Route exact path="/business" element={<News key="business" pageSize={pageSize} apiKey={apiKey} country='us' category='business'/>} />
      <Route exact path="/entertainment" element={<News key="entertainment" pageSize={pageSize} apiKey={apiKey} country='us' category='entertainment'/>} />
      <Route exact path="/technology" element={<News key="technology" pageSize={pageSize} apiKey={apiKey} country='us' category='technology'/>} />
      <Route exact path="/general" element={<News key="general" pageSize={pageSize}  apiKey={apiKey} country='us' category='general'/>} />
      <Route exact path="/science" element={<News key="science" pageSize={pageSize} apiKey={apiKey} country='us' category='science'/>} />
      </Routes>
    </Router>
      </div>
    ) 
  }

export default App;
