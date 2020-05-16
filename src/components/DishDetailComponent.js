import React , { Component } from 'react';

import {Card, CardBody, CardImg, CardText, CardTitle}  from 'reactstrap';



class Dish extends Component{
    constructor(props)
    {
        super(props);
    }
    render(){
        return(
            <div className="col-12 col-sm-5 m-1">
                <Card>
                    <CardImg width="100%" src={this.props.newdish.image} alt={this.props.name} />
                    <CardBody>
                        <CardTitle>{this.props.newdish.name}</CardTitle>
                        <CardText>{this.props.newdish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default Dish;