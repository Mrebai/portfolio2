import React, { Component } from 'react';
import './App.css';
import Slider from 'react-slick'
import Page1 from './componenets/home'


class App extends Component {
  render() {
      const
          settings =  {
              fade:true,
          autoplay: true,
          autoplaySpeed: 5000,
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          pauseOnHover: false,

          afterChange: current => this.setState({ currentSlide: current }),
              initialSlide:0


      };
    return (
      <div className="App">
            <div className="row">
                <div className="col-md-3 menu">
                    <img className='myImage' src="/photo.png" alt=""/>
                    <h1 className='lead name mt-2'> Ala Edine Mrebai</h1>
                    <p className=' role'>Full stack Node, React, Graphql, Apollo developer</p>
                    <div className='contactContainer'>
                        <p> <i  className=" text-info mr-4 icon fas fa-phone"></i> +216 95 355 010    </p>
                        <p> <i class=" text-info mr-4 fas icon fa-envelope"></i>     aladinmrebai@gmail.com</p>
                        <p> <i class=" text-info mr-4 fab icon fa-skype"></i>     live:alaedinemrebai</p>

                    </div>


                    <div className=" nextPrev d-flex flex-row">
                        <button className="btn btn-info"> PREVIOUS</button>
                        <button className="btn btn-info"> NEXT</button>

                    </div>


                </div>
                <div className="col-md-9">
                    <Slider   ref={a => (this.slider1 = a)} {...settings}>

                        <div key={0} id='slide1' className='portfolioSlide'  >
                            <Page1/>


                        </div>

                        <div key={1} id='slide2' className='portfolioSlide'  >
                            <img src="/photo.png" alt=""/>


                        </div>

                        <div key={2} id='slide3' className='portfolioSlide'  >
                            <img src="/photo.png" alt=""/>

                        </div>

                        <div key={3} id='slide4' className='portfolioSlide'  >

                            <img src="/photo.png" alt=""/>
                        </div>
                    </Slider>
                </div>
            </div>

      </div>
    );
  }
}

export default App;
