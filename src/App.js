import { Provider } from 'react-redux';
import { store } from './redux/todoStore';
import TakeTodo from './components/takeTodo/TakeTodo'
import ListTodo from './components/listTodo/ListTodo'
import './scss/app.scss'

function App() {
  return (
    <Provider store={store}>
      <div id="main-app">

        <div id="head">
          <h1 id="app-title">TODO List App</h1>
          <TakeTodo />
        </div>

        <div id="todo-list">
          <ListTodo />
        </div>

      </div>
    </Provider>
  );
}

export default App;
