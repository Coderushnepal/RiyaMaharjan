import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import config from "../../config";
import axios from "axios";
import { getProfile, getUserBooking } from "../../actions/user";

function UserProfile(props) {
  const Token = localStorage.getItem("Token");

  const { profile, bookings, isLoading } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
    dispatch(getUserBooking());
  }, []);

  return Token ? (
    <>
      <div className="user">
        <div className="title">
          <h1> User Profile</h1>
        </div>
        <p>Username: {profile?.name}</p>
        <p>Email: {profile?.email}</p>
        <p>Account Created at: {profile?.createdAt?.split("T")[0]}</p>
      </div>

      <div className="booking">
        
      </div>
    </>
  ) : (
    <></>
  );
}

export default UserProfile;
