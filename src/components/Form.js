import React, { useState } from "react";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";

function Form() {
  const [page, setPage] = useState(0);
  const [formDate, setFormDate] = useState({
    Email:"",
    Password:"",
    ConfirmPassword:"",
    MobileNumber:"",
    DateOfBirth:"",
    PassWord:"",
    UserName:"",
    OldPassword:"",
    NewPassword:"",
    Mobilenumber:""

  });
  

  const FormTitles = ["Sign Up", "Personal Info", "Other"];
  const PageDisplay = () => {
    if (page===0){
        return <SignUpInfo formDate={formDate} setFormDate={setFormDate} />;
    } else if (page===1){
        return <PersonalInfo formDate={formDate} setFormDate={setFormDate} />
    } else{
        return <OtherInfo formDate={formDate} setFormDate={setFormDate} />
    }
  };

  return (
    <div className="form">
      <div className="progressbar">
        <div style={{width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%"}}></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]} </h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
                if (page === FormTitles.length - 1) {
                    alert("FORM SUBMITTED");
                    console.log(formDate);
            
            
                }else{
                    setPage((currPage) => currPage + 1);
                }
              
            }}
          >
            {page === FormTitles.length - 1 ?"Submit":"Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
