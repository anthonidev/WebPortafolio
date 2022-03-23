import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../type";

import Image from "next/image";
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '../animations';

const ProjectCard: FunctionComponent<{
  project: IProject;
  showDetail:null|number,
  setShowDetail:(id:null|number)=>void
}> = ({
  project: {
    id,
    name,
    image_path,
    category,
    deployed_url,
    description,
    github_url,
    key_techs,
  },
  showDetail,
  setShowDetail
}) => {
    return (
      <div>

        <Image
          src={image_path}
          alt={name} className="cursor-pointer"
          onClick={() => setShowDetail(id)}
          width="300"
          height="150"
          layout="responsive"
        />

        <p className="my-2 text-center" >{name}</p>


        {
          showDetail === id && (
            <div className="absolute top-0 left-0 grid z-10 p-2 rounded-lg md:p-10 dark:bg-dark-100 md:grid-cols-2 h-auto w-full gap-x-12 text-black bg-gray-100 dark:text-white">
              <motion.div variants={stagger} initial="initial" animate="animate">
                <motion.div variants={fadeInUp} className="border-4 border-gray-100">
                  <Image
                    src={image_path}
                    alt={name}
                    layout="responsive"
                    height="150"
                    width="300"
                  />
                </motion.div>
                <motion.div variants={fadeInUp} className="flex justify-center my-4 space-x-3">
                  <a href={github_url} className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200">
                    <AiFillGithub /> <span>Github</span>

                  </a>
                  <a href={github_url} className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200">
                    <AiFillProject /> <span>Project</span>
                  </a>
                </motion.div>

              </motion.div>
              <motion.div variants={stagger} initial="initial" animate="animate">
                <motion.h2 variants={fadeInUp} className="mb-3 text-xl font-medium md:text-2xl">{name}</motion.h2>
                <motion.h3 variants={fadeInUp} className="mb-3 font-medium">{description}</motion.h3>
                <motion.div variants={fadeInUp} className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
                  {
                    key_techs.map(tech => <span className="px-2 py-2 bg-gray-200 dark:bg-dark-200" key={tech}>{tech}</span>)
                  }
                </motion.div>


                <button
                  className="absolute top-3 right-3 rounded-full p-1 focus:outline-none bg-gray-200 dark:bg-dark-200 "
                  onClick={() => setShowDetail(null)}><MdClose size={30} /></button>
              </motion.div>
            </div>
          )

        }

      </div>
    )
  };

export default ProjectCard;