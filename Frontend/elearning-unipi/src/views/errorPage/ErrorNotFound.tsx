import { Text } from "@mantine/core";
import classes from "./ErrorNotFound.module.css";

export default function ErrorNotFound() {
  return (
    <div className={classes.container}>
      <img src="/oops.jpeg"></img>
      <div className={classes.textContainer}>Back To Home</div>
      <Text size="xl">Back To Home</Text>
    </div>
  );
}
