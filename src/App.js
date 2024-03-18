import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Updated import
import {Drawer} from '@mui/material'
import FormHandling from "./FormHandling";
import ChechHandling from './CheckHandling'; 
import RadioHandling from './RadioHandling'; 
import AppHandling from './AppHandling'; 
import Tabs from './TabsHandling'
import Menus from './MenuHandling'
import CardHandling from "./CardHandling";
import Dialog from "./DialogHandling";
import Modal from './ModalHandling';
import Link from './LinkHandling';
import Container from './ContainerHandling';
import List from './ListHandling';
import AutoComplete from './AutoCompleteHandling';
import DrawHandling from './DrawerHandling'; 
import AlertHandling from './AlertHandling';
import {useForm} from 'react-hook-form';
import RatingHandling from './RatingHandling'; 
import ProgressBar from './ProgressBarHandling'
import Sanckbarhandling from './SanckBarHandling' 
import ImageListingHandling from './ImageListHandling'
import DataGridHandling from './DataGridHandling'
import FormValidationHandling from './FormValidationHandling'
import ThemeProviderHandling from './ThemeProviderHandling';
import IconsHandling from './IconsHandling';
import GridHandling from './GridHandling'; 
import RespnsiveThemeObject from './ResponiveThemeObject'; 
import ResponsiveHandling from './ResponsiveHandling'; 
import NavbarHandling  from "./NavbarHandling";
import NavProject from './NavProjectHandling';
import NavProjectWithFlex from './NavbarwithFlex';
import Auth from './LoginAndRegistrationHandling' ;
import Project from './Project/index'; 
const linksArray = ["Products", "Services", "Overview", "Contact us"]; 

function App() {
  
  return (
    <Router>
      <Routes>
        <Route exact path="/form" element={<FormHandling />} /> {/* Updated Route */}
        <Route exact path='/check' element={<ChechHandling/>}></Route>
        <Route exact path='/radio' element={<RadioHandling/>}></Route>
        <Route exact path='/appbar' element={<AppHandling/>}></Route>
        <Route exact path='/tabs' element={<Tabs/>}></Route>
        <Route exact path='/menus' element={<Menus/>}></Route>
        <Route exact path='/card' element={<CardHandling/>}></Route>
        <Route exact path='/dialog' element={<Dialog/>}></Route>
        <Route exact path='/modal' element={<Modal/>}></Route>
        <Route exact path='/link' element={<Link/>}></Route>
        <Route exact path='/container' element={<Container/>}></Route>
        <Route exact path='/list' element={<List/>}></Route>
        <Route exact path='/autocomplete' element={<AutoComplete/>}></Route>
        <Route exact path='/drawer' element={<DrawHandling/>}></Route>
        <Route exact path='/alert' element={<AlertHandling/>}></Route>
        <Route exact path='/snack' element={<Sanckbarhandling/>}></Route>
        <Route exact path='/progress' element={<ProgressBar/>}></Route>
        <Route exact path='/rating' element={<RatingHandling/>}></Route>
        <Route exact path='/imglist' element={<ImageListingHandling/>}></Route>
        <Route exact path='/formvalidate' element={<FormValidationHandling/>}></Route>
        <Route exact path='/datagrid' element={<DataGridHandling/>}></Route>
        <Route exact path='/theme' element={<ThemeProviderHandling/>}></Route>
        <Route exact path='/icons' element={<IconsHandling/>}></Route>
        <Route exact path='/grid' element={<GridHandling/>}></Route>
        <Route exact path='/responsive' element={<ResponsiveHandling/>}></Route>
        <Route exact path='/responsive_theme' element={<RespnsiveThemeObject/>}></Route>
           <Route exact path='/navbar' element={<NavbarHandling/>}></Route>
           <Route exact path='/navproject_flex' element={<NavProjectWithFlex/>}></Route>
           <Route exact path='/navproject' element={<NavProject links={linksArray}/>}></Route>
           <Route exact path='/auth' element={<Auth/>}></Route>
           <Route exact path='/project' element={<Project/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
