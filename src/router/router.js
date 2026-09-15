import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Users from "../pages/Users";
import UserDetail from "../pages/UserDetail";
import NotFound from "../pages/NotFound";
import AboutUsers from "../pages/AboutUsers";
import AboutAdmins from "../pages/AboutAdmins";
import About from "../pages/About";

const router = createBrowserRouter([
  {
    // Зазвичай спочатку описують головний компонент сайту
    path: "/", // Дефолтний шлях коли є компонент App
    Component: App, // Передаємо посилання на головний компонент, на якому будуть рендериться компоненти які є у масиві children (нижче).
    ErrorBoundary: NotFound, // Якщо посилання неправильне, виведеться тільки цей компонент
    children: [
      {
        index: true, // За замовчуванням компонент Home відмалюється у компоненті <App />, а там вже викливається <Outlet />
        Component: Home,
      },
      {
        path: "users",
        Component: Users,
      },
      {
        // Динамічний шлях
        path: "users/:userId", // назва може бути люба
        Component: UserDetail,
      },
      {
        path: "about",
        Component: About,
        children: [
          {
            index: true,
            Component: AboutUsers,
          },
          {
            path: "admins",
            Component: AboutAdmins,
          },
        ],
      },
    ],
  },
  // {
  //     path: "/about",
  //     Component: About,
  //     children: [
  //         {
  //             index: true,
  //             Component: AboutUsers
  //         },
  //         {
  //             path: "/admins",
  //             Component: AboutAdmins
  //         },
  //     ]
  // }
]);

export default router;
