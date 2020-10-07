import React from "react";
import "./App.css";
import Fullname from "./Profile/Profile component/Fullname";
import Ahmed from "./Assets/ahmed.jpg";
function App() {
  let profile = {
    name: "Ahmed Elloumi",
    bio: "27 year old ",
    profession: "Ingénieur en génie Mécanique ",
  };

  const handelChange = (name) => {
    alert(name);
  };

  return (
    <div className="App">
      <Fullname
        name={profile.name}
        bio={profile.bio}
        profession={profile.profession}
        handelChanggit
        inite={handelChange}
      >
        <img src={Ahmed} alt="Ahmed" style={{ width: "200px" }} />
      </Fullname>

      <br></br>
    </div>
  );
}

export default App;
