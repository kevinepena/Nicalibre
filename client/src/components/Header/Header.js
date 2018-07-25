// what components are we importing?

// import "./Header.css";

import React from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  // {
  //   id: 1,
  //   altText: 'Slide 1',
  //   header: 'Breaking News!',
  //   caption: 'Rubios warns of possible civil war',
  //   src:'https://static.politico.com/dims4/default/9b1b076/2147483647/resize/971x/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2Fc6%2Fb3%2Faf825a814607a93afd8b94e0f840%2F180722-marco-rubio-ap-1160.jpg'
  // },
  // {
  //   id: 2,
  //   altText: 'Slide 2',
  //   caption: 'Destroying Nicaraguan democracy from the inside',
  //   header: 'Daniel Ortega' ,
  //   src: 'https://www.thenation.com/wp-content/uploads/2018/06/nicaragua_protests_rtr_img.jpg?scale=896&compress=80'
  // },
  // {
  //   id: 3,
  //   altText: 'Slide 3',
  //   caption: 'in Nicaragua Crisis',
  //   header: 'Church Becomes Target',
  //   src: ' https://www.vaticannews.va/content/dam/vaticannews/agenzie/images/afp/2018/07/14/20/nicaragua-unrest-students-1531593755365.jpg/jcr:content/renditions/cq5dam.thumbnail.cropped.750.422.jpeg',
  // },
  {
    _id: 1,
    header: "Nicaraguan torture victims say Venezuelan and Cuban accents have been heard in prisons",
    src: "https://www.miamiherald.com/latest-news/yo79mf/picture214867100/alternates/LANDSCAPE_1140/NNN13%20Nicaragua%20News%20rk.JPG",
    link: "https://www.miamiherald.com/news/nation-world/world/americas/article214863255.html",
    caption: "Source: Washington Post"
  },
  {
    _id: 2,
    header: "Nicaragua: State repression has reached deplorable levels",
    link: "https://www.amnesty.org/en/latest/news/2018/07/nicaragua-represion-estatal-ha-llegado-a-niveles-deplorables/",
    src: "https://www.amnesty.org/remote.axd/aineupstrmedia.blob.core.windows.net/media/18575/inti-ocon-afp-getty-images.jpg?preset=fixed_1472_42_hi",
    caption: "Source: Amnesty"
  },
  {
    _id: 3,
    header: "Nicaragua is following Venezuela’s path to despair",
    link: "https://www.washingtonpost.com/opinions/nicaragua-is-following-venezuelas-path-to-despair/2018/07/11/b2e9ba38-846b-11e8-9e80-403a221946a7_story.html?noredirect=on&utm_term=.5710ed4a4d93",
    src: "https://www.washingtonpost.com/resizer/cMyDMgionXkb_NCaTqRIr9v9zS4=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/ZCAMIGUFIUI6RBKTUPHISA3MPA.jpg",
    caption: "Source: Washington Post"
  },
  {
    _id: 4,
    header: "Trump administration: Nicaragua’s Daniel Ortega & family need to ‘get out of the way’",
    link: "https://www.mcclatchydc.com/news/politics-government/white-house/article214790385.html",
    src: "https://www.mcclatchy-wires.com/incoming/vb6m76/picture214523579/alternates/LANDSCAPE_1140/Nicaragua_Protests_33544.jpg",
    caption: "Source: McClatchy DC"
  },
  {
    _id: 5,
    header: "Country so dangerous tourists aren’t going there anymore",
    link: "https://www.news.com.au/travel/travel-updates/warnings/country-so-dangerous-tourists-arent-going-there-anymore/news-story/9958b9fb1df2cd82094ac384120444ea",
    src: "https://cdn.newsapi.com.au/image/v1/fac49a3567e3296f088386b3809d55d3",
    caption: "Source: News"
  },
  {
    _id: 6,
    header: "Nicaragua Protests: American journalist live tweets while trapped during bloody church siege",
    link: "https://www.newsweek.com/nicaraguan-protest-trapped-journalists-students-church-1024572",
    src: "https://ichef.bbci.co.uk/news/624/cpsprodpb/5BB2/production/_102547432_827b734f-3c79-41e9-b4b4-cb90f1f0cc1d.jpg",
    caption: "Source: News Week"
  },
  {
    _id: 7,
    header: "Nicaragua crisis: One student killed as bloody church siege ends",
    link: "https://www.bbc.com/news/world-latin-america-44834188",
    src: "https://ichef.bbci.co.uk/news/660/cpsprodpb/F804/production/_102529436_tv048139894.jpg",
    caption: "Source: BBC"
  },
  {
    _id: 8,
    header: "Deadly siege on Nicaraguan church following months of unrest",
    link: "https://www.nbcnews.com/nightly-news/video/deadly-siege-on-nicaraguan-church-following-months-of-unrest-1277137987607",
    src: "https://ichef.bbci.co.uk/news/624/cpsprodpb/243A/production/_102547290_cca16170-3cba-4be3-af88-b936ba8600e2.jpg",
    caption: "Source: NBC News"
  },
  {
    _id: 9,
    header: "Violent Nicaragua protests claim another 10 lives: rights group",
    link: "https://www.reuters.com/article/us-nicaragua-protests/violent-nicaragua-protests-claim-another-10-lives-rights-group-idUSKBN1K515N",
    src: "https://s3.reutersmedia.net/resources/r/?m=02&d=20180716&t=2&i=1283573129&r=LYNXMPEE6F00M&w=2560",
    caption: "Source: Reuters"
  },
  {
    _id: 10,
    header: "Nicaragua security forces launch deadly raids",
    link: "https://www.bbc.co.uk/news/world-latin-america-44842843",
    src: "https://ichef.bbci.co.uk/news/624/cpsprodpb/6E72/production/_102547282_721258f5-5368-4920-9ff9-f5400dd2e1ce.jpg",
    caption: "Source: BBC"
  },
  {
    _id: 11,
    header: "Ortega is becoming the type of autocrat he once despised",
    link: "https://www.washingtonpost.com/opinions/nicaragua-is-rapidly-heading-for-a-new-nightmare/2018/07/16/049dabd4-890b-11e8-a345-a1bf7847b375_story.html?utm_term=.f43ce9aa1250",
    src: "https://www.washingtonpost.com/resizer/duCVbSVtFU40vLX7MKVZvbtppbw=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/SXAR3OUJHII6RBNOKEN4CFDLBM.jpg",
    caption: "Source: Washinton Post"
  },
  {
    _id: 12,
    header: "Nicaragua unrest: Bishop's anger as people die in clashes",
    link: "https://www.bbc.com/news/world-latin-america-44773068",
    src: "https://ichef.bbci.co.uk/news/660/cpsprodpb/185B/production/_102453260_da37b4c8-80b2-4714-9616-1e6c8751520f.jpg",
    caption: "Source: BBC"
  },
  {
    _id: 13,
    header: "U.S. Imposes Sanctions on 3 Top Nicaraguan Officials After Violent Crackdown",
    link: "https://www.nytimes.com/2018/07/05/us/politics/us-nicaragua-sanctions.html",
    src: "https://static01.nyt.com/images/2018/07/06/us/politics/06dc-sanctions1/merlin_140557677_9899034e-878a-49f1-bfca-bf417d1d28a2-superJumbo.jpg?quality=90&auto=webp",
    caption: "Source: New York Times"
  },
  {
    _id: 14,
    header: "309 Nicaraguans killed in 75 days of anti-government protest",
    link: "https://www.newsweek.com/309-nicaraguans-killed-75-days-anti-government-protests-1007469",
    src: "https://s.newsweek.com/sites/www.newsweek.com/files/styles/full/public/2018/07/03/gettyimages-988303536.jpg",
    caption: "Source: News Week"
  },
  {
    _id: 15,
    header: "U.S. slaps economic sanctions on three top Nicaraguan officials",
    link: "http://www.latimes.com/nation/la-na-pol-us-nicaragua-20180705-story.html",
    src: "http://www.latimes.com/resizer/9heS4Rm8t2CuhAFih8nMlkESgBk=/1400x0/www.trbimg.com/img-5b3e9a02/turbine/la-1530829310-wblntxrau1-snap-image",
    caption: "Source: LA Times"
  },
  {
    _id: 16,
    header: "Nicaragua president attacks 'coup-mongers' in speech",
    link: "https://www.theguardian.com/world/2018/jul/08/nicaragua-president-daniel-ortega-attacks-coup-mongers-in-speech",
    src: "https://i.guim.co.uk/img/media/7ea890f7a3e0367c06e52d8e047dd8db262d1a5e/19_356_3169_1902/master/3169.jpg?w=700&q=55&auto=format&usm=12&fit=max&s=89875c85858c0899ba2c2d24433d7dab",
    caption: "Source: Guardian"
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
          key={item._id}
          onExiting={this.onExiting}
          onExited={this.onExited}
    
        >
        <a href={item.link} target="_blank">
        <img className="slideimage" src={item.src} alt={item.altText} />
          <CarouselCaption className="caption" captionText={item.caption} captionHeader={item.header} href={this.href} />
          </a>
        </CarouselItem>
      );
    });

    return (
      <div>
        <style>
          {
            `.custom-tag {
               width: 100% !important;
                height: 500px;
    
              }
              .slideimage {
                object-fit: cover !important;
               width: 100% !important;
               height: 500px;

                  }
              .carousel{
                width: 100% !important;
                margin: 2em 0;
              }
              
              .caption{
                font-family: 'Lato', sans-serif !important;
                font-size: 4vh;
                font-weight: 600;
                opacity:1;
                color: white;
                text-shadow: 2px 3px 6px black;
                {/* background:  rgba(255, 255, 255, .5); */}
                padding: .2em 0 0;
                }`
          }
        </style>
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
