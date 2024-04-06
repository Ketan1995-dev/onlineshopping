import logo from './logo.svg';
import './App.css';
import Product from './Product';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a>View Cart</a>
      </header>
      <div className='container'>
        <Product 
          imgUrl="https://images-cdn.ubuy.co.in/6370948d97ba4e52450016a4-acooe-short-sleeves-t-shirts.jpg"
          description="Slim-Fit Black T-Shirt"
          price={400}
        >
          Black T-Shirt
        </Product>
        <Product 
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ72Oy0sNZr9zTagusNbhXInK2aWX0N4ZvPe4vV5-umfA&s"
          description="Regular-Fit Orange T-Shirt"
          price={400}
          >
          Orange T-Shirt
        </Product>
      </div>
    </div>
  );
}

export default App;
