import {connect} from 'react-redux'
import DateSelection from '../Components/dateSelection'
import {dateSelect} from '../Services/Actions/actions'

const mapStateToProps=state =>({

})
const mapDispatchToProps=dispatch=>({
    displaySelectedDate:data=>dispatch(dateSelect(data))
})

export default connect(mapStateToProps, mapDispatchToProps) (DateSelection)