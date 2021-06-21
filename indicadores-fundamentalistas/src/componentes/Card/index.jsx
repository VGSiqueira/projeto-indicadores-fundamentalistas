
const Card = ({info}) => {
    
    if (!info || info.length === 0 ){
        return null;
    }
    
    return (
        
        <div className="Card">

            <div className="ticker">
                <strong>{info[0].title}</strong>
            </div>

        </div>

    );
}

export default Card;
