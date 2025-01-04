import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserId } from "../Components/Slice/UserSlice.js"

  const UserDetailPage = ({ userId }) => {
  const dispatch = useDispatch();
  const { user, status, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUserId(userId));
  }, [dispatch, userId]);

  if (status === "loading") {
    return <p>Loading user details...</p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  if (!user) {
    return <p>No user details available.</p>;
  }

  return (
    <div>
      <h2>User Details</h2>
      <p>
        {" "}
        <strong> Name: </strong> {user.name}
      </p>
      <p>
        {" "}
        <strong> Email:</strong> {user.email}
      </p>
      <p>
        {" "}
        <strong>Phone: </strong> {user.phone}
      </p>
      <p>
        {" "}
        <strong>Website: </strong>
        {user.website}
      </p>
    </div>
  );
};

export default UserDetailPage;
