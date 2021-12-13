import React from 'react';
import LogoutButton from "./logout-button";

export default function LogoutPage() {
  return (
    <div className="text-center" style={{paddingTop: "60%"}}>
      <h1 className="mb-4">Thank you for using ABS</h1>
      <LogoutButton />
    </div>
  )
}
