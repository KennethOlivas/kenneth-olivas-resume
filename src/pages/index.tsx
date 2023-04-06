import Education from "@/components/Education";
import Header from "@/components/Header";
import SwitchTheme from "@/components/SwitchTheme";
import Title from "@/components/Title";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kenneth Olivas</title>
        <meta name="description" content="Full-Stack software developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-gradient-to-bl from-pink-300 via-purple-300 to-indigo-400 flex justify-center w-full dark:bg-gradient-to-r dark:from-[#1A120B] dark:via-black dark:to-[#1A120B]">
        <SwitchTheme />
        <div className="2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl md:max-w-3xl sm:max-w-2xl max-w-none p-3 mx-auto my-auto bg-neutral-100 dark:bg-neutral-900 xsm:p-8 sm:p-9 md:p-16 sm:rounded-md shadow-2xl transition-all duration-500 m-0 sm:my-8">
          <Header />
          <div className="grid grid-cols-2 md:grid-cols-12 mt-8 gap-12">
            <Education />
            <section className="col-span-2 md:col-span-4">
              <Title title="certifications" />
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
