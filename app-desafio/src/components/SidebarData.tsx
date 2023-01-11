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
        title: 'HttpCat',
        path: '/cat',
        icon: <FaIcons.FaTasks />
    },
    {
        title: 'Dog',
        path: '/dog',
        icon: <FaIcons.FaAdjust />
    }
]
