import React from "react";
import ProjectCard from "../components/ProjectCard";
import "./Projects.css";

function Projects() {
  return (
    <div id="project-page">
      <h2 class="project-header">some projects i've done</h2>

      <div id="project-list">
        <div class="row">
          <div class="col-sm-6">
            <ProjectCard
              title="Hog Dice Game"
              text="Used Python to develop a simulator of a two-player dice game. Emphasized use of recursion, data abstraction, higher-order functions, and control flow to develop advanced game strategies, achieving a win rate of over 0.59 against a baseline strategy."

              githubLink="#"
            ></ProjectCard>
          </div>

          <div class="col-sm-6">
            <ProjectCard
              title="Ants vs SomeBees"
              text="Developed a tower defense game using Python, where specialized ants must defend their colony from invading bees; used an object-oriented programming paradigm: emphasized use of classes, inheritance, and composition."
              githubLink="#"
            ></ProjectCard>
          </div>
        </div>
      </div>
      <div id="project-list">
        <div class="row">
          <div class="col-sm-6">
            <ProjectCard
              title="2048"
              text="Utilized Java to architect the core logic for tile movement, merging, and game progression via object-oriented programming, successfully crafting algorithms to detect empty spaces, winning tile conditions, and valid moves"
              githubLink="#"
            ></ProjectCard>
          </div>

          <div class="col-sm-6">
            <ProjectCard
              title="Cats: Autocorrected Typing Software"
              text="Designed and implemented a typing speed measurement and autocorrect feature for a multiplayer typing game using Python, where players can compete against each other and receive real-time progress updates."
              githubLink="#"
            ></ProjectCard>
          </div>
        </div>
      </div>

      {/* <div id="project-list">
        <div class="row">
          <div class="col-sm-6">
            <ProjectCard
              title="Scheme Interpreter"
              text="Built a Scheme interpreter in Python, focusing on implementing key features such as evaluating expressions, handling special forms, creating and calling user-defined procedures, and supporting both lexical and dynamic scoping."

              githubLink="#"
            ></ProjectCard>
          </div>

          <div class="col-sm-6">
            <ProjectCard
              title="Deques"
              text="Created implementations of a “Double Ended Queue” using both lists and arrays: LinkedListDeque using linked nodes, and ArrayDeque using a backing array. Employed Test-driven development (TDD) to systematically validate and refine code."
              githubLink="#"
            ></ProjectCard>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Projects;
