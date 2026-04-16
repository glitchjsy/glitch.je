import ProjectPage from "@/components/ProjectPage";
import qrcodeGenerator from "@/projects/2024/qrcode-generator";

export default function ProjectQRCode() {
    return (
        <ProjectPage {...qrcodeGenerator}>
            <img src="/images/projects/qrcode/preview.png" style={{ maxWidth: "100%" }} />
        </ProjectPage>
    )
}