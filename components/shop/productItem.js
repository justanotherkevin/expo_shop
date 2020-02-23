import React from "react";
import { Image } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";

const ProductItem = props => {
  return (
    <Content>
      <Card>
        <CardItem>
          <Text>{props.title}</Text>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{ uri: props.image }}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent onPress={props.onViewDetail}>
              <Icon active name="thumbs-up" />
              <Text>View item</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent onPress={props.onAddToCart}>
              <Icon active name="chatbubbles" />
              <Text>Add to cart</Text>
            </Button>
          </Body>
          <Right>
            <Text>${props.price.toFixed(2)}</Text>
          </Right>
        </CardItem>
      </Card>
    </Content>
  );
};

export default ProductItem;
