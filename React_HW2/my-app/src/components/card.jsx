const Card = (props) => {


  return (<div class="card">
    <div class="image__container">
      <img
        src="https://ultimatecourses.com/assets/share/courses/react-f02200115da09fd485a296e351972d7ea75701ed8d3d023d9f18c4b38e6b18b0.png"
        alt=""
      />
      <div class="level">Beginner</div>
    </div>
    <h3 class="card__title">Introduction Basic Programming HTML & CSS</h3>

    <div class="card__info">
      <div class="user">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
          alt="John Doe"
        />
        <p>John Doe</p>
      </div>
      <div class="rating">
        <p>4.5</p>
      </div>
    </div>

    {props.cource.isMyCource ? (
      <div>
        <progress value="50" max="100">
          50%
        </progress>
        <div class="card__info">
          <p>5 / 10 Modules</p>
          <div>50 %</div>
        </div>
      </div>) : (

      <div class="card__info">
        <div>1234 Student</div>
        <div>5 Modules</div>
        <div>1h 30m</div>
      </div>)}
  </div> 
  )

}

export default Card;