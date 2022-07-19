import type { NextPage } from "next";
import css from "../styles/Home.module.scss";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    const href = "/exoplanets/11-com-b";

    router.push(href);
  }, []);

  return (
    <div className={css.container}>
      <div></div>
    </div>
  );
};

export default Home;
