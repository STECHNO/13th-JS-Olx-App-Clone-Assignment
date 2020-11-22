import React from 'react';
import '../Sell.css';
import { connect } from 'react-redux';
import { ad_location_state, ad_location_city } from '../../../store/action'



class List extends React.Component {
    constructor(){
        super()
        this.state = {
            st_filed_mandatory_text: '',
        }
    }

    st_filed_mandatory = (e) => {
        this.setState({
            st_filed_mandatory_text: e,
        })
    }

    render() {
        // console.log(this.props)
        return (
            <div>
                <div className='location_state_div'>
                    <label >State *</label>
                    <div>

                        <select className="form-control form-control-lg state_form" onChange={(e) => {
                            // console.log(e.target.selectedOptions[0].innerHTML);
                            this.props.ad_location_state(e.target.selectedOptions[0].innerHTML, e.target.value);
                            }}>
                            <option></option>
                            <option  value='ak'>Azad Kashmir</option>
                            <option value='ba'>Balochistan</option>
                            <option value='isl'>Islamabad Capital Territory</option>
                            <option value='kpk'>Khyber Pakhtunkhwa</option>
                            <option value='na'>Northern Areas</option>
                            <option value='pb'>Punjab</option>
                            <option value='sd'>Sindh</option>
                        </select>
                    </div>
                </div>

                { (this.props.stateName != null) && (
                    <div className='location_state_div'>
                        <label >City *</label>
                        <div>
                            <select className="form-control form-control-lg state_form" onChange={(e) => {
                                this.st_filed_mandatory(e.target.value);
                                this.props.ad_location_city(e.target.value)
                                }} >
                                {this.props[this.props.stateName].map((v, i) => {
                                    return <option key={i} value={v}>{v}</option>
                                })}
                            </select>
                        </div>
                    </div>
                )}



                {(this.state.st_filed_mandatory_text === '') && (
                    <div className='mandatory_field'>
                    <p>This field is mandatory</p>
                </div>
                )}

            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    stateName: state.app.stateName,
    ak: state.app.ak,
    ba: state.app.ba,
    isl: state.app.isl,
    kpk: state.app.kpk,
    na: state.app.na,
    pb: state.app.pb,
    sd: state.app.sd,
})

const mapDispatchToProps = (dispatch) => ({
    ad_location_state: (a,b) => dispatch(ad_location_state(a,b)),
    ad_location_city: (data) => dispatch(ad_location_city(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(List);