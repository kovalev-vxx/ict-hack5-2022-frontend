import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {getCompanies} from "../store/actions/companiesActions";
import BasePage from "./BasePage";
import CompaniesBlock from "../components/CompaniesBlock";

const CompaniesPage = () => {
    const {companies} = useAppSelector(state => state.companiesReducer)
    const {token} = useAppSelector(state => state.authReducer)
    const dispatch = useAppDispatch()


    useEffect(()=>{
        dispatch(getCompanies(token))
    }, [])

    return (
        <BasePage>
            <h1>Компании на платформе</h1>
            <CompaniesBlock companies={companies}/>
        </BasePage>
    );
};

export default CompaniesPage;
