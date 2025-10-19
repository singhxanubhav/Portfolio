import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Badge from "./Badge";
import VerticalLine from "./VerticalLine";
import { FaXTwitter } from "react-icons/fa6";
import { ArrowUpRight } from "lucide-react";

const Home = () => {
  return (
    <div className="flex justify-center">
      <main className="mt-8 flex-col items-center">
        {/* Hero Section */}
        <section
          id="about"
          className="flex flex-col md:flex-row items-center md:items-start gap-8"
        >
          <div className="relative cursor-pointer">
            <div className="w-28 h-28 bg-white rounded-full absolute inset-0"></div>
            <img
              src="/avatar.png"
              alt="Profile"
              className="w-28 h-28 rounded-full scale-90 hover:scale-100 duration-150 relative z-10"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold flex items-center gap-2">
              Hey 👋, I&apos;m Anubhav Singh
            </h1>
            <p className="text-sm font-semibold text-black dark:text-white mt-2">
              a full-stack software engineer, from India.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.linkedin.com/in/anubhavxsingh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-400 duration-300"
              >
                <FaLinkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://x.com/anubhavxsingh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-400 duration-300"
              >
                <FaXTwitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://github.com/singhxanubhav"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-400 duration-300"
              >
                <FaGithub className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="mailto:anubhavsinghbkj@gmail.com"
                className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-400 duration-300"
              >
                <FaEnvelope className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </a>
              {/* <a
                href="https://www.youtube.com/@anubhav"
                target="_blank"
                rel="noopener"
                className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-400 duration-300"
              >
                <FaYoutube className="w-5 h-5" />
                <span className="sr-only">YouTube</span>
              </a> */}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mt-10">
          <h2 className="text-l font-semibold mb-4">about me.</h2>
          <p className="text-black dark:text-white max-w-2xl text-sm">
            I&apos;m a passionate full-stack developer who learns and transforms
            complex problems into simple, beautiful, and intuitive solutions
            through development and design.
          </p>
          <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-900 rounded-lg max-w-2xl">
            <p className="text-sm text-black dark:text-white">
              I&apos;m open to collaborate with talented individuals and
              contribute to impactful projects. If you&apos;d like to learn more
              about my work or discuss potential opportunities, feel free to
              reach out!
            </p>
            <div className="mt-4 flex gap-4">
              <button
                className="px-3 py-2 bg-black text-white text-sm rounded-md"
                onClick={() => {
                  window.open("https://x.com/anubhavxsingh", "_blank");
                }}
              >
                Drop message on X
              </button>
              <button
                className="py-2 group text-sm flex items-center"
                onClick={() => {
                  window.open(
                    "https://drive.google.com/file/d/1-93bNt4hW2ND1OOVWGjCCMu1BVB_165M/view?usp=sharing",
                    "_blank"
                  );
                }}
              >
                Resume
                <span className="scale-90 group-hover:ml-1 transition-all duration-300">
                  <ArrowUpRight />
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="work-experience" className="mt-10">
          <h2 className="text-l font-semibold mb-4">work experience.</h2>
          <div className="space-y-8 max-w-2xl">
            <div className="relative flex items-start group">
              <VerticalLine />
              <div className="ml-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-md font-bold">Software Engineer</p>
                    <a
                      href="https://veshro.com/"
                      target="_blank"
                      rel="noopener"
                      className="text-xs text-black dark:text-white"
                    >
                      at <span className="underline">Veshro Technology</span>
                    </a>
                  </div>
                  <span className="text-xs font-semibold text-black dark:text-white">
                    sept, 2025 - present
                  </span>
                </div>
                <p className="mt-2 text-sm text-black dark:text-white">
                  As a Software Development Intern at Veshro Technology
                  Solutions, I am involved in developing cross-platform mobile
                  applications using React Native with a focus on optimized UI
                  and performance. I build scalable web applications using
                  Next.js with server-side rendering and custom API routes,
                  ensuring fast and efficient delivery of data. I design and
                  implement PostgreSQL schemas and queries through Prisma ORM
                  for structured and reliable data handling. Additionally, I
                  have developed an Admin Panel using Next.js, Prisma, and
                  Supabase to streamline data management and enable role-based
                  access control. My responsibilities also include collaborating
                  with the development team on API integration, conducting code
                  reviews, and contributing to agile workflows to ensure smooth
                  and efficient project delivery.
                </p>
              </div>
            </div>

            {/* <div className="relative flex items-start group">
              <VerticalLine />
              <div className="ml-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-medium">Data Analyst Intern</h5>
                    <a
                      href="https://www.scaler.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-black dark:text-white"
                    >
                      at <span className="underline">Scaler</span>
                    </a>
                  </div>
                  <span className="text-xs font-semibold text-black dark:text-white">
                    jun, 2023 - jun, 2024
                  </span>
                </div>
                <p className="mt-2 text-sm text-black dark:text-white">
                  Developed an API for alumni filters as a sentry, increasing engagement by 20%.
                  Enhanced query performance on Redshift by 2% through optimization, reducing server
                  load. Created a Python automation script to streamline Key Result (KR) reporting,
                  saving 10 hours per month and improving metric accuracy. Led the development of
                  comprehensive dashboards for Scaler School of Technology, reducing the Sales
                  Team&apos;s manual workload by 5% through automation.
                </p>
              </div>
            </div> */}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mt-10">
          <h2 className="text-l font-semibold mb-4">projects.</h2>
          <div className="space-y-8 max-w-2xl">
            {/* Project 1 */}
            <div className="relative flex items-start group">
              <VerticalLine />
              <div className="ml-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-md font-bold">
                      BridgePay
                      <span className="ml-2">
                        <Badge text="📦 Completed" />
                      </span>
                    </p>
                    <p className="text-xs font-semibold mt-1">
                      <strong>Tech Stack: </strong> Next.js, PostgreSQL, Prisma,
                      NextAuth, Turborepo, Docker
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href="https://bridgepay.anubhavsingh.site/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm group1 text-black flex items-center dark:text-white hover:scale-105 duration-150"
                    >
                      live preview
                      <span className="scale-90">
                        <ArrowUpRight />
                      </span>
                    </a>
                    <a
                      href="https://github.com/singhxanubhav/BridgePay"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-black flex items-center dark:text-white hover:scale-105 duration-150"
                    >
                      source code
                      <span className="scale-90">
                        <ArrowUpRight />
                      </span>
                    </a>
                  </div>
                </div>
                <ul className="mt-2 space-y-2 text-sm text-black dark:text-white list-disc pl-4">
                  <li>
                    Built a simulated banking platform with Next.js,
                    TailwindCSS, PostgreSQL, and Prisma, enabling wallet top-up,
                    peer-to-peer money transfers, and transaction history
                    tracking.
                  </li>
                  <li>
                    Designed a responsive, mobile-friendly UI that mimics
                    real-world banking interfaces (e.g., HDFC, Axis) for an
                    intuitive user experience.
                  </li>
                  <li>
                    Architected a monorepo using Turborepo and containerized the
                    app with Docker for scalable development and efficient
                    dependency management.
                  </li>
                  <li>
                    Implemented CI/CD pipelines on AWS EC2, automating
                    deployments and reducing deployment time by 40%
                  </li>
                </ul>
              </div>
            </div>
            {/* Project 2 */}
            <div className="relative flex items-start group">
              <VerticalLine />
              <div className="ml-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-md font-bold">
                      Payments App
                      <span className="ml-2">
                        <Badge text="📦 Completed" />
                      </span>
                    </p>
                    <p className="text-xs font-semibold mt-1">
                      <strong>Tech Stack: </strong> Express.js, React.js,
                      Mongoose, Recoil, Zod, Tailwind CSS
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href="https://payment.anubhavsingh.site/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm group1 text-black flex items-center dark:text-white hover:scale-105 duration-150"
                    >
                      live preview
                      <span className="scale-90">
                        <ArrowUpRight />
                      </span>
                    </a>
                    <a
                      href="https://github.com/singhxanubhav/Paytm-App"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-black flex items-center dark:text-white hover:scale-105 duration-150"
                    >
                      source code
                      <span className="scale-90">
                        <ArrowUpRight />
                      </span>
                    </a>
                  </div>
                </div>
                <ul className="mt-2 space-y-2 text-sm text-black dark:text-white list-disc pl-4">
                  <li>
                    Built a secure payment processing application handling over
                    10,000 transactions per month, with JWT authentication and
                    password hashing to safeguard user data.
                  </li>
                  <li>
                    Optimized concurrent request handling, reducing failed
                    transactions by 25% and improving system reliability for
                    high-volume processing.
                  </li>
                  <li>
                    Designed and integrated a scalable transaction validation
                    system using Zod, reducing input errors by 50% and enhancing
                    financial data integrity.
                  </li>
                  <li>
                    Leveraged Daisy UI for a responsive and visually consistent
                    user interface, increasing user retention by 20%.
                  </li>
                </ul>
              </div>
            </div>
            {/* Project 3 */}
            <div className="relative flex items-start group">
              <VerticalLine />
              <div className="ml-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-md font-bold">
                    Portfolio Tracker
                      <span className="ml-2">
                        <Badge text="📦 Completed" />
                      </span>
                    </p>
                    <p className="text-xs font-semibold mt-1">
                      <strong>Tech Stack: </strong> Next.js, PostgreSQL Prisma, NextAuth, Tailwind CSS
                    </p>
                  </div>
                  <div className="flex gap-4">
                  <a
                      href="https://portfolio.anubhavsingh.site/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm group1 text-black flex items-center dark:text-white hover:scale-105 duration-150"
                    >
                      live preview
                      <span className="scale-90">
                        <ArrowUpRight />
                      </span>
                    </a>
                    <a
                      href="https://github.com/singhxanubhav/Portfolio-tracker"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-black flex items-center dark:text-white hover:scale-105 duration-150"
                    >
                      source code
                      <span className="scale-90">
                        <ArrowUpRight />
                      </span>
                    </a>
                  </div>
                </div>
                <ul className="mt-2 space-y-2 text-sm text-black dark:text-white list-disc pl-4">
                  <li>
                  Built a stock portfolio management platform with Next.js, Prisma, and PostgreSQL, enabling users to track all
                  their holdings in one place.
                  </li>
                  <li>
                  Automated real-time stock price fetching via Yahoo Finance API, improving investment monitoring efficiency by
                  70% compared to manual tracking.
                  </li>
                  <li>
                  Implemented secure authentication with Google OAuth NextAuth.js, ensuring seamless onboarding and protecting
                  sensitive financial data.
                  </li>
                  <li>
                  Deployed on Vercel with CI/CD pipelines, delivering a scalable, production-ready app with 99.9% uptime and
                  responsive performance.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Skills Section */}
        <section id="skills" className="mt-10">
          <h2 className="text-l font-semibold mb-2">skills.</h2>
          <div className="mt-1 flex flex-wrap gap-2">
            <Badge text="javascript" isHover={true} />
            <Badge text="typescript" isHover={true} />
            <Badge text="next.js" isHover={true} />
            <Badge text="react native" isHover={true} />
            <Badge text="python" isHover={true} />
            <Badge text="react.js" isHover={true} />
            <Badge text="node.js" isHover={true} />
            <Badge text="express.js" isHover={true} />
            <Badge text="prisma" isHover={true} />
            <Badge text="mongoDb" isHover={true} />
            <Badge text="postgreSQL" isHover={true} />
          </div>
          <div className="mt-1 flex flex-wrap gap-2">
            <Badge text="supabase" isHover={true} />
            <Badge text="redux" isHover={true} />
            <Badge text="redis" isHover={true} />
            <Badge text="kafka" isHover={true} />
            <Badge text="docker" isHover={true} />
            <Badge text="AWS" isHover={true} />
            <Badge text="NGINX" isHover={true} />
            <Badge text="git" isHover={true} />
            <Badge text="github actions" isHover={true} />
            <Badge text="ci/cd" isHover={true} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
