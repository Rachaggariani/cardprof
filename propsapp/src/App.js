import "./App.css";
import Profile from "./Profil/Profile";

function App() {
  const handleName = (props) => {
alert(props.children);
console.log(handleName);
};
  return (<div className="App">
    <div style={{paddingLeft:'200px',
    paddingLeft:'20px',
    paddingTop: '130px',
    display: 'flex',
textAlign: 'center',
boxShadow:'2px 1px 6px 6px #E3ACBB',
border:'2px solid gray',
borderWidth:'5px',
width:'550px'}}>
     <div>
<Profile>
<img style={{boxShadow:'2px 1px 6px 6px #E3ACBB',
border:'2px solid gray',borderWidth:'4px'}} 
src="/im1.jpg" alt="Imageprofile" width={350}/></Profile>
<div style={{color:'Darkblue'}}>
  <Profile fullname="Hela" 
      bio="j'ai obtenir mon diplome de bac puis j'ai etudier 3ans au xxx "
      profession="professeur"/>
    </div>
    </div>
    </div>
    </div>
  );}
export default App;
