import style from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
import { useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import {CgProfile} from "react-icons/cg"
import {AiOutlineUserAdd} from "react-icons/ai"
import {BiRefresh} from "react-icons/bi"
import {BsAppIndicator} from "react-icons/bs"
const Header = (props) => {
  const inputEl = useRef();
  const getSearchTerm = () => {
    props.searchHandler(inputEl.current.value);
  };
  console.log(props);
  return (
    <>
      <div className={style.header}>
        <nav className={style.nav}>
          <div className={style.contact}>
            <img
              src="https://www.gstatic.com/images/branding/product/1x/contacts_48dp.png"
              height={"40px"}
              width="40px"
            ></img>
            <span>Contacts</span>
          </div>
          <div className={style.input_div}>
            <div className={style.search_icon}>
              <BiSearch />
            </div>
            <input
              className={style.input}
              type="text"
              name="search"
              placeholder="Search"
              /* onChange={getSeachTerm}
            value={searchTerm} */
              value={props.searchTerm}
              onChange={getSearchTerm}
              ref={inputEl}
            ></input>
          </div>
          <div>
            <img
              src="https://admin.google.com/u/0/ac/images/logo.gif?uid=105374338632565604146&service=google_gsuite"
              height={"50px"}
              width={"100px"}
            ></img>
            <img
              src="https://lh3.google.com/u/0/ogw/ADea4I7rV5GNw0YGBxxGDA8M8AwqeOwrHYIvToNWcFnW=s32-c-mo"
              height={"30px"}
              width={"30px"}
              className={style.account}
            ></img>
          </div>
        </nav>
      </div>
     
        <div className={style.asideContainer}>
          <NavLink style={({isActive})=>{
            return {
              backgroundColor:isActive?"#e8f0fe":"white",
              color:isActive?"#1967d2":"#202124",
              fontSize:"100px"
            }
          }}
            to="/"
          >
            <div className={style.content}><CgProfile/>&nbsp;&nbsp;Contacts&nbsp;&nbsp;<span style={{color:"#91b8f1"}}>{props.contacts.length}</span></div>
          </NavLink>
          <NavLink to="/add" style={({isActive})=>{
            return {
              backgroundColor:isActive?"#e8f0fe":"white"
            }
          }}>
            <div className={style.content}><AiOutlineUserAdd/>&nbsp;&nbsp;Add To Contacts</div>
          </NavLink>
          <div className={style.content}><BiRefresh/>&nbsp;&nbsp;Frequently contacted</div>
          <div className={style.content}><BsAppIndicator/>&nbsp;&nbsp;Distionary</div>
        </div>
      
    </>
  );
};

export default Header;
