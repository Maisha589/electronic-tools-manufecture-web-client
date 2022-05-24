import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ToolRow from './ToolRow';

const ManageTools = () => {
    const { data: tools, isLoading } = useQuery("tools", () => fetch("http://localhost:5000/tools", {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2>Manage Tools</h2>
            <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Tools Name</th>
                        <th>price</th>
                        <th>available</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tools.map((tool, index) => <ToolRow
                            key={tool._id}
                            tool={tool}
                            index={index}
                        ></ToolRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageTools;