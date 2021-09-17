import {Card} from 'react-bootstrap'
import './Card.css'

const ProfileCard = ({image, name, MessageCount, VideoCount, PictureCount}) => { 
    return(
        <div className="Card">
        <Card style={{ width: '15rem'}}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
                Message Count: {MessageCount}
            </Card.Text>
        </Card.Body>
        </Card>
        </div>
    )
}

export default ProfileCard