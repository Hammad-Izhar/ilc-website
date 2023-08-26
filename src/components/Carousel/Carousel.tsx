interface CarouselProps {
    images: string[];
}

const Carousel = ({ images }: CarouselProps) => {
    return (
        <div className="carousel py-10 w-full">
            {images.map((image, idx) => (
                <div
                    id={`slide${idx}`}
                    className="carousel-item relative w-full"
                    key={idx}
                >
                    <img src={image} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a
                            href={`#slide${
                                (((idx - 1) % images.length) + images.length) %
                                images.length
                            }`}
                            className="btn btn-circle"
                        >
                            ❮
                        </a>
                        <a
                            href={`#slide${(idx + 1) % images.length}`}
                            className="btn btn-circle"
                        >
                            ❯
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Carousel;
