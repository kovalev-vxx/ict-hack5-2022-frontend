import React, {useLayoutEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getStudent} from "../../store/actions/studentActions";
import {getCompany} from "../../store/actions/companyActions";
import StudentInfoForm from "../StudentProfile/StudentInfoForm";
import {Descriptions} from "antd";
import CompanyInfoForm from "./CompanyInfoForm";

const CompanyProfile = () => {
    const dispatch = useAppDispatch()
    const {company} = useAppSelector(state => state.companyReducer)
    const {user, token} = useAppSelector(state=>state.authReducer)

    useLayoutEffect(()=>{
        dispatch(getCompany(token, user))
    }, [])


    return (
        <>
            <h1>Профиль компании</h1>
            {!company?.name_company && <h1>Вы еще не внесли информацию о компании:</h1>}
            {!company?.name_company && <CompanyInfoForm/>}

            {company && <>
                <Descriptions>
                    <Descriptions.Item label="Название">{company.name_company}</Descriptions.Item>
                    {/*<Descriptions.Item label="Фамилия">{student.last_name}</Descriptions.Item>*/}
                    {/*<Descriptions.Item label="Отчество">{student.family_name}</Descriptions.Item>*/}
                    {/*<Descriptions.Item label="Город">{student.city_of_living}</Descriptions.Item>*/}
                    {/*<Descriptions.Item label="Дата рождения">{student.birthday}</Descriptions.Item>*/}
                    {/*<Descriptions.Item label="Телефон">{student.user.phone}</Descriptions.Item>*/}
                </Descriptions>
            </>}

        </>
    );
};

export default CompanyProfile;
