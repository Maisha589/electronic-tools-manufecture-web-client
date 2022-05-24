// import React from 'react';
// import { useQuery } from 'react-query';
// import Loading from '../Shared/Loading';

// const AllOrders = () => {
//     const { data: tools, isLoading } = useQuery("user", () =>
//         fetch("http://localhost:5000/booking", {
//             method: "GET",
//             headers: {
//                 "authorization": `Bearer ${localStorage.getItem("accessToken")}`
//             }
//         }).then(res => res.json())
//     )
//     if (isLoading) {
//         return <Loading></Loading>
//     }
//     return (
//         <div>
//             <h2>{tools.length}</h2>
//         </div>
//     );
// };

// export default AllOrders;