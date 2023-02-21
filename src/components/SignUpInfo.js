import React from 'react'

function SignUpInfo({formDate, setFormDate}) {
  return (
    <div className='sign-up-container'>
      <input type="text" placeholder="Email..." value = {formDate.Email} onChange={(event)=> setFormDate({...formDate, Email:event.target.value})}/>
      <input type="text" placeholder="Password..." value = {formDate.Password} onChange={(event)=> setFormDate({...formDate, Password:event.target.value})}/>
      <input type="text" placeholder="Confirm Password..." value = {formDate.ConfirmPassword} onChange={(event)=> setFormDate({...formDate, ConfirmPassword:event.target.value})}/>
    </div>
  )
}

export default SignUpInfo
