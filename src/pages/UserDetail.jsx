import React from 'react'
import { useParams } from 'react-router';

const UserDetail = () => {
    const {
        userId // Назва з масива об'єктів children у /src/router/router.js
    } = useParams();
    console.log(Number(userId), typeof userId);
    
    
  return (
    <div>
      <p>User Id is {userId}</p>
    </div>
  )
}

export default UserDetail;
