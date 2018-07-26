import React, { Component } from "react";
import "./Gallery.css";
import { CloudinaryContext, Image } from "cloudinary-react";
import axios from "axios";

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gallery: []
        };
    }
    componentDidMount() {
        axios
            .get('https://res.cloudinary.com/matsi/image/list/nica.json')
            .then(res => {
                this.setState({ gallery: res.data.resources });
            });
    }

    render() {
        return (
            <div className="main">
                <h1 className="warning">Graphic Content : Proceed with Caution</h1>
                <div className="gallery ">
                    <CloudinaryContext cloudName="matsi">
                        {
                            this.state.gallery.map(data => {
                                return (
                                    <div className="responsive zoom overlay" key={data.public_id}>
                                        <div className="img ">
                                            <a target="_blank" href={`https://res.cloudinary.com/matsi/image/upload/${data.public_id}.jpg`}>
                                                <Image publicId={data.public_id}>
                                                    {/* <Transformation
                                                crop="scale"
                                                width="300"
                                                height="200"
                                                dpr="auto"
                                                responsive_placeholder="blank"
                                            /> */}
                                                </Image>
                                            </a>
                                            {/* <div className="desc">Created at {data.created_at}</div> */}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </CloudinaryContext>
                    <div className="clearfix"></div>
                </div>
            </div>
        );
    }
}

export default Gallery;