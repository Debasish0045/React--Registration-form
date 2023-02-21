import React from 'react'

function OtherInfo({formDate, setFormDate}) {
  return (
    <div className='other-info-container'>
      <input type="text" placeholder="UserName..." value = {formDate.UserName} onChange={(event)=> setFormDate({...formDate, UserName:event.target.value})}/>
      <input type="text" placeholder="Old Password..." value = {formDate.OldPassword} onChange={(event)=> setFormDate({...formDate, OldPassword:event.target.value})}/>
      <input type="text" placeholder="New Password..." value = {formDate.NewPassword} onChange={(event)=> setFormDate({...formDate, NewPassword:event.target.value})}/>
      <input type="text" placeholder="Mobile Number..." value = {formDate.Mobilenumber} onChange={(event)=> setFormDate({...formDate, Mobilenumber:event.target.value})}/>
    </div>
  )
}

export default OtherInfo


