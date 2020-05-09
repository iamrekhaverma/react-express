import Todos from "./pages/todos";
import Admin from "./pages/admin";
import Home from "./pages/home";
import AddTodo from "./pages/todos/index";


const dashboardRoutes = [
  { path: '/admin', name: "Admin", component: Admin, exact: true },
  // { path: '/Todos', name: "Todos", component: Todos, exact: true }
];

const openRoutes = [
  { path: '/', name: "Home", component: Home, exact: true },
  { path: '/add-todo', name: "AddTodo", component: AddTodo, exact: true },
];

export {
  dashboardRoutes,
  openRoutes
};
