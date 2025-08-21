// src/data/labsData.js
// NOTE: update the image import paths to match where you place the images.
// If your files are under src/pages/Civil/img_asset/..., the paths below should work.

// Civil images
import surveyingLab from "../img_asset/Civilimg.jpg";
import materialTestingLab from "../img_asset/CE (5).jpg";
import environmentalLab from "../img_asset/CE (6).jpg";
import cadLab from "../img_asset/cse2.jpeg";

// Mechanical images
import thermoLab from "../img_asset/thermo.jpg";
import fluidLab from "../img_asset/fluid.jpg";
import mechatronicsLab from "../img_asset/mechatronics.jpg";

// CSE images
import algoLab from "../img_asset/algo.jpg";
import networkingLab from "../img_asset/networking.jpg";

// EEE images
import circuitsLab from "../img_asset/circuits.jpg";
import powerLab from "../img_asset/power.jpg";


export const civilLabs = [
  {
    name: "Surveying Lab",
    slug: "surveying-lab",
    image: surveyingLab,
    description: "Practical surveying techniques with total stations, theodolites and levels.",
    link: "/labs/civil/surveying-lab",
    activities: [
      "Theodolite angle measurement",
      "Compass and chain surveying",
      "Leveling and contour mapping",
      "GPS-based positioning projects",
    ],
  },
  {
    name: "Material Testing Lab",
    slug: "material-testing-lab",
    image: materialTestingLab,
    description: "Test compressive strength, tensile strength and concrete mix design.",
    link: "/labs/civil/material-testing-lab",
    activities: [
      "Compression test of concrete cubes",
      "Tensile test of steel specimens",
      "Aggregate sieve analysis",
      "Concrete mix trials & slump test",
    ],
  },
  {
    name: "Environmental Lab",
    slug: "environmental-lab",
    image: environmentalLab,
    description: "Water & air quality testing and environmental sample analysis.",
    link: "/labs/civil/environmental-lab",
    activities: [
      "BOD/COD testing",
      "pH and turbidity measurements",
      "Sewage treatment lab demos",
    ],
  },
  {
    name: "CAD Lab",
    slug: "cad-lab",
    image: cadLab,
    description: "AutoCAD and structural drafting for design workflows.",
    link: "/labs/civil/cad-lab",
    activities: [
      "2D drafting exercises",
      "3D modeling in AutoCAD",
      "Steel detailing & drawing practice",
    ],
  },
];

export const mechLabs = [
  {
    name: "Thermal Engineering Lab",
    slug: "thermal-engineering-lab",
    image: thermoLab,
    description: "Heat transfer labs, boilers, and internal combustion experiments.",
    link: "/labs/mechanical/thermal-engineering-lab",
    activities: [
      "Heat exchanger experiments",
      "Boiler performance tests",
      "IC engine performance experiments",
    ],
  },
  {
    name: "Fluid Mechanics Lab",
    slug: "fluid-mechanics-lab",
    image: fluidLab,
    description: "Analyze flows, pumps and hydraulic systems.",
    link: "/labs/mechanical/fluid-mechanics-lab",
    activities: [
      "Flow measurement using Venturi/Meter",
      "Pump characteristic curves",
      "Open channel flow tests",
    ],
  },
  {
    name: "Mechatronics Lab",
    slug: "mechatronics-lab",
    image: mechatronicsLab,
    description: "Sensors, actuators, microcontrollers and automation projects.",
    link: "/labs/mechanical/mechatronics-lab",
    activities: [
      "Microcontroller based projects (Arduino/RPi)",
      "Sensor interfacing & PID control",
      "Robotics mini-projects",
    ],
  },
];

export const cseLabs = [
  {
    name: "Algorithms & Data Structures Lab",
    slug: "algo-lab",
    image: algoLab,
    description: "Hands-on algorithm implementation and performance profiling.",
    link: "/labs/cse/algo-lab",
    activities: [
      "Implement sorting/search algorithms",
      "Complexity analysis & profiling",
      "Competitive programming practice",
    ],
  },
  {
    name: "Computer Networks Lab",
    slug: "networking-lab",
    image: networkingLab,
    description: "Configure network topologies, packet capture & routing labs.",
    link: "/labs/cse/networking-lab",
    activities: [
      "Wireshark packet analysis",
      "Router & switch configuration (mininet/GNS3)",
      "Socket programming exercises",
    ],
  },
];

export const eeeLabs = [
  {
    name: "Circuits & Electronics Lab",
    slug: "circuits-lab",
    image: circuitsLab,
    description: "Analog/digital circuits with oscilloscopes and function generators.",
    link: "/labs/eee/circuits-lab",
    activities: [
      "Op-amp circuits experiments",
      "Digital logic & FPGA demos",
      "PCB prototyping",
    ],
  },
  {
    name: "Power Systems Lab",
    slug: "power-systems-lab",
    image: powerLab,
    description: "Power generation, distribution and protection systems study.",
    link: "/labs/eee/power-systems-lab",
    activities: [
      "Transformer testing",
      "Power factor correction experiments",
      "Protection relay demos",
    ],
  },
];

// map for lookup in LabDetail
export const allLabs = {
  civil: civilLabs,
  mechanical: mechLabs,
  cse: cseLabs,
  eee: eeeLabs,
};
