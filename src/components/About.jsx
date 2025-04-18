import React, { Suspense } from "react";
import styled from "styled-components";
import { Header } from "./Header";
import Info from "./Info";
import { about } from "../data/data";
import { FaGithub, FaHtml5, FaCss3Alt, FaReact, FaJava, FaC, FaPython, FaFileExcel, FaFileWord, FaFilePowerpoint, FaFigma, FaWordpress, FaGit } from "react-icons/fa6";
import { SiPhp, SiJavascript, SiCplusplus, SiCsharp, SiAdobephotoshop, SiAdobepremierepro, SiVega, SiMysql, SiPostgresql } from "react-icons/si";
import { SkillList } from "./SkillList";
import { motion } from "framer-motion";

export const MainWrapper = styled.section`
  padding-inline: 24px;
  margin-block-start: 32px;
  display: grid;
  gap: .5rem;

  grid-template-columns: subgrid;
  grid-column: 1 / 6;
  grid-template-rows: repeat(6, auto);

  @media screen and (min-width: 900px) {
    grid-column: 2 / 6;
    margin-block-start: 0;
  }
`;

const ImagePreloader = styled.div`
  background-color: red;
  height: 100px;
  width: 100px;
`;

const proficientList = [
  {
    icon: SiPhp(),
    skillName: "PHP",
  },
  {
    icon: SiJavascript(),
    skillName: "Javascript",
  },
  {
    icon: FaHtml5(),
    skillName: "HTML",
  },
  {
    icon: FaReact(),
    skillName: "React",
  },
  {
    icon: SiPostgresql(),
    skillName: "PostgresSQL"
  },
  {
    icon: FaCss3Alt(),
    skillName: "CSS",
  },
  {
    icon: FaGit(),
    skillName: "Git"
  },
  {
    icon: SiMysql(),
    skillName: "MySQL"
  },
];

const basicList = [
  {
    icon: FaJava(),
    skillName: "Java"

  },
  {
    icon: FaPython(),
    skillName: "Python"
  },
  {
    icon: FaC(),
    skillName: "C"
  },
  {
    icon: SiCplusplus(),
    skillName: "C++"
  },
  {
    icon: SiCsharp(),
    skillName: "C#"
  },
  {
    icon: FaWordpress(),
    skillName: "WordPress"
  },
]

const othersList = [
  {
    icon: FaGithub(),
    skillName: "Github",
  },
  {
    icon: FaFileExcel(),
    skillName: "MS Excel"
  },
  {
    icon: FaFileWord(),
    skillName: "MS Word"
  },
  {
    icon: FaFilePowerpoint(),
    skillName: "MS Powerpoint"
  },
  {
    icon: SiAdobephotoshop(),
    skillName: "Photoshop"
  },
  {
    icon: SiAdobepremierepro(),
    skillName: "Premiere Pro"
  },
  {
    icon: SiVega(),
    skillName: "Sony Vega"
  },
  {
    icon: FaFigma(),
    skillName: "Figma"
  },
]

export default class About extends React.Component {
  render() {
    return (
      <MainWrapper>
        <Suspense fallback={ImagePreloader}>
          <Header />
        </Suspense>
        {about.info.map((info, key) => {
          const {
            $colspanstart,
            $hasPaddingInlineEnd,
            $hasPaddingInlineStart,
            $hasBorderInlineStart,
            $colspanend,
            $rowspanend,
            $rowspan,
            $rowspanstart,
            $isFlex,
          } = info.styles ?? "";
          return (
            <Info
              delay={key * 0.2}
              $colspanstart={$colspanstart}
              $colspanend={$colspanend}
              $rowspanstart={$rowspanstart}
              $rowspanend={$rowspanend}
              $rowspan={$rowspan}
              $hasPaddingInlineEnd={$hasPaddingInlineEnd}
              $hasPaddingInlineStart={$hasPaddingInlineStart}
              $hasBorderInlineStart={$hasBorderInlineStart}
              $isFlex={$isFlex}
              img={info.img}
              key={key}
              header={info.header}
              subheader={info.subheader}
              body={info.body}
              list={info.list}
            />
          );
        })}
        {[proficientList, basicList, othersList].map((list, key) => {
          let subHeading;
          switch(key){
            case 0: 
              subHeading = "Proficient in"
              break;
            case 1: 
              subHeading = "Knows the basics of"
              break;
            case 2: 
              subHeading = "Other Skills"
              break;
            default:
              subHeading = "";
          }
          return (
            <SkillList
              $colspanstart={1}
              $colspanend={5}
              delay={key * .6}
              key={key}
              $hasSubheading={subHeading}
              skills={list}
            />
          )
        })}
      </MainWrapper>
    );
  }
}
