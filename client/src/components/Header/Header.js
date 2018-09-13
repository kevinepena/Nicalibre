import React from 'react';
import "./Header.css";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import API from "../../utils/API";
import Iframe from "react-iframe"



class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      items: []
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  componentWillMount() {
    API.getArticles()
      .then(res => {
        this.setState({ items: res.data })
      })
      .catch(err => console.log(err))
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.state.items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.state.items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = this.state.items.map((item) => {
      return (
        <CarouselItem
          className="custom-tag"
          tag="div"
          key={item._id}
          onExiting={this.onExiting}
          onExited={this.onExited}

        >
          <a href={item.link} target="_blank">
            <img className="slideimage" src={item.src} alt={item.altText} />
            <CarouselCaption className="d-block caption" captionText={item.caption} captionHeader={item.header} href={this.href} />
          </a>
        </CarouselItem>
      );
    });

    return (
      <div>

        <Iframe
          url="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FIntervaloNicaragua%2Fvideos%2F1930482583921600%2F&show_text=0"
          // width="300px"
          // height="500px"
          id="video"
          // className="video"
          // display="initial"
          position="relative"
        />

        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={this.state.items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </div>
    );
  }
}

export default Header;
