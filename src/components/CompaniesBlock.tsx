import React, {FC} from 'react';
import {ICompany} from "../models/ICompany";
import CompanyCard from "./CompanyCard";

interface CompaniesBlockProps {
    companies: ICompany[]
}

const CompaniesBlock:FC<CompaniesBlockProps> = ({companies}) => {
    return (
        <div className="flex flex-wrap gap-10 justify-center items-center">
            {companies.map(e=>{
                return <CompanyCard company={e}/>
            })}
        </div>
    );
};

export default CompaniesBlock;
