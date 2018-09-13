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
      <div style={{ paddingTop: "90px" }} className="container-fluid" >
        <div className="row">
          <div id="video" className="col-sm-12 col-md-12 col-lg-8">
            <Iframe
              url="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FIntervaloNicaragua%2Fvideos%2F1930482583921600%2F&show_text=0"
              data-autoplay="true"
              position="relative"
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <header id="countdown">
              <h6 className="h1i">¡ Days Since Protest !</h6>

              <h5 className="h2i">

                <em>Happening Now</em>
              </h5>

              <ul>
                <li>481 People Murdered</li>
                <li>3,962 People Injured</li>
                <li>1,338 Kidnapped or Missing</li>
              </ul>
            </header>

          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
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
        </div>
      </div >
    );
  }
}

export default Header;
