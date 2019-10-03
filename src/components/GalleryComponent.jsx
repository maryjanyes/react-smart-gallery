import React, { Component } from 'react';

import { handleAndProcessInitialSource } from '../services/sliderSource';

import ControlsComponent from './ControlsComponent';

export class GalleryComponent extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.initSlides(this.props);
    }

    initSlides(props) {

        const { slides } = props;
        if (this.state && slides.length !== this.state.slides.length || !this.state) {
            this.setState({
                total: slides.length,
                active: 0,
                slides: handleAndProcessInitialSource(slides, {
                    "argument_to_title": "name",
                    "argument_to_desc": undefined // we can also pass nothing
                })
            });
        }
    }

    goPrev() {

        const { slides, active } = this.state;
        if (active > 0) {
            this.setState({
                slides: slides.map((s, index) => {
                    s.active = index === active - 1;
                    return s;
                }),
                active: active - 1
            });
        }
    };

    goNext() {

        const { slides, active } = this.state;
        if (active < this.state.total - 1) {
            this.setState({
                slides: slides.map((s, index) => {
                    s.active = index === active + 1;
                    return s;
                }),
                active: active + 1
            });
        }
    };

    render() {

        const { selectSlide } = this.props;
        if (this.state) {
            var {
                total,
                active,
                slides
                } = this.state;
        }
        const isSliderAreaVisible = (this.state && slides.length > 0);
        return (
            <div className="slider-area">
                {isSliderAreaVisible && (
                    <div className="slider-area--accordion">
                        {slides.map((slide, index) => {
                            return (
                                <section
                                    className={`slide accordion-slide ${slide.active ? "" : "hidden"}`}
                                    onClick={selectSlide} key={index}
                                >
                                    <p className="slide-title">{slide.title}</p>
                                    <p className="slide-description">{slide.description}</p>
                                    <img className="slide-banner" alt="Slide banner" src={slide.imageSrc} />
                                </section>
                            );
                        })}
                    </div>
                )}
                {!isSliderAreaVisible && (
                    <p className="no-slides-text">No slides to show</p>
                )}
                <ControlsComponent
                    {...{
                        prev: this.goPrev.bind(this),
                        next: this.goNext.bind(this),
                        active_slide: active,
                        total_len: total
                    }}
                />
            </div>
        );
    }
}
