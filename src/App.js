//import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import React , {Comment} from 'react';
import axios from 'axios';
import FirstComponent from './components/learning-examples/FirstComponents'
function App() {
  return (
    <div className="App">
     
              sebas
              <FirstComponent></FirstComponent>
         <SecondComponent></SecondComponent>
         <ThridComponent></ThridComponent>
         <PersonList></PersonList>
     
    </div>
  );
}




//Class Component
class SecondComponent extends React.Component {
  render() {
    return (
      <div className="secondComponent">
         Second Component
      </div>
    );
  }
}

function ThridComponent(){
return(
<div className="Tercero"> 
 Tercer componente
 
</div>
);

}

class PersonList extends React.Component {
 
  state = {
    persons : [],
  };
componentDidMount(){
  axios.get(`http://jsonplaceholder.typicode.com/users`)   .then( res =>{
    console.log(res);
    this.setState({ persons : res.data});
  });

}

  render() {
    return (
    
     

<ul>

    {this.state.persons.map(person => <li key={person.id}> {person.name} ' user name es    ' {person.username}</li>)}
</ul>


    )
  }
}






export default App;