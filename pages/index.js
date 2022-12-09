import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";
import NavBar from "../components/NavBar";
import { Sandpack } from "@codesandbox/sandpack-react";

if (
  typeof window !== "undefined" &&
  process.env.NODE_ENV === "development"
  // && /VIVID_ENABLED=true/.test(document.cookie)
) {
  import("vivid-studio").then((v) => v.run());
  import("vivid-studio/style.css");
}

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState();
  const [componentCode, setComponentCode] = useState(`const Component = () => {
    <h1> Hello World </h1>
  };
  export default Component;`);
  const [componentName, setComponentName] = useState("Component");

  const appCode = `import ${componentName} from "./component.js";
  export default function App() {
    return <${componentName}></${componentName}>
  }
  `;
  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputText: inputText }),
    });
    const data = await response.json();
    console.log(data);
    setResult(data.result);
    setInputText("");
    setComponentCode(data.result);
  }

  return (
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main className={styles.main}>
        <NavBar className="w-full"></NavBar>
        <h3>Enter a type of comoponent</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="component"
            placeholder="Enter a kind of component"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <input type="submit" value="Generate code" />
        </form>
        <Sandpack
          template="react"
          files={{ "/App.js": appCode, "/component.js": componentCode }}
        ></Sandpack>
      </main>
    </div>
  );
}
