import React from 'react';

const Card = ({ project, onClick }) => {
  return (
    <div
      className="project-card cursor-pointer relative"
      onClick={() => onClick(project)}
      style={{
        overflow: 'hidden',
        transition: 'transform 0.3s ease',
      }}
    >
      <div className="h-[200px] border-2 border-gray-700   rounded-2xl">
        {project.image && <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-2xl" />}
      </div>
      <div className="mt-5 ml-5 gap-5 flex justify-start  items-center w-full">
        {project.tags.map((tag, index) => (
          <span key={index} className='px-3 py-1  border-2  border-gray-700  text-white rounded-full text-xs'>
            {tag.name}
          </span>
        ))}
      </div>
      <h1 className='m-4 uppercase font-rubik flex justify-start items-center font-semibold text-indigo-600 dark:text-white'>
        {project.title}
      </h1>
    </div>
  );
};

export default Card;
