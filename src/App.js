import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nb from './Component/nbar/Nb';

import Address from './Component/Profile/Address';
import FullName from './Component/Profile/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import Career from './Component/table/Career';

function App() {
  return (
    <div className="App ">
      <Nb />
      <div className="row"  style={{textAlign:'center'}}>
        <div className="col-md-10">
          <FullName />
          <Address /> 
          <Career />
        </div>
       

          <ProfilePhoto />
        </div>
        
        
      </div>
  );
}

export default App;
