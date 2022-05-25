import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';
import ToolRow from './ToolRow';

const ManageTools = () => {
    const { data: tools, isLoading, refetch } = useQuery("tools", () => fetch("https://sheltered-garden-62351.herokuapp.com/tools", {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }

    const handleDelete = id => {
        console.log(id);
        const proceed = window.confirm("are you sure to delete?")
        if (proceed) {
            console.log("deleting tool with ", id)
            const url = `https://sheltered-garden-62351.herokuapp.com/tools/${id}`
            fetch(url, {
                method: "DELETE"
            }).then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success("deleted successfully!");
                        refetch();
                    }
                })
        }
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
                            handleDelete={handleDelete}
                        ></ToolRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageTools;