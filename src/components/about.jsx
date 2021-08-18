import React, { Component } from 'react'

export class about extends Component {
  render() {
    return (
        <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6"> <img src="img/images.jpg" className="img-responsive" alt=""/> </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>Enroll Today</h2>
                <p>{this.props.data ? this.props.data.paragraph : 'loading...'}</p>
                <h3>Why Choose Us?</h3>
                <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {this.props.data ? this.props.data.Why.map((d, i) => <li  key={`${d}-${i}`}>{d}</li>) : 'loading'}
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                    {this.props.data ? this.props.data.Why2.map((d, i) => <li  key={`${d}-${i}`}> {d}</li>) : 'loading'}
                    <section id="header1">
                  <p></p>
                  <a href ="https://embtitcoursesapp.herokuapp.com" className="button">Read More</a>
                </section>{' '}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    <section id="icon-boxes" class="p-5">
    <div className="container">
      <div className="row mb-4">
        <div className="col-md-4">
          <div className="card bg-danger text-white text-center">
            <div className="card-body">
              <i className="fas fa-building fa-3x"></i>
              <h1>Vision</h1>
              <p>To serve the mini, micro and small-scale enterprises (MMSE) and persons whose needs may not adequately be met by/through conventional Institutions/practices</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-dark text-white text-center">
            <div className="card-body">
              <i className="fas fa-bullhorn fa-3x"></i>
              <h1>Mission</h1>
              <p>To provide cutting-edge, tailor-made but unique solutions to our varied clientele in a timely manner; always aware that one-size-fits-all don’t work in this segment of the market</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-danger text-white text-center">
            <div className="card-body">
              <i className="fas fa-comments fa-3x"></i>
              <h1>Core Values</h1>
             <p> Excellence Modeled on Beauty, Transparency, Ethical values and good Conscience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    </div>
      
    )
  }
}

export default about
