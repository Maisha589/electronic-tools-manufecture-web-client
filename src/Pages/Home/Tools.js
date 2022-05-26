import React, { useEffect, useState } from 'react';
import Tool from "./Tool";

const Tools = () => {
    const [tools, setTools] = useState([]);


    useEffect(() => {
        const url = "https://sheltered-garden-62351.herokuapp.com/tools";
        fetch(url, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])

    return (
        <div >
            <h2 className='text-5xl font-bold text-primary text-center mt-5 mb-5 '>Our Manufactured Tools</h2>
            <div style={{ backgroundImage: "url(https://i.ibb.co/XxzVtYf/SL-041621-42260-26.jpg)", backgroundSize: "cover" }} className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 p-5'>
                {
                    tools.slice(-6).reverse().map(tool => <Tool
                        tool={tool}
                        key={tool._id}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;