import React, { useEffect, useState,useContext } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Content from "../Content/Content";
import {dataContext} from "../App"

import { getData } from "../../firebase";

export default function PageTemplate({ path }) {
    const {data, setData} = useContext(dataContext);
    const [page,setPage] = useState(0);
    const [hasMore,setHasMore] = useState(true);
    useEffect(()=>{
        setData([]);
        setPage(0);
        setHasMore(true)
    },[path,setData,setHasMore])
    useEffect(() => {
      getData(path,page).then((res) => {
        if(res?.length>=0){
          setData(prev=>[...prev,...res]);
        }else{
          setHasMore(false)
        }
      });
    }, [page,path,setData,setHasMore]);
    
    function nextCall(){
      setPage(prev=>prev+1);
    }
  return (
    <>
      <Navbar />
      <Content data={data} nextCall={nextCall} hasMore={hasMore} product_for={path.replace("/","")}/>
      <Footer />
    </>
  );
}
