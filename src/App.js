import React, { Component } from 'react';
import './App.css';
import Slider from 'react-slick'
import Page1 from './componenets/home'
import Fiestpage from './componenets/home/firstPage'
import EmptyFiestpage from './componenets/home/emptyFirstPage'
import Portfolio from  './componenets/home/secondPage'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {currentSlide:0 , currentSlide2:0};
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
  render() {
      const
          settings =  {
              fade:true,
              lazyLoad:false,
              arrows:false,
          autoplay: false,

          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          pauseOnHover: false,
              beforeChange: (current, next) => this.setState({ activeSlide2: next }),
          afterChange: current => this.setState({ currentSlide: current }),
              initialSlide:0


      };

    return (
      <div className="App">
            <div className="row">
                <div className="col-md-3 menu">
                    <img className='myImage' src="/photo.png" alt=""/>
                    <h1 className='lead name mt-2' > Ala Edine Mrebai</h1>
                    <p className=' role' style={{fontFamily: "'Source Sans Pro', sans-serif"}}>Full stack Node, React, Mongo, Apollo developer</p>
                    <div className='contactContainer'>
                        <p> <i  className=" text-info mr-4 icon fas fa-phone"></i> +216 95 355 010    </p>
                        <p style={{fontFamily: "'Source Sans Pro', sans-serif"}}> <i class=" text-info mr-4 fas icon fa-envelope"></i >     aladinmrebai@gmail.com</p>
                        <p  style={{fontFamily: "'Source Sans Pro', sans-serif"}}> <i class=" text-info mr-4 fab icon fa-skype"></i>     live:alaedinemrebai</p>

                    </div>


                    <div className=" nextPrev d-flex flex-row">
                        <button  style={{fontFamily: "'Source Sans Pro', sans-serif"}} onClick={this.previous} className="btn btn-info"> PREVIOUS</button>
                        <button  style={{fontFamily: "'Source Sans Pro', sans-serif"}} onClick={this.next} className="btn btn-info"> NEXT</button>

                    </div>


                </div>
                <div className="col-md-9">
                    <Slider   ref={a => (this.slider = a)} {...settings}>

                        <div key={0} id='slide1' className='portfolioSlide'  >
                            <Page1/>


                        </div>

                        <div key={1} id='slide2' className='portfolioSlide'  >
                            {
                                (this.state.currentSlide === 1 &&  this.state.currentSlide2 !== 2   )?       <Fiestpage slide ={this.state.currentSlide2}/>: <EmptyFiestpage/>
                            }
                        </div>

                        <div key={2} id='slide3' className='portfolioSlide'  >
                            <Portfolio/>
                        </div>


                    </Slider>
                </div>
            </div>

      </div>
    );
  }
}

export default App;
