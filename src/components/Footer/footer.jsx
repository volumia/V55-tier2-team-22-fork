import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const developers = [
    {
        "name": "Khalid",
        "github": "https://github.com/volumia",
        "linkedIn": "https://www.linkedin.com/in/khalid-khogali/"
    },
    {
        "name": "Sophie",
        "github": "https://github.com/zofienora",
        "linkedIn": "https://www.linkedin.com/in/sophie-nora-keil/"
    },
    {
        "name": "Rafia",
        "github": "https://github.com/rafia-farooq",
        "linkedIn": "https://www.linkedin.com/in/rafia-farooq/"
    },
    {
        "name": "Mohamed",
        "github": "https://github.com/MohamedNabil720",
        "linkedIn": "https://www.linkedin.com/in/muhammad--nabil/"
    },
    {
        "name": "Micheal",
        "github": "https://github.com",
        "linkedIn": "https://www.linkedin.com/"
    }
]

const scrumMasters = [
    {
        "name": "Robyn",
        "linkedIn": "https://www.linkedin.com/in/robyn-joynt/"
    },
    {
        "name": "Oluwatosin",
        "linkedIn": "https://www.linkedin.com/in/oluwatosin-awoniyi-8a48228a/"
    }
]


const Footer = () => {
  return (
    <footer>
        {
            developers.map((member, index) => {
            return (
                <div>
                    <p key={index}>{member.name}</p>
                    <FaGithub></FaGithub>
                    <FaLinkedin></FaLinkedin>
                </div>
                )
            })
        }

        {
            scrumMasters.map((member, index) => {
            return (
                <div>
                    <p key={index}>{member.name}</p>
                    <FaLinkedin></FaLinkedin>
                </div>
                )
            })
        }

        <FaGithub size={32} color='#05DBF2'></FaGithub>
        <p>© 2025 App Name.</p>
        <p>This project was built by team 22 as part of the Chingu Voyage 55</p>
    </footer>
  );
};

export default Footer;
