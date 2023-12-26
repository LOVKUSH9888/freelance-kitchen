import Main from "./components/Main/Main";
import styles from "./page.module.css";
import dynamic from "next/dynamic";

function Home() {
  return (
    <>
      <Main />
    </>
  );
}

export default dynamic (() => Promise.resolve(Home), {ssr: false})
