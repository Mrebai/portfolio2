import React, {Component} from 'react'

class Page1 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className=" container page1Container">
                <div className="sectionTitle .bg-info"> <h2> <i className=" text-info fas fa-graduation-cap"></i> Education</h2></div>
                <div className="underline"></div>

                <div className="card text-center mt-4">
                    <div className="card-header eduCardHeader">
                        2012 - 2015
                    </div>
                    <div className="card-body">
                        <h5 className="card-title edCardTitle text-justify">Bachelor degree in electronics, electrotechnics and automatic</h5>
                        <p className="card-text edCardText container text-justify"  style={{fontFamily: "'Source Sans Pro', sans-serif"}}> End of year project: Text encryption algorithm using embedded C. The program allows the user to securely encrypt/decrypt any text or txt file using  asymmetric cryptography with minimal increase in file size.  </p>

                    </div>
                    <div  style={{fontFamily: "'Source Sans Pro', sans-serif"}} className="card-footer edCardFooter text-muted">
                         FST Manar University
                    </div>
                </div>

                <div className="card text-center mt-4">
                    <div className="card-header eduCardHeader">
                        2015 - 2018
                    </div>
                    <div className="card-body">
                        <h5 className="card-title edCardTitle text-justify">Master's degree in electronics, electrical engineering and automation. </h5>
                        <p className="card-text edCardText container text-justify"  style={{fontFamily: "'Source Sans Pro', sans-serif"}}> Master's thesis: Embedded system for monitoring and tracking elderly and alzheimer’s patients in real time.   </p>

                    </div>
                    <div  style={{fontFamily: "'Source Sans Pro', sans-serif"}} className="card-footer edCardFooter text-muted">
                        FST Manar University
                    </div>
                </div>
            </div>
        )
    }
}

export default Page1
