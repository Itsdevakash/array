// import logo from './logo.svg';
import './App.css';
import Array_bootstrap from './component/Array_bootstrap';
import Handle_array from './component/Handle_array';
import Nested_list from './component/Nested_list';
import Reuse from './component/Reuse';

function App() {
 

 
    


  return (
    <div className="App">
      <h1>Handle Array map function</h1>
      <Handle_array/>
      <br></br>
      
      <h1>List With Bootstrap Table</h1>
   <Array_bootstrap/>
      
      <br></br>
      <h1>Nested List With Nested Array</h1>
      <Nested_list/>
      <br></br>

      <h1>Reuse Component (Using Props)</h1>
      <Reuse/>
      <br></br>


   </div>
  );
}

export default App;
