import { Sandpack } from "@codesandbox/sandpack-react";

const CodeBox = (componentName, componentCode) => {
  const appCode = `export default function App() {
    return <${componentName}></${componentName}>
}`;
  console.log(componentCode);
  return (
    <Sandpack
      template="react"
      files={{ "/App.js": appCode, "/component.js": componentCode }}
    ></Sandpack>
  );
};

export default CodeBox;
