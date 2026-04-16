import { FiGithub, FiGlobe } from "react-icons/fi";
import { Project } from "../../models/Project";

export default {
    name: "QR Code Generator",
    category: "Website",
    status: "Abandoned",
    summary: "A very simple QR Code generator that does everything your browser. No ads, no tracking, nothing sent to the server at all.",
    created: "May 2024",
    openSource: true,
    live: true,
    technologies: [
        "javascript",
        "html",
        "css",
        "bootstrap"
    ],
    links: [
        { text: "Website", icon: FiGlobe, href: "https://qrcode.gltch.je" },
        { text: "Source Code on GitHub", icon: FiGithub, href: "https://github.com/glitchjsy/qrcode" }
    ]
} as Project;