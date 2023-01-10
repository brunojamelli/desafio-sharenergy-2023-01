import React, { useState, useEffect } from "react";
import axios from "axios";

const HttpCat: React.FunctionComponent = () => {
    const [cat, setCat] = useState<[]>([]);
    useEffect(() => {
        axios.get('https://randomuser.me/api/?results=10')
            .then(res => {
                setCat(res.data.results)
            })
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default HttpCat
