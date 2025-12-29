import getProjects from "../../data/mapping";
import Project from "../../objects/project";
import Link from "next/link";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ar: any[] = getProjects();
  const projects: Project[] = ar[0];
  const project = projects.find((p) => p.identifier.toLowerCase() === slug.toLowerCase());
  if (!project) {
    return (
      <main>
        <h1>Project Not Found</h1>
        <p>The project you are looking for does not exist.</p>
      </main>
    );
  } else {
    return (
      <main>
        <h1>{project.name}</h1>
        <p>{project.description}</p>
        <h2>General</h2>
        <ul>
          <li>
            <ul>{project.activeSupport ? <p>Active</p> : <p>Inactive</p>}</ul>
            <ul>{project.firstVersionReleased ? <p>Published</p> : <p>Still in Development</p>}</ul>
            <h3>Ready on</h3>
            {project.typeImplemented.length == 0 ?
              <p>No types ready yet</p>
              :
              <ul>
                {project.typeImplemented.map((type, index) => (
                  <li key={index}>&#x2022; {type}</li>
                ))}
              </ul>
            }
          </li>
          <li>
            <h3>Intended on</h3>
            <ul>
              {project.typeGoal.map((type, index) => (
                <li key={index}>&#x2022; {type}</li>
              ))}
            </ul>
          </li>
          <li>
            <h3>Platforms ready</h3>
            {project.platformsReady.length == 0 ?
              <p>No platforms ready yet</p>
              :
              <ul>
                {project.platformsReady.map((platform, index) => (
                  <li key={index}>&#x2022; {platform}</li>
                ))}
              </ul>
            }
          </li>
          <li>
            <h3>Intended platforms</h3>
            <ul>
              {project.platformsGoal.map((platform, index) => (
                <li key={index}>&#x2022; {platform}</li>
              ))}
            </ul>
          </li>
        </ul>
        <h2>Features</h2>
        <ul>
          {project.features.map((feature, index) => (
            <li key={index}>&#x2022; {feature}</li>
          ))}
        </ul>
        <h2>Technologies</h2>
        <p>Technologies used in development of this project</p>
        <ul>
          <li>
            <h3>Languages</h3>
            {project.languages.length == 0 ?
              <p>No Language provided</p>
              :
              <ul>
                {project.languages.map((language, index) => (
                  <li key={index}>&#x2022; {language}</li>
                ))}
              </ul>
            }
          </li>
          <li>
            <h3>Frameworks</h3>
            {project.frameworks.length == 0 ?
              <p>No Frameworks used</p>
              :
              <ul>
                {project.frameworks.map((framework, index) => (
                  <li key={index}>&#x2022; {framework}</li>
                ))}
              </ul>
            }
          </li>
        </ul>
        <div>
          <h2>Connection</h2>
          <ul>
            {<ul>
              {Array.from(project.connection.getActive().entries()).map(([key, value]) => (
                <li key={key}>
                  <Link href={value}>{key}</Link>
                </li>
              ))}
            </ul>
            }
          </ul>
        </div>
      </main>
    );
  }
}
