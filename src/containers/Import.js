import { connect } from 'react-redux'
import Import from '../components/Import'
import { fetchMakes, deleteMake } from '../redux/actions'


const mapStateToProps = ( state ) => {
    return {
        makes: state.makes
    }
}

const mapDispatchToProps = ( dispatch ) => ({
        fetchMakes: () => dispatch(fetchMakes()),
        deleteMake: (id) => dispatch(deleteMake(id))
    })

export default connect(mapStateToProps, mapDispatchToProps)(Import)