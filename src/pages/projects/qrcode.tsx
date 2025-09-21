import ProjectPage from "@/components/ProjectPage";
import { FiGithub, FiGlobe } from "react-icons/fi";

export default function ProjectQRCode() {
    return (
        <ProjectPage
            name="QR Code Generator"
            category="Website"
            status="Inactive"
            summary="A very simple QR Code generator that does everything your browser. No ads, no tracking, nothing sent to the server at all."
            created="May 2024"
            openSource
            technologies={[
                "javascript",
                "html",
                "css"
            ]}
            links={[
                { text: "Website", icon: <FiGlobe />, href: "https://qrcode.gltch.je" },
                { text: "GitHub Repository", icon: <FiGithub />, href: "https://github.com/glitchjsy/qrcode" }
            ]}
        >
            <img src="/images/projects/qrcode/preview.png" style={{ maxWidth: "100%" }} />
        </ProjectPage>
    )
}