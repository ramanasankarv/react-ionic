import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

import { IonApp, IonRouterOutlet, IonLoading, IonButton, IonToggle } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import moment from 'moment'

import { getSourceData } from "./Api"
import { source_columns } from './TableData';

import "./App.css";

function App() {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    getSourceData().then((res) => {
      console.log(res);
      setRows(res);
    })
  }, [setRows]);
  
  const list=['Category','Flag','Priority','User Name','User Email'];
  return (
    <IonApp>
      <ion-header class="ion-padding-vertical">
        <ion-toolbar>
          <ion-title><svg xmlns="http://www.w3.org/2000/svg" width="118" height="38" viewBox="0 0 118 38" fill="none">
            <path d="M0.679975 35.0072C1.35449 34.8652 1.86925 34.7055 2.22426 34.528C2.61477 34.3505 3.02303 34.0665 3.44904 33.6759V7.47628C3.44904 6.16274 3.20054 5.27522 2.70353 4.81371C2.24201 4.3167 1.38999 4.03269 0.147461 3.96169L0.307215 1.88488C0.839729 1.77838 1.79825 1.61863 3.18279 1.40562C6.98138 0.766607 9.27119 0.322846 10.0522 0.0743408L11.0107 0.606854V14.399C11.9338 13.3694 13.052 12.5529 14.3656 11.9494C15.6791 11.3459 17.0814 11.0441 18.5724 11.0441C20.9865 11.0441 22.9213 11.7719 24.3768 13.2274C25.8324 14.683 26.5601 16.6888 26.5601 19.2448V33.7292C26.8796 34.0132 27.3412 34.2972 27.9447 34.5812C28.5482 34.8297 29.2049 35.025 29.915 35.167L29.7552 37.2438H16.2294L16.3891 35.167C17.4542 34.954 18.3239 34.4747 18.9984 33.7292V19.7241C18.9984 17.9845 18.7144 16.7065 18.1464 15.89C17.6139 15.038 16.7974 14.612 15.6969 14.612C14.8093 14.612 13.9396 14.8782 13.0875 15.4107C12.2355 15.9077 11.5433 16.6 11.0107 17.4875V33.6759C11.7208 34.315 12.7858 34.7942 14.2058 35.1137L13.9928 37.1905H0.466969L0.679975 35.0072Z" fill="black"/>
            <path d="M42.89 37.6165C40.4759 37.6165 38.5411 36.8888 37.0856 35.4332C35.6301 33.9777 34.9023 31.9719 34.9023 29.4158V18.3928C34.9023 17.1148 34.6538 16.245 34.1568 15.7835C33.6953 15.2865 32.8432 15.0025 31.6007 14.9315L31.7605 12.8547C32.293 12.7482 33.2515 12.5884 34.636 12.3754C38.4346 11.7364 40.7244 11.2926 41.5055 11.0441L42.4107 11.5234V28.9366C42.4107 32.3447 43.5113 34.0487 45.7123 34.0487C46.6353 34.0487 47.5229 33.7824 48.3749 33.2499C49.2624 32.7174 49.9724 32.0074 50.5049 31.1199V18.3928C50.5049 17.1148 50.2564 16.245 49.7594 15.7835C49.2624 15.2865 48.3926 15.0025 47.1501 14.9315L47.3099 12.8547C47.8424 12.7482 48.8009 12.5884 50.1854 12.3754C53.984 11.7364 56.2738 11.2926 57.0549 11.0441L58.0134 11.5234V33.9422C58.3329 34.2262 58.8476 34.5102 59.5577 34.7942C60.2677 35.0427 60.9777 35.238 61.6877 35.38L61.528 37.2438H51.357L50.8244 33.8357C49.8659 35.0072 48.6944 35.9303 47.3099 36.6048C45.9608 37.2793 44.4875 37.6165 42.89 37.6165Z" fill="black"/>
            <path d="M74.1685 37.6698C72.784 37.6698 71.1154 37.3858 69.1629 36.8178C67.2458 36.2143 65.7725 35.5575 64.743 34.8475V28.9898L70.2279 28.1911C70.2634 29.3626 70.3877 30.6051 70.6007 31.9187C70.8492 33.1967 71.0977 34.0665 71.3462 34.528C72.3402 34.8475 73.3165 35.0072 74.275 35.0072C75.34 35.0072 76.2276 34.67 76.9376 33.9955C77.6476 33.3209 78.0026 32.4689 78.0026 31.4394C78.0026 30.3744 77.5766 29.4513 76.7246 28.6703C75.8726 27.8893 74.4525 27.1615 72.4645 26.487C69.8374 25.5995 67.9026 24.499 66.6601 23.1854C65.4175 21.8364 64.7963 20.1501 64.7963 18.1265C64.7963 15.89 65.7015 14.1504 67.5121 12.9079C69.3581 11.6299 71.9142 10.9909 75.1803 10.9909C76.9198 10.9909 78.5351 11.2216 80.0262 11.6831C81.5172 12.1091 82.6887 12.7127 83.5407 13.4937C84.4283 14.2392 84.872 15.0735 84.872 15.9965C84.872 17.239 84.517 18.233 83.807 18.9786C83.1325 19.7241 82.2272 20.0968 81.0912 20.0968C80.3457 20.0968 79.6534 19.9548 79.0144 19.6708C78.3754 19.3513 77.8606 18.9076 77.4701 18.3396C78.1801 17.5585 78.5351 16.7598 78.5351 15.9432C78.5351 15.1622 78.2334 14.541 77.6299 14.0794C77.0263 13.6179 76.2098 13.3872 75.1803 13.3872C74.1508 13.3872 73.3165 13.7244 72.6775 14.399C72.0385 15.0735 71.7189 15.961 71.7189 17.0615C71.7189 17.9845 72.145 18.7833 72.997 19.4578C73.849 20.0968 75.3933 20.8069 77.6299 21.5879C80.2214 22.5109 82.103 23.6292 83.2745 24.9427C84.4815 26.2208 85.085 27.8005 85.085 29.6821C85.085 32.2027 84.1265 34.173 82.2095 35.593C80.2924 36.9775 77.6121 37.6698 74.1685 37.6698Z" fill="black"/>
            <path d="M88.6175 35.0072C89.292 34.8652 89.8068 34.7055 90.1618 34.528C90.5523 34.3505 90.9606 34.0665 91.3866 33.6759V7.47628C91.3866 6.16274 91.1381 5.27522 90.6411 4.81371C90.1796 4.3167 89.3275 4.03269 88.085 3.96169L88.2448 1.88488C88.7773 1.77838 89.7358 1.61863 91.1203 1.40562C94.9189 0.766607 97.2087 0.322846 97.9898 0.0743408L98.9483 0.606854V14.399C99.8713 13.3694 100.99 12.5529 102.303 11.9494C103.617 11.3459 105.019 11.0441 106.51 11.0441C108.924 11.0441 110.859 11.7719 112.314 13.2274C113.77 14.683 114.498 16.6888 114.498 19.2448V33.7292C114.817 34.0132 115.279 34.2972 115.882 34.5812C116.486 34.8297 117.142 35.025 117.853 35.167L117.693 37.2438H104.167L104.327 35.167C105.392 34.954 106.261 34.4747 106.936 33.7292V19.7241C106.936 17.9845 106.652 16.7065 106.084 15.89C105.551 15.038 104.735 14.612 103.634 14.612C102.747 14.612 101.877 14.8782 101.025 15.4107C100.173 15.9077 99.4808 16.6 98.9483 17.4875V33.6759C99.6583 34.315 100.723 34.7942 102.143 35.1137L101.93 37.1905H88.4045L88.6175 35.0072Z" fill="black"/>
            </svg>
          </ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding-horizontal">
        
        <ion-title class="ion-hide-sm-down ion-no-padding pl5">
          <ion-text class="pl5 ion-no-padding" color="default">
          <h1>Flag Sources</h1>
          </ion-text>
        </ion-title>
            
        <ion-grid class="pl5 ion-no-padding ion-hide-sm-down ion-text-center border">
          <ion-row class="header-row">
            {source_columns.map((column) => (
                <ion-col class={column.class}>
                    <ion-text>{column.label}</ion-text>
                  </ion-col>
            ))}
          </ion-row>
            {rows && rows.length > 0 ? rows
                .map((row,i) => {
                    return (
                        <ion-row style={{backgroundColor:i%2==0?"#eee":"#fff"}}>
                            {source_columns.map((column) => {
                                let columnValue = row.hasOwnProperty(column.id)
                                let value= row[column.id]
                                if(column.label=="Remediate" && value){
                                  return (
                                    <ion-col class={column.class} >
                                        <ion-toggle ion-toggle-text checked={true} toggle-class="toggle-my-theme"></ion-toggle>
                                    </ion-col>
                                  );  
                                }else if(column.label=="Remediate" && !value){
                                  return (
                                    <ion-col class={column.class} >
                                        <ion-toggle ion-toggle-text toggle-class="toggle-my-theme"></ion-toggle>
                                    </ion-col>
                                  );  
                                }else if(column.label=="Unknown Source"){
                                  let txt="Known"
                                  if(value)
                                    txt="Unknown"

                                  return (
                                    <ion-col class={column.class} >
                                        <ion-select placeholder={txt} interface="popover" class='myClass'>
                                          <ion-select-option value="false">Unknown</ion-select-option>
                                          <ion-select-option selected value="true">Known</ion-select-option>
                                        </ion-select>
                                    </ion-col>
                                  );  
                                }else if(column.label=="Created Date"){
                                  
                                    let txt=moment(value).format('MMMM Do YYYY')

                                  return (
                                    <ion-col class={column.class} >
                                        {txt}
                                    </ion-col>
                                  );  
                                }else{
                                  return (
                                    <ion-col class={column.class} >
                                        {value}
                                    </ion-col>
                                  ); 
                                }                                
                                  
                                
                            })}
                        </ion-row>
                    );
                }) : <ion-row><ion-col>No Data</ion-col></ion-row>}
        </ion-grid>

        <ion-grid class="ion-hide-sm-up mobile"> 
        {rows && rows.length > 0 ? rows
                .map((row,i) => {
                    return (  
                      <ion-row style={{backgroundColor:i%2==0?"#eee":"#fff"}}>
                            {source_columns.map((column) => {
                                let columnValue = row.hasOwnProperty(column.id)
                                let value= row[column.id]
                                let limit=40
                                if(list.find(element => element == column.label)){
                                  console.log("find")
                                  
                                }
                                if(column.label=="Remediate" && value){
                                  return (
                                    <ion-row class="fullrow">
                                      <ion-col size="4" class="class-header" >
                                          <ion-text>{column.label}</ion-text>
                                      </ion-col>
                                      <ion-col size="8">
                                          <ion-toggle ion-toggle-text checked={true} toggle-class="toggle-my-theme"></ion-toggle>
                                      </ion-col>
                                    </ion-row>
                                  );  
                                }else if(column.label=="Remediate" && !value){
                                  return (
                                    <ion-row class="fullrow">
                                      <ion-col size="4" class="class-header" >
                                          <ion-text>{column.label}</ion-text>
                                      </ion-col>
                                      <ion-col size="8">
                                        <ion-toggle ion-toggle-text toggle-class="toggle-my-theme"></ion-toggle>
                                      </ion-col>
                                    </ion-row>
                                  );  
                                }else if(column.label=="Unknown Source"){
                                  let txt="Known"
                                  if(value)
                                    txt="Unknown"

                                  return (
                                    <ion-row class="fullrow">
                                      <ion-col size="4" class="class-header" >
                                          <ion-text>{column.label}</ion-text>
                                      </ion-col>
                                      <ion-col size="8">
                                        <ion-select placeholder={txt} interface="popover" class='myClass'>
                                          <ion-select-option value="false">Unknown</ion-select-option>
                                          <ion-select-option selected value="true">Known</ion-select-option>
                                        </ion-select>
                                    </ion-col>
                                    </ion-row>
                                  );  
                                }else if(column.label=="Created Date"){
                                  
                                    let txt=moment(value).format('MMMM Do YYYY')

                                  return (
                                    <ion-row class="fullrow">
                                      <ion-col size="4" class="class-header" >
                                          <ion-text>{column.label}</ion-text>
                                      </ion-col>
                                      <ion-col size="8">
                                        {txt}
                                      </ion-col>
                                    </ion-row>
                                  );  
                                }else{
                                  return (
                                    <ion-row class="fullrow">
                                      <ion-col size="4" class="class-header" >
                                          <ion-text>{column.label}</ion-text>
                                      </ion-col>
                                      <ion-col size="8">
                                        {value}
                                      </ion-col>
                                      </ion-row>
                                  ); 
                                }
                            })}
                        </ion-row>
                      );
                }) : <ion-row><ion-col>No Data</ion-col></ion-row>}
        </ion-grid>       
      </ion-content>
      <ion-footer class="ion-no-border">
        <ion-toolbar>
          <ion-title>Footer</ion-title>
        </ion-toolbar>
      </ion-footer>
    </IonApp>
  );
}

export default App;
