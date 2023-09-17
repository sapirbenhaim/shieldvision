import React, { useEffect, useState } from 'react';
import './AdminPanel.css';
import SignOutButton from '../../components/authentication/LogOutButton/SignOutButton';
import SideMenu from '../../components/SideMenu/SideMenu';
import { getAllUsers } from '../../managers/authManager';
import User from '../../components/User/User';
import HamburgerMenu from '../../img/menu-hamburger.png'
import MobileMenu from '../../components/MobileMenu/MobileMenu'
import CloseIcon from '../../img/close.png'
import UpdateUser from '../../components/UpdateUser/UpdateUser';
import { logError, logMessage } from '../../utils/logger';

/**
 * The AdminPanel component represents the admin panel page.
 * @returns {JSX.Element} The AdminPanel page content.
 */
const AdminPanel = () => {

  const [users, setUsers] = useState([]);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);

  useEffect(() => {
    // Fetch user data when the component mounts
    const fetchUser = async () => {
      try {
        const users = await getAllUsers();
        logMessage(users);
        setUsers(users);
      } catch (error) {
        logError(error.message);
      }
    };

    fetchUser();
  }, []);

  return (
    <div id='AdminPanel'>
      {/* Render the SignOutButton component */}
      <SignOutButton />
      {mobileMenu && <MobileMenu setMobileMenu={setMobileMenu} />}
      {/* Render the mobile menu button */}
      <img
        onClick={() => setMobileMenu(!mobileMenu)}
        className='menuButton'
        src={HamburgerMenu}
        alt="Mobile menu button"
      />
      {/* Render the SideMenu component */}
      <SideMenu />

      <h1 id='adminTitle'>Admin Panel</h1>
      <div id='users'>
        {/* Render a list of User components */}
        {users.map(user => <User key={user.email} user={user} setUserToEdit={setUserToEdit} />)}
      </div>

      {/* Render the UpdateUser component when userToEdit is not null */}
      {userToEdit && (
        <div className={"editUserContainer"}>
          {/* Render a close button */}
          <img onClick={() => setUserToEdit(null)} id="btnClose" src={CloseIcon} alt="Close button" />
          <UpdateUser user={userToEdit} />
        </div>
      )}
    </div>
  );
}

export default AdminPanel;
