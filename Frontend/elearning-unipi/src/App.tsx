import "./App.css";
import "@mantine/core/styles.css";
import router from "./routers";
import "@mantine/notifications/styles.css";
import { RouterProvider } from "react-router-dom";
import { Notifications } from "@mantine/notifications";
import { MantineProvider, createTheme } from "@mantine/core";

function App() {
  return (
    <>
      <MantineProvider defaultColorScheme="dark">
        <Notifications />
        <RouterProvider
          router={router}
          future={{
            v7_startTransition: true,
          }}
        />
      </MantineProvider>
    </>
  );
}

export default App;
