import styled, { keyframes } from "styled-components";

import aboutTitle from "../assets/icons/a_propos.png";
import melinaPerso from "../assets/images/melina_perso.WebP";
import linkedinIcon from "../assets/icons/linkedin.WebP";
import githubIcon from "../assets/icons/github_logo.WebP";
import cvPdf from "../assets/document/melina_mouri_dev-web.pdf";

const jumpinBallAnimation1 = keyframes`
  0%, 100% { transform: translateY(0) scale(1, 1);}
  39% { transform: translateY(-75px) scale(1);}
  70% {transform: translateY(0) scale(1.5, 0.4);}
`;

const jumpinBallAnimation2 = keyframes`
  0%, 100% { transform: translateY(0) scale(1, 1);}
  39% { transform: translateY(-75px) scale(1);}
  70% {transform: translateY(0) scale(1.5, 0.4);}
`;

const jumpinBallAnimation3 = keyframes`
  0%, 100% { transform: translateY(0) scale(1, 1);}
  39% { transform: translateY(-75px) scale(1);}
  70% {transform: translateY(0) scale(1.5, 0.4);}
`;

const LoaderCircles = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;

  .loader__balls__group {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100px;
    width: 40px;
    justify-content: flex-end;
    align-items: center;
  }

  .ball {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    position: absolute;
    transform-origin: bottom;
  }

  .loader__balls__group :nth-child(1) {
    background-color: #99e2d0;
    animation: ${jumpinBallAnimation1} 1000ms infinite;
  }
  .loader__balls__group :nth-child(2) {
    background-color: #ff79da;
    animation: ${jumpinBallAnimation2} 1000ms infinite;
    animation-delay: 100ms;
  }
  .loader__balls__group :nth-child(3) {
    background-color: #9356dc;
    animation: ${jumpinBallAnimation3} 1000ms infinite;
    animation-delay: 200ms;
  }
`;

function FormationCircles() {
  return (
    <LoaderCircles>
      <div className="loader__balls__group">
        <div className="ball item1" />
        <div className="ball item1" />
        <div className="ball item1" />
      </div>
      <div className="loader__balls__group">
        <div className="ball item2" />
        <div className="ball item2" />
        <div className="ball item2" />
      </div>
      <div className="loader__balls__group">
        <div className="ball item3" />
        <div className="ball item3" />
        <div className="ball item3" />
      </div>
    </LoaderCircles>
  );
}

const pages = [
  {
    titleImg: aboutTitle,
    mainImg: melinaPerso,
    content: (
      <>
        <p
          className="font-extrabold text-lg mb-3 text-center lg:text-left"
          style={{ color: "#BB6BAB" }}
        >
          Moi c’est Mélina, étudiante à la Web@cadémie by Epitech !
        </p>
        <p
          className="mb-3 text-sm md:text-base text-center lg:text-left"
          style={{ color: "#BB6BAB" }}
        >
          Je me suis lancée dans le développement web avec enthousiasme,
          guidée par ma passion pour le design et mon envie de créer.
          <br />
          Je suis à la recherche d’une alternance des que possible afin de
          continuer à apprendre, coder et surtout m’exprimer à travers des
          projets concrets.
          <br />
          N’hésitez pas à découvrir mes réalisations et à me contacter pour
          échanger ou collaborer !
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-2 justify-center lg:justify-start">
          <a
            href={cvPdf}
            download
            className="text-white font-semibold rounded-full px-6 py-2 shadow hover:brightness-90 text-center"
            style={{ backgroundColor: "#BB6BAB" }}
          >
            Télécharger le CV
          </a>
          <div className="flex items-center gap-2 mt-2 sm:mt-0">
            <a
              href="http://www.linkedin.com/in/melina-mouri"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedinIcon}
                alt="logo linkedin"
                className="w-8 h-8 rounded-full"
              />
            </a>
            <a
              href="https://github.com/Melina-13"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={githubIcon}
                alt="logo github"
                className="w-8 h-8 rounded-full"
              />
            </a>
          </div>
        </div>
      </>
    ),
  },
];

export default function About() {
  return (
    <section id="rubrique_about" className="bg-bleuPastel py-10 px-4">
      <h2 className="text-center mb-4">
        <img
          src={pages[0].titleImg}
          alt="rubrique à propos"
          className="mx-auto w-10/12 max-w-lg"
        />
      </h2>

      <div className="flex items-center justify-center gap-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 w-full max-w-3xl">
          <img
            src={pages[0].mainImg}
            alt="illustration"
            className="rounded-3xl w-40 md:w-56 mb-6 lg:mb-0"
          />
          <div className="max-w-xl">{pages[0].content}</div>
        </div>
      </div>
    </section>
  );
}
