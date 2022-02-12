import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const NavbarContainer = styled.nav`
    position: static;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    background-color: ${props => props.theme.colors.background.darker};
    border-radius: 0 0 ${props => props.theme.borderRadius} ${props => props.theme.borderRadius};
`;

const NavbarContent = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: inherit;
    align-items: center;
    justify-content: space-between;
    padding-right: 0.75rem;
    padding-left: 0.75rem;
`;

const NavbarBrand = styled.a`
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    text-decoration: none;
    white-space: nowrap;
    color: ${props => props.theme.colors.text.white};
`;

const NavbarToggler = styled.button`
    padding: 0.25rem 0.75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: ${props => props.theme.borderRadius};
    color: hsla(0, 0%, 98%, 0.5);
    border-color: hsla(0, 0%, 98%, 0.1);
    cursor: pointer;

    @media (min-width: 992px) {
        display: none;
    }
`;

const ToggleIcon = styled.span`
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
`;

const NavbarCollapse = styled.div`
    display: ${props => (props.isOpen ? "flex" : "none")};
    flex-basis: 100%;
    flex-grow: 1;
    flex-direction: column;

    @media (min-width: 992px) {
        display: flex;
        flex-basis: auto;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
`;

const NavbarLinks = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0.5rem;

    @media (min-width: 992px) {
        flex-direction: row;
        margin-right: auto;
        margin-bottom: 0;
    }
`;

const NavLink = styled.a`
    display: block;
    color: ${props => (props.active ? props.theme.colors.text.white : props.theme.colors.text.grey)};
    padding-right: 0;
    padding-left: 0;
    padding: 0.5rem 1rem;
    text-decoration: none;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;

    &:hover {
        color: ${props => props.theme.colors.text.lightGrey};
    }

    @media (min-width: 992px) {
        padding-right: 0.5rem;
        padding-left: 0.5rem;
    }
`;

const NavSearchForm = styled.form`
    display: flex;
`;

const SearchInput = styled.input.attrs({
    type: "search"
})`
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: ${props => props.theme.colors.text.default};
    background-color: ${props => props.theme.colors.background.default};
    border: none;
    border-radius: ${props => props.theme.borderRadius} 0 0 ${props => props.theme.borderRadius};
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

const SearchSubmit = styled.button.attrs({
    type: "submit"
})`
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    background-color: ${props => props.theme.colors.primary};
    border: none;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0 ${props => props.theme.borderRadius} ${props => props.theme.borderRadius} 0;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
        box-shadow 0.15s ease-in-out;
    color: ${props => props.theme.colors.text.white};
`;

const Navbar = ({ brand, links }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = e => {
        setIsOpen(!isOpen);
    };

    return (
        <NavbarContainer>
            <NavbarContent>
                <NavbarBrand href="#">{brand}</NavbarBrand>

                <NavbarToggler onClick={handleToggle}>
                    <ToggleIcon />
                </NavbarToggler>

                <NavbarCollapse isOpen={isOpen}>
                    <NavbarLinks>
                        {links.map((link, index) => (
                            <NavLink key={index} href={link.url} active={link.active}>
                                {link.label}
                            </NavLink>
                        ))}
                    </NavbarLinks>

                    <NavSearchForm>
                        <SearchInput placeholder="Search" />
                        <SearchSubmit>Search</SearchSubmit>
                    </NavSearchForm>
                </NavbarCollapse>
            </NavbarContent>
        </NavbarContainer>
    );
};

Navbar.propTypes = {
    /** Name for the navbar */
    brand: PropTypes.string.isRequired,

    /** Links to display in the navbar */
    links: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            active: PropTypes.bool.isRequired
        })
    )
};

Navbar.defaultProps = {
    brand: "",
    links: []
};

export default Navbar;
