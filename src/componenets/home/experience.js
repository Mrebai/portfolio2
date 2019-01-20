import React, {Component} from 'react'

class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className=" container page1Container">
                <div className="sectionTitle .bg-info"> <h2> <i className=" text-info fas fa-graduation-cap"></i> Experience </h2></div>
                <div className="underline"></div>

                <div className="card text-center mt-4">
                    <div className="card-header eduCardHeader">
                        Nov 2018 - Now
                    </div>
                    <div className="card-body">
                        <h5 className="card-title edCardTitle text-justify">Internship at MAGNiTT</h5>
                        <p className="card-text edCardText container text-justify"  style={{fontFamily: "'Source Sans Pro', sans-serif"}}>
                            Being a UI designer and developer at MAGNiTT allowed me to boost my set of skills like UI and UX design, team communication, tasks management and better optimized practices thanks to the skilled team of developers that I'm working with.

                        </p>

                    </div>
                    <div  style={{fontFamily: "'Source Sans Pro', sans-serif"}} className="card-footer edCardFooter text-muted">
                        MAGNiTT.com
                    </div>
                </div>

            </div>
        )
    }
}

export default Experience
