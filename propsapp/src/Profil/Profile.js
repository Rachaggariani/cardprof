import React from 'react';
function Profile(props,{fullname,bio,profession}) {
    const{children}=props;
  return (
    <div>
    <div>
   {children}
    </div>
    <div>
      <h1>{props.fullname}</h1>
      <h1>{props.bio}</h1>
      <h1>{props.profession}</h1>
    </div>
    </div>
  )}
  console.log(Profile);
export default Profile