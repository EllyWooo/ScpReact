import data from './data.json';
import Scp from './Scp';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Nav from './Nav';

function App()
{
    return(
        <Router>
      <Nav data={data} />

      <Routes>
        <Route path={"HOME"} element={<Home /> } />
        {
          data.map(
            scp => (
              <Route key ={scp.Item}
                path={`${scp.Item}`}
                element={<Scp scp ={scp} />}
              />
            )
          )
        }
      </Routes>
   </Router>
    );
}
export default App;

function Home(){

    return(
      <div class="container component">
      <h1>Welcome to Scp website</h1>
      <img width = "60%" height= "50%" src="images/logo.jpg" alt=""/>
      <h2>Secure. Contain. Protext.</h2>
      </div>
    )
  
  }