import { useApp } from "../AppContext";
import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";
import testData from "../data/test.json";

export default function HomePage() {
  const { count, setCount, showMessage } = useApp();

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{testData.name}</h1>
      <div className="card">
        <button
          onClick={() => {
            setCount((count) => count + 1);
            showMessage(`Count increased to ${count + 1}`);
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
