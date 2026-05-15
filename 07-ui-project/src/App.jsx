import Section1 from "./components/section1/section1";
import hasibul from "./assets/Hasibul.jpeg";

const App=()=>{

const Obj = [
  {
    id: 1,
    img: "hasibul",
    status: "Live",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1519764622345-23439dd774f7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: "Satisfied",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    status: "Underserved",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    status: "Underbanked",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    status: "Live",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    status: "Satisfied",
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    status: "Underserved",
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    status: "Underbanked",
  },
];


return <Section1 data={Obj} />

}


export default App;