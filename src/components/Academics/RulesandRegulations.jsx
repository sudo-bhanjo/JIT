import React from "react";
import GraduatePrograms from "../GraduatePrograms/GraduatePrograms.jsx";
// import Footer from "../Footer";
import Footer from "../Footer.jsx";

const Rules = () => {
  return (
    <>
    <div className="px-6 md:px-20 py-12 min-h-screen ">
      <h1 style={{ color: 'black' }} className="text-4xl font-bold mb-8 border-b-4 border-blue-500 inline-block">
      Rules & Regulation
      </h1>
       <li className="mb-4">Code of Conduct: All students are expected to adhere to a code of conduct that promotes respect, integrity, and responsibility in all interactions within the college premises. </li> 
       <li className="mb-4" > Attendance Policy: Regular attendance in classes and academic activities is mandatory for all students. Absences must be justified as per the college's attendance policy. </li> 
       <li className="mb-4">Academic Integrity:Plagiarism, cheating, and other forms of academic dishonesty are strictly prohibited. Students must uphold academic integrity in all coursework, examinations, and research projects. </li> 
       <li className="mb-4">Use of Facilities:Students are responsible for the proper use and care of college facilities, equipment, and resources. Any damage or misuse may result in disciplinary action and/or fines. </li> 
       <li className="mb-4"> Anti-discrimination Policy:The college is committed to providing a safe and inclusive environment free from discrimination, harassment, or any form of bias based on race, gender, religion, or other protected characteristics. </li> 
       <li className="mb-4"> Health and Safety:Students must comply with health and safety regulations to ensure the well-being of themselves and others within the college premises. This includes following fire safety protocols, maintaining cleanliness, and adhering to COVID-19 guidelines. </li> 
       <li className="mb-4">Noise and Disturbance:Students should maintain an environment conducive to learning and respect the need for quiet and concentration in academic areas. Excessive noise and disturbances will not be tolerated.</li> 
       <li className="mb-4">Use of Electronic Devices: The use of electronic devices such as mobile phones, tablets, and laptops should be limited to designated areas and times to minimize disruptions during classes and academic activities.</li> 
       <li className="mb-4">Parking Regulations:Students must adhere to parking regulations and guidelines when using college parking facilities. Unauthorized parking or violations may result in fines or towing of vehicles.</li> 
       <li className="mb-4">Alcohol and Substance Abuse:Consumption of alcohol, illegal drugs, or any other controlled substances on college premises is strictly prohibited. Violators will face disciplinary action and may be subject to legal consequences.</li> 
       <li className="mb-4">Dress Code:Students are expected to dress appropriately and professionally, adhering to any specific dress code policies outlined by the college for certain events or activities.</li> 
       <li className="mb-4">Social Media Usage:Students should exercise caution and discretion when using social media, refraining from posting inappropriate or offensive content that may reflect negatively on themselves or the college.</li> 
       <li className="mb-4">Guest Policy:Any guests or visitors must be accompanied by a student or faculty member and adhere to college rules and regulations during their visit.</li> 
       <li className="mb-4">Prohibited Items:Weapons, explosives, and any other items deemed dangerous or prohibited by law are strictly forbidden on college premises.</li> 
       <li className="mb-4">Emergency Procedures:Students must familiarize themselves with emergency procedures and evacuation protocols in the event of fire, natural disasters, or other emergencies.</li> 

       <h1 style={{ color: 'black' }} className="text-4xl font-bold mb-8 border-b-4 border-blue-500 inline-block">
      Library Rules and Regulations
      </h1>
       <li className="mb-4">To become a library member, students must complete the prescribed application form and submit it along with two recent passport-size photographs, along with the required library fees/deposits. </li> 
       <li className="mb-4" > Faculty members may enrol as library members upon presenting a copy of their appointment orders and two recent passport-size photographs. </li> 
       <li className="mb-4">All users must carry their identity cards when entering the library premises. </li> 
       <li className="mb-4">Undergraduate student members are entitled to borrow up to two books from the main library, excluding those from the book bank. </li> 
       <li className="mb-4"> All students must renew their borrower's tickets at the beginning of each odd semester. </li> 
       <li className="mb-4">Members can borrow books for a maximum period of seven days only. Late returns will incur a stipulated fine.</li> 
       <li className="mb-4">Members with prolonged overdue books risk losing their library membership privileges.</li> 
       <li className="mb-4">Borrowed books must not be brought back into the library without being discharged at the Circulation Counter.</li> 
       <li className="mb-4">Borrowers must ensure that books are in good condition before leaving the Circulation Counter and will be held responsible for any damage or mutilation thereafter.</li> 
       <li className="mb-4">If a borrowed book is part of a set or series and is damaged or lost, the borrower must replace the entire set.</li> 
       <li className="mb-4">Failure to replace lost books will result in the borrower being charged twice the cost of the book.</li> 
       <li className="mb-4">Reference books, periodicals, dictionaries, encyclopaedias, and other designated materials are categorized as reference items and are not available for loan.</li> 
       <li className="mb-4">In the event of a lost borrower's ticket, the member must report it to the librarian in writing. Duplicate tickets will be issued after a 30-day waiting period and payment of the prescribed fee. The member is responsible for any misuse of the lost borrower's card.</li> 

      {/* Add the GraduatePrograms component here */}
      <GraduatePrograms />
    </div>
    </>
  );
};

export default Rules;
