const name = 'Alexandre';
const isLoggedIn = true;
const image = "https://avatars1.githubusercontent.com/u/47487590?s=460&u=6425b74b23778dcf23383383f1b38840de263285&v=4";

const element = (
    <div className="Contact">
        <img src={image} className="avatar"></img>
        <div>
            <div className="name">{name}</div>
            <div className="status-text">
                {
                    (isLoggedIn)
                        ? <div className="status-online">Online</div>
                        : <div className="status-offline">Offline</div>
                }
            </div>
        </div>
    </div>
);