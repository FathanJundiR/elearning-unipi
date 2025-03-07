import "./App.css";
import "@mantine/core/styles.css";
import router from "./routers";
import "@mantine/notifications/styles.css";
import { RouterProvider } from "react-router-dom";
import { Notifications } from "@mantine/notifications";
import { MantineProvider } from "@mantine/core";
// import mantineTheme from "./utils/mantineTheme";

function App() {
  return (
    <>
      <MantineProvider defaultColorScheme="light">
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
