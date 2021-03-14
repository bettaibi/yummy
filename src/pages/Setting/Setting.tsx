import React, {useContext, useState} from 'react'
import GoogleLogoutButton from '../../components/GoogleLogoutButton';
import { Snackbar, useSnackbar } from '../../components/Snackbar';
import { deleteUserAccount } from '../../services/UserService';
import { Context } from '../../store/Context';

import i18next from 'i18next';

import './Setting.scss';

const key = localStorage.getItem('token');

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
    let [lang, setLang] = useState<string>(localStorage.getItem('lang') || 'en');

    const updateLang = (e: any) =>{
        try{
            e.preventDefault();
            lang = e.target.value;
            localStorage.setItem('lang', e.target.value);
            i18next.changeLanguage(e.target.value);

            setLang(e.target.value);
        }
        catch(err){throw err;}
    };

    return(
        <div className="mb1">
            <h4 className="fw-600 mb1">Language Setting</h4>
            <select name="lang" id="lang" className="form-select" onChange={updateLang} value={lang}>
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="ar">Arabic</option>
            </select>
         </div>
    )
}

const ThemeSetting: React.FC = () => {
    const [theme, setTheme] = useState<string>(localStorage.getItem('theme') || 'light');
    
    const changeTheme = (mode: string) =>{
        localStorage.setItem('theme', mode);
        document.body.className = mode;
        setTheme(mode);
    };

    return(
        <div className="mb1">
            <h4 className="fw-600">Theme Setting</h4>
            <div className="d-flex flex-row">
                <span className={`theme-setting light shadow-sm ${theme=='light'?'active': ''}`} onClick={()=>changeTheme('light')}></span>
                <span className={`theme-setting dark shadow-sm ${theme=='dark'?'active': ''}`} onClick={()=>changeTheme('dark')}></span>
            </div>
        </div>
    )
}

const ChangePasswordSetting: React.FC = () => {

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

const AccountSetting: React.FC = () => {
    const { state } = useContext(Context);
    const credential = state.currentUser.credential;
    const { snackbarRef, showMsg } = useSnackbar();

    const logout = ()=> {
        try{
            localStorage.clear();
            window.location.reload();
        }
        catch(err){
            throw err;
        }
    };

    const deleteAccount = () => {
        try{
            deleteUserAccount(key || '').then((res)=>{
                if(res?.success){
                    showMsg(res.message);
                    logout();
                }
            });
        }
        catch(err){
            throw err;
        }
    }

    return (
        <div className="mb1">
            <h4 className="fw-600 mb1">Account Setting</h4>
            <div className="flex flex-row text-right">
               {credential !="Google" && <button className="btn btn-secondary raised" onClick={logout}>
                    Logout
                </button>}
                { credential =="Google" && <GoogleLogoutButton /> }
                <button className="btn btn-danger raised" style={{marginLeft: '0.5rem'}} onClick={deleteAccount}>Delete Account</button>
            </div>
            <Snackbar ref={snackbarRef} />
        </div>
    )
}

export default Setting
