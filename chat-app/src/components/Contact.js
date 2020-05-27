https://randomuser.me/api/portraits/women/55.jpg
Deann Harper

const element = (
    <div className="Contact">
        <img src={image} className="avatar"></img>
        <div>
            <div className="name">{name}</div>
            <div className="status">
                {
                    (isLoggedIn)
                        ? <div>Online</div>
                        : <div>Offline</div>
                }
            </div>
        </div>
    </div>
);