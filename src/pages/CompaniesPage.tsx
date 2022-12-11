import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {getCompanies} from "../store/actions/companiesActions";
import BasePage from "./BasePage";

const CompaniesPage = () => {
    const {companies} = useAppSelector(state => state.companiesReducer)
    const {token} = useAppSelector(state => state.authReducer)
    const dispatch = useAppDispatch()


    useEffect(()=>{
        dispatch(getCompanies(token))
    }, [])

    return (
        <BasePage>

        </BasePage>
    );
};

export default CompaniesPage;
