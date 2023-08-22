import ButtonIcon from './misc/buttonIcon';
import EnFlagIcon from './misc/enFlagIcon';
import EsFlagIcon from './misc/esFlagIcon';
import DockerIcon from './techs/dockerIcon';
import DotnetIcon from './techs/dotnetIcon';
import GithubIcon from './social/githubIcon';
import GitIcon from './techs/gitIcon';
import JsIcon from './techs/jsIcon';
import NodeJsIcon from './techs/nodejsIcon';
import ReactIcon from './techs/reactIcon';
import SassIcon from './techs/sassIcon';
import SqlServerIcon from './techs/sqlServerIcon';
import MongodbIcon from './techs/mongodbIcon';
import CssIcon from './techs/cssIcon';
import PugIcon from './techs/pugIcon';
import RedisIcon from './techs/redisIcon';
import GraphQLIcon from './techs/graphQLIcon';
import MysqlIcon from './techs/mysqlIcon';
import EmailIcon from './social/emailIcon';
import LinkedInIcon from './social/linkedinIcon';
import TelegramIcon from './social/telegramIcon';
import CVIcon from './misc/cvIcon';

export const svgTechsIcons = {
  docker: <DockerIcon />,
  dotnet: <DotnetIcon />,
  git: <GitIcon />,
  js: <JsIcon />,
  nodejs: <NodeJsIcon />,
  react: <ReactIcon />,
  sass: <SassIcon />,
  sqlServer: <SqlServerIcon />,
  mongodb: <MongodbIcon />,
  css: <CssIcon />,
  pug: <PugIcon />,
  redis: <RedisIcon />,
  graphql: <GraphQLIcon />,
  mysql: <MysqlIcon />,
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

export const svgIcons = { button: <ButtonIcon />, cv: <CVIcon /> };
