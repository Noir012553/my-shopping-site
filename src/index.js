// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Liên kết tệp CSS
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Nếu bạn muốn bắt đầu đo lường hiệu suất trong ứng dụng của mình, hãy chuyển hàm này
// sang console.log (ví dụ: reportWebVitals(console.log))
// hoặc gửi đến một endpoint analytics cụ thể. Tìm hiểu thêm: https://bit.ly/CRA-vitals
reportWebVitals();
