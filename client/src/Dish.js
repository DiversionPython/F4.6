import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import axios from "axios";
import './Dish.css';

function Dish() {

    const kind = useSelector(state => state.kind)
    const variety = useSelector(state => state.variety)

    const navigate = useNavigate();

    let key = 0

    let [perem, setPerem] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/recipe/').then(res => {
            //console.log(res.data);
            setPerem(res.data);

        });
    }, []);


    // console.log(kind[1])
    // console.log(variety[1])

    console.log(kind)
    console.log(variety)


    return (
        <>
            <div class="dish">{`Список найденных в базе рецептов ${variety} ${kind}`}</div>

            <p class="panel_dish"> {

                perem.map(country =>
                    <p>
                        {
                            (country.kind === kind && country.variety === variety) &&
                            <span>
                                {(key = 1) && <p> <Link to={`/recipe/${country.id}`}>{country.name}{'/'}{country.variety}{'/'}{country.kind}</Link></p>}
                            </span>

                        }
                    </p>

                )

            }



            </p >
            <p >{key === 0 && 
                <p class="panel_dish"> {`К сожалению блюд - ${variety} ${kind} пока
                не загружено попробуйте поискать что то другое  `} </p>
                
            }
           
            </p>

            <p >{key === 0 &&
                <p class="dish">
                 <Button variant="primary" class="btn btn-primary btn-lg "
                     onClick={() => navigate("/")}> На главную страницу </Button>  

                </p>

            }
            </p>


        </>

    );
}

export default Dish;