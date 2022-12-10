import React from 'react';
import project1 from '../../../assets/images/projects/1.png';
import project2 from '../../../assets/images/projects/2.png';
import project3 from '../../../assets/images/projects/3.png';
import project4 from '../../../assets/images/projects/4.png';
import project5 from '../../../assets/images/projects/5.png';
import project6 from '../../../assets/images/projects/6.png';
import project7 from '../../../assets/images/projects/7.png';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Projects = () => {
  return (
    <div>
      <SectionTitle title="projects" />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        <div className='border'><img src={project1} alt="" /></div>
        <div><img src={project2} alt="" /></div>
        <div><img src={project3} alt="" /></div>
        <div><img src={project4} alt="" /></div>
        <div><img src={project5} alt="" /></div>
        <div><img src={project6} alt="" /></div>
        <div><img src={project7} alt="" /></div>
      </div>
    </div>
  );
};

export default Projects;