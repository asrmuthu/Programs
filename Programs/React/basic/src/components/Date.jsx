import React from 'react';


const CustomDate = () => {
    const date = new Date();
    return (
        <>
            <p>Copyright &copy; {date.getDate()}-{date.getMonth() + 1}-{date.getFullYear()}</p>
            <p>Today's Date: {date.toLocaleDateString()}</p>
        </>
    );
}


export default CustomDate;