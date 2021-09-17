import ProfileCard from "../ProfileCard"
import './ProfileHolder.css'

const ProfileHolder = ({items, messages}) => {
    return (
        <div className="ProfileHolder">
            {items.map(item => (
                <ProfileCard name={item.name} image = {item.picture} MessageCount={messages[item.name]}/> 
            ))}
        </div>
    )
}
export default ProfileHolder