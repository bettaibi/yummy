import React from 'react'

import './Setting.scss';

const Setting: React.FC = () => {
    return (
        <main className="main w-100 p1" style={{marginTop: '50px'}}>
          <div className="container">
             <ChangePasswordSetting />
             <LanguageSetting />
             <ThemeSetting />
             <AccountSetting />
          </div>
        </main>
    )
}

const LanguageSetting: React.FC = () =>{

    return(
        <div className="mb1">
            <h4 className="fw-600 mb1">Language Setting</h4>
            <select name="lang" id="lang" className="form-select">
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="ar">Arabic</option>
            </select>
         </div>
    )
}

const ThemeSetting: React.FC = () =>{

    return(
        <div className="mb1">
            <h4 className="fw-600">Theme Setting</h4>
            <div className="d-flex flex-row">
                <span className="theme-setting light active shadow-sm"></span>
                <span className="theme-setting dark shadow-sm"></span>
            </div>
        </div>
    )
}

const ChangePasswordSetting: React.FC = () =>{

    return (
        <div className="mb1">
            <h4 className="fw-600">Change Password</h4>
            <form>
                <div className="form-group">
                    <label htmlFor="oldPassword">Old Password *</label>
                    <input type="password" id="oldPassword" name="oldPassword" className="form-control" 
                    placeholder="Old Password" />
                </div>
                <div className="form-group">
                    <label htmlFor="newPassword">New Password *</label>
                    <input type="password" id="newPassword" name="newPassword" className="form-control"
                    placeholder="New Password" />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password *</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" className="form-control"
                    placeholder="Confirm Password" />
                </div>
                <div className="text-right">
                  <button type="submit" className="btn btn-primary raised">Update</button>
                </div>
            </form>
        </div>
    )
}

const AccountSetting: React.FC = () =>{

    return (
        <div className="mb1">
            <h4 className="fw-600 mb1">Account Setting</h4>
            <div className="flex flex-row text-right">
                <button className="btn btn-secondary raised" style={{marginRight: '0.5rem'}}>Logout</button>
                <button className="btn btn-danger raised">Delete Account</button>
            </div>
        </div>
    )
}

export default Setting
