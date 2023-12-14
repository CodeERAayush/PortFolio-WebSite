// Experience.js

import React from 'react';
import './Experience.css'; // Import your CSS for styling
import { Container, Row, Col } from 'react-bootstrap';
import Corsework from './cards/corsework';

const Experience = () => {
  return (
    <div className='experience'>
      {/* <div className='exper-top'>
      </div> */}
<div className='top-part'>\
<div className='top-left-part'>
<p className='headings'>Find Me On : </p>
</div>
<div className='top-right-part'>
<a href='https://www.linkedin.com/in/aayush-pandey-a8b65b203/' className='sub_headings'>LINKEDIN </a>
<a href='href="https://github.com/CodeERAayush"' className='sub_headings'>GITHUB </a>
<a href='https://leetcode.com/codeeraayush/' className='sub_headings'>LEETCODE </a>
<a href='https://www.hackerrank.com/profile/aayushpandey1100' className='sub_headings'>HACKERRANK </a>
<a href='https://auth.geeksforgeeks.org/user/indiancoder' className='sub_headings'>GFG </a>
</div>
</div>

<div className='header-exp'>
 <div className='header-left-part'>
      <h1 className='headings-exp'>ABOUT ME</h1>
      <div className='under_line'></div>
 </div>
 <div className='header-right-part'>
      <p className='sub_headings-exp'>Hello, My name is Aayush Pandey Currently in final year, pursuing B.tech in Information technology from Dr. Ram Manohar Lohia Avadh University, My skills includes a decent foundation in C++ and javascript, from development perpective, i have done many project in React and Node (basically MERN ) for both Mobile and Web and as these are nothing but just Javascript, So, I am well Good in JavaScript Ecosystem. For computer science fundamentals, I have a decent knowledge about Data Structure & Algorithm, Operating system, Database management system and Object Oriented Technique. I have also practiced coding by solving over 500+ problems on various coding platforms like Leetcode, GFG and Hackerrank</p>
 </div>


</div>
 <div
 className='line2'
 />
<div className='header-exp-2'>
 <div className='header-right-part'>
      <p className='sub_headings-exp-2'>Dr. Rammanohar Lohia Avadh University</p>
      <p className='sub_headings-exp-3'>Btech. Information Texhnology (2020-24)</p>
      <p className='sub_text'>Coursework:</p>
      <div style={{display:'flex',flexWrap:'wrap',backgroundColor:'aliceblue',borderRadius:10}}>
        <Corsework
        name="Data Structure"
        />
      </div>
      <div style={{display:'flex',flexWrap:'wrap',backgroundColor:'aliceblue',borderRadius:10,marginTop:5}}>
        <Corsework
        name="Operating System"
        />
      </div>
      <div style={{display:'flex',flexWrap:'wrap',backgroundColor:'aliceblue',borderRadius:10,marginTop:5}}>
        <Corsework
        name="DataBase Management System"
        />
      </div>
      <div style={{display:'flex',flexWrap:'wrap',backgroundColor:'aliceblue',borderRadius:10,marginTop:5}}>
        <Corsework
        name="Computer Network"
        />
      </div>
      <div style={{display:'flex',flexWrap:'wrap',backgroundColor:'aliceblue',borderRadius:10,marginTop:5}}>
        <Corsework
        name="Object Oriented Techniques"
        />
      </div>
 </div>
 <div className='header-left-part'>
      <h1 className='headings-exp'>EDUCATION</h1>
      <div className='under_line'></div>
 </div>

</div>




    </div>
  );
};

export default Experience;
