import ProjectPage from "@/components/ProjectPage";
import { FiGithub } from "react-icons/fi";

export default function ProjectAndiumChecker() {
    return (
        <ProjectPage
            name="Andium Properties Checker"
            category="Console Applications"
            status="Discontinued"
            summary="A simple console application that checks the Andium Homes website for homes available to rent and sends an email summary of changes."
            created="December 2023"
            openSource
            technologies={[
                "mailtrap",
                "javascript",
                "nodejs"
            ]}
            links={[
                { text: "GitHub Repository", icon: <FiGithub />, href: "https://github.com/glitchjsy/andium-checker" }
            ]}
        >
            <p>The program no longer works as the <a href="https://www.andiumhomes.je/findahome/propertylettings" target="_blank">homes to rent</a> page no longer exists.</p>
            <p>I created the program for a family member who was living in an Andium residence and was hoping to move, as this would allow them to receive notifications for new properties before others.</p>
            <p>I used the Mailtrap service as a quick, free and easy way to send summary emails. This project initially took about an hour but I later cleaned it up slightly</p>
        </ProjectPage>
    )
}