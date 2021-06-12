import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderDish(dish) {
    return (
      <Card>
        <CardImg width="100%" top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }

  renderComments(comments) {
    if (comments != null) {
      {
        const comentsRender = comments.map((item) => {
          return (
            <div key={item.id}>
              <p>{item.comment}</p>{" "}
              <p>
                -- {item.author}, {item.date}
              </p>
            </div>
          );
        });
        return comentsRender;
      }
    } else return <div></div>;
  }

  render() {
    const dish = this.props.dish;

    if (dish != null) {
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(dish)}
            {/* <Card>
              <CardImg width="100%" top src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card> */}
          </div>
          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            {this.renderComments(dish.comments)}
          </div>
        </div>
      );
    } else return <div></div>;
  }
}

export default DishDetail;
