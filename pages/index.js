import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

export default function Home() {
  return (
    <>
      <Head>
        <title>Yoshida Profile</title>
        <meta name="description" content="Generated by create next app" />
        {/* <link rel="icon" href="/favicon.ico" /> */}

        {/* favicon追加 */}
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>

      <header>
        <div className="p-2 md:flex justify-between">
          <div className="text-center">
            <Image
              src="/images/logo.png"
              art="logo"
              width={120}
              height={60}
              // layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="my-auto flex justify-center text-[#008c8d] text-sm md:text-base font-medium">
            <ScrollLink
              to="about"
              className="mx-2 md:mx-4 hover:opacity-50 hover:cursor-pointer"
              smooth={true}
              duration={300}
            >
              ABOUT
            </ScrollLink>
            <ScrollLink
              to="skills"
              className="mx-2 md:mx-4 hover:opacity-50 hover:cursor-pointer"
              smooth={true}
              duration={300}
            >
              SKILLS
            </ScrollLink>
            <ScrollLink
              to="values"
              className="mx-2 md:mx-4 hover:opacity-50 hover:cursor-pointer"
              smooth={true}
              duration={300}
            >
              VALUES
            </ScrollLink>
            <ScrollLink
              to="future"
              className="mx-2 md:mx-4 hover:opacity-50 hover:cursor-pointer"
              smooth={true}
              duration={300}
            >
              FUTURE
            </ScrollLink>
            {/* <Link href="#skills">
              <a className="mx-2 md:mx-4">SKILLS</a>
            </Link>
            <Link href="#values">
              <a className="mx-2 md:mx-4">VALUES</a>
            </Link>
            <Link href="#future">
              <a className="mx-2 md:mx-4">FUTURE</a>
            </Link> */}
          </div>
        </div>
      </header>
      <main>
        <section className="bg-[#6bc2c3]">
          <div className="p-5 text-center md:flex justify-between">
            <div className="md:my-auto md:ml-20 md:text-left">
              <h1 className="tracking-widest font-bold text-2xl md:text-4xl text-white">
                メインタイトル
              </h1>
              <p className="tracking-widest my-3 text-base md:text-2xl text-white">
                サブタイトル
              </p>
            </div>
            <div className="px-10 md:p-10 md:text-right">
              <Image
                src="/images/hero.png"
                alt="hero"
                width={585}
                height={498}
              />
            </div>
          </div>
        </section>
        <section
          id="about"
          className="md:pt-10 md:pb-36 w-full bg-cover md:bg-about"
        >
          <div className="mx-auto text-center py-6 md:flex justify-center">
            <p className="text-xl md:text-3xl font-bold tracking-widest">
              私について
            </p>
            <p className="text-sm md:text-base pl-2 text-[#008c8d] md:flex items-center">
              ABOUT
            </p>
          </div>
          <div className="mx-auto max-w-screen-lg md:flex justify-center">
            <div className="mx-auto w-[320px] p-5">
              <div className="text-center">
                <Image
                  src="/images/about-1.png"
                  width={184}
                  height={157}
                  // layout="fill"
                  objectFit="contain"
                />
              </div>
              <p className="text-[#008c8d] font-bold text-xl md:text-2xl text-center my-1 md:my-3">
                趣味
              </p>
              <p className="leading-7">
                つれづれなるまゝに日暮らし硯にむかひて心にうつりゆくよしなし事をそこはかとなく書きつくれば、あやしうこそものぐるほしけれ。
              </p>
            </div>
            <div className="mx-auto w-[320px] p-5">
              <div className="text-center">
                <Image
                  src="/images/about-2.png"
                  width={184}
                  height={157}
                  // layout="fill"
                  objectFit="contain"
                />
              </div>
              <p className="text-[#008c8d] font-bold text-xl md:text-2xl text-center my-1 md:my-3">
                好きな食べ物
              </p>
              <p className="leading-7">
                つれづれなるまゝに日暮らし硯にむかひて心にうつりゆくよしなし事をそこはかとなく書きつくれば、あやしうこそものぐるほしけれ。つれづれなるまゝに日暮らし硯にむかひて
              </p>
            </div>
            <div className="mx-auto w-[320px] p-5">
              <div className="text-center">
                <Image
                  src="/images/about-3.png"
                  width={184}
                  height={157}
                  // layout="fill"
                  objectFit="contain"
                />
              </div>
              <p className="text-[#008c8d] font-bold text-xl md:text-2xl text-center my-1 md:my-3">
                性格
              </p>
              <p className="leading-7">
                つれづれなるまゝに日暮らし硯にむかひて心にうつりゆくよしなし事をそこはかとなく書きつくれば、
              </p>
            </div>
          </div>
        </section>
        <section
          id="skills"
          className="py-5 md:-mt-20 md:py-10 w-full bg-cover bg-skillsSp md:bg-skills"
        >
          <div className="max-w-screen-lg mx-auto md:flex justify-center">
            <div className="my-auto px-10 md:p-10">
              <div className="md:hidden mx-auto text-center py-4">
                <p className="text-xl md:text-3xl font-bold tracking-widest">
                  スキル
                </p>
                <p className="text-sm md:text-base font-semibold pl-2 text-[#008c8d] md:flex items-center">
                  SKILLS
                </p>
              </div>
              <div className="md:-ml-32">
                <Image
                  src="/images/skill.png"
                  alt="skill"
                  width={535}
                  height={372}
                />
              </div>
            </div>
            <div>
              <div className="mx-auto md:max-w-[530px] px-5 md:py-5 my-16">
                <div className="hidden mx-auto text-center py-4 md:flex justify-start">
                  <p className="text-xl md:text-3xl font-bold tracking-widest">
                    スキル
                  </p>
                  <p className="text-sm md:text-base font-semibold pl-2 text-[#008c8d] md:flex items-center">
                    SKILLS
                  </p>
                </div>
                <p className="text-sm md:text-base leading-7">
                  つれづれなるまゝに日暮らし硯にむかひて心にうつりゆくよしなし事をそこはかとなく書きつくれば、あやしうこそものぐるほしけれ。つれづれなるまゝに日暮らし硯にむかひて心にうつりゆくよしなし事をそこはかとなく書きつくれば、あやしうこそものぐるほしけれ。つれづれなるまゝに日暮らし硯にむかひて。
                </p>
                <div className="mt-4 rounded p-4 md:p-8 bg-white">
                  <div className="mt-2 first:mt-0">
                    <p className="tracking-wider text-sm md:text-base font-semibold text-[#008c8d] opacity-80">
                      SKILLSKILL
                    </p>
                    <ul className="flex">
                      <li className="w-11/12 mr-4">
                        <div className="relative pt-1">
                          <div className="overflow-hidden h-4 text-xs flex rounded bg-[#c5eaea]">
                            <div
                              style={{ width: "40%" }}
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#2bb9ba]"
                            ></div>
                          </div>
                        </div>
                      </li>
                      <li className="w-1/12 text-sm md:text-base text-[#008c8d]">
                        40%
                      </li>
                    </ul>
                  </div>
                  <div className="mt-2 first:mt-0">
                    <p className="tracking-wider text-sm md:text-base font-semibold text-[#008c8d] opacity-80">
                      SKILLSKILL
                    </p>
                    <ul className="flex">
                      <li className="w-11/12 mr-4">
                        <div className="relative pt-1">
                          <div className="overflow-hidden h-4 text-xs flex rounded bg-[#c5eaea]">
                            <div
                              style={{ width: "40%" }}
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#2bb9ba]"
                            ></div>
                          </div>
                        </div>
                      </li>
                      <li className="w-1/12 text-sm md:text-base text-[#008c8d]">
                        40%
                      </li>
                    </ul>
                  </div>
                  <div className="mt-2 first:mt-0">
                    <p className="tracking-wider text-sm md:text-base font-semibold text-[#008c8d] opacity-80">
                      SKILLSKILL
                    </p>
                    <ul className="flex">
                      <li className="w-11/12 mr-4">
                        <div className="relative pt-1">
                          <div className="overflow-hidden h-4 text-xs flex rounded bg-[#c5eaea]">
                            <div
                              style={{ width: "40%" }}
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#2bb9ba]"
                            ></div>
                          </div>
                        </div>
                      </li>
                      <li className="w-1/12 text-sm md:text-base text-[#008c8d]">
                        40%
                      </li>
                    </ul>
                  </div>
                  <div className="mt-2 first:mt-0">
                    <p className="tracking-wider text-sm md:text-base font-semibold text-[#008c8d] opacity-80">
                      SKILLSKILL
                    </p>
                    <ul className="flex">
                      <li className="w-11/12 mr-4">
                        <div className="relative pt-1">
                          <div className="overflow-hidden h-4 text-xs flex rounded bg-[#c5eaea]">
                            <div
                              style={{ width: "40%" }}
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#2bb9ba]"
                            ></div>
                          </div>
                        </div>
                      </li>
                      <li className="w-1/12 text-sm md:text-base text-[#008c8d]">
                        40%
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="values" className="">
          <div className="mx-auto text-center py-6 md:flex justify-center">
            <p className="text-xl md:text-3xl font-bold tracking-widest">
              価値観
            </p>
            <p className="text-sm md:text-base pl-2 text-[#008c8d] md:flex items-center">
              VALUE
            </p>
          </div>
          <div className="">
            <div className="mx-auto max-w-screen-lg md:flex justify-center">
              <div className="relative mx-5 md:px-5 md:py-10 bg-white md:divide-x-2 divide-[#c5eaea] md:flex justify-center rounded-lg">
                <div className="mx-auto md:w-max-[320px] px-5 py-5 md:py-0">
                  <div className="text-center">
                    <Image
                      src="/images/value1.png"
                      art="value1"
                      width={184}
                      height={157}
                      // layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <p className="text-[#384359] font-bold text-lg text-center my-1 md:my-3">
                    価値観01
                  </p>
                  <p className="text-sm md:text-base leading-7 md:leading-7">
                    つれづれなるまゝに日暮らし硯にむかひて心にうつりゆくよしなし事をそこはかとなく書きつくれば、あやしうこそものぐるほしけれ。
                  </p>
                </div>
                <div className="mx-auto md:w-max-[320px] px-5 py-5 md:py-0">
                  <div className="text-center">
                    <Image
                      src="/images/value2.png"
                      art="value2"
                      width={184}
                      height={157}
                      // layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <p className="text-[#384359] font-bold text-lg text-center my-1 md:my-3">
                    価値観02
                  </p>
                  <p className="text-sm md:text-base leading-7 md:leading-7">
                    つれづれなるまゝに日暮らし硯にむかひて心にうつりゆくよしなし事をそこはかとなく書きつくれば、あやしうこそものぐるほしけれ。
                  </p>
                </div>
                <div className="mx-auto md:w-max-[320px] px-5 py-5 md:py-0">
                  <div className="text-center">
                    <Image
                      src="/images/value3.png"
                      art="value3"
                      width={184}
                      height={157}
                      // layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <p className="text-[#384359] font-bold text-lg text-center my-1 md:my-3">
                    価値観03
                  </p>
                  <p className="text-sm md:text-base leading-7 md:leading-7">
                    つれづれなるまゝに日暮らし硯にむかひて心にうつりゆくよしなし事をそこはかとなく書きつくれば、あやしうこそものぐるほしけれ。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="future"
          className="-mt-64 pt-64 w-full bg-cover bg-futureSp md:bg-future"
        >
          <div className="pt-8 md:py-12 mt-5 mx-auto max-w-screen-lg md:flex justify-center">
            <div className="mx-5 md:max-w-[480px]">
              <div className="mx-auto text-center md:flex justify-start">
                <p className="text-xl md:text-3xl font-bold tracking-widest">
                  3年後にやりたいこと
                </p>
                <p className="text-sm md:text-base font-semibold pl-2 text-[#008c8d] md:flex items-center">
                  FUTURE
                </p>
              </div>
              <p className="mt-8 text-sm md:text-base leading-7 md:leading-7">
                つれづれなるまゝに日暮らし硯にむかひて心にうつりゆくよしなし事をそこはかとなく書きつくれば、あやしうこそものぐるほしけれ。つれづれなるまゝに日暮らし硯にむかひて心にうつりゆくよしなし事をそこはかとなく書きつくれば、あやしうこそものぐるほしけれ。つれづれなるまゝに日暮らし硯にむかひて。
              </p>
            </div>
            <div className="mt-5 -mb-1 md:mx-5 md:my-0">
              <div className="">
                <Image
                  src="/images/future.png"
                  alt="skill"
                  width={480}
                  height={251}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#262c3a] text-white">
        <div className="p-4 md:p-8 mx-auto max-w-screen-lg">
          <div className="my-2">
            <ul className="md:hidden flex flex-wrap justify-center text-xs font-extralight opacity-75">
              <li className="m-2">お問い合わせ</li>
              <li className="m-2">助成金について</li>
              <li className="m-2">特定商取引法に基づく表記</li>
              <li className="m-2">プライバシーポリシー</li>
            </ul>
          </div>
          <div className="my-5">
            <ul className="hidden md:flex justify-center">
              <li className="mr-3 my-auto text-xs tracking-widest">
                CREATED BY
              </li>
              <li className="text-lg tracking-wider">吉田 達哉</li>
            </ul>
          </div>
          <div className="p-5 md:p-10 text-center">
            <Image
              src="/images/logo_white.png"
              alt="logo-white"
              width={110}
              height={132}
            />
          </div>
          <div className="flex justify-center">
            <div>
              <Image
                src="/images/twitter.png"
                alt="twitter"
                width={36}
                height={16}
                objectFit="contain"
              />
            </div>
            <div>
              <Image
                src="/images/facebook.png"
                alt="facebook"
                width={36}
                height={16}
                objectFit="contain"
              />
            </div>
          </div>
          <div className="mt-5 text-center text-xs tracking-widest">
            <p>© 2022 RE-END</p>
          </div>
        </div>
      </footer>
    </>
  );
}
