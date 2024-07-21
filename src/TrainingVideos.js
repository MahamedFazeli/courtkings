import { CarouselCaption } from "react-bootstrap";
import "./TrainingVideos.css"
import Carousel from 'react-bootstrap/Carousel';
import ReactPlayer from "react-player"

const Trainingvideos = () => {
    const videos = [{
        id: 1,
        title: "Video1",
        src: "https://www.youtube.com/watch?v=oADaM2L1YLc",
        credit: "Video from ILoveBasketBallTV, Ball handling Video",
    },
    {
        id: 2,
        title: "Video2",
        src: "https://www.youtube.com/watch?v=141VfAViMLA",
        credit: "Video from ILoveBasketBallTV, Learn how to Dribble Package",
    },
    {
        id: 3,
        title: "Video3",
        src: "https://www.youtube.com/watch?v=JiD6rZZJMow",
        credit: "Video from ILoveBasketBallTV, Learn how to get past defenders",
    }
    ];

    return (
        <div className="VideoCarousel">
            <div className="title">
                <h1>Training Videos</h1>
            </div>
            <Carousel>
                {videos.map((vids) => {
                    return (
                        <Carousel.Item key={vids.id}>
                            <ReactPlayer
                                url={vids.src}
                                className="react-player"
                                pip={true}
                                controls={true}
                            />
                            <CarouselCaption>
                                <h2>{vids.title}</h2>
                                <p>{vids.credit}</p>
                            </CarouselCaption>
                        </Carousel.Item>
                    );
                })}
            </Carousel>
        </div>
    );
}

export default Trainingvideos;