import ytclone from "../public/ytclone.png"
import crud from "../public/crud.webp"
import journeys from "../public/journey.webp"
import currency from "../public/currency2.webp"
import aora from "../public/aora.png"


const projectList = [
    {
        image: ytclone,
        title: 'Youtube Clone - Fullstack',
        description: 'Duplicated YouTube\'s core functionality using full- stack technologies. The application features a web client built with Next.js and a backend using Node.js with Express for video processing. It utilizes Google Cloud for handling user data and video uploads.',
        link: 'https://github.com/chenchiaho/youtube-clone-fullstack-nextjs-nodejs'

    },
    {
        image: aora,
        title: 'Aora Video Sharing - React Native',
        description: 'This is a Video Sharing App built with React Native, featuring sign-up and login functions for user authentication. The app allows users to upload videos, leveraging Appwrite for backend services and data management.',
        link: 'https://github.com/chenchiaho/video-sharing-app-react-native'

    },
    {
        image: journeys,
        title: 'Circular Journeys - React',
        description: 'I led the development of the ecommerce page and added payment functionality to the website as a team project. I successfully integrated the Stripe API to provide a seamless payment experience for users.',
        link: 'https://github.com/joanacircle/circular-journeys-frontend'

    },
    {
        image: crud,
        title: 'User Management System - Nodejs',
        description: 'I created a user-friendly system using Node.js that enables efficient management of user information. The system seamlessly allows for the addition, updating, and removal of users in the back-end.',
        link: 'https://github.com/chenchiaho/user-management-nodejs-CRUD'

    },

    {
        image: currency,
        title: 'Quick Currency App - Kotlin',
        description: 'A simple currency conversion app, utilizing the MVVM architecture. I used Moshi to handle and parse JSON data from an API.',
        link: 'https://github.com/chenchiaho/QuickCurrency'
    }

]

export default projectList