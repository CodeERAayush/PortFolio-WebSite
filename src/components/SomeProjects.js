import React from 'react'
import './SomeProjects.css'
import ProjectCard from './cards/projectcard'
export default function SomeProjects() {
  const projects = [
    {
      title: 'DrishyaDarshan- Google Meet Clone',
      tech:["React","Socket IO","WebRTC","Node.js", "Material UI"],
      native: 'React Native, Socket.Io, NodeJs',
      info: 'A Completly working Google Meet clone that supports group video chat, made using WebRTC.',
      image: 'https://lh3.googleusercontent.com/CPPP8wMdfaWyzjtnJuTp2fnuaz4I0DJ7j4Hib3atRKLUZ3Ru3lqtdGUO7ZjsISC9PvEXZVoaJk2SQwxgdTIEoMKKooGUp-fWigYHtaghSAdQ9WqGChw=w960-rw', // Replace with your project image URL
      link:"https://github.com/CodeERAayush/DrishyaDarshan---Video-Calling-WebApp.git"
    },
    {
      title: 'Social Media Website',
      tech:["React","Express.js","MongoDB","Node.js","Tailwind Css"],
      native: 'React Native, Socket.Io, NodeJs',
      info: 'It is a full fledged React WebApp Developed Using MERN technology, One Can Book Room Filter Rooms Accordng To Date etc.,',
      image: 'https://www.webfox.dev/assets/img/solutionbanner/on-demand-social-network-website.webp', // Replace with your project image URL
      link:"https://codeeraayush-socialbutterfly.vercel.app/"
    },
    {
      title: 'YourRooms- Room Booking Website',
      tech:["React","Express.js","MongiDB","Node.js","Stripe"],
      native: 'React Native, Socket.Io, NodeJs',
      info: 'It is a full fledged React WebApp Developed Using MERN technology, One Can Book Room Filter Rooms Accordng To Date etc.,',
      image: 'https://www.oyorooms.com/officialoyoblog/wp-content/uploads/2016/06/business-oyo-WEB-BANNERS.png', // Replace with your project image URL
      link:"https://github.com/CodeERAayush/YourRooms.git"

    },
    {
      title: 'Gupshup -ChatRoom',
      tech:["React Native","SocketIO"],
      native: 'React Native, Socket.Io, NodeJs',
      info: 'It is a React Native Mobile Application in which one can create room and chat seamlessly in the chat room.',
      image: 'https://res.cloudinary.com/smartsupp/image/upload/w_1200,h_680,c_fill,q_auto,f_auto/v1663316058/upload/Web_Chat_Best_Practices_for_Avoiding_Confusion_2x_rvqski.png', // Replace with your project image URL
      link:"https://play.google.com/store/apps/details?id=com.mychatroom&hl=en-IN"

    },
    {
      title: 'X clone',
      native: 'MERN',
      tech:["React Native","Express.js","Prisma","SQL"],
      info: 'A mobile application that depicts the ui and functioning of X (twitter). It has it\'s own backend in ExpressJs',
      image: 'https://img.freepik.com/premium-vector/twitter-new-logo-black-gradient-background_692249-38.jpg', // Replace with your project image URL
      link:""

    },
    {
      title: 'Aao Khareedo - Ecommerce',
      tech:["React","Firebase","Stripe"],
      native: 'React JS, Firebase, Stripe Api',
      info: 'It is a full fledge Ecommerce WebApp which allows the users to buy an item, add to card, do payment through stripe api, Admin can also post products to sell, the data is stored in firebase firestore.',
      image: '/ecom.png', // Replace with your project image URL
      link:"https://codeeraayush-ecom.netlify.app/"

    },
    {
      title: 'All My Projects',
      native: 'React Native, React Js, JS, Node Js, Java, XML',
      info: 'There are many more projects I have made, You can visit my github to find them all.',
      image: 'https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg', // Replace with your project image URL
      link:"https://github.com/CodeERAayush/"
    },
    // Add more project objects as needed
  ];
  return (
    <div className='some_container'>
      <div className='some-top-section'>
        <p id='some_heading'>My Projects</p>
        <h1 id='some_sub'>View Some of my latest projects!</h1>
        <p id='some_heading_2'>Explore my curated collection of successful projects.</p>
        <div style={{ display: 'flex', flexWrap: 'wrap',justifyContent:'center',marginTop:80 }}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      </div>
    </div>
  )
}
