
const Card = ({name, yes}) => {

    const showName = ()=>{
        console.log(name)
    }


    return (
        <div className="card m-3"  style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button onClick={showName}>show Name</button>
            </div>
        </div>
    )
}

export default Card;