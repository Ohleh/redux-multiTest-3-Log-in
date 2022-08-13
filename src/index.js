import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
// import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import { store} from ""

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <BrowserRouter basename="/redux-multiTest-3-Log-in/">
      <App />
    </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>
);
