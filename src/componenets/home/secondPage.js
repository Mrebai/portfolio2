import React, {Component} from 'react'
import Slider from 'react-slick'
class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const
            settings =  {
                fade:false,
                lazyLoad:false,
                arrows:true,
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,



            };

        return (
            <div className="container page1Container">
                <div className="sectionTitle .bg-info"> <h2> <i className=" text-info fas fa-folder-open"></i>  Portfolio</h2></div>
                <div className="underline"></div>

                <div className="row">
                    <div className="offset-md-2 col-md-8 mt-4">

                        <Slider   {...settings}>

                            <div className="card portfolioCard">
                               <div className="card-img-top cardImage"></div>
                                    <div className="card-body">
                                        <h5 className="card-title pfTitle">SH  e-commerce</h5>
                                        <p className="card-text pfText text-justify"  style={{fontFamily: "'Source Sans Pro', sans-serif"}}>An e-commerce website based on a psd and built using meteor,react and graphql with a custom admin dashboard.</p>
                                        <a  style={{fontFamily: "'Source Sans Pro', sans-serif"}} target="_blank" rel="noopener noreferrer"  href="https://github.com/Mrebai/SH" className="btn btn-info gitBtn"> <i class="fab fa-github"></i> Go to repository </a>
                                    </div>
                            </div>

                            <div className="card portfolioCard">
                                <div className="card-img-top cardImage2"></div>
                                <div className="card-body">
                                    <h5 className="card-title pfTitle">Avenue Fashion</h5>
                                    <p  style={{fontFamily: "'Source Sans Pro', sans-serif"}} className="card-text pfText text-justify">A website for clothes shop based on meteor with an interface to add,delete and modify clothes.</p>
                                    <a   style={{fontFamily: "'Source Sans Pro', sans-serif"}} target="_blank" rel="noopener noreferrer"  href="https://github.com/Mrebai/AF"  className="btn btn-info gitBtn"> <i class="fab fa-github"></i> Go to repository </a>
                                </div>
                            </div>

                            <div className="card portfolioCard">
                                <div className="card-img-top cardImage3"></div>
                                <div className="card-body ">
                                    <h5 className="card-title pfTitle">Image Hunter</h5>
                                    <p  style={{fontFamily: "'Source Sans Pro', sans-serif"}} className="card-text pfText text-justify">Made for a professional photographer, this website allows the admin to add gallery items, videos or show stream in the website. The client can also reserve a date online and contact the admin directly (Still in development). </p>
                                    <a  style={{fontFamily: "'Source Sans Pro', sans-serif"}} target="_blank" rel="noopener noreferrer"  href="https://github.com/Mrebai/chasseur" className="btn btn-info gitBtn"> <i class="fab fa-github"></i> Go to repository </a>
                                </div>
                            </div>

                        </Slider>
                    </div>
                </div>

            </div>
        )
    }
}

export default Portfolio