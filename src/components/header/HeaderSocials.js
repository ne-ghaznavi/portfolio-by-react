import React from 'react';

import {BsLinkedin} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href='https://linkdin.com' target="_blank"><BsLinkedin/> </a>
            <a href='https://github.com' target="_blank"><FaGithub/></a>
            <a href='https://Instagram.com' target="_blank"><BsInstagram/></a>
        </div>
    );
}

export default HeaderSocials;
