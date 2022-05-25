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
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 p-5'>
            {
                tools.slice(-6).reverse().map(tool => <Tool
                    tool={tool}
                    key={tool._id}
                ></Tool>)
            }
        </div>
    );
};

export default Tools;