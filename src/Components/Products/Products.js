import React, { Component } from 'react'
import Product from '../Product/Product'

class Products extends Component {
    state = {products:[]}

    async componentDidMount(){
        const response = fetch('https://ln-market-9562a.firebaseio.com/products.json')
        .then( results => {
            return results.json().then( data => {
                console.log(data)

                let productsArray = []

                for(const prop in data){
                    let item = data[prop]
                    productsArray.push(item)
                }

                this.setState({products:productsArray})
            })
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {
                        this.state.products.map((product) => {
                            return <Product 
                             precio = {product.precio}
                             name = {product.name}
                             image = {product.image}
                             descripcion = {product.descripcion}
                            
                            
                            />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Products
