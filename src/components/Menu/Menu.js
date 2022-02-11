import React from "react";
import {
  FiSearch,
  FiHome,
  FiInbox,
  FiList,
  FiActivity,
  FiUsers,
  FiFolder,
  FiPlus,
  FiMoreVertical,
} from "react-icons/fi";

function Menu({ menuButton, isBurger, logo, avatar, isChecked, logo_light }) {
  return (
    <div className="page">
      {!isBurger ? (
        <div className={`menuContainer ${!isChecked ? 'menuContainer__light' : ''}`}>
          <div className={`header ${!isChecked ? 'header__light' : ''}`}>
            <button onClick={menuButton} className="header__menuButton">
              <span></span>
            </button>
            <img src={`${!isChecked ? logo_light : logo}`} className="header__logo" alt="лого" />
          </div>
          <div className="menu">
            <form className="menu__form">
              <input className="menu__form_input search" />
              <FiSearch className="menu__form_icon" />
            </form>
            <ul className="mainMenu">
              <li className={`mainMenu__icons mainMenu__icons_active ${!isChecked ? 'mainMenu__icons_active-light' : ''}`}>
                <FiHome className={`mainMenu__icons_element mainMenu__icons_element-active ${!isChecked ? 'mainMenu__icons_element-active-light' : ''}`}/>
                <p className="mainMenu__heading mainMenu__heading_active">
                  Главная
                </p>
              </li>
              <li className="mainMenu__icons">
                <FiInbox className="mainMenu__icons_element" />
                <p className="mainMenu__heading">Входящие</p>
                <div className="mainMenu__icons_reminder">
                  <p className="mainMenu__reminder">12</p>
                </div>
              </li>
              <li className="mainMenu__icons">
                <FiList className="mainMenu__icons_element" />
                <p className="mainMenu__heading">Задачи</p>
              </li>
              <li className="mainMenu__icons">
                <FiActivity className="mainMenu__icons_element" />
                <p className="mainMenu__heading">Активность</p>
              </li>
              <li className="mainMenu__icons">
                <FiUsers className="mainMenu__icons_element" />
                <p className="mainMenu__heading">Команда</p>
              </li>
            </ul>
            <ul className="mainMenu secondMenu">
              <li className="mainMenu__icons">
                <FiFolder className="mainMenu__icons_element" />
                <p className="mainMenu__heading">Проекты</p>
              </li>
              <li className="mainMenu__icons mainMenu__icons-max">
                <p className="secondMenu__li second__li_design"></p>
                <p className="second__li_child">Дизайн</p>
              </li>
              <li className="mainMenu__icons mainMenu__icons-max">
                <p className="secondMenu__li second__li_web"></p>
                <p className="second__li_child">Веб</p>
              </li>
              <li className="mainMenu__icons mainMenu__icons-max">
                <p className="secondMenu__li second__li_reduct"></p>
                <p className="second__li_child">Редактура</p>
              </li>
            </ul>
          </div>
          <div className="footer">
            <button className="mainMenu__button">
              <FiPlus className="mainMenu__button_icon"/>
              <span className="footer__button_heading"> Создать проект</span>
            </button>
            <div className={`footer__account ${!isChecked ? 'footer__account_light' : ''}`}>
              <img
                src={avatar}
                className="footer__avatar"
                alt="аватар пользователя"
              />
              <p className="footer__reminder"></p>
              <div className="footer__userData">
                <p className="footer__name">Михаил Воробьев</p>
                <p className="footer__description">Разработчик</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={`menuContainer menuContainer_max ${!isChecked ? 'menuContainer__light' : ''}`}>
          <div className={`header header__max ${!isChecked ? 'header__light' : ''}`}>
            <button onClick={menuButton} className="header__menuButton">
              <span></span>
            </button>
            <img
              src={`${!isChecked ? logo_light : logo}`}
              className="header__logo header__logo_max"
              alt="лого"
            />
          </div>
          <div className="menu menu__max">
            <form className="menu__form menu__form_max">
              <input
                className="menu__form_input menu__form_input-max search"
                placeholder="Search"
              />
              <FiSearch className="menu__form_icon menu__form_icon-max" />
            </form>
            <ul className="mainMenu mainMenu__max">
              <li className={`mainMenu__icons mainMenu__icons_active mainMenu__icons-max ${!isChecked ? 'mainMenu__icons_active-light' : ''}`}>
                <FiHome className={`mainMenu__icons_element mainMenu__icons_element-active mainMenu__icons_element-max ${!isChecked ? 'mainMenu__icons_element-active-light' : ''}`}/>
                <p className={`mainMenu__heading mainMenu__heading_max mainMenu__heading_active ${!isChecked ? 'mainMenu__heading_active-light' : ''}`}>
                  Главная
                </p>
              </li>
              <li className="mainMenu__icons mainMenu__icons-max">
                <FiInbox className="mainMenu__icons_element mainMenu__icons_element-max" />
                <p className={`mainMenu__heading mainMenu__heading_max ${!isChecked ? 'mainMenu__heading_max-light' : ''}`}>Входящие</p>
                <div className="mainMenu__icons_reminder mainMenu__icons_reminder-max">
                  <p className="mainMenu__reminder mainMenu__reminder-max">12</p>
                </div>
              </li>
              <li className="mainMenu__icons mainMenu__icons-max">
                <FiList className="mainMenu__icons_element mainMenu__icons_element-max" />
                <p className={`mainMenu__heading mainMenu__heading_max ${!isChecked ? 'mainMenu__heading_max-light' : ''}`}>Задачи</p>
              </li>
              <li className="mainMenu__icons mainMenu__icons-max">
                <FiActivity className="mainMenu__icons_element mainMenu__icons_element-max" />
                <p className={`mainMenu__heading mainMenu__heading_max ${!isChecked ? 'mainMenu__heading_max-light' : ''}`}>Активность</p>
              </li>
              <li className="mainMenu__icons mainMenu__icons-max">
                <FiUsers className="mainMenu__icons_element mainMenu__icons_element-max" />
                <p className={`mainMenu__heading mainMenu__heading_max ${!isChecked ? 'mainMenu__heading_max-light' : ''}`}>Команда</p>
              </li>
            </ul>
            <ul className="mainMenu mainMenu__max secondMenu">
              <li className="mainMenu__icons mainMenu__icons-max">
                <FiFolder className="mainMenu__icons_element mainMenu__icons_element-max" />
                <p className={`mainMenu__heading mainMenu__heading_max ${!isChecked ? 'mainMenu__heading_max-light' : ''}`}>Проекты</p>
              </li>
              <li className="mainMenu__icons mainMenu__icons-max">
                <p className="secondMenu__li_max second__li_design"></p>
                <p className={`mainMenu__heading mainMenu__heading_max second__li_child-max ${!isChecked ? 'mainMenu__heading_max-light' : ''}`}>Дизайн</p>
              </li>
              <li className="mainMenu__icons mainMenu__icons-max">
                <p className="secondMenu__li_max second__li_web"></p>
                <p className={`mainMenu__heading mainMenu__heading_max second__li_child-max ${!isChecked ? 'mainMenu__heading_max-light' : ''}`}>Веб</p>
              </li>
              <li className="mainMenu__icons mainMenu__icons-max">
                <p className="secondMenu__li_max second__li_reduct"></p>
                <p className={`mainMenu__heading mainMenu__heading_max second__li_child-max ${!isChecked ? 'mainMenu__heading_max-light' : ''}`}>Редактура</p>
              </li>
            </ul>
          </div>
          <div className="footer footer__max">
            <button className="mainMenu__button mainMenu__button_max">
              <FiPlus />
              <span className="footer__button_heading footer__button_heading-max"> Создать проект</span>
            </button>
            <div className={`footer__account footer__account_max ${!isChecked ? 'footer__account_light' : ''}`}>
              <img
                src={avatar}
                className="footer__avatar footer__avatar_max"
                alt="аватар пользователя"
              />
              <p className="footer__reminder footer__reminder_max"></p>
              <div className="footer__userData">
                <p className={`footer__name footer__name-max ${!isChecked ? 'footer__name-max_light' : ''}`}>Михаил Воробьев</p>
                <p className={`footer__description footer__description-max ${!isChecked ? 'footer__description-max_light' : ''}`}>Разработчик</p>
              </div>
              <FiMoreVertical className="mainMenu__icons_element footer__icon_more" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
