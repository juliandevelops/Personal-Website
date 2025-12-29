import projectsData from "./projects.json";

import Project from "../objects/project";
import Connection from "../objects/connection";
import ProjectType from "../objects/project_type";

export default function getProjects() {
  const list = [];
  let listOfTypes = [];
  for (const projectsType in projectsData.projects.types) {
    listOfTypes.push(
      new ProjectType(
        projectsType,
        projectsData.projects.types[projectsType].name
      )
    );
    for (const project in projectsData.projects.types[projectsType].content) {
      list.push(idToProject(project, projectsType));
    }
  }
  return [list, listOfTypes];
}

function idToProject(projectID, type) {
  const object = projectsData.projects.types[type].content[projectID];
  return new Project(
    type,
    projectID,
    object["type-implemented"] ?? [],
    object["type-goal"] ?? [],
    object["platforms-ready"] ?? [],
    object["platforms-goal"] ?? [],
    object.languages ?? [],
    object.frameworks ?? [],
    object.name,
    object.description,
    object.features,
    new Connection(
      object.connection.repo,
      object.connection.playstore,
      object.connection.appstore,
      object.connection.fdroid,
      object.connection.pubdev,
      object.connection.youtrack
    ),
    object["first-version-released"],
    object["active-support"]
  );
}
