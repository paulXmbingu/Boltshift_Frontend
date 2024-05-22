import ProfilePhoto from "../assets/Images/Photos/Paul Mbingu - Avatar.png"

//STYLING
const avatarStyle = {
    width: 'var(--Base-4-Premitives-6, 24px)',
    height: 'var(--Base-4-Premitives-6, 24px)',
    flexShrink: 0,
    borderRadius: 'var(--Corner-Radius-12, 48px)',
    background: 'url(<path-to-image>) lightgray 50% / cover no-repeat',
    cursor: 'pointer',
};

//FUNCTIONALITY
function UserAvatar() {
    return(
        <div>
            <img src={ProfilePhoto} alt="User Avatar Photo" style={avatarStyle} />
        </div>
    );
};

export default UserAvatar
