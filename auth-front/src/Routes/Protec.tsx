import React from 'react'
import {Outlet, Navigate} from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../auth/AuthProvider';


function Protec() {
const auth = useAuth();
return auth.isAuthenticated ? <Outlet/> : <Navigate to="/"/>

}

export default Protec