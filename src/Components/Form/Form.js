import React, { Component } from 'react'

class Form extends Component{

    constructor(){
        super();
        this.state = {
            name:"Dell Latitude",
            description:"Core i7",
            price:"$12,000.00",
            image:"https://www.mipc.com.mx/media/catalog/product/cache/1/image/500x500/9df78eab33525d08d6e5fb8d27136e95/1/_/1_1_4.png"
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit = (event) => {
        const { name , descripcion, precio , image} = this.state
            event.preventDefault();
        fetch('https://ln-market-9562a.firebaseio.com/products.json',{
            method:"POST",
            body: JSON.stringify({ name , descripcion , precio , image})
        }).then(response => {
            console.log(response)
        });
    }

    render(){
        const {name,descripcion,precio,image} = this.state
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 offset-sm-3 py-3">
                        <form onSubmit={this.handleSubmit} className="border border-dark shadow rounded p-3">
                            <div className="form-group">
                                <label htmlFor="name">Nombre del producto</label>
                                <input id="name" 
                                name="name" 
                                type="text" 
                                className="form-control"
                                value={name}
                                onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="descripcion">Descripción</label>
                                <input id="descripcion" 
                                name="descripcion" 
                                type="text" 
                                className="form-control"
                                value={descripcion}
                                onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="precio">Precio</label>
                                <input id="precio" 
                                name="precio" 
                                type="text" 
                                className="form-control"
                                value={precio}
                                onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="image">URL de la imagen</label>
                                <input id="image" 
                                name="image" 
                                type="text" 
                                className="form-control"
                                value={image}
                                onChange={this.handleChange}/>
                            </div>
                            <button type="submit" className="btn btn-outline-success">Agregar producto</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form
////////////////formulario