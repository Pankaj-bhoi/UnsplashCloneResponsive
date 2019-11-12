import React, { Component } from 'react'
import axios from 'axios';
import Image from './Image';
import '../style/images.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import Masonry from "react-responsive-masonry";
import ImageSingle from './Image';
class Images extends Component {
    state = {
        images: [],
        first: 1,
        last: 25,


    };
    componentDidMount() {
        const { first, last } = this.state;
        axios.get(`/api/photos?last=${last}&first=${first}`)
            .then(res => this.setState({ images: res.data }));
    }
    fetchData = () => {
        const { first, last } = this.state;
        this.setState({ first: this.state.first + last });

        axios.get(`/api/photos?last=${last}&first=${first}`)
            .then(res => this.setState({ images: this.state.images.concat(res.data) }));
    }
    render() {
        console.log(this.state)
        return (

            <div className="images">
                <InfiniteScroll
                    dataLength={this.state.images.length} //This is important field to render the next data
                    next={this.fetchData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                >

                    {this.state.images.map(img => (
                        <ImageSingle key={img.id} image={img} className="images" />
                    ))}
                </InfiniteScroll>

            </div>
        )
    }
}
export default Images;
{/* <InfiniteScroll
                    dataLength={this.state.images.length}
                    next={this.renderImage}
                    next={this.renderImage}
                    hasMore={true}
                >
                    {this.state.images.map(img => (
                        <Image key={img.id} image={img} />
                    ))}
                </InfiniteScroll> */}