import React from "react";
import GraduatePrograms from "../GraduatePrograms/GraduatePrograms";
import Footer from "../Footer";

const Admission = () => {
  return (
    <>
    <div className="px-6 md:px-20 py-12 min-h-screen mt-15 md:mt-30">
      <h1 style={{ color: 'black' }} className="text-4xl font-bold mb-8 border-b-4 border-blue-500 inline-block">
        Admission
      </h1>

      <h2 className="text-2xl font-semibold mb-4">Eligibility Criteria (For 1st Year Entry)</h2>
      <p className="mb-4">
        75% of Seats of the approved intake of the self-financed Polytechnics affiliated to the WBSCTE 
        shall be filled up from the JEXPO 2023 rank holders on the basis of centralized counselling.
      </p>
      <p className="mb-4">
        25% of approved intake will be the management quota seats and that will be filled up by the 
        respective Polytechnics from the candidates who have passed Secondary/Madhyamik or Equivalent 
        Examination with English, Physics, Science and Mathematics with 35% marks (without rounding up) 
        in aggregate (excluding additional subjects).
      </p>

      <h2 className="text-2xl font-semibold mb-4">Eligibility Criteria (For 2nd Year Lateral Entry)</h2>
      <p className="mb-4">
        Passed 10+2 Vocational or HS (Science) or ITI Examination and passed VOCLET Examination.
      </p>
      <p className="mb-4">
        There is no Management Quota in case of Lateral Direct Admission to the 2nd year of Diploma course 
        in self-financed Polytechnics.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Facilities</h2>
      <p className="mb-4">
        100% Ragging free and completely separate hostel facility for Boys and Girls.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Fees Structure</h2>
      <p>
        Diploma students selected for admission shall have to pay the tuition fees and other fees as 
        decided by the Government of West Bengal.
      </p>

      {/* Add the GraduatePrograms component here */}
      <GraduatePrograms />
    </div>
    {/* <Footer/> */}
    </>
  );
};

export default Admission;
