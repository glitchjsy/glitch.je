import ProjectPage from "@/components/ProjectPage";
import { FiGithub } from "react-icons/fi";

export default function ProjectDutyCalc() {
    return (
        <ProjectPage
            name="Excise Duty Calculator"
            category="Chrome Extension"
            status="Inactive"
            summary="A simple chrome extension to calculate excise duty on cigarettes, tobacco and alcohol products."
            created="April 2023"
            openSource
            technologies={[
                "javascript",
                "html",
                "css"
            ]}
            links={[
                { text: "GitHub Repository", icon: <FiGithub />, href: "https://github.com/glitchjsy/duty-calculator" }
            ]}
        >
            <p>This project was created simply as practice with creating Chrome extensions, however I still update the duty prices each year.</p>
            <p>It is not available in the Chrome Web Store and must be imported from source.</p>

            <img src="/images/projects/dutycalc/preview.png" style={{ maxWidth: "100%" }} />

            <p>Initially I had planned to add features such as scraping sites which you are on to automatically calculate the price with the duty added, but ultimately decided against it as it is not that useful.</p>
        </ProjectPage>
    )
}