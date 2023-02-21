import React from 'react'

function PersonalInfo({formDate, setFormDate}) {
  return (
    <div className='personal-info-container'>
      <input type="text" placeholder="Mobile Number..." value = {formDate.MobileNumber} onChange={(event)=> setFormDate({...formDate, MobileNumber:event.target.value})}/>
      <input type="text" placeholder="Date Of Birth..." value = {formDate.DateOfBirth} onChange={(event)=> setFormDate({...formDate, DateOfBirth:event.target.value})}/>
      <input type="text" placeholder="Password..." value = {formDate.PassWord} onChange={(event)=> setFormDate({...formDate, PassWord:event.target.value})}/>
    </div>
    
    )
}

export default PersonalInfo
