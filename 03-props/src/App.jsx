import Card from "./components/Card";

const App=()=>{

  return(
    <div>
      <Card name="Hasibul" age={25}   image="https://images.unsplash.com/photo-1446776877081-d282a0f896e2"/>
      <Card name="Khairul" age={28} image="https://i.pravatar.cc/300"/>
      <Card name="Pranto" age={24} image="https://images.unsplash.com/photo-1446776877081-d282a0f896e2"/>
      <Card name="Hritik" age={56} image="https://images.unsplash.com/photo-1446776877081-d282a0f896e2"/>
      <Card name="Rahim"   age={45} image="https://images.unsplash.com/photo-1446776877081-d282a0f896e2"/>
    </div>
  )
};

export default App;