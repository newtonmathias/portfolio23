import project2 from "/portfolio1.jpg";
import project1 from "/portfolio2.jpg";
import project3 from "/portfolio3.jpg";
import project4 from "/portfolio4.png";
import project5 from "/portfolio5.png";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import useMediaQuery from "../hooks/useMediaQuery";

const projects = [
  {
    id: 1,
    image: project3,
    title: "Ecommerce admin dashboard",
    desc: "An ecommerce admin dashboard is a web application that provides tools and features for managing and monitoring an online store. It allows store owners and administrators to view and analyze sales data with graphs and charts, manage product listings, process orders and shipments, and track customer information. ",
    tech: ["ReactJS", "NodeJS", "Redux", "MongoDB", "MUI"],
    demo: "https://newton-dashboard.onrender.com/",
  },
  {
    id: 2,
    image: project1,
    title: "E-healthcare",
    desc: "E-healthcare is a web application that allowsusers to search for doctors based on their location, specialty, and availability. Users can book an appointment and receive medical consultations via video call or chat or book in-person meeting.The platform also provides features such as electronic medical records, prescription management, and secure communication between doctors and patients.",
    tech: ["NextJS", "Redux", "MongoDB", "Stripe", "cloudinary"],
    demo: "https://ehealthcare-murex.vercel.app/",
  },
  {
    id: 3,
    image: project2,
    title: "A video game landing page",
    desc: "This is a video game landing page that serves as an introduction to a specific video game. It typically includes information about the game, such as its release date, developer, and gameplay features. It may also include screenshots or trailers to give visitors a sense of what the game looks and plays like.",
    tech: ["NextJS", "Tailwind CSS", "Framer Motion"],
    demo: "https://realmshowdown.vercel.app/",
  },
  {
    id: 4,
    image: project5,
    title: "Fitness Page",
    desc: "A professional and engaging landing page that effectively communicates the benefits of the fitness product or service and encourages users to take action. By using technologies such as ReactJS, Typescript, Tailwind CSS, and Framer Motion, the landing page delivers a seamless and effective user experience for visitors.",
    tech: ["ReactJS", "Typescript", "Tailwind CSS", "Framer Motion"],
    demo: "https://fitress.pages.dev/",
  },
  {
    id: 5,
    image: project4,
    title: "Cyber Security Blog",
    desc: "A static cyber security blog built with Typescript, Nextjs, and Sanity. It is easy to publish content using the embedded studio and has live preview before publishing. It is blazing fast as it uses  Incremental Static Regeneration that enables you to use static-generation on a per-page basis, without needing to rebuild the entire site ",
    tech: ["NextJS", "Typescript", "Tailwind CSS", "Sanity V3"],
    demo: "https://cyberblog-rho.vercel.app/",
  },
];

const Projects = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <section id="projects" className="pt-20 pb-24">
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Here are some projects I have built ranging from small utilities to
          large-scale web applications.
        </p>
      </motion.div>
      {isDesktop
        ? projects.map((project) =>
            project.id % 2 == 0 ? (
              <div
                className="flex items-center justify-between"
                key={project.id}
              >
                <motion.div
                  className="basis-1/2 bg-blue z-1 hover:bg-transparent transition duration-500 rounded-md"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    <img
                      src={project.image}
                      alt="project1"
                      className=" opacity-70"
                    />
                  </a>
                </motion.div>
                <div className="basis-1/2 flex flex-col items-end justify-between gap-5">
                  <p className="text-xl text-red">Featured Project</p>
                  <p className="text-2xl">{project.title}</p>
                  <p className="bg-dark-blue p-4 -ml-10 rounded-md z-30 shadow-2xl border-2 border-dark-blue">
                    {project.desc}
                  </p>
                  <p className="text-dark-grey flex items-center justify-between gap-2">
                    {project.tech.map((item) => (
                      <p>{item}</p>
                    ))}
                  </p>
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    <ArrowTopRightOnSquareIcon className="h-6 w-6" />
                  </a>
                </div>
              </div>
            ) : (
              <div
                className="flex my-20 items-center justify-between"
                key={project.id}
              >
                <div className="basis-1/2 flex flex-col items-start justify-between gap-5">
                  <p className="text-xl text-red">Featured Project</p>
                  <p className="text-2xl">{project.title}</p>
                  <p className="bg-dark-blue p-4 -mr-10 rounded-md z-30 shadow-2xl border-2 border-dark-blue">
                    {project.desc}
                  </p>
                  <p className="text-dark-grey flex items-center justify-between gap-2">
                    {project.tech.map((item) => (
                      <p>{item}</p>
                    ))}
                  </p>
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    <ArrowTopRightOnSquareIcon className="h-6 w-6" />
                  </a>
                </div>
                <motion.div
                  className="basis-1/2 bg-blue z-1 hover:bg-transparent transition duration-500 rounded-md"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    <img
                      src={project.image}
                      alt="project1"
                      className=" opacity-70"
                    />
                  </a>
                </motion.div>
              </div>
            )
          )
        : projects.map((project) => (
            <div
              key={project.id}
              className=" flex relative flex-col gap-5 bg-dark-blue rounded-md shadow-2xl"
            >
              <p className="text-xl text-red">Featured Project</p>
              <div className="z-10">
                <h1 className="text-3xl font-bold">{project.title}</h1>
                <p>{project.desc}</p>
              </div>
              <img src={project.image} className="absolute z-1 opacity-25" />
              <p className="text-dark-grey flex items-center justify-between gap-2">
                {project.tech.map((item) => (
                  <p>{item}</p>
                ))}
              </p>
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="items-end"
              >
                <ArrowTopRightOnSquareIcon className="h-6 w-6 mb-2" />
              </a>
            </div>
          ))}
    </section>
  );
};

export default Projects;
