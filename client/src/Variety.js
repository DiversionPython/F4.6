import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { Link } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Offcanvas from 'react-bootstrap/Offcanvas';

import './Variety.css';

function Variety() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let [perem, setPerem] = useState([]);

  //const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/variety/').then( res =>{
    //console.log(res.data);
    setPerem(res.data);
    
  });
  },[]);
  
  const dispatch = useDispatch()
  const variety = useSelector( state=>state.variety)
    
  const getVARIETY =(data)=>{
    dispatch({type:"VARIETY", payload: data })
  }
   
  console.log(variety)

  return (
    <>
    
        <Offcanvas placement='end' show={show} onHide={handleClose} >
             <Offcanvas.Header closeButton>
             <Offcanvas.Title>Советы</Offcanvas.Title>
            </Offcanvas.Header>
        <Offcanvas.Body>
             Пожалуйста выберете что хотите приготовить
        </Offcanvas.Body>
        </Offcanvas>

        <ul class="variety">
                <li>
                    <p >Что хотите приготовить? </p>
                </li>
                <p > {
                    perem.map(country =>
                        //<p>{country.name}</p>

                        <li class="select">
                            <Link to="/dish"
                                onClick={() => {

                                    getVARIETY(country.name)
                                }
                                }
                            >{country.name}</Link>
                        </li>


                    )

                }

                </p>
                <li class="select">
                    <Link onClick={handleShow}>Подсказка</Link>
                </li>

            </ul>

            <div class="panel_variety">
                <h2>Характеристика видов блюд</h2>
                <h3>Вторые блюда</h3>
                <p> Вторые горячие блюда - самая обширная группа блюд. Классифицируется на 6 подгрупп по виду используемого, общего для данной подгруппы, основного сырья:
                - блюда и гарниры из овощей,
                - блюда из круп, бобовых и макаронных изделий,
                - блюда из рыбы и нерыбных морепродуктов,
                - блюда из мяса и мясных продуктов,
                - блюда из птицы, дичи и кролика,
                - блюда из яиц и творога.
                Свое название «вторые» получили по очередности подачи, сразу же после «первых блюд» (супов). Каждая подгруппа имеет свою внутреннюю классификацию блюд по способу тепловой обработки.
                
                </p>
                <h3>Выпечка</h3>
                <p>Выпечка— пищевые продукты, получаемые методом выпекания из теста (состоящего как 
                    минимум из муки, воды и соли), разрыхлённого дрожжами или закваской. 
                    К ним относятся хлеб, булочные изделия, изделия пониженной влажности, пироги, 
                    пирожки, пончики.Значительная доля хлебобулочных изделий производится в домашних 
                    хозяйствах и на производствах малых форм — в пекарнях, булочно-кондитерских 
                    лавках, кафе.
                </p>
                <h3>Салаты</h3>
                <p>Салат - это одно из самых разнообразных и универсальных блюд в мире. Бывают 
                классические холодные и современные «теплые» салаты, а так же сложные, время 
                приготовления которых занимает около 1 часа и более (например, Селедка «под шубой») и 
                простые салаты «на скорую руку», приготовление которых занимает не продолжительное 
                время - до 30 минут, к примеру, салат «Цезарь» (овощной салат из помидоров и зелени 
                можно приготовить примерно за 15 минут). Салат можно подавать на завтрак, обед или 
                ужин; на праздничный стол или в обычный день. Большое значение играет заправка для 
                салата, не покупайте ее готовую, заправку совсем не сложно сделать самому. Все 
                продукты для салата должны быть свежими и все (овощи, фрукты и зелень) должны быть хорошо вымыты.
                Салат не должен долго стоять перед его употреблением (кроме случаев, входящих в 
                рецептуру приготовления - например, салат Селедка «под шубой». После того, как 
                салат собран, он настаивается 2-3 часа в холодильнике, чтобы слои пропитались 
                майонезом), да и заправлять салат необходимо только перед подачей на стол, иначе 
                салат может дать сок и стать вялым.
                
                </p>
                <h3>Супы</h3>
                <p>Супы классифицируются по следующим признакам:
                - по температуре подачи: горячие супы температура 65-75 °С, холодные супы температура 7-14 °С, 
                супы, подаваемые как холодными, так и горячими
                - по жидкой основе: супы на бульонах, овощах или фруктовых отварах, молоке, кисломолочных 
                продуктах, квасе, вине, рассолах
                - по главному компоненту: мясные супы в том числе из птицы, рыбные, овощные, грибные, супы 
                из морепродуктов, супы из мучных изделий, крупяные супы, молочные супы (в том числе из сыра), фруктовые супы
                - по технологии приготовления: заправочные, прозрачные, пюреобразные, комбинированные, сладкие.
                </p>
                
            </div>


    </>
  );
}

export default Variety;