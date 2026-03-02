import EnFlagIcon from "./misc/enFlagIcon";
import EsFlagIcon from "./misc/esFlagIcon";
import DockerIcon from "./techs/dockerIcon";
import GithubIcon from "./social/githubIcon";
import GitIcon from "./techs/gitIcon";
import NodeJsIcon from "./techs/nodejsIcon";
import ReactIcon from "./techs/reactIcon";
import MongodbIcon from "./techs/mongodbIcon";
import EmailIcon from "./social/emailIcon";
import LinkedInIcon from "./social/linkedinIcon";
import TelegramIcon from "./social/telegramIcon";
import CVIcon from "./misc/cvIcon";
import TypescriptIcon from "./techs/typescriptIcon";
import PythonIcon from "./techs/pythonIcon";
import ElasticsearchIcon from "./techs/elasticsearchIcon";
import GenAIIcon from "./techs/genAiIcon";

export const svgTechsIcons = {
  genAI: <GenAIIcon />,
  elasticsearch: <ElasticsearchIcon />,
  typescript: <TypescriptIcon />,
  python: <PythonIcon />,
  docker: <DockerIcon />,
  git: <GitIcon />,
  nodejs: <NodeJsIcon />,
  react: <ReactIcon />,
  mongodb: <MongodbIcon />,
};

export const svgLanguagesIcons = {
  enFlag: <EnFlagIcon />,
  esFlag: <EsFlagIcon />,
};

export const svgSocialIcons = {
  github: <GithubIcon />,
  email: <EmailIcon />,
  linkedin: <LinkedInIcon />,
  telegram: <TelegramIcon />,
};

export const svgIcons = { cv: <CVIcon /> };
