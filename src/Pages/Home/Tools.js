import React, { useEffect, useState } from 'react';
import Tool from "./Tool";

const Tools = () => {
    const [tools, setTools] = useState([]);


    useEffect(() => {
        const url = "tools.json";
        fetch(url)
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
            {
                tools.map(tool => <Tool
                    tool={tool}
                ></Tool>)
            }
        </div>
    );
};

export default Tools;