import React, { useEffect, useState } from "react";
import Navigation from "../Navigation";
import { useParams } from "react-router";
import axios from "axios";


const URL = "http://localhost:3000/WorkPlan/"
const WorkPlanCardDetail = () => {
  const { id } = useParams();
  const[plan,setPlan]=useState([])
  useEffect(()=>{
    axios.get(URL+id).then(({data})=>{
      setPlan(data)
    })
  },[])
  return (
    <div>
      <Navigation />
    <h2>{plan.title}</h2>
    <p>{plan.description}</p>
    </div>
  );
};

export default WorkPlanCardDetail;
