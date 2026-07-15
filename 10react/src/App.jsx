
import './App.css'
import AddTodo from './component/AddTodo'
import { Provider } from 'react-redux'
import {store} from '../src/app/store'
import Todo from './component/Todo'

function App() {



  return (
    <Provider store={store}>
      <h1>redux-tollkit</h1>
      <AddTodo/>
      <Todo />
    </Provider>
  )
}

export default App
