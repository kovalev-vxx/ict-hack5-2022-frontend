import React, {useEffect, useMemo, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {ConfigProvider, theme} from "antd";
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import StudentsAbout from "./pages/students_about";
import CompanyAbout from "./pages/CompanyAbout";

interface IUser {
  username: string,
  id: number,
  email: string,
}

const { darkAlgorithm, compactAlgorithm } = theme;

function App() {
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
                  </Routes>
              </div>
          </ConfigProvider>
      </>

  );
}

export default App;
