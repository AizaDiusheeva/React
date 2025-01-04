import React, {useState} from "react";

import UserDetailPage from "./UserDetailPage";

function TodoDetails({ todo }) {
 
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleUserClick = (userId) => {
    setSelectedUserId(userId);
  };

  return (
    <div>
      <h2>Todo Details</h2>
      <p> <strong>Title: </strong>{todo.title}</p>
      <p>
        <strong> User ID:</strong>{" "}
        <button onClick={() => handleUserClick(todo.userId)}>{todo.userId}</button>
      </p>
      {selectedUserId && <UserDetailPage userId={selectedUserId} />}
    </div>
  );
}

export default TodoDetails;
