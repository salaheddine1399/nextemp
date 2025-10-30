import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";


import proj2 from "/public/images/projects/nextauth.png";

function AnimatedNumberFramerMotion({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref} />;
}

export default function About() {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://travislord.xyz/projects/clay-gatsby-theme"
        ></link>
        <title>
          NextAuth - Authentication Solution for Next.js Applications
        </title>
        <meta
          name="description"
          content="NextAuth is a powerful authentication solution designed specifically for Next.js applications. It provides seamless integration with various identity providers, enabling developers to implement secure and scalable authentication mechanisms with ease."
        />
      </Head>

      <TransitionEffect />
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="NextAuth"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div
              className="col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
            md:col-span-8"
            >
              <h2 className="mb-4 text-2xl font-bold capitalize text-dark/75 dark:text-light/75">
                NextAuth - Authentication Solution for Next.js Applications
              </h2>
              <h3 className="mb-4 text-lg font-bold  text-lightGreen dark:text-primaryDark">
                Web Design  | Development
              </h3>
              <div classNname="w-full border-2 border-solid border-light bg-light"></div>
              <p className="">
                Key Features :
              </p>
              <h4 className="mt-4 text-lg font-800 capitalize text-dark/75 dark:text-light/75">
                -  Credentials Provider for traditional login
                
              </h4>
              <h4 className="mt-4 text-lg font-800 capitalize text-dark/75 dark:text-light/75">
                
                -  OAuth Provider for seamless social logins (Google & GitHub)
              </h4>
              <h4 className="mt-4 text-lg font-800 capitalize text-dark/75 dark:text-light/75">
                
                -  Forgot password functionality with email verification
              </h4>
                            <h4 className="mt-4 text-lg font-800 capitalize text-dark/75 dark:text-light/75">
                
                -  Two-factor authentication (2FA) for added security
              </h4>
                            <h4 className="mt-4 text-lg font-800 capitalize text-dark/75 dark:text-light/75">
                
                -   User roles (Admin & User) with role-based access control
              </h4>
                            <h4 className="mt-4 text-lg font-800 capitalize text-dark/75 dark:text-light/75">
                
                -   Custom components for login, registration, forgot password, and verification
              </h4>
                            
                            <h4 className="mt-4 text-lg font-800 capitalize text-dark/75 dark:text-light/75">
                
                -   Protected API routes, server actions, and UI components for admins only
              </h4>
                            
                            <h4 className="mt-4 text-lg font-800 capitalize text-dark/75 dark:text-light/75">
                
                -   Settings page with options to update email, password, enable/disable 2FA, and more
              </h4>


              <div className="mt-2 flex items-center grid-cols-8 gap-4 sm:gap-8">
                <Link
                  className="rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold
             sm:px-4 sm:text-base rounded-lg border-2 border-solid bg-dark
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base"
                  aria-label="Visit Theme Demo"
                  href="https://www.linkedin.com/posts/salah-eddine-khachouche-733a231b3_nextjs-webdevelopment-authentication-activity-7295439889670557696-0-6A?utm_source=share&utm_medium=member_desktop&rcm=ACoAADHOolcB3QuhvdXi0VUHTmoR_Bw0wa75jlE"
                  target={"_blank"}
                >
                  Visit Demo
                </Link>


              </div>
            </div>
            <div
              className="relative col-span-4 h-max rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 dark:border-light dark:bg-dark
            xl:col-span-4 md:col-span-8 md:order-1
            "
            >
              <div
                className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl 
                bg-dark
        dark:bg-light  "
              />
              <Image
                className="h-auto w-full rounded-2xl"
                src={proj2}
                alt="Clay Gatsby Theme"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                priority
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
