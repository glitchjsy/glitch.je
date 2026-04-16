import ProjectPage from "@/components/ProjectPage";
import andiumChecker from "@/projects/2023/andium-checker";
import { PropsWithChildren } from "react";

export default function ProjectAndiumChecker() {
    return (
        <ProjectPage {...andiumChecker}>
            <RedBox>
                <p>The program no longer works as the <a href="https://www.andiumhomes.je/findahome/propertylettings" target="_blank">homes to rent</a> page no longer exists.</p>
            </RedBox>
            <p>I created this program for a family member who was living in an Andium residence and was hoping to move, as this would allow them to receive notifications for new properties before others.</p>
            <p>I used the Mailtrap service as a quick, free and easy way to send summary emails. This project initially took about an hour but I later cleaned it up slightly</p>
        </ProjectPage>
    )
}

function RedBox({ children }: PropsWithChildren) {
    return (
        <div style={{
            backgroundColor: "#ffd0d6",
            color: "#9c0c20",
            padding: "10px 15px",
            borderRadius: "8px",
            marginBottom: "15px"
        }}>{children}</div>
    )
}