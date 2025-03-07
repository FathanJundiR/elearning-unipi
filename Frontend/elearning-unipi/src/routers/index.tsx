import { createBrowserRouter, redirect } from "react-router-dom";
import { localUrl, serverUrl } from "../utils/baseUrl";
import { notifications } from "@mantine/notifications";
import LoginPage from "../views/login/LoginPage";
import BaseLayout from "../views/BaseLayout";
import HomePage from "../views/home/HomePage";
const url = localUrl;

const router = createBrowserRouter(
  [
    {
      path: "/login",
      element: <LoginPage url={url} />,
      loader: () => {
        //ganti
        //hapus
        if (localStorage.access_token) {
          notifications.show({
            title: "Anda Sudah Login",
            message: "",
          });
          return redirect("/login");
        }
        return null;
      },
    },
    {
      element: <BaseLayout />,
      //uncomment
      // loader: () => {
      //   if (!localStorage.access_token) {
      //     notifications.show({
      //       title: "Anda Belum Login",
      //       message: "Silahkan Login terlebih dahulu! 🌟",
      //     });
      //     return redirect("/login");
      //   }
      //   return null;
      // },
      children: [
        {
          path: "/",
          element: <HomePage></HomePage>,
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_skipActionErrorRevalidation: true,
      v7_partialHydration: true,
    },
  }
);

export default router;
