import { default as React } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../public/assets/css/style.css';
import '../public/assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../public/assets/vendor/bootstrap/css/bootstrap.min.css';
import '../public/assets/vendor/boxicons/css/boxicons.min.css';
import '../public/assets/vendor/quill/quill.bubble.css';
import '../public/assets/vendor/quill/quill.snow.css';
import '../public/assets/vendor/remixicon/remixicon.css';
import '../public/assets/vendor/simple-datatables/style.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
