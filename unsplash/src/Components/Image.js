import React from 'react';
import '../style/image.css';
import { Row, Col } from 'react-bootstrap';

// class Image extends Component {
//     constructor(props) {
//         super(props)
//         var image = [];
//         image.push(props)
//         console.log(image);
//     }
// }
// export default Image;
export default function Image({ image }) {
    return (
        <img className="single-photo" src={image.urls.thumb} alt="" />
    )
}

// const Image = ({ image }) => {

//     return (
//         <Row>
//             <Col>
//                 <img className="single-photo" src={image.urls.thumb} alt="" />
//             </Col>
//         </Row>
//     )
// }
// export default Image;
