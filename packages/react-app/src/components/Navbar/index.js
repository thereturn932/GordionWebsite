import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
    Image
} from './NavbarElements';

import logo from "../../images/GordionTV.png"

import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'
import { ConnectButton } from '../ConnectButton'

function getLibrary(provider) {
    return new Web3(provider)
}

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>
                    <Image src={logo} alt="react-logo" />
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to='/about'>
                        About
                    </NavLink>
                    <NavLink to='/community'>
                        Community
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <Web3ReactProvider getLibrary={getLibrary}>
                        <ConnectButton />
                    </Web3ReactProvider>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;