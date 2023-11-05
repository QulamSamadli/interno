import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from './style.module.css';
import { AiOutlineArrowRight } from "react-icons/ai";

const _url = "http://localhost:3000/WorkPlan";
const WorkPlanCards = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios.get(_url).then(({ data }) => {
      setCards(data);
    
    });
  }, []);

  return <div className="container">
    <div className="row  mb-5 my-5">
       
            {
                cards.map(({id,title,description})=>{
                    return(
                        <div key={id} className={`col-12 col-md-6 col-xl-4 col-xxl-4 my-3 ${styles.WorkPlanCard}`} key={id}>
                        <h3  className={`my-3 ${styles.title}`}>{title}</h3>
                        <p>{description}</p>
                       <Link  to={`/WorkPlanCardDetail/${id}`} className={styles.button}>Read More <span> <AiOutlineArrowRight/></span></Link>
                        </div>
                    )
                })
            }
        
        </div></div>;
};

export default WorkPlanCards;
