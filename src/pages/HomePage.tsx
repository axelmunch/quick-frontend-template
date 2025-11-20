import { useApp } from "../AppContext";
import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";
import testData from "../data/test.json";
import { Box, Button, Link, Typography } from "@mui/material";

export default function HomePage() {
  const { count, setCount, showMessage } = useApp();

  return (
    <>
      <Box>
        <Link href="https://vite.dev" target="_blank">
          <img src={viteLogo} alt="Vite logo" />
        </Link>
        <Link href="https://react.dev" target="_blank">
          <img src={reactLogo} alt="React logo" />
        </Link>
      </Box>
      <Typography variant="h3">{testData.name}</Typography>
      <Box>
        <Button
          variant="outlined"
          onClick={() => {
            setCount((count) => count + 1);
            showMessage(`Count increased to ${count + 1}`);
          }}
        >
          count is {count}
        </Button>
        <Typography>
          Edit <code>src/App.tsx</code> and save to test HMR
        </Typography>
      </Box>
      <Typography>Click on the Vite and React logos to learn more</Typography>
    </>
  );
}
