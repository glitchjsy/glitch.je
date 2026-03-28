import ProjectPage from "@/components/ProjectPage";
import { LuGithub, LuGlobe } from "react-icons/lu";

export default function ProjectMaryRoseWebsite() {
    return (
        <ProjectPage
            name="The Mary Rose Website"
            category="Website"
            status="Active"
            summary=""
            openSource
            type="Client Work"
            created="March 2026"
            technologies={[
                "javascript",
                "react",
                "html",
                "css"
            ]}
            links={[
                { text: "Website", href: "https://themaryrose.je", icon: <LuGlobe /> },
                { text: "GitHub", href: "https://github.com/stjamesjsy/maryrose-website", icon: <LuGithub /> }
            ]}
        >
            <p>I built a very simple website for local pub <a href="https://facebook.com/TheMaryRoseJersey" target="_blank">The Mary Rose</a> to show off the entertainment on offer. It also includes a contact form.</p>

            <p>The website is very similar to the website I created for St James as they are owned by the same company.</p>

            <p>The website is hosted for free on GitHub pages.</p>

            <h3>Images</h3>
            <img src="/images/projects/maryrose-website/home.png" className="project-demo-image-limit" style={{ marginBottom: "20px" }} />
        </ProjectPage>
    )
}