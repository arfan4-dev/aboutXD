import Head from "next/head";
import PageThree from '../components/PageThree'
import PageSeven from "@/components/PageSeven";
import PageSix from "@/components/PageSix";
import PageFive from "@/components/PageFive";
import PageFour from "@/components/PageFour";
import PageOne from "@/components/PageOne";
import PageNine from "@/components/PageNine";
import PageTwo from "./PageTwo";

export default function Home() {

  return (
    <>
      <Head>
        <title>About xd</title>
      </Head>
      <main>

        <PageOne />
        <PageTwo />
        <PageThree />
        <PageFour />
        <PageFive />
        <PageSix />

        <PageSeven />
        <PageNine />
      </main>
    </>
  );
}
