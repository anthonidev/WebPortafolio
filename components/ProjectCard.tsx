import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../type";



import Image from "next/image";

const ProjectCard: FunctionComponent<{
  project: IProject;
}> = ({
  project: {
    name,
    image_path,
    category,
    deployed_url,
    description,
    github_url,
    key_techs,
  },
}) => {
    return (
      <div>

        <img src={image_path} alt={name} className="cursor-pointer" />
        <p className="my-2 text-center" >{name}</p>

        <div className="grid md:grid-cols-2">
          <img src={image_path} alt={name} />
          <a href={github_url}>
          <AiFillGithub /> <span>Github</span>

          </a>
          <a href={github_url}>
          <AiFillProject /> <span>Project</span>

          </a>
        </div>

        <div>
          <h2>{name}</h2>
          <h3>{description}</h3>
          {
            key_techs.map(key_tech)
          }
        </div>

      </div>
    )
  };

export default ProjectCard;