import DefaultLayout from "../layouts/DefaultLayout";
import {notification as notify} from "antd"
import axios from "axios";
import { useEffect, useMemo, useState } from "react";

const Home = ()=> {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    const doS = () => {
        // setCount(count + 1)
    }
    
    

    useEffect(()=> {

        const getDataAxios =  async () => {
            try {
                setLoading(true)
                const response =  await axios.get("https://jsonplaceholder.typicode.com/posts");
                setData(response.data)
            } catch (error) {
                return console.error(error)   
            }finally{
                setLoading(false)
                console.log(data)
    
            }
        }

        getDataAxios();

        console.log(1)

        return () => {
            console.log(676)
        }
       
    }, [count])



    return (
       <DefaultLayout>
           <h1>Home page</h1>

           <button onClick={doS} className="btn btn-info" >doS</button>
           <br /><br />
        
            <button onClick={() => setCount(count + 1)} className="btn btn-success">Increment</button>
            <span> {count}</span>

            <br /><br />
            <button onClick={() => setCount2(count2 + 2)} className="btn btn-success">Increment2</button>
            <span> {count2}</span>

           {/* <main className="p-4">
                {data.map((m, index) => 
                    <div key={index} className="card card-body m-3 shadow">
                        <h1>{m.title}</h1>
                        <p>{m.body}</p>
                    </div>    
                )}
           </main> */}
       </DefaultLayout>
    );
}

export default Home;