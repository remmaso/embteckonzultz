export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <section id="header1">
                  <p></p>
                  <a href ="https://embtitcoursesapp.herokuapp.com" className="button">Read More</a>
                </section>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
