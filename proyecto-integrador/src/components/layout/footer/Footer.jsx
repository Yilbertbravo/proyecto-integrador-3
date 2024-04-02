import { NavLink } from "react-router-dom";
import { Box, Link, Tooltip } from "@mui/material";
import "./footer.scss";

import links from "../../../links/links";

import Facebook from "../../../styles/svg/Facebook";
import Instagram from "../../../styles/svg/Instagram";

const Footer = () => {
    const socialMedias = [
        { url: "https://www.facebook.com/profile.php?id=61550627957322", icon: <Facebook/>, toolTip: "Facebook" },
        { url: "https://www.instagram.com/inversiones_yesbert/", icon: <Instagram/>, toolTip: "Instagram" },

    ];

    return (
        <Box
            component="footer"
            className="footer">

            <Box className="footer__groups">
                <Box>
                    <h4 className="footer__groups__title">Explorar</h4>
                    <Box
                        className="footer__groups__list footer__groups__list--explorer"
                    >
                        {links.map((link, index) => (
                            <NavLink
                                key={index}
                                to={link.url}
                            >
                                {link.title}
                            </NavLink>
                        ))}
                    </Box>
                </Box>

                <Box>
                    <h4 className="footer__groups__title">Legales</h4>
                    <Box className="footer__groups__list footer__groups__list--legal">
                        <Link href="https://drive.google.com/file/d/1_UWxAiice52wSp474cWA2hL5ioHwRA_N/view?usp=sharing">Términos y condiciones</Link>
                    </Box>
                </Box>

                <Box>
                    <h4 className="footer__groups__title">Sociales</h4>
                    <Box className="footer__groups__list footer__groups__list--social-media">
                        {socialMedias.map((socialMedia, index) => (
                            <Tooltip
                                key={index}
                                title={socialMedia.toolTip}>
                                <Link href={socialMedia.url}>{socialMedia.icon}</Link>
                            </Tooltip>
                        ))}
                    </Box>
                </Box>
            </Box>

            <Box className="footer__copyright">
                <span>&copy;2024 Todos los derechos reservados Proyecto Integrador Yilbert</span>
            </Box>
        </Box>
    );
};

export default Footer;