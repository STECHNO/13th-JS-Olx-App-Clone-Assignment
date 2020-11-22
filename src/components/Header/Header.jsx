/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import profile_image from '../../images/avatar.png';
import sell_btn from '../../images/sell_button.png'
import './Header.css';
import { connect } from 'react-redux';
import { show_user_profile_div, open_location, fb_login, logout } from '../../store/action';
import { Link } from 'react-router-dom';



class Header extends React.Component {
    render() {
        return (
            <div className='container-fluid header_main'>
                <div className='container'>
                    <div className='row'>
                        <div className="col-lg-3 col-md-5 col-sm-6" style={{ padding: 0 }}>
                            <div className='flex-container'>
                                <Link to='/'>
                                    <div className='logo'>
                                        <svg width="48px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon"><path d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>
                                    </div>
                                </Link>
                                <div className='location'>
                                    <div>
                                        <svg width="25px" height="25px" viewBox="0 0 1024 1024" data-aut-id="icon" ><path d="M448 725.333c-152.917 0-277.333-124.416-277.333-277.333s124.416-277.333 277.333-277.333c152.917 0 277.333 124.416 277.333 277.333s-124.416 277.333-277.333 277.333v0zM884.437 824.107v0.021l-151.915-151.936c48.768-61.781 78.144-139.541 78.144-224.192 0-199.979-162.688-362.667-362.667-362.667s-362.667 162.688-362.667 362.667c0 199.979 162.688 362.667 362.667 362.667 84.629 0 162.411-29.376 224.171-78.144l206.144 206.144h60.352v-60.331l-54.229-54.229z"></path></svg>
                                    </div>
                                    <div>
                                        <input className='location-input' type="text" placeholder="Search city, area or locality" />
                                    </div>
                                    <div className='' onClick={() => this.props.open_location()} >
                                        <button type="button" className="location_select_btn">
                                            <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon"  >
                                                <path className="rui-77aaa" d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    {this.props.toggle_location_div && (
                                        <div className='location_div_toggle'>

                                            <div className="row">
                                                <div className="col">
                                                    <div className='current_location_div'>
                                                        <div className='current_location_img'>
                                                            <svg width="48px" height="48px" viewBox="0 0 1024 1024"><path d="M640 512c0 70.692-57.308 128-128 128s-128-57.308-128-128c0-70.692 57.308-128 128-128s128 57.308 128 128zM942.933 469.333h-89.6c-17.602-157.359-141.307-281.064-297.136-298.527l-1.531-0.139v-89.6h-85.333v89.6c-157.359 17.602-281.064 141.307-298.527 297.136l-0.139 1.531h-89.6v85.333h89.6c17.602 157.359 141.307 281.064 297.136 298.527l1.531 0.139v89.6h85.333v-89.6c157.359-17.602 281.064-141.307 298.527-297.136l0.139-1.531h89.6zM512 772.267c-143.741 0-260.267-116.525-260.267-260.267s116.525-260.267 260.267-260.267c143.741 0 260.267 116.525 260.267 260.267v0c0 143.741-116.525 260.267-260.267 260.267v0z"></path></svg>
                                                        </div>
                                                        <div >
                                                            <div className="current_location_text_1">
                                                                <p>Use Current location</p>
                                                            </div>
                                                            <div className='current_location_text_2'>
                                                                <p>Location blocked. Check browser/phone settings.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="col">
                                                    <div className='recent_location_text-div'>
                                                        <span>RECENT LOCATIONS</span>
                                                    </div>
                                                    <div className='locations_headings'>
                                                        <a href="#section" className='locations_div'>
                                                            <div>
                                                                <svg width="24px" height="30px" viewBox="0 0 1024 1024"><path d="M512 85.333c211.755 0 384 172.267 384 384 0 200.576-214.805 392.341-312.661 469.333v0h-142.656c-97.856-76.992-312.683-268.757-312.683-469.333 0-211.733 172.267-384 384-384zM512 170.667c-164.672 0-298.667 133.973-298.667 298.667 0 160.021 196.885 340.523 298.453 416.597 74.816-56.725 298.88-241.323 298.88-416.597 0-164.693-133.973-298.667-298.667-298.667zM512.006 298.66c94.101 0 170.667 76.565 170.667 170.667s-76.565 170.667-170.667 170.667c-94.101 0-170.667-76.565-170.667-170.667s76.565-170.667 170.667-170.667zM512.006 383.994c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>
                                                            </div>
                                                            <span>Friends Royal City</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="col">
                                                    <div className='recent_location_text-div'>
                                                        <span>POPULAR LOCATIONS</span>
                                                    </div>
                                                    <div className='locations_headings_2'>
                                                        <a href="#section" className='locations_div'>
                                                            <div>
                                                                <svg width="24px" height="30px" viewBox="0 0 1024 1024"><path d="M512 85.333c211.755 0 384 172.267 384 384 0 200.576-214.805 392.341-312.661 469.333v0h-142.656c-97.856-76.992-312.683-268.757-312.683-469.333 0-211.733 172.267-384 384-384zM512 170.667c-164.672 0-298.667 133.973-298.667 298.667 0 160.021 196.885 340.523 298.453 416.597 74.816-56.725 298.88-241.323 298.88-416.597 0-164.693-133.973-298.667-298.667-298.667zM512.006 298.66c94.101 0 170.667 76.565 170.667 170.667s-76.565 170.667-170.667 170.667c-94.101 0-170.667-76.565-170.667-170.667s76.565-170.667 170.667-170.667zM512.006 383.994c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>
                                                            </div>
                                                            <span>Friends Royal City</span>
                                                        </a>
                                                    </div>
                                                    <div className='locations_headings_2'>
                                                        <a href="#section" className='locations_div'>
                                                            <div>
                                                                <svg width="24px" height="30px" viewBox="0 0 1024 1024"><path d="M512 85.333c211.755 0 384 172.267 384 384 0 200.576-214.805 392.341-312.661 469.333v0h-142.656c-97.856-76.992-312.683-268.757-312.683-469.333 0-211.733 172.267-384 384-384zM512 170.667c-164.672 0-298.667 133.973-298.667 298.667 0 160.021 196.885 340.523 298.453 416.597 74.816-56.725 298.88-241.323 298.88-416.597 0-164.693-133.973-298.667-298.667-298.667zM512.006 298.66c94.101 0 170.667 76.565 170.667 170.667s-76.565 170.667-170.667 170.667c-94.101 0-170.667-76.565-170.667-170.667s76.565-170.667 170.667-170.667zM512.006 383.994c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>
                                                            </div>
                                                            <span>North Karachi</span>
                                                        </a>
                                                    </div>
                                                    <div className='locations_headings_2'>
                                                        <a href="#section" className='locations_div'>
                                                            <div>
                                                                <svg width="24px" height="30px" viewBox="0 0 1024 1024"><path d="M512 85.333c211.755 0 384 172.267 384 384 0 200.576-214.805 392.341-312.661 469.333v0h-142.656c-97.856-76.992-312.683-268.757-312.683-469.333 0-211.733 172.267-384 384-384zM512 170.667c-164.672 0-298.667 133.973-298.667 298.667 0 160.021 196.885 340.523 298.453 416.597 74.816-56.725 298.88-241.323 298.88-416.597 0-164.693-133.973-298.667-298.667-298.667zM512.006 298.66c94.101 0 170.667 76.565 170.667 170.667s-76.565 170.667-170.667 170.667c-94.101 0-170.667-76.565-170.667-170.667s76.565-170.667 170.667-170.667zM512.006 383.994c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>
                                                            </div>
                                                            <span>Rufi Lake Drive Apartments</span>
                                                        </a>
                                                    </div>
                                                    <div className='locations_headings_2'>
                                                        <a href="#section" className='locations_div'>
                                                            <div>
                                                                <svg width="24px" height="30px" viewBox="0 0 1024 1024"><path d="M512 85.333c211.755 0 384 172.267 384 384 0 200.576-214.805 392.341-312.661 469.333v0h-142.656c-97.856-76.992-312.683-268.757-312.683-469.333 0-211.733 172.267-384 384-384zM512 170.667c-164.672 0-298.667 133.973-298.667 298.667 0 160.021 196.885 340.523 298.453 416.597 74.816-56.725 298.88-241.323 298.88-416.597 0-164.693-133.973-298.667-298.667-298.667zM512.006 298.66c94.101 0 170.667 76.565 170.667 170.667s-76.565 170.667-170.667 170.667c-94.101 0-170.667-76.565-170.667-170.667s76.565-170.667 170.667-170.667zM512.006 383.994c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>
                                                            </div>
                                                            <span>Karachi Motorway</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                </div>

                            </div>

                        </div>
                        <div className="col-lg-6 col-md-4 col-sm-6" style={{ padding: 0 }}>
                            <div className="flex-container">
                                <div className='search'>
                                    <div className='big_search' >
                                        <input type="text" placeholder='Find Cars, Mobile Phones and more...' />
                                    </div>
                                    <div className='search_btn'>
                                        <span style={{ marginTop: 10, marginLeft: 12, marginBottom: 10, marginRight: 12 }}>
                                            <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon">
                                                <path className="s_b" d="M448 725.333c-152.917 0-277.333-124.416-277.333-277.333s124.416-277.333 277.333-277.333c152.917 0 277.333 124.416 277.333 277.333s-124.416 277.333-277.333 277.333v0zM884.437 824.107v0.021l-151.915-151.936c48.768-61.781 78.144-139.541 78.144-224.192 0-199.979-162.688-362.667-362.667-362.667s-362.667 162.688-362.667 362.667c0 199.979 162.688 362.667 362.667 362.667 84.629 0 162.411-29.376 224.171-78.144l206.144 206.144h60.352v-60.331l-54.229-54.229z"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-3 col-md-3 col-sm-12" style={{ padding: 0 }}>
                            <div className="flex-container">
                                <div className='user_panel'>

                                    {this.props.toggle_login && (
                                        <div prop='yes' className='login_div' onClick={() => this.props.fb_login()}>
                                            <a href="#">Login</a>
                                        </div>
                                    )}


                                    {this.props.toggle_user_panel && (
                                        <div className='three_icons' >
                                            <Link className="chat_icon" to='/chat'>
                                                <button type="button" className="chat_icon_btn">
                                                    <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon">
                                                        <path className="rui-77aaa" d="M469.333 171.119c-164.693 0-298.667 134.684-298.667 300.25v359.529l108.907-54.753 19.093-4.525h256c164.693 0 298.667-134.684 298.667-300.25s-133.973-300.25-298.667-300.25h-85.333zM147.093 938.667l-61.76-38.368v-428.929c0-212.856 172.267-386.036 384-386.036h85.333c211.733 0 384 173.18 384 386.036s-172.267 386.036-384 386.036h-245.931l-161.643 81.261z"></path>
                                                    </svg>
                                                </button>
                                            </Link>
                                            <div data-aut-id="notificationHub">
                                                <div data-aut-id="notificationContainer">
                                                    <button type="button" className="chat_notify_btn">
                                                        <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon">
                                                            <path d="M730.855 763.955h-435.559c-0.833-87.945-2.676-279.627-2.676-289.496 0-119.351 98.911-216.463 220.498-216.463s220.455 97.112 220.455 216.463c0 10-1.843 201.594-2.72 289.496v0zM819.282 748.603c0.92-93.341 2.062-266.38 2.062-274.144 0-141.589-98.692-260.545-231.64-294.319 2.192-7.237 3.684-14.782 3.684-22.765 0-44.345-35.969-80.27-80.27-80.27-44.345 0-80.27 35.923-80.27 80.27 0 7.983 1.491 15.483 3.684 22.765-132.948 33.731-231.64 152.687-231.64 294.319 0 7.721 1.14 182.339 2.019 276.030l-90.27 36.581 0.92 64.609h316.032c3.729 40.881 37.679 73.031 79.523 73.031s75.794-32.151 79.523-73.031h312.962l1.754-64.523-88.078-38.556z"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <div onClick={() => this.props.show_user_profile_div()} className='profile_image' >

                                                        {(this.props.user.photo !== undefined) && (
                                                            <img className='img_border' src={this.props.user.photo} alt="profile_image" width='35' height='35' />
                                                        )}
                                                        {(this.props.user.photo === undefined) && (
                                                            <img className='img_border' src={profile_image} alt="profile_image" width='35' height='35' />
                                                        )}
                                                        <svg width="20px" height="20px" viewBox="0 0 1024 1024">
                                                            <path d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path>
                                                        </svg>
                                                        {this.props.toggle_profile_div && (
                                                            <div className='user_profile_div'>
                                                                <div className='row user_first_div'>
                                                                    <div className="col-3">
                                                                        <div>
                                                                            {(this.props.user.photo !== undefined) && (
                                                                                <img className='img_border' src={this.props.user.photo} alt="profile_image" width='35' height='35' />
                                                                            )}
                                                                            {(this.props.user.photo === undefined) && (
                                                                                <img className='img_border' src={profile_image} alt="profile_image" width='35' height='35' />
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                    <div style={{ paddingLeft: 4, paddingTop: 0 }} className="col-9">
                                                                        <span>Hello,</span>
                                                                        <div>
                                                                            <p style={{ fontSize: 19, fontWeight: 700, margin: '0px', paddingBottom: '0px' }}>{this.props.user.name}</p>
                                                                        </div>
                                                                        <div className='edit_profile'>
                                                                            <a href="#section">View and edit profile</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col">
                                                                        <div className="steps_div">
                                                                            <div className="steps_text">
                                                                                <span style={{ fontSize: 16, lineHeight: '24px', fontWeight: 700, color: '#002f34' }}>{this.props.steps} steps left</span>
                                                                            </div>
                                                                            <div className='profile_complete_steps'>
                                                                                <div className='step s1' ></div>
                                                                                <div className='step s2' ></div>
                                                                                <div className='step s3' ></div>
                                                                                <div className='step s4' ></div>
                                                                                <div className='step s5' ></div>
                                                                                <div className='step s6' ></div>
                                                                            </div>
                                                                            <div className='steps_para'>
                                                                                <span>OLX is built on trust. Help other people get to know you. Tell them about the things you like.</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='row'>
                                                                    <div className="col">
                                                                        <div className='user_ads_row'>
                                                                            <a href="#section" className='user_ads'>
                                                                                <div>
                                                                                    <svg width="23px" height="23px" viewBox="0 0 1024 1024" data-aut-id="icon"  ><path d="M349.46 85.333h487.619l40.635 40.635v609.524l-40.635 40.635h-487.619l-40.635-40.635v-609.524l40.635-40.635zM390.095 694.857h406.35v-528.254h-406.35v528.254zM146.286 247.873l40.635-40.635 40.635 40.635v609.524h528.254l40.635 40.635-40.635 40.635h-568.889l-40.635-40.635v-650.159zM512 329.143h162.54l40.635 40.635-40.635 40.635h-162.54l-40.635-40.635 40.635-40.635zM512 491.683h81.27l40.635 40.635-40.635 40.635h-81.27l-40.635-40.635 40.635-40.635z"></path></svg>
                                                                                </div>
                                                                                <span>My Ads</span>
                                                                            </a>
                                                                            <a href="#section" className='user_ads'>
                                                                                <div>
                                                                                    <svg width="23px" height="23px" viewBox="0 0 1024 1024" data-aut-id="icon"  ><path d="M426.667 42.667h170.667l42.667 42.667-42.667 42.667h256l42.667 42.667v768l-42.667 42.667h-682.667l-42.667-42.667v-768l42.667-42.667h256l-42.667-42.667 42.667-42.667zM213.333 896h597.333v-682.667h-597.333v682.667zM469.333 426.667v-85.333h256v85.333h-256zM298.667 426.667v-85.333h85.333v85.333h-85.333zM469.333 597.333v-85.333h256v85.333h-256zM298.667 597.333v-85.333h85.333v85.333h-85.333zM469.333 768v-85.333h256v85.333h-256zM298.667 768v-85.333h85.333v85.333h-85.333z"></path></svg>
                                                                                </div>
                                                                                <span>Buy Business Packages</span>
                                                                            </a>
                                                                            <a href="#section" className='user_ads'>
                                                                                <div>
                                                                                    <svg width="23px" height="23px" viewBox="0 0 1024 1024" data-aut-id="icon"  ><path d="M899.285 256l39.381 39.083v476.501l-39.381 39.083h-774.571l-39.381-39.083v-476.501l39.381-39.083h774.571zM853.461 511.573h-681.6v213.632h681.6v-213.632zM693.205 618.411h76.459l34.901 32.213-34.901 32.213h-128.896l-34.901-32.213 34.901-32.213h52.437zM853.461 341.248h-681.387v86.357l681.387-2.347v-84.053z"></path></svg>
                                                                                </div>
                                                                                <span>Bought Packages & Billing</span>
                                                                            </a>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='row'>
                                                                    <div className="col">
                                                                        <div className='user_ads_row'>
                                                                            <a href="#section" className='user_ads'>
                                                                                <div>
                                                                                    <svg width="23px" height="23px" viewBox="0 0 1024 1024" data-aut-id="icon"  ><path d="M550.789 744.728c0 21.41-17.377 38.789-38.789 38.789s-38.789-17.377-38.789-38.789 17.377-38.789 38.789-38.789 38.789 17.377 38.789 38.789zM686.546 415.030c0 82.89-58.105 152.513-135.757 170.201v43.131l-38.789 38.789-38.789-38.789v-77.575l38.789-38.789c53.489 0 96.97-43.481 96.97-96.97s-43.481-96.97-96.97-96.97-96.97 43.481-96.97 96.97l-38.789 38.789-38.789-38.789c0-96.232 78.312-174.546 174.546-174.546s174.546 78.312 174.546 174.546zM512 861.090c-192.505 0-349.090-156.626-349.090-349.090 0-192.505 156.587-349.090 349.090-349.090 192.466 0 349.090 156.587 349.090 349.090 0 192.466-156.626 349.090-349.090 349.090zM512 85.333c-235.288 0-426.667 191.379-426.667 426.667s191.379 426.667 426.667 426.667 426.667-191.379 426.667-426.667-191.379-426.667-426.667-426.667z"></path></svg>
                                                                                </div>
                                                                                <span>Help</span>
                                                                            </a>
                                                                            <a href="#section" className='user_ads'>
                                                                                <div>
                                                                                    <svg width="23px" height="23px" viewBox="0 0 1024 1024" data-aut-id="icon"  ><path d="M341.333 640c55.595 0 102.912 35.712 120.533 85.333v0h434.133l42.667 42.667-42.667 42.667h-434.133c-17.621 49.621-64.939 85.333-120.533 85.333s-102.912-35.712-120.533-85.333v0h-92.8l-42.667-42.667 42.667-42.667h92.8c17.621-49.621 64.939-85.333 120.533-85.333zM341.333 725.333c-23.531 0-42.667 19.136-42.667 42.667s19.136 42.667 42.667 42.667c23.531 0 42.667-19.136 42.667-42.667s-19.136-42.667-42.667-42.667zM682.667 384c55.595 0 102.912 35.712 120.533 85.333v0h92.8l42.667 42.667-42.667 42.667h-92.8c-17.621 49.621-64.939 85.333-120.533 85.333s-102.912-35.712-120.533-85.333v0h-434.133l-42.667-42.667 42.667-42.667h434.133c17.621-49.621 64.939-85.333 120.533-85.333zM682.667 469.333c-23.531 0-42.667 19.136-42.667 42.667s19.136 42.667 42.667 42.667c23.531 0 42.667-19.136 42.667-42.667s-19.136-42.667-42.667-42.667zM341.333 128c55.595 0 102.912 35.712 120.533 85.333v0h434.133l42.667 42.667-42.667 42.667h-434.133c-17.621 49.621-64.939 85.333-120.533 85.333s-102.912-35.712-120.533-85.333v0h-92.8l-42.667-42.667 42.667-42.667h92.8c17.621-49.621 64.939-85.333 120.533-85.333zM341.333 213.333c-23.531 0-42.667 19.136-42.667 42.667s19.136 42.667 42.667 42.667c23.531 0 42.667-19.136 42.667-42.667s-19.136-42.667-42.667-42.667z"></path></svg>
                                                                                </div>
                                                                                <span>Settings</span>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='row'>
                                                                    <div className="col">
                                                                        <div className='user_ads_row'>
                                                                            <a href="#section" className='user_ads'>
                                                                                <div>
                                                                                    <svg width="23px" height="23px" viewBox="0 0 1024 1024" data-aut-id="icon"  ><path d="M891.008 822.315l47.659 48.853-47.701 48.085h-757.931l-47.701-48.853 47.787-48.043h757.888zM493.525 85.333l46.507 46.592 0.213 475.179 178.475-189.483 62.976 0.299-0.256 58.752 2.091 4.267-290.005 302.592-291.84-304.512 4.011-4.139 0.256-57.472 62.507 0.213 178.475 189.483 0.171-475.179 46.421-46.592z"></path></svg>
                                                                                </div>
                                                                                <span>Install OLX Lite app</span>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='row'>
                                                                    <div className="col">
                                                                        <div className='user_ads_row' onClick={() => this.props.logout()} >
                                                                            <a href="#section" className='user_ads' >
                                                                                <div>
                                                                                    <svg width="23px" height="23px" viewBox="0 0 1024 1024" data-aut-id="icon"  ><path d="M128 85.333l-42.667 42.667v768l42.667 42.667h768l42.667-42.667v-213.333l-42.667-42.667-42.667 42.667v170.667h-682.667v-682.667h682.667v170.667l42.667 42.667 42.667-42.667v-213.333l-42.667-42.667h-768zM494.336 298.667l-183.168 183.168v60.331l183.168 183.168h60.331v-60.331l-110.336-110.336h323.669l42.667-42.667-42.667-42.667h-323.669l110.336-110.336v-60.331h-60.331z"></path></svg>
                                                                                </div>
                                                                                <span>Logout</span>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}




                                    <div className="sell_btn_main">
                                        {this.props.user &&
                                            (<Link to='/sell'>
                                                <div>
                                                    <img src={sell_btn} alt="" width="104" height="48" />
                                                </div>
                                            </Link>
                                            )}

                                        {!this.props.user &&
                                            (<div style={{ cursor: 'pointer' }}>
                                                <img src={sell_btn} alt="" width="104" height="48" onClick={() => {
                                                    alert('Please Login First in Order To Post Ad')
                                                }} />
                                            </div>
                                            )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}




const mapStateToProps = (state) => ({
    toggle_location_div: state.app.show_location_div,
    toggle_profile_div: state.app.show_user_profile_div,
    steps: state.app.steps,
    toggle_login: state.auth.toggle_login,
    toggle_user_panel: state.auth.toggle_user_panel,
    user: state.auth.current_user,
})

const mapDispatchToProps = (dispatch) => ({
    show_user_profile_div: () => dispatch(show_user_profile_div()),
    open_location: () => dispatch(open_location()),
    fb_login: () => dispatch(fb_login()),
    logout: () => dispatch(logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);