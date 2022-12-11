import React, {useEffect, useLayoutEffect, useMemo, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {ConfigProvider, theme} from "antd";
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import StudentsAbout from "./pages/students_about";
import CompanyAbout from "./pages/CompanyAbout";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {initLogin} from "./store/actions/authActions";
import StudentsPage from "./pages/StudentsPage";
import Profile from "./pages/Profile";
import CompaniesPage from "./pages/CompaniesPage";
import Student from "./pages/Student";

const { darkAlgorithm, compactAlgorithm } = theme;

function App() {
    const dispatch = useAppDispatch()
    const {user, token} = useAppSelector(state=>state.authReducer)


    useLayoutEffect(()=>{
        if(!user.username){
            dispatch(initLogin(token))
        }
    }, [])


  return (
      <>
          <ConfigProvider
              theme={{
                  token:{
                      colorPrimary:"#7B45EC",
                      colorText:"#FFFFFF",
                      colorBgContainer:"#000000",
                      fontFamily:"ALSVariable",
                  },
                  components: {
                      Radio: {
                          colorPrimary: '#00b96b',
                      },
                      Button: {
                          colorBorder: '#221183',
                          colorBgContainer:"f5f5f5",
                      },
                      Layout:{
                          colorBgHeader:"#000000",
                      }
                  },
                  algorithm: [darkAlgorithm],
              }}
          >
              <div className="App">
                  <Routes>
                      <Route path="/" element={<MainPage/>}/>
                      <Route path="/for_student" element={<StudentsAbout/>}/>
                      <Route path="/for_company" element={<CompanyAbout/>}/>
                      <Route path="/students" element={<StudentsPage/>}/>
                      <Route path="/companies" element={<CompaniesPage/>}/>
                      <Route path="/students/:id" element={<Student/>}/>
                      <Route path="/profile/" element={<Profile/>}/>
                  </Routes>
              </div>
          </ConfigProvider>
      </>

  );
}

export default App;
