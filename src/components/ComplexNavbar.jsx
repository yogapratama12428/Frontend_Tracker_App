/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Card,
    IconButton,
    Collapse,
} from "@material-tailwind/react";


import {
    CubeTransparentIcon,
    UserCircleIcon,
    CodeBracketSquareIcon,
    Square3Stack3DIcon,
    ChevronDownIcon,
    Cog6ToothIcon,
    InboxArrowDownIcon,
    LifebuoyIcon,
    PowerIcon,
    RocketLaunchIcon,
    Bars2Icon,
} from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useUserStore } from "../hooks/useStore";
import { useShallow } from "zustand/react/shallow";
import logo from "../assets/logo.png"
   
  // profile menu component
  const profileMenuItems = [
    {
      label: "My Profile",
      icon: UserCircleIcon,
    },
    {
      label: "Edit Profile",
      icon: Cog6ToothIcon,
    },
    {
      label: "Inbox",
      icon: InboxArrowDownIcon,
    },
    {
      label: "Help",
      icon: LifebuoyIcon,
    }
  ];
   
  function ProfileMenu() {
    const {
      updateUserUid,
      updateUserEmail,
    } = useUserStore(
      useShallow((state) => ({
            updateUserEmail: state.updateUserEmail,
            updateUserUid: state.updateUserUid,
          })
        ),
     );

    const navigate = useNavigate()
     
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
   
    const closeMenu = () => setIsMenuOpen(false);

    const handleLogOut = async() => {
      try {

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/logout`, { withCredentials: true })

          updateUserEmail("")
          updateUserUid("")
          
          console.log(response)
          
          setTimeout(() => navigate('/'), 1000)
  
      } catch (error) {
          console.log(error.response)
      }
    }
   
    return (
      <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end" className="sticky">
        <MenuHandler>
          <Button
            variant="text"
            color="blue-gray"
            className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
          >
            <Avatar
              variant="circular"
              size="sm"
              alt="tania andrew"
              className="border border-gray-900 p-0.5"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            />
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-3 w-3 transition-transform ${
                isMenuOpen ? "rotate-180" : ""
              }`}
            />
          </Button>
        </MenuHandler>
        <MenuList className="p-1">
          {profileMenuItems.map(({ label, icon }, key) => {
            const isLastItem = key === profileMenuItems.length - 1;
            return (
              <MenuItem
                key={label}
                onClick={closeMenu}
                className={`flex items-center gap-2 rounded`}
              >
                {React.createElement(icon, {
                  className: `h-4 w-4`,
                  strokeWidth: 2,
                })}
                <Typography
                  as="span"
                  variant="small"
                  className="font-normal"
                  color="inherit"
                >
                  {label}
                </Typography>
              </MenuItem>
            );
          })}
            <MenuItem
                key={'abubutton'}
                onClick={handleLogOut}
                className={`flex items-center gap-2 rounded over:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10`}
              >
                {React.createElement(PowerIcon, {
                  className: `h-4 w-4 text-red-500`,
                  strokeWidth: 2,
                })}
                <Typography
                  as="span"
                  variant="small"
                  className="font-normal"
                  color="red" 
                >
                  Sign Out
                </Typography>
              </MenuItem>
        </MenuList>
       
      </Menu>
    );
  }
   
  // nav list menu
  const navListMenuItems = [
    {
      title: "@material-tailwind/html",
      description:
        "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
    },
    {
      title: "@material-tailwind/react",
      description:
        "Learn how to use @material-tailwind/react, packed with rich components for React.",
    },
    {
      title: "Material Tailwind PRO",
      description:
        "A complete set of UI Elements for building faster websites in less time.",
    },
  ];
   
  function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
   
    const renderItems = navListMenuItems.map(({ title, description }) => (
      <a href="#" key={title}>
        <MenuItem>
          <Typography variant="h6" color="blue-gray" className="mb-1">
            {title}
          </Typography>
          <Typography variant="small" color="gray" className="font-normal">
            {description}
          </Typography>
        </MenuItem>
      </a>
    ));
   
    return (
      <React.Fragment>
        <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
          <MenuHandler>
            <Typography as="a" href="#" variant="small" className="font-normal">
              <MenuItem className="hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full">
                <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Pages{" "}
                <ChevronDownIcon
                  strokeWidth={2}
                  className={`h-3 w-3 transition-transform ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </MenuItem>
            </Typography>
          </MenuHandler>
          <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
            <Card
              color="blue"
              shadow={false}
              variant="gradient"
              className="col-span-3 grid h-full w-full place-items-center rounded-md"
            >
              <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
            </Card>
            <ul className="col-span-4 flex w-full flex-col gap-1">
              {renderItems}
            </ul>
          </MenuList>
        </Menu>
        <MenuItem className="flex items-center gap-2 text-blue-gray-900 lg:hidden">
          <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Pages{" "}
        </MenuItem>
        <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
          {renderItems}
        </ul>
      </React.Fragment>
    );
  }
   
  // nav list component
  const navListItems = [
    {
      label: "Account",
      icon: UserCircleIcon,
    },
    {
      label: "Blocks",
      icon: CubeTransparentIcon,
    },
    {
      label: "Docs",
      icon: CodeBracketSquareIcon,
    },
  ];
   
  function NavList() {
    return (
      <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
        <NavListMenu />
        {navListItems.map(({ label, icon }) => (
          <Typography
            key={label}
            as="a"
            href="#"
            variant="small"
            color="blue-gray"
            className="font-normal"
          >
            <MenuItem className="flex items-center gap-2 lg:rounded-full">
              {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
              {label}
            </MenuItem>
          </Typography>
        ))}
      </ul>
    );
  }

   
  export default function ComplexNavbar() {
    const [isNavOpen, setIsNavOpen] = React.useState(false);
    const [isUser, setIsUser] = useState(true)

    const { userUid } = useUserStore(useShallow(state => ({
      userUid: state.userUid
    })))
   
    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
   
    React.useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setIsNavOpen(false),
      );
    }, []);
   
    return (
      <Navbar className="mt-2 mx-auto max-w-screen-2xl sticky top-0">
        <div className="relative mx-auto flex items-center text-blue-gray-900 justify-between">
          <img 
            className="w-16 h-auto"
            src={logo}/>
          <p
            href="/"
            className="mr-4 ml-2 cursor-pointer py-1.5  font-bold text-lg"
          >
            Indo Tracking Mobil
          </p>
          {/* <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
            <NavList />
          </div> */}
          {/* <IconButton
            size="sm"
            color="blue-gray"
            variant="text"
            onClick={toggleIsNavOpen}
            className="ml-auto mr-2 lg:hidden"
          >
            <Bars2Icon className="h-6 w-6" />
          </IconButton> */}

          {
            userUid 
            ? (<ProfileMenu user = {isUser}/>) 
            : (
              <Link to={'/login'} >
                <p className="text-black flex items-center gap-3 border-2 border-black py-2 px-4 rounded-md">
                Continue with Login
                </p>
              </Link>
            )
          }
         
          
        </div>
        {/* <Collapse open={isNavOpen} className="overflow-scroll">
          <NavList />
        </Collapse> */}
      </Navbar>
    );
  }