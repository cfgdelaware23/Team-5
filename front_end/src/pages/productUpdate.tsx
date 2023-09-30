import React, { useEffect, useState } from 'react'
import AdminSideBar from '../components/AdminSideBar'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const productUpdate = () => {
    let urlParams = useParams();
    let productId = urlParams.id;

    console.log(productId);


}

export default productUpdate
