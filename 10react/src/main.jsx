import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/* 
1.make the store app/stroe.js

2.make the reducer. that is slice. now what is slice

Redux State (whole application data that your store in the redux)
│
├── userSlice
│     └── { name: "John", isLoggedIn: true }
│
├── cartSlice
│     └── { items: ["Laptop", "Mouse"] }
│
└── themeSlice
      └── { mode: "dark" }


3. Wrap App with Provider

4. Read data → useSelector()
      ↓
5. Update data → useDispatch()

*/