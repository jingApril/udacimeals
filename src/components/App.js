import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addRecipe, removeFromCalendar } from  '../actions'

class App extends Component {
    doThing = () => {
        this.props.dispatch(addRecipe({}))
    }

  render() {
      console.log('Props', this.props)
    return (
      <div>
          Hello World
      </div>
    )
  }
}
function mapStateToProps(calendar) {
    const dayOrder =['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    return{
        calendar:dayOrder.map((day) => ({
            day,
            meals: Object.keys(calendar[day]).reduce((meals, meal) => {
                meals[meal] = calendar[day][meal] ? calendar[day][meal] : null
                return meals
            },{})
        }))
    }
}

function mapDispatchToProps (dispatch) {
    return{
        selectRecipe: (data)  => dispatch(addRecipe(data)),
        remove: (data) => dispatch(removeFromCalendar(data)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
