/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './AdsInDetail.css';
import Header from '../../components/Header/Header';
import Categories from '../../components/Categories/Categories.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import StaticMap from './staticmap.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { chat_toggle, chat_toggle_other } from '../../store/action';

class AdsInDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show_num: false,
            ad_data: this.props.location.data,
        }
    }
    show_num = () => {
        this.setState({
            show_num: true,
        })
    }




    render() {
        let value = this.props.location.data;
        // console.log(this.props)
        // console.log(this.state.ad_data)
        return (

            <div>
                <Header />
                <Categories />

                <div className="container">
                    <div className="row my-5">
                        <div className="col-8">
                            <div className=''>
                                <div className='bor'>
                                    <div className='carousel_style'>
                                        <Carousel>
                                            <div>
                                                <img src={value.url} alt='Product Image' width='auto' height='auto' />
                                            </div>
                                            {/* <div>
                                                <img src="" alt='Product Image'/>
                                            </div>
                                            <div>
                                                <img src="" alt='Product Image'/>
                                            </div> */}
                                        </Carousel>
                                    </div>
                                </div>
                                <div className='bor'>
                                    <div className='des'>
                                        <p>Description</p>
                                    </div>
                                    <div>
                                        <span> {value.description} </span>
                                    </div>
                                </div>
                                <div className='bor'>
                                    <div className='rel_ad'>
                                        <p>Related ads</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-4">
                            <div>
                                <div className='bor'>
                                    <div className='pr'>
                                        <div>
                                            <h3>Rs {value.price}</h3>
                                        </div>
                                        <div className='share_heart'>
                                            <span className='share'><ShareOutlinedIcon /></span>
                                            <span className='heart'><FavoriteBorderOutlinedIcon /></span>
                                        </div>
                                    </div>
                                    <div className='ad_name'>
                                        <p>{value.title}</p>
                                    </div>
                                    <div className='ad_location'>
                                        <span className=''>{value.city}, {value.stateNameFull}</span>
                                    </div>
                                </div>


                                <div className='bor'>
                                    <div className='seller'>
                                        <p>Seller Description</p>
                                    </div>
                                    <div className='seller_profile'>
                                        <div className='seller_img_name'>
                                            <div className='seller_img'>
                                                <img src={value.seller_photo} alt="User Image" />
                                            </div>
                                            <div className='seller_name'>
                                                <div className='seller_name_span'>
                                                    <span>{value.ad_user}</span>
                                                </div>
                                                <div className='member'>
                                                    <span>Member</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='right_arrow'>
                                            <KeyboardArrowRightOutlinedIcon style={{ fontSize: '40px' }} />
                                        </div>
                                    </div>
                                    <div className='chat_with_seller'>
                                        <Link to={{ pathname: "/chat", data: value }} onClick={() => {
                                            this.props.chat_toggle(this.state.ad_data, this.props.current_user.uid);
                                            this.props.chat_toggle_other(this.state.ad_data);
                                        }}>
                                            <button type="submit" >Chat With Seller</button>
                                        </Link>
                                    </div>
                                    <div className='seller_number'>
                                        <div>
                                            <span><CallOutlinedIcon /></span>
                                            {(this.state.show_num === false) && (
                                                <span>
                                                    <span className='dummy_num'>** *** ****</span>
                                                    <span className='show_num' onClick={this.show_num}>Show Number</span>
                                                </span>
                                            )}
                                            {this.state.show_num && (
                                                <span>
                                                    <span className='show_num'>+923001234567</span>
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className='bor'>
                                    <div className='posted'>
                                        <p>Posted in</p>
                                    </div>
                                    <div className='ad_location_map'>
                                        <span>{value.city}, {value.stateNameFull}</span>
                                    </div>
                                    <div className='map_snapshot'>
                                        <span>
                                            <img src={StaticMap} alt="" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    current_user: state.auth.current_user,
})

const mapDispatchToProps = (dispatch) => ({
    chat_toggle: (data, own_uid) => dispatch(chat_toggle(data, own_uid)),
    chat_toggle_other: (data) => dispatch(chat_toggle_other(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AdsInDetail);