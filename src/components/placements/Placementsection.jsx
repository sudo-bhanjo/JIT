import React from 'react';

import img1 from '../../assets/1.jpg';
import img2 from '../../assets/2.jpg';
import img3 from '../../assets/3.jpg';
import img4 from '../../assets/4.jpg';
import img5 from '../../assets/5.jpg';
import img6 from '../../assets/6.jpg';
import img7 from '../../assets/7.jpg';
import img8 from '../../assets/8.jpg';
import img9 from '../../assets/9.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const studentData = [
  { name: 'Deepak Roy', info: 'Electrical Engineering, Geekey Winding Wires.' },
  { name: 'Avrajyoti Chakraborty', info: 'Mechanical Engineering, Quality Austria Condor Power Products' },
  { name: 'apurba biswas', info: 'Civil Engineering, The Solution Pvt. Ltd.' },
  { name: 'Subham Rakshit', info: 'Civil Engineering, The Solution Pvt. Ltd.' },
  { name: 'Debasish Barman', info: 'CST, Faurecia Group' },
  { name: 'Swarupa Dey', info: 'CST,  Swadesh Software' },
  { name: 'Akash Sarkar', info: 'CST, Faurecia Group' },
  { name: 'Selium Sarkar', info: 'Electrical Engineering, Condor Power Products' },
  { name: 'Chitali Sharma', info: 'Electrical Engineering, Condor Power Products' },
  { name: 'Deepak Roy', info: 'Electrical Engineering, Geekey Winding Wires.' },
  { name: 'Avrajyoti Chakraborty', info: 'Mechanical Engineering, Quality Austria Condor Power Products' },
  { name: 'apurba biswas', info: 'Civil Engineering, The Solution Pvt. Ltd.' },
  { name: 'Subham Rakshit', info: 'Civil Engineering, The Solution Pvt. Ltd.' },
];


const Placementsection = () => {
  return (
    <section className="py-10 bg-white">
      <div className="text-center mb-3">
        <h2 className="text-3xl text-blue-500 font-bold">Our Placement Achievements</h2>
        <p className="text-gray-600 text-lg mt-0.5">The students to face Campus Recruitment opportunities successfully</p>
      </div>

      <div className="overflow-x-auto px-4 scrollbar-hide mt-8 sm:ml-0.5 sm:mr-0.5 mb-4" style={{ marginLeft: '65px', marginRight: '65px' }}>
        <div className="flex space-x-6 min-w-max snap-x snap-mandatory">
          {studentData.map((student, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg flex-shrink-0 w-[220px] p-4 text-center snap-center"
            >
              <div className="rounded-lg overflow-hidden">
                <img
                  src={images[index % images.length]}
                  alt="student"
                  className="w-full h-56 object-cover"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-blue-700 font-semibold hover:text-amber-500">{student.name}</h3>
                <p className="text-sm text-gray-700">{student.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Placementsection;
