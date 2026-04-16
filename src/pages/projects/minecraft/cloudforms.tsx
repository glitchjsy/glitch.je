import ProjectPage from "@/components/ProjectPage";
import cloudforms from "@/projects/2021/cloudforms";

export default function ProjectcloudForms() {
    return (
        <ProjectPage {...cloudforms}>
            <p>A form in Minecraft looks like the below image. This library allows you to create a form, add elements, and perform actions using callbacks when the player submits the form.</p>
            <img src="/images/projects/cloudforms/form.png" style={{ maxWidth: "400px" }} />
        </ProjectPage>
    )
}