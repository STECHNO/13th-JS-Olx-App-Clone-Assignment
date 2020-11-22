import React from 'react';
import '../Sell.css';
import { connect } from 'react-redux';
import { ad_location_state, ad_location_city } from '../../../store/action'







class Location extends React.Component {

    constructor() {
        super()

        this.state = {
            ad_state: ''
        }
    }

    get_state = (e) => {
        this.setState({
            ad_state: e
        })
    }


    render() {
        console.log(this.props)
        return (
            <div>
                <div className=''>
                    <div className='state_div'>
                        <span className='fade_text'>State</span>
                        <span>Sindh</span>
                    </div>
                    <div className='city_div'>
                        <span className='fade_text'>City</span>
                        <span>Karachi</span>
                    </div>
                    <div className='neigh_div'>
                        <span className='fade_text'>Neighbourhood</span>
                        <span>Gulshan-e-Maymar</span>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Location);