import SideBar from './component/SideBar';
import Count from './component/Count';
import ProfileHolder from './component/ProfileHolder'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Row, Container, Col} from 'react-bootstrap'
import * as data from './data/message_1.json'
import {Profiles} from './data/Profiles'
import FrequencyChart from './component/FrequencyChart';

 
function App() {
  let MessageCount = () => { 
    var res = {
      "Nick Gapinski": 0,
      "Andrew Hamlett": 0,
      "Mitchell Harms" : 0,
      "Braeden Haesemeyer" : 0
    }
    data.messages.forEach(item => { 
      res[item.sender_name]++
    })
    return res
  }
 

  

  return (
    <div className="App">
    
      <body> 
        <Container style={{padding: 0, margin: 0}}>
          <Row>
            <Col sm={2}>
              <SideBar title={data.title} users={data.participants} />
            </Col>
            <Col sm={10}>
              <Row>
                <Count count={data.messages.length} />
              </Row>
                <Row>
                  <ProfileHolder items={Profiles} messages={MessageCount()}/>
                </Row>
                <Row>
                  <FrequencyChart /> 
                </Row>
            </Col>
          </Row>
        </Container>
        
      </body>
    </div>
  );
}

export default App;
