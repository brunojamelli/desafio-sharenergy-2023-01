import React from 'react'
import * as FaIcons from 'react-icons/fa' 

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <FaIcons.FaHome />
    },
    {
        title: 'Login',
        path: '/login',
        icon: <FaIcons.FaUsers />
    },
    {
        title: 'Random',
        path: '/random',
        icon: <FaIcons.FaTasks />
    },
    {
        title: 'UserList',
        path: '/list',
        icon: <FaIcons.FaAdjust />
    }
]
