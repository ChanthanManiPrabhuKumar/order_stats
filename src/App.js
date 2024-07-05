import { useState } from 'react';
import './App.css';

function App() {
  // const [cards] = useState([
  //   {
  //     title : 'Revenue',
  //     percent : '10%',
  //     number : '2.047'
  //   },
  //   {
  //     title : 'Order',
  //     percent : '20%',
  //     number : '356'
  //   },
  //   {
  //     title : 'Dine in',
  //     percent : '10%',
  //     number : '220'
  //   },
  //   {
  //     title : 'Take away',
  //     percent : '5%',
  //     number : '135'
  //   }
  // ])
  return (
    <div className="App">
      <div className='container-fluid'>
        <div className='row justify-content-between m-5 '>
          <div className='col-sm-6 col-md-4 col-lg-2 bg-white rounded mt-4'>
            <div className='d-flex justify-content-between p-2'>
              <h5>Revenue</h5>
              <h6><i class="bi bi-arrow-down-short down">10%</i></h6>
            </div>
            <div className='d-flex'>
            <i class="bi bi-arrow-up-right-circle-fill h3 revenue"></i>
              <h3>$2.047</h3>
            </div>
          </div>

          <div className='col-sm-6 col-md-4 col-lg-2 bg-white rounded mt-4'>
            <div className='d-flex justify-content-between p-2'>
              <h5>Order</h5>
              <h6><i class="bi bi-arrow-up-short up">20%</i></h6>
            </div>
            <div className='d-flex'>
            <i class="bi bi-cart-check-fill cart"></i>
              <h3>356</h3>
            </div>
          </div>

          <div className='col-sm-6 col-md-4 col-lg-2 bg-white rounded mt-4'>
            <div className='d-flex justify-content-between p-2'>
              <h5>Dine in</h5>
              <h6><i class="bi bi-arrow-up-short up">10%</i></h6>
            </div>
            <div className='d-flex'>
            <i class="bi bi-diagram-2-fill dine"></i>
              <h3>220</h3>
            </div>
          </div>

          <div className='col-sm-6 col-md-4 col-lg-2 bg-white rounded mt-4'>
            <div className='d-flex justify-content-between p-2'>
              <h5>Take away</h5>
              <h6><i class="bi bi-arrow-down-short down">5%</i></h6>
            </div>
            <div className='d-flex'>
            <i class="bi bi-cup-straw take_away" ></i>
              <h3>135</h3>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default App;
