import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="navbar">Navbar</section>
      <Flex>
        <aside className="sidebar">Ini sidebar</aside>
        <main className="main">ini main</main>
      </Flex>
    </>
  );
}

export default App;
