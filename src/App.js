import {
  HashRouter,
  NavLink,
  Route,
  Routes
} from 'react-router-dom';
import './App.css';

const Home = () => {
  return <p>這是 Home 頁面 </p>;
}
const Todo = () => {
  return <p>這是 Todo 頁面 </p>;
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};
const Error = () => {
  return <p>Page is not found.</p>;
}

function App() {
  return (
    <div className="container">
    <HashRouter>
      <div className="nav-link">
        <NavLink to="/">
          <p>回到首頁</p>
        </NavLink>
        <NavLink to="/register">
          <p>註冊頁面</p>
        </NavLink>
        <NavLink to="/login">
          <p>登入頁面</p>
        </NavLink>
        <NavLink to="/todo">
          <p>Todo 頁面</p>
        </NavLink>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Todo" element={<Todo />} />
        <Route path="*" element={<Error />} />
      </Routes>

    </HashRouter>
  </div>
  );
}

export default App;
