// what components are we importing?

import "./Header.css";

import React from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    id: 1,
    altText: 'Slide 1',
    header: 'Breaking News!',
    caption: 'Rubios warns of possible civil war',
    src:'https://static.politico.com/dims4/default/9b1b076/2147483647/resize/971x/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2Fc6%2Fb3%2Faf825a814607a93afd8b94e0f840%2F180722-marco-rubio-ap-1160.jpg'
  },
  {
    id: 2,
    altText: 'Slide 2',
    caption: 'Destroying Nicaraguan democracy from the inside',
    header: 'Daniel Ortega' ,
      src: 'https://www.thenation.com/wp-content/uploads/2018/06/nicaragua_protests_rtr_img.jpg?scale=896&compress=80'

  },
  {
    id: 3,
    altText: 'Slide 3',
    caption: 'in Nicaragua Crisis',
    header: 'Church Becomes Target',
    src: ' https://www.vaticannews.va/content/dam/vaticannews/agenzie/images/afp/2018/07/14/20/nicaragua-unrest-students-1531593755365.jpg/jcr:content/renditions/cq5dam.thumbnail.cropped.750.422.jpeg',
  }
];


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          className="custom-tag"
          tag="div"
          key={item.src}
          onExiting={this.onExiting}
          onExited={this.onExited}
    
        >
        <img className="slideimage" src={item.src} alt={item.altText} />
          <CarouselCaption className="caption" captionText={item.caption} captionHeader={item.header} href={this.href} />
        </CarouselItem>
      );
    });

    return (
      <div>
        
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </div>
    );
  }
}

export default Header;
