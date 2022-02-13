import { Fragment } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const FooterBase = styled.footer`
    display: flex;
    color: ${props => props.theme.colors.text.white};
    background-color: ${props => props.theme.colors.background.darker};
`;

const FooterCol = styled.div`
    ${props => props.grow && "flex: 1;"}
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem 1rem;

    p {
        margin: 0;
    }
`;

const LinkTop = styled.button`
    background-color: transparent;
    border: none;
    color: ${props => props.theme.colors.primary};
    cursor: pointer;
    text-decoration: underline;

    &:hover {
        color: ${props => props.theme.colors.primaryDark};
    }
`;

const FooterLinks = styled.div`
    display: flex;
    margin-top: 1rem;
`;

const FooterLink = styled.a`
    margin: 0 0.5rem;
    text-decoration: none;
    color: ${props => props.theme.colors.text.white};

    &:hover {
        color: ${props => props.theme.colors.text.grey};
        text-decoration: underline;
    }
`;

const Footer = ({ brand, year, links }) => {
    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <FooterBase>
            <FooterCol grow>
                <p>
                    &copy; {brand} {year}
                </p>
                <FooterLinks>
                    {links.map((link, index) => (
                        <Fragment key={index}>
                            <FooterLink href={link.url}>{link.label}</FooterLink>
                            {index !== links.length - 1 && "|"}
                        </Fragment>
                    ))}
                </FooterLinks>
            </FooterCol>
            <FooterCol>
                <LinkTop onClick={handleScrollTop}>Back to top</LinkTop>
            </FooterCol>
        </FooterBase>
    );
};

Footer.defaultProps = {
    brand: "",
    year: "",
    links: []
};

Footer.propTypes = {
    /** The name for the footer */
    brand: PropTypes.string,
    /** The year for the footer */
    year: PropTypes.number,
    /** The links for the footer */
    links: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        })
    )
};

export default Footer;
