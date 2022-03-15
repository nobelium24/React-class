import { useEffect, useState } from "react"

const Card = () => {
    const [data, setData] = useState(
        [
            {name: "Samuel", country: "Nigeria"},
            {name: "Henshaw", country: "Ghana"},
        ]
    );
    
    const addName = ()=>{
        let n = prompt("enter a name")
        let c = prompt("enter a Country")
        let obj = {name: n, country: c}
        setData([...data, obj])
    }

    const removeData = ()=> {
        data.splice(2, 2)
        setData([...data])
    }


    return (
       <main>

        <button className="btn btn-primary" onClick={addName}>Add name</button>
        <button className="btn btn-danger" onClick={removeData}>remove from data</button>

        <h1>List of Names</h1>
        {
            data.map((item, index) => 
               <div className="card m-3">
                   <span>{index}</span>
                    <p>{item.name}</p>    
                    <p>{item.country}</p>    
               </div>
            )
        }
       </main>
    )
}

export default Card;

