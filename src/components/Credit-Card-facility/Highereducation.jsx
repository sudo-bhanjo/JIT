import React from 'react'
import img1 from '../../assets/10.jpg';
import img2 from '../../assets/11.jpg';
const images = [img1,img2];
const std_data = [
    {name: 'Arnab Home',info : 'Mechanical Engineering'},
    {name: 'Papai',info : 'Electrical Engineering'},
    {name: 'Papai',info : 'Electrical Engineering'},
    {name: 'Arnab Home',info : 'Mechanical Engineering'},
    {name: 'Papai',info : 'Electrical Engineering'},
    {name: 'Arnab Home',info : 'Mechanical Engineering'},
    {name: 'Papai',info : 'Electrical Engineering'},
    {name: 'Arnab Home',info : 'Mechanical Engineering'},
    {name: 'Papai',info : 'Electrical Engineering'},
    {name: 'Arnab Home',info : 'Mechanical Engineering'},
    {name: 'Papai',info : 'Electrical Engineering'},
    {name: 'Arnab Home',info : 'Mechanical Engineering'},
    {name: 'Papai',info : 'Electrical Engineering'}
]
const Highereducation = () => {
  return (
    <section className="py-10 bg-white mt-3 mb-5">
      <div className="text-center mb-3">
        <h2 className="text-3xl text-orange-500 font-bold">
        Student who got Student Credit Card Facility
          </h2>
        <p className="text-gray-600 text-lg mt-0.5 text-center">
        The Higher Education department, Government of West Bengal has
         introduced the Student Credit Card Scheme for the students of West Bengal to enable
          them to pursue education without having any financial constraints. Under this scheme many
           of our students got the chance to chase their dreams successfully.
        </p>
      </div>
      
      <div className="overflow-x-auto px-4 scrollbar-hide mt-8 sm:ml-0.5 sm:mr-0.5 mb-4" style={{ marginLeft: '65px', marginRight: '65px' }}>
        <div className="flex space-x-6 min-w-max snap-x snap-mandatory">
          {std_data.map((student, index) => (
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
  )
}

export default Highereducation
