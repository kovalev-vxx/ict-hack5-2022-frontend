import React, {useMemo} from 'react';
import {useAppSelector} from "../hooks/redux";
import BasePage from "./BasePage";
import AdminProfile from "./AdminProfile";
import StudentProfile from "./StudentProfile/StudentProfile";
import CompanyProfile from "./CompanyProfile";


const Profile = () => {
    const {user} = useAppSelector(state => state.authReducer)
    const page = useMemo(()=>{
        if(user.is_staff){
            return <AdminProfile/>
        }
        if(user.group==="S"){
            return <StudentProfile/>
        }
        if(user.group==="C"){
            return <CompanyProfile/>
        }
    }, [user])




    return (
        <BasePage>
            {page}
        </BasePage>
    );
};

export default Profile;
