import React, {useState , useEffect} from 'react';
import Loading from './Loading';
import Tours from './Tours';
import './App.css';
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  return <h2>tours project</h2>;
}

export default App;
