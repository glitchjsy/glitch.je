import ProjectPage from "@/components/ProjectPage";
import { FiGithub } from "react-icons/fi";

export default function ProjectcloudForms() {
    return (
        <ProjectPage
            name="CloudForms"
            category="Java Library"
            status="Discontinued"
            summary="A callback-based form library for Cloudburst and Nukkit, two Minecraft server softwares."
            created="January 2021"
            openSource
            technologies={[
                "java",
                "maven"
            ]}
            links={[
                { text: "GitHub Repository", icon: <FiGithub />, href: "https://github.com/lukeeey/CloudForms" }
            ]}
        >
            <p>A form in Minecraft looks like the below image. This library allows you to create a form, add elements, and perform actions using callbacks when the player submits the form.</p>
            <img src="/images/projects/cloudforms/form.png" style={{ maxWidth: "400px" }} />
        </ProjectPage>
    )
}