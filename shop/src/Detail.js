import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

function Detail() {
    let history = useHistory();
    let params = useParams();
    let [ shoes, shoesFunc ] = useState({});
    useEffect(()=>{
        axios.get(`http://localhost:11000/detail/${params.id}`).then((result)=>{
            let data = result.data.data;
            shoesFunc(data);
        }).catch((e)=>{
            console.log(e);
        });
    }, []);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={ shoes.img } width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className='pt-5'>{ shoes.title }</h4>
                    <p>{ shoes.content }</p>
                    <p>{ shoes.price } 원</p>
                    <button className="btn btn-danger">주문하기</button>
                    <button className="btn btn-defaul" onClick={()=>{ history.goBack() }}>뒤로가기</button>
                </div>
            </div>
        </div>
    )
}

export default Detail