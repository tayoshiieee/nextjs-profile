import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import CardAbout from "../components/CardAbout";
import CardValue from "../components/CardValue";

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Yoshida Profile</title>
        <meta name="description" content="Generated by create next app" />

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
              alt="logo"
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
                YOSHIDA TATSUYA
              </h1>
              <p className="tracking-widest my-3 text-base md:text-2xl text-white">
                吉田 達哉
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
            <div className="hidden mx-auto w-[320px] p-5"></div>
            <CardAbout
              image="/images/about-1.png"
              subheading="趣味"
              text="映画や美術館、古い家具などが好き。自然の中で過ごしたり、体を動かすことも好きです。おうち時間では料理やプラモデルにもハマりつつあります。"
            ></CardAbout>
            <CardAbout
              image="/images/about-2.png"
              subheading="好きな食べ物"
              text="うどん、焼きそば、パスタなど、とにかく麺が好き。それとモスバーガーを愛しています。チョコ菓子やスイーツなど甘いものも好き。"
            ></CardAbout>
            <CardAbout
              image="/images/about-3.png"
              subheading="性格"
              text="好奇心強めで、少しこだわりがあって、ちょっとドライで、協調性があって、かなり繊細で、考えすぎない、心配性です！"
            ></CardAbout>
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
                  東京在住のデザイナー。
                  メーカーでインテリアの商品企画・開発を担当。
                  現在は、ベンチャー企業でサイトのデザインやイベントの運用・販促関連を担当。
                  その他、3Dモデリング、CAD設計、パッケージデザインも経験。機械学習への興味からプログラミングスクールを修了。2022年にE資格を取得。
                </p>
                <div className="mt-4 rounded p-4 md:p-8 bg-white">
                  <div className="mt-2 first:mt-0">
                    <p className="tracking-wider text-sm md:text-base font-semibold text-[#008c8d] opacity-80">
                      3D design
                    </p>
                    <ul className="flex">
                      <li className="w-11/12 mr-4">
                        <div className="relative pt-1">
                          <div className="overflow-hidden h-4 text-xs flex rounded bg-[#c5eaea]">
                            <div
                              style={{ width: "60%" }}
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#2bb9ba]"
                            ></div>
                          </div>
                        </div>
                      </li>
                      <li className="w-1/12 text-sm md:text-base text-[#008c8d]">
                        60%
                      </li>
                    </ul>
                  </div>
                  <div className="mt-2 first:mt-0">
                    <p className="tracking-wider text-sm md:text-base font-semibold text-[#008c8d] opacity-80">
                      2D design
                    </p>
                    <ul className="flex">
                      <li className="w-11/12 mr-4">
                        <div className="relative pt-1">
                          <div className="overflow-hidden h-4 text-xs flex rounded bg-[#c5eaea]">
                            <div
                              style={{ width: "20%" }}
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#2bb9ba]"
                            ></div>
                          </div>
                        </div>
                      </li>
                      <li className="w-1/12 text-sm md:text-base text-[#008c8d]">
                        20%
                      </li>
                    </ul>
                  </div>
                  <div className="mt-2 first:mt-0">
                    <p className="tracking-wider text-sm md:text-base font-semibold text-[#008c8d] opacity-80">
                      Programming
                    </p>
                    <ul className="flex">
                      <li className="w-11/12 mr-4">
                        <div className="relative pt-1">
                          <div className="overflow-hidden h-4 text-xs flex rounded bg-[#c5eaea]">
                            <div
                              style={{ width: "5%" }}
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#2bb9ba]"
                            ></div>
                          </div>
                        </div>
                      </li>
                      <li className="w-1/12 text-sm md:text-base text-[#008c8d]">
                        5%
                      </li>
                    </ul>
                  </div>
                  <div className="mt-2 first:mt-0">
                    <p className="tracking-wider text-sm md:text-base font-semibold text-[#008c8d] opacity-80">
                      Machine learning
                    </p>
                    <ul className="flex">
                      <li className="w-11/12 mr-4">
                        <div className="relative pt-1">
                          <div className="overflow-hidden h-4 text-xs flex rounded bg-[#c5eaea]">
                            <div
                              style={{ width: "15%" }}
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#2bb9ba]"
                            ></div>
                          </div>
                        </div>
                      </li>
                      <li className="w-1/12 text-sm md:text-base text-[#008c8d]">
                        15%
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="values">
          <div className="mx-auto text-center py-6 md:flex justify-center">
            <p className="text-xl md:text-3xl font-bold tracking-widest">
              価値観
            </p>
            <p className="text-sm md:text-base pl-2 text-[#008c8d] md:flex items-center">
              VALUES
            </p>
          </div>
          <div>
            <div className="mx-auto max-w-screen-lg">
              <div className="relative mx-5 md:px-5 md:py-10 bg-white md:divide-x-2 divide-[#c5eaea] md:flex justify-center rounded-lg">
                <CardValue title="上機嫌でいる" image="/images/value1.png">
                  この世界の最大の罪は不機嫌。不機嫌は伝染し、運を遠ざける。なによりも機嫌よくいること。そんなところに幸運は訪れる。
                </CardValue>
                <CardValue title="隣の人を助ける" image="/images/value2.png">
                  神様は隣の人に電話をかけてきている。隣の人を助ければ神様に出会える。遠くの誰かではなく、まずは目の前の人を大切にする。
                </CardValue>
                <CardValue
                  title="自らの運命を愛する"
                  image="/images/value3.png"
                >
                  良いことも、悪いことも、嬉しいことも、悲しいことも、全部自分の積み上げてきたもの。全て飲み込んで、自分の命に変える。
                </CardValue>
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
                まだ大きくはないが、ニッチな分野でじっくりと売り上げ（もしくは認知度）を伸ばし始めている。チームメンバー3〜5人程度で組織している。そろそろ少し知名度のある人や会社との関わりが欲しいところ。しかし、焦らずじっくりとデリケートな分野を攻めていく。
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
