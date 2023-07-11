import { Component } from 'react'
import "./style.css";

const listProduct = [
    {
        "id": 1,
        "price": 30,
        "name": "GUCCI G8850U",
        "url": "./glassesImage/v1.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 2,
        "price": 50,
        "name": "GUCCI G8759H",
        "url": "./glassesImage/v2.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 3,
        "price": 30,
        "name": "DIOR D6700HQ",
        "url": "./glassesImage/v3.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 4,
        "price": 70,
        "name": "DIOR D6005U",
        "url": "./glassesImage/v4.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 5,
        "price": 40,
        "name": "PRADA P8750",
        "url": "./glassesImage/v5.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 6,
        "price": 60,
        "name": "PRADA P9700",
        "url": "./glassesImage/v6.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 7,
        "price": 80,
        "name": "FENDI F8750",
        "url": "./glassesImage/v7.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 8,
        "price": 100,
        "name": "FENDI F8500",
        "url": "./glassesImage/v8.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 9,
        "price": 60,
        "name": "FENDI F4300",
        "url": "./glassesImage/v9.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
]
export default class Glasses extends Component {
    state={
        urlChange:"./glassesImage/v1.png",
    }
    changeURl = (url) =>{
        return()=>{
            this.setState({urlChange:url});
        }
    }
    render() {
        return (
            <div className="glasses">
                <div className='container text-center'>
                    <h1>Try Glasses App Online</h1>
                    <div className="avatar">
                        <img className="imagesGlass img-fluid" src={this.state.urlChange} alt="items" />
                    </div>
                    <div className="items">
                        <div className="row">
                        {
                            listProduct.map((items)=>{
                                return(
                                    <div key={items.id} className="items-box ">
                                        <img onClick={this.changeURl(items.url)} classname="images" src={items.url} alt="items" />
                                    </div>
                                );
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
