import ProjectPage from "@/components/ProjectPage";
import { FaFacebook } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";

export default function ProjectBasketje() {
    return (
        <ProjectPage
            name="Basket.je"
            category="Website"
            status="Inactive"
            summary="Basket.je is a price comparison website that I built from the ground up."
            created="April 2023"
            technologies={[
                "typescript",
                "nextjs",
                "mysql",
                "redis",
                "nginx",
                "react",
                "react-native",
                "chakra-ui"
            ]}
            links={[
                { text: "Website", icon: <FiGlobe />, href: "https://basket.je" },
                { text: "Facebook Page", icon: <FaFacebook />, href: "https://facebook.com/basket.je" }
            ]}
        >
            <p>The purpose of Basket.je is to aid consumers in saving money by making it easy to compare grocery prices across various local retailers.</p>
            <p>To make this possible, I created a system for effortlessly collectng prices using your smartphone while in the shop. I have also developed a native app using React Native that is yet to be released.</p>

            <img src="/images/projects/basketje/homepage.jpg" style={{ maxWidth: "100%" }} />
        </ProjectPage>
    )
}