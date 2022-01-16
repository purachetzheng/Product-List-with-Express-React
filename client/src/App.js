import React, {useState} from 'react';
import Axios from 'axios';


function App() {
  const [product, setProduct] = useState([]);
  
  const getProduct = () => {
    Axios.get('http://127.0.0.1:3001/products')
    .then((res) => {setProduct(res.data)});
  }
  
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <button className="" onClick={getProduct}>test</button>
      {product.map((val) => {
        return(
          <div className=""key={val.id}>
            <p className="">{val.product_name}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
