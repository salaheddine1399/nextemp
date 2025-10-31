import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import Link from "next/link";

export default function Thanks() {
  return (
    <>
      <Head>
        <title>Thank You</title>
        <meta
          name="description"
          content="Thank you for contacting me — I'll get back to you soon."
        />
      </Head>

      <TransitionEffect />

      <main className="flex w-full flex-col items-center justify-center dark:text-light min-h-screen">
        <Layout className="pt-16 text-center">
          <AnimatedText
            text="Thank You 💌"
            className="mb-8 !text-7xl !leading-tight lg:!text-6xl sm:!text-5xl xs:!text-4xl"
          />

          <p className="text-lg sm:text-base text-dark/80 dark:text-light/80 mb-8 max-w-xl mx-auto">
            Your message has been successfully sent.  
            I appreciate you taking the time to reach out — I’ll respond as soon as possible!
          </p>

          <Link
            href="/"
            className="inline-block px-6 py-3 text-lg font-semibold text-light bg-dark dark:bg-light dark:text-dark rounded-md border-2 border-solid border-dark dark:border-light hover:bg-transparent hover:text-dark dark:hover:bg-dark dark:hover:text-light transition-colors duration-300"
          >
            Back to Home
          </Link>
        </Layout>
      </main>
    </>
  );
}
