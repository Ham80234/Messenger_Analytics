import './SideBar.css'
import {Container, Nav, Row} from 'react-bootstrap'

const SideBar = ({users, title}) => {
        return (
            <div class='sidebar'>
                <Container> 
                    <Row>
                    <img src="https://img.icons8.com/color/480/000000/facebook.png"/>
                    
                    </Row>
                    <Row>
                    <h3>{title} Members</h3>
                    
                        <Nav defaultActiveKey="/home" className="flex-column" class="links">
                        {users.map(element => 
                        <Nav.Link eventKey="link-2">{element.name}</Nav.Link>
                        )
                        } 
                        </Nav>
                    </Row>
                </Container>
                
            </div>
        )
}

export default SideBar