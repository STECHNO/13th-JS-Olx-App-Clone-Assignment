/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import './Sell.css';
import back from '../../images/keyboard_backspace-black-18dp.svg'
import logo from '../../images/olx_logo.png'
import profile_image from '../../images/avatar.png';
import List from './SellComponents/List.jsx'
import Location from './SellComponents/Location'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ad_categories, ad_condition, send_ad_data, upload_files } from "../../store/action";

class Sell extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            f_c_mobiles: false,
            f_c_vehicles: false,
            f_c_pfs: false,
            f_c_pfr: false,
            f_c_ea: false,
            f_c_bikes: false,
            f_c_bia: false,
            f_c_services: false,
            f_c_jobs: false,
            f_c_animals: false,
            f_c_fhd: false,
            f_c_fb: false,
            f_c_bsh: false,
            f_c_kids: false,
            toggle_ad_categories: true,
            toggle_ad_categories_sub: false,
            toggle_ad_post: false,
            kids_bottom_border: {
                borderBottom: ' ',
            },
            ad_title_value: ' ',
            ad_title_length: 0,
            ad_t_g: {
                color: ' ',
                fontWeight: '',
            },
            ad_description_value: ' ',
            ad_description_length: 0,
            ad_d_g: {
                color: ' ',
                fontWeight: '',
            },
            ad_price_value: '',
            ad_p_g_div: {
                boxShadow: '',
            },
            ad_t_g_t: {
                color: ' ',
                fontWeight: '',
            },
            list: true,
            current_location: false,
            list_b_bor: {
                borderBottom: '4px solid #002f34',
            },
            current_location_b_bor: {
                borderBottom: '',
            },
            ad_user_name_value: ' ',
            ad_user_name_length: 0,


            send_ad_data_to_db: {

            },
            // ad_post_files: this.props.img_url,
        }
    }
    show_cat = (property, toggle) => {
        this.setState({
            f_c_mobiles: false,
            f_c_vehicles: false,
            f_c_pfs: false,
            f_c_pfr: false,
            f_c_ea: false,
            f_c_bikes: false,
            f_c_bia: false,
            f_c_services: false,
            f_c_jobs: false,
            f_c_animals: false,
            f_c_fhd: false,
            f_c_fb: false,
            f_c_bsh: false,
            f_c_kids: false,
            kids_bottom_border: { ...this.state.kids_bottom_border, borderBottom: ' ' },
            [property]: !toggle,
        });
    }

    toggle_location_div = (property, toggle) => {
        this.setState({
            list: false,
            current_location: false,
            [property]: !toggle,
        })
        if (property === 'list') {
            this.setState({
                current_location_b_bor: { ...this.state.current_location_b_bor, borderBottom: '' },
                list_b_bor: { ...this.state.list_b_bor, borderBottom: '4px solid #002f34' },
            })
        }
        else if (property === 'current_location') {
            this.setState({
                list_b_bor: { ...this.state.list_b_bor, borderBottom: '' },
                current_location_b_bor: { ...this.state.current_location_b_bor, borderBottom: '4px solid #002f34' },
            })
        }
    }


    render() {
        return (
            <div>
                <div className="container-fluid header_main">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className='main'>
                                <div className='goback'>
                                    <Link to='/'>
                                        <img src={back} alt="Back Button" />
                                    </Link>
                                </div>
                                <div className='logo'>
                                    <Link to='/'>
                                        <img src={logo} alt="OLX Logo" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 post_ad_text">
                            <h3>POST YOUR AD</h3>
                        </div>
                    </div>



                    {this.state.toggle_ad_categories && (
                        <div>
                            <div className="row" style={{ height: '100%', marginBottom: '122px' }}>
                                <div className='col-lg-12'>
                                    <div className='ad_cat'>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className='choose_cat'>
                                                    <h6>CHOOSE A CATEGORY</h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row " style={{ marginLeft: '0px', marginRight: '0px' }} >
                                            <div className="col-lg-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                                                <div className=''>
                                                    <ul className='ad_cat_list'>
                                                        <li className='ad_cat_list_li' onClick={() => {
                                                            this.show_cat('f_c_mobiles', this.state.f_c_mobiles)

                                                        }}>
                                                            <span className='list_d_l'>
                                                                <svg width="30px" height="30px" viewBox="0 0 1024 1024"  ><path d="M743.68 85.333l66.987 67.84v701.227l-63.573 84.267h-471.253l-62.507-85.333v-700.373l67.627-67.627h462.72zM708.053 170.667h-391.893l-17.493 17.707v637.653l20.053 27.307h385.92l21.333-27.52v-637.653l-17.92-17.493zM512 682.667c23.564 0 42.667 19.103 42.667 42.667s-19.103 42.667-42.667 42.667c-23.564 0-42.667-19.103-42.667-42.667s19.103-42.667 42.667-42.667z"></path></svg>                                                </span>
                                                            <span className='list_d_m'>Mobiles</span>
                                                            <span className="list_d_r">
                                                                <svg width="25px" height="25px" viewBox="0 0 1024 1024"><path d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"></path></svg>
                                                            </span>
                                                        </li>

                                                        <li className='ad_cat_list_li' onClick={() => { this.show_cat('f_c_vehicles', this.state.f_c_vehicles) }}>
                                                            <span className='list_d_l'>
                                                                <svg width="30px" height="30px" viewBox="0 0 1024 1024"  ><path d="M744.747 124.16l38.4 33.28 36.949 258.731 107.221 107.179 11.349 27.435v193.963l-38.827 38.784h-38.741v116.352h-77.568v-116.352h-543.061v116.352h-77.568v-116.352h-38.741l-38.827-38.827v-193.877l11.349-27.435 107.264-107.221 36.949-258.731 38.4-33.28h465.493zM768.555 474.325h-513.109l-92.544 92.501v139.093h698.197v-139.093l-92.544-92.501zM298.667 550.784c32.128 0 58.197 26.027 58.197 58.197 0 32.128-26.027 58.155-58.197 58.155-32.128 0-58.197-26.027-58.197-58.155s26.027-58.197 58.197-58.197zM725.333 550.784c32.128 0 58.197 26.027 58.197 58.197 0 32.128-26.027 58.155-58.197 58.155-32.128 0-58.197-26.027-58.197-58.155s26.027-58.197 58.197-58.197zM711.083 201.685h-398.165l-27.904 195.115h453.888l-27.861-195.072z"></path></svg>                                                </span>
                                                            <span className='list_d_m'>Vehicles</span>
                                                            <span className="list_d_r">
                                                                <svg width="25px" height="25px" viewBox="0 0 1024 1024"><path d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"></path></svg>
                                                            </span>

                                                        </li>
                                                        <li className='ad_cat_list_li' onClick={() => { this.show_cat('f_c_pfs', this.state.f_c_pfs) }}>
                                                            <span className='list_d_l'>
                                                                <svg width="30px" height="30px" viewBox="0 0 1024 1024"  ><path d="M814.546 512v-53.489h-50.036v-17.106h44.529v-50.23h-44.529v-15.749h50.036v-53.489h-118.69v190.061h118.69zM684.179 512v-53.489h-52.13v-136.571h-68.965v190.061h121.095zM452.306 395.52l-10.861 39.098h21.45l-10.59-39.098zM421.625 512h-67.335l65.707-190.061h67.879l65.707 190.061h-70.593l-8.417-29.051h-44.529l-8.417 29.051zM284.51 454.982c0 3.065-1.785 4.615-5.43 4.615-8.844 0-17.299-6.71-25.25-20.091l-49.145 26.609c1.978 5.43 4.849 10.783 8.571 16.135 3.685 5.352 8.533 10.629 14.507 15.787s13.498 9.349 22.535 12.607c9.037 3.258 18.929 4.888 29.595 4.888 22.613 0 40.65-5.547 54.031-16.563 13.421-11.054 20.091-25.95 20.091-44.8 0-9.969-2.56-18.773-7.603-26.453s-11.249-13.809-18.579-18.347c-7.33-4.499-14.662-8.494-21.992-11.791-7.37-3.374-13.575-6.593-18.618-9.774-5.081-3.181-7.603-6.284-7.603-9.387 0-3.258 1.901-4.888 5.702-4.888 3.995 0 7.873 1.746 11.675 5.159 3.801 3.451 6.866 7.525 9.231 12.218l48.33-27.694c-3.219-10.317-11.288-20.364-24.165-30.138-12.839-9.774-29.051-14.662-48.601-14.662-21.333 0-38.593 5.547-51.705 16.563-13.15 11.015-19.705 25.677-19.705 43.986 0 8.883 1.823 16.833 5.43 23.893 3.647 7.059 8.185 12.684 13.73 16.95 5.509 4.267 11.481 8.185 17.92 11.713 6.4 3.49 12.373 6.361 17.92 8.533 5.509 2.171 10.085 4.499 13.691 7.059 3.647 2.56 5.43 5.159 5.43 7.873zM162.909 589.575v-349.091h698.182v349.091h-698.182zM899.879 162.909h-349.091v-38.789l-38.789-38.789-38.789 38.789v38.789h-349.091l-38.789 38.789v426.667l38.789 38.789h349.091v193.939h-77.575v77.575h232.728v-77.575h-77.575v-193.939h349.091l38.789-38.789v-426.667l-38.789-38.789z"></path></svg>                                                </span>
                                                            <span className='list_d_m'>Property for Sale</span>
                                                            <span className="list_d_r">
                                                                <svg width="25px" height="25px" viewBox="0 0 1024 1024"><path d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"></path></svg>
                                                            </span>
                                                        </li>
                                                        <li className='ad_cat_list_li' onClick={() => { this.show_cat('f_c_pfr', this.state.f_c_pfr) }}>
                                                            <span className='list_d_l'>
                                                                <svg width="30px" height="30px" viewBox="0 0 1024 1024"  ><path d="M706.21 385.164v126.836h64v-126.836h34.792v-49.649h-133.352v49.649h34.521zM557.189 512v-82.968l38.323 82.968h64.775v-176.485h-63.263v82.929l-38.361-82.929h-64.775v176.485h63.302zM478.759 512v-49.649h-46.39v-15.903h41.349v-46.662h-41.349v-14.623h46.39v-49.649h-110.157v176.485h110.157zM271.283 383.418v24.709h7.564c3.879 0 6.943-1.28 9.192-3.801s3.413-5.352 3.413-8.571c0-3.142-1.125-6.050-3.413-8.571-2.25-2.521-5.313-3.763-9.192-3.763h-7.603zM271.283 455.021v56.979h-62.022v-176.485h78.43c20.17 0 36.15 5.43 47.903 16.251 11.791 10.861 17.649 24.513 17.649 40.96 0 9.774-2.637 18.618-7.912 26.609-5.313 7.99-11.986 14.235-20.053 18.773l40.339 73.89h-69.352l-25.018-56.979zM162.909 589.575v-349.091h698.182v349.091h-698.182zM899.879 162.909h-349.091v-38.789l-38.789-38.789-38.789 38.789v38.789h-349.091l-38.789 38.789v426.667l38.789 38.789h349.091v193.939h-77.575v77.575h232.728v-77.575h-77.575v-193.939h349.091l38.789-38.789v-426.667l-38.789-38.789z"></path></svg>                                                </span>
                                                            <span className='list_d_m'>Property for Rent</span>
                                                            <span className="list_d_r">
                                                                <svg width="25px" height="25px" viewBox="0 0 1024 1024"><path d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"></path></svg>
                                                            </span>

                                                        </li>
                                                        <li className='ad_cat_list_li' onClick={() => { this.show_cat('f_c_ea', this.state.f_c_ea) }}>
                                                            <span className='list_d_l'>
                                                                <svg width="30px" height="30px" viewBox="0 0 1024 1024"  ><path d="M149.76 128l-64.427 62.848v480.853l69.333 67.84h317.781l0.725 75.477h-169.6v80.981h416.128v-80.981h-161.621l-0.683-75.435h315.648l65.621-68.693v-482.389l-75.733-60.501h-713.173zM170.24 638.72v-414.848l15.232-14.848h646.656l21.632 17.28v413.184l-18.176 19.072h-645.12l-20.224-19.84z"></path></svg>                                                </span>
                                                            <span className='list_d_m'>Electronics & Home Appliances</span>
                                                            <span className="list_d_r">
                                                                <svg width="25px" height="25px" viewBox="0 0 1024 1024"><path d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"></path></svg>
                                                            </span>

                                                        </li>
                                                        <li className='ad_cat_list_li' onClick={() => { this.show_cat('f_c_bikes', this.state.f_c_bikes) }}>
                                                            <span className='list_d_l'>
                                                                <svg width="30px" height="30px" viewBox="0 0 1024 1024"  ><path d="M674.657 245.333l47.813 129.715 23.448-51.706h51.11l26.563 33.51v80.171h-78.406l26.746 72.064h9.892c75.576 0 136.843 60.253 136.843 134.579s-61.267 134.579-136.843 134.579c-59.691-0.227-112.346-38.479-130.112-94.523s3.455-116.947 52.44-150.495v0l2.931-1.982-28.578-78.189-77.49 225.74h-167.070v3.243c-19.579 65.476-85.893 106.172-154.3 94.693s-117.248-71.498-113.643-139.654c3.605-68.156 58.515-122.867 127.764-127.303s130.911 42.808 143.476 109.928v0 3.783h122.554l22.716-66.839h-121.455l-61.735-80.171h-197.662l-58.071 132.598-36.638 9.008-21.616-28.826 69.796-168.089h228.255l64.849-62.696h196.197l-16.304-44.319h-89.763v-68.821h136.294zM796.845 577.368l25.463 69.362-20.884 31.888-43.233-6.306-26.746-75.307-5.129 6.846v0.54c-17.559 23.523-17.878 55.449-0.79 79.306s47.76 34.314 76.196 25.976c28.435-8.338 48.277-33.608 49.289-62.772s-17.032-55.706-44.823-65.931v0l-9.343-3.603zM365.248 616.823c-12.157-27.922-41.767-44.432-72.372-40.354s-54.681 27.74-58.847 57.836c-4.166 30.096 12.603 59.227 40.986 71.201s61.403 3.848 80.707-19.861v0l5.862-7.387-85 0.18v-57.111l29.86-18.016 30.41 19.818h31.142zM627.943 413.233h-153.88l-31.142 33.568 32.791 46.432h128.233l23.998-80zM318.667 345.333v66.667h-133.333v-66.667h133.333z"></path></svg>                                                </span>
                                                            <span className='list_d_m'>Bikes</span>
                                                            <span className="list_d_r">
                                                                <svg width="25px" height="25px" viewBox="0 0 1024 1024"><path d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"></path></svg>
                                                            </span>

                                                        </li>
                                                        <li className='ad_cat_list_li' onClick={() => { this.show_cat('f_c_bia', this.state.f_c_bia) }}>
                                                            <span className='list_d_l'>
                                                                <svg width="30px" height="30px" viewBox="0 0 1024 1024"  ><path d="M724.48 717.013c0.64 2.773 0.853 5.547 0.853 8.32s-0.213 5.547-0.853 8.32-1.28 5.333-2.347 7.893c-1.067 2.773-2.56 5.12-4.053 7.467s-3.2 4.48-5.333 6.4c-7.893 8.107-18.773 12.587-30.080 12.587s-22.187-4.48-30.080-12.587c-2.133-1.92-3.84-4.053-5.333-6.4s-2.987-4.693-4.053-7.467c-1.067-2.56-1.92-5.12-2.347-7.893-0.64-2.773-0.853-5.547-0.853-8.32s0.213-5.547 0.853-8.32c0.427-2.773 1.28-5.333 2.347-8.107 1.067-2.56 2.56-4.907 4.053-7.253s3.2-4.48 5.333-6.613c1.92-1.92 4.053-3.627 6.4-5.12s4.693-2.987 7.253-4.053c2.773-1.067 5.333-1.707 8.107-2.347 13.867-2.773 28.587 1.707 38.4 11.52 2.133 2.133 3.84 4.267 5.333 6.613s2.987 4.693 4.053 7.253c1.067 2.773 1.707 5.333 2.347 8.107zM553.813 717.013c0.64 2.773 0.853 5.547 0.853 8.32 0 11.307-4.48 22.187-12.587 30.293-1.92 1.92-4.053 3.627-6.4 5.12s-4.693 2.987-7.253 4.053c-2.773 1.067-5.333 1.92-8.107 2.347-2.773 0.64-5.547 0.853-8.32 0.853s-5.547-0.213-8.32-0.853c-2.773-0.427-5.333-1.28-8.107-2.347-2.56-1.067-4.907-2.56-7.253-4.053s-4.48-3.2-6.4-5.12c-8.107-8.107-12.587-18.987-12.587-30.293 0-2.773 0.213-5.547 0.853-8.32s1.28-5.333 2.347-8.107c1.067-2.56 2.56-4.907 4.053-7.253s3.2-4.48 5.333-6.4c1.92-2.133 4.053-3.84 6.4-5.333s4.693-2.987 7.253-4.053c2.773-1.067 5.333-1.707 8.107-2.347 13.867-2.773 28.587 1.707 38.4 11.733 2.133 1.92 3.84 4.053 5.333 6.4s2.987 4.693 4.053 7.253c1.067 2.773 1.92 5.333 2.347 8.107zM371.413 695.253c8.107 7.893 12.587 18.773 12.587 30.080s-4.48 22.187-12.587 30.080c-7.893 8.107-18.773 12.587-30.080 12.587s-22.187-4.48-30.080-12.587c-8.107-7.893-12.587-18.773-12.587-30.080s4.48-22.187 12.587-30.080c15.787-16 44.373-16 60.16 0zM853.333 853.333h-682.667v-682.667h85.333v416.683l213.333-128v137.984l170.667-128v118.016l213.333-128v393.984zM725.333 436.651v-137.984l-170.667 128v-118.016l-213.333 128v-308.651l-42.667-42.667h-170.667l-42.667 42.667v768l42.667 42.667h768l42.667-42.667v-587.349l-213.333 128z"></path></svg>                                                </span>
                                                            <span className='list_d_m'>Business, Industrial & Agriculture</span>
                                                            <span className="list_d_r">
                                                                <svg width="25px" height="25px" viewBox="0 0 1024 1024"><path d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"></path></svg>
                                                            </span>

                                                        </li>
                                                        <li className='ad_cat_list_li' onClick={() => { this.show_cat('f_c_services', this.state.f_c_services) }}>
                                                            <span className='list_d_l'>
                                                                <svg width="30px" height="30px" viewBox="0 0 1024 1024"  ><path d="M845.419 795.973l-18.078 18.059h-643.422l-18.078-18.059v-37.922l18.078-18.059h643.422l18.078 18.059v37.922zM198.941 562.396l43.308-63.059v-153.289c0-46.52 37.845-84.365 84.365-84.365h356.844c46.52 0 84.365 37.845 84.365 84.365v155.441l46.249 54.576v15.597h-615.134v-9.269zM859.19 663.070h-320.595v-14.48h352.403v-120.712l-46.249-54.576v-127.248c0-88.94-72.347-161.287-161.287-161.287h-144.863v-18.924h71.095v-76.922h-216.422v76.922h68.404v18.924h-135.058c-88.94 0-161.287 72.347-161.287 161.287v129.404l-43.308 63.040v110.096h339.653v14.48h-309.596l-63.155 63.136v101.616l63.155 63.136h707.114l63.155-63.136v-101.616l-63.155-63.136z"></path></svg>
                                                            </span>
                                                            <span className='list_d_m'>Services</span>
                                                            <span className="list_d_r">
                                                                <svg width="25px" height="25px" viewBox="0 0 1024 1024"><path d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"></path></svg>
                                                            </span>

                                                        </li>
                                                        <li className='ad_cat_list_li' onClick={() => {
                                                            this.show_cat('f_c_jobs', this.state.f_c_jobs)
                                                            this.setState({
                                                                kids_bottom_border: { ...this.state.kids_bottom_border, borderBottom: '1px solid rgba(0,47,52,.2)' }
                                                            })
                                                        }}>
                                                            <span className='list_d_l'>
                                                                <svg width="30px" height="30px" viewBox="0 0 1024 1024"  ><path d="M341.665 89.769l-82.848 72.739v66.327h-70.534l-98.517 98.906v468.388l95.92 104.215h649.246l99.298-102.676v-478.475l-107.179-90.359h-58.539v-2.275h-3.907v-65.087l-85.419-71.703h-337.522zM350.693 204.115l25.616-22.448h269.404l26.995 22.677v24.491h-322.015v-24.72zM181.668 365.697l44.756-44.963h567.065l48.844 41.17v79.17h-660.665v-75.381zM696.787 595.514v-62.538h145.545v227.542l-46.362 47.901h-569.959l-44.341-48.156v-227.29h127.763v62.538l31.132 17.116 31.132-17.116v-62.538h262.832v62.538l31.132 17.116 31.132-17.116z"></path></svg>
                                                            </span>
                                                            <span className='list_d_m'>Jobs</span>
                                                            <span className="list_d_r">
                                                                <svg width="25px" height="25px" viewBox="0 0 1024 1024"><path d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"></path></svg>
                                                            </span>

                                                        </li>
                                                        <li className='ad_cat_list_li' onClick={() => { this.show_cat('f_c_animals', this.state.f_c_animals) }}>
                                                            <span className='list_d_l'>
                                                                <svg width="30px" height="30px" viewBox="0 0 1024 1024"  ><path d="M653.689 147.951l168.004 35.403 99.123 140.646-104.437 161.363-24.699 166.528-48.766 44.876v80.131l-78.051 100.6h-291.644l-78.521-105.184 0.336-75.789-50.86-37.2-53.461-171.971-99.76-163.964 98.543-139.806 162.335-35.46 301.86-0.167zM668.063 715.029h-298.247l-0.149 32.58 41.095 55.034h217.445l39.859-51.368v-36.246zM625.751 222.82l-249.539 0.13-111.211 251.167 43.32 139.375 36.472 26.684h349.054l27.675-25.451 20.378-137.43-116.152-254.479zM560.227 494.238v19.798l-55.651 50.581-54.605-48.092v-22.288h110.258zM714.622 237.285l71.616 156.89 44.277-68.377-53.050-75.262-62.838-13.248zM618.824 353.349c10.647 0 19.275 8.644 19.275 19.275 0 10.665-8.626 19.313-19.275 19.313s-19.295-8.644-19.295-19.313c0-10.627 8.644-19.275 19.295-19.275zM380.916 353.349c10.647 0 19.295 8.644 19.295 19.275 0 10.665-8.644 19.313-19.295 19.313s-19.295-8.644-19.295-19.313c0-10.627 8.644-19.275 19.295-19.275zM287.553 238.315l-53.5 12.013-53.649 76.086 39.447 64.822 67.702-152.923z"></path></svg>
                                                            </span>
                                                            <span className='list_d_m'>Animals</span>
                                                            <span className="list_d_r">
                                                                <svg width="25px" height="25px" viewBox="0 0 1024 1024"><path d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"></path></svg>
                                                            </span>

                                                        </li>
                                                        <li className='ad_cat_list_li' onClick={() => { this.show_cat('f_c_fhd', this.state.f_c_fhd) }}>
                                                            <span className='list_d_l'>
                                                                <svg width="30px" height="30px" viewBox="0 0 1024 1024"  ><path d="M268.748 91.803l-70.244 96.818v124.45l-24.559-0.152-82.195 104.783v430.333h152.539v75.637h91.975v-75.637h333.816v75.637h91.975v-75.637h170.135v-436.888l-82.295-97.219h-4.335v-117.692l-78.665-104.431h-498.206zM429.605 396.172l-79.319-82.195-59.755-0.353v-95.152l25.112-34.692h405.422l32.524 43.213v86.934h-87.64l-65.504 77.403v75.284h-170.792v-70.444zM183.829 449.472l34.743-44.274 92.48 0.505 26.626 27.632v125.207h354.845v-133.528l16.137-19.111h98.633l32.977 38.93v311.176h-656.49v-306.588z"></path></svg>
                                                            </span>
                                                            <span className='list_d_m'>Furniture & Home Decor</span>
                                                            <span className="list_d_r">
                                                                <svg width="25px" height="25px" viewBox="0 0 1024 1024"><path d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"></path></svg>
                                                            </span>

                                                        </li>
                                                        <li className='ad_cat_list_li' onClick={() => { this.show_cat('f_c_fb', this.state.f_c_fb) }}>
                                                            <span className='list_d_l'>
                                                                <svg width="30px" height="30px" viewBox="0 0 1024 1024"  ><path d="M708.012 340.654v471.101h-391.011v-471.101h-116.125l48.317-144.445 32.889-26.596h106.075c17.154 51.007 65.474 87.906 122.014 87.906s104.908-36.899 122.062-87.906h101.002l28.423 17.258 56.135 153.784h-109.781zM827.639 132.662l-71.867-43.647h-197.179l-0.252 40.097c-0.204 26.393-21.824 47.809-48.165 47.809-26.393 0-47.964-21.468-48.116-47.861l-0.304-39.993h-208.092l-73.39 59.282-91.204 272.855h147.339v471.101h552.103v-471.101h144.397l-105.212-288.538z"></path></svg>
                                                            </span>
                                                            <span className='list_d_m'>Fashion & Beauty</span>
                                                            <span className="list_d_r">
                                                                <svg width="25px" height="25px" viewBox="0 0 1024 1024"><path d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"></path></svg>
                                                            </span>

                                                        </li>
                                                        <li className='ad_cat_list_li' onClick={() => { this.show_cat('f_c_bsh', this.state.f_c_bsh) }}>
                                                            <span className='list_d_l'>
                                                                <svg width="30px" height="30px" viewBox="0 0 1024 1024"  ><path d="M777.049 133.012l69.146 7.353 48.548 49.856 5.553 69.297-95.903 93.421-60.089-6.386-24.218 23.781c19.044 29.22 29.447 63.633 29.447 98.728 0 84.059-57.645 154.894-135.469 175.074 2.028 12.791 3.050 25.676 3.050 38.544 0 138.711-112.843 251.535-251.535 251.535-187.504 0-327.75-206.226-205.791-403.793 74.207-77.997 153.737-106.060 231.734-97.893 16.941-82.279 89.952-144.318 177.158-144.318 24.407 0 48.093 4.794 70.397 14.231v0l4.301 2.141 22.285 12.98 21.602-21.223-0.568-0.587-5.553-69.335 95.903-93.402zM568.679 364.005c-57.948 0-105.057 47.128-105.057 105.057 0 1.346 0.114 2.69 0.208 4.017v0l3.393 56.469-51.808-15.291c-16.373-4.831-33.124-7.297-49.837-7.297-138.008 0-239.388 159.952-128.478 304.214 144.261 110.91 304.214 9.551 304.214-128.497 0-19.517-3.412-39.093-10.119-58.213v0l-18.324-52.206 57.626 1.914c56.109-0.057 103.237-47.185 103.237-105.113 0-15.386-3.544-30.034-9.779-43.603v0l-115.498 113.451-44.171-6.783-8.944-47.298 114.246-112.2-2.103-1.233c-12.317-4.907-25.354-7.391-38.809-7.391zM367.141 573.986c54.271 0 98.271 44 98.271 98.271s-44 98.252-98.271 98.252c-54.271 0-98.271-43.981-98.271-98.252s44-98.271 98.271-98.271zM804.43 212.125l-44.892 43.754 0.53 6.556 10.384 10.668 6.556 0.7 44.892-43.735-0.53-6.537-10.403-10.687-6.537-0.719z"></path></svg>
                                                            </span>
                                                            <span className='list_d_m'>Books, Sports & Hobbies</span>
                                                            <span className="list_d_r">
                                                                <svg width="25px" height="25px" viewBox="0 0 1024 1024"><path d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"></path></svg>
                                                            </span>

                                                        </li>
                                                        <li className='ad_cat_list_li' onClick={() => { this.show_cat('f_c_kids', this.state.f_c_kids) }} style={this.state.kids_bottom_border}>
                                                            <span className='list_d_l'>
                                                                <svg width="30px" height="30px" viewBox="0 0 1024 1024"  ><path d="M395.636 861.090v-387.879h232.728v77.575h-77.575v77.575h77.575v77.575h-155.151v77.575h155.151v77.575h-232.728zM434.425 395.636h155.151v-38.789h-155.151v38.789zM512 240.485c21.41 0 38.789 17.415 38.789 38.789h-77.575c0-21.371 17.377-38.789 38.789-38.789zM667.151 395.636v-77.575l-38.789-38.789c0-50.541-32.427-93.556-77.575-109.575v-45.575l-38.789-38.789-38.789 38.789v45.575c-45.15 16.019-77.575 59.035-77.575 109.575l-38.789 38.789v77.575l-38.789 38.789v465.454l38.789 38.789h310.303l38.789-38.789v-465.454l-38.789-38.789z"></path></svg>
                                                            </span>
                                                            <span className='list_d_m'>Kids</span>
                                                            <span className="list_d_r">
                                                                <svg width="25px" height="25px" viewBox="0 0 1024 1024"><path d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"></path></svg>
                                                            </span>

                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                                                {this.state.f_c_mobiles && (
                                                    <div className='sub_categories' >
                                                        <ul className='ad_cat_list_sub'>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Tablets' mainname='Mobiles' subname='Tablets' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Apple', 'Danny Tabs', 'Q Tabs', 'Samsung', 'Other Tablets',]
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Tablets</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Accessories' mainname='Mobiles' subname='Accessories' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Mobile', 'Tablets']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Accessories</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub' style={{ borderBottom: "1px solid rgba(0,47,52,.2)" }}>
                                                                <span className='list_d_m' name='Mobile Phones' mainname='Mobiles' subname='Mobile Phones' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Apple', 'Samsung']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Mobile Phones</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                )}
                                                {this.state.f_c_vehicles && (
                                                    <div className='sub_categories' style={{ position: 'relative', top: '51px' }}>
                                                        <ul className='ad_cat_list_sub'>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Cars' mainname='Vehicles' subname='Cars' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['CNG', 'Diesel', 'Hybrid', 'LPG', 'Petrol']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Cars</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Cars on Installments' mainname='Vehicles' subname='Cars on Installments' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['CNG', 'Diesel', 'Hybrid', 'LPG', 'Petrol']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Cars on Installments</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Cars Accessories' mainname='Vehicles' subname='Cars Accessories' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['CNG', 'Diesel', 'Hybrid', 'LPG', 'Petrol']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Cars Accessories</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Spare Parts' mainname='Vehicles' subname='Spare Parts' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['CNG', 'Diesel', 'Hybrid', 'LPG', 'Petrol']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Spare Parts</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Buses, Vans & Trucks' mainname='Vehicles' subname='Buses, Vans & Trucks' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['CNG', 'Diesel', 'Hybrid', 'LPG', 'Petrol']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Buses, Vans & Trucks</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Rickshaw & Chingchi' mainname='Vehicles' subname='Rickshaw & Chingchi' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['CNG', 'Diesel', 'Hybrid', 'LPG', 'Petrol']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Rickshaw & Chingchi</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Other Vehicles' mainname='Vehicles' subname='Other Vehicles' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['CNG', 'Diesel', 'Hybrid', 'LPG', 'Petrol']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Other Vehicles</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Boats' mainname='Vehicles' subname='Boats' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['CNG', 'Diesel', 'Hybrid', 'LPG', 'Petrol']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Boats</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub' style={{ borderBottom: "1px solid rgba(0,47,52,.2)" }}>
                                                                <span className='list_d_m' name='Tractors & Trailers' mainname='Vehicles' subname='Tractors & Trailers' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['CNG', 'Diesel', 'Hybrid', 'LPG', 'Petrol']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Tractors & Trailers</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                )}
                                                {this.state.f_c_pfs && (
                                                    <div className='sub_categories' style={{ position: 'relative', top: '102px' }}>
                                                        <ul className='ad_cat_list_sub'>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Land & Plots' mainname='Property for Sale' subname='Land & Plots' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Kanal', 'Marla', 'Square Feet', 'Square Meter', 'Square Yards']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Land & Plots</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Houses' mainname='Property for Sale' subname='Houses' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Kanal', 'Marla', 'Square Feet', 'Square Meter', 'Square Yards']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Houses</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Apartments & Flats' mainname='Property for Sale' subname='Apartments & Flats' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Kanal', 'Marla', 'Square Feet', 'Square Meter', 'Square Yards']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Apartments & Flats</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Shops - Offices - Commercial Space' mainname='Property for Sale' subname='Shops - Offices - Commercial Space' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Kanal', 'Marla', 'Square Feet', 'Square Meter', 'Square Yards']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Shops - Offices - Commercial Space</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub' style={{ borderBottom: "1px solid rgba(0,47,52,.2)" }}>
                                                                <span className='list_d_m' name='Portions & Floors' mainname='Property for Sale' subname='Portions & Floors' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Kanal', 'Marla', 'Square Feet', 'Square Meter', 'Square Yards']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Portions & Floors</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                )}
                                                {this.state.f_c_pfr && (
                                                    <div className='sub_categories' style={{ position: 'relative', top: '153px' }}>
                                                        <ul className='ad_cat_list_sub'>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Houses' mainname='Property for Rent' subname='Houses' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Kanal', 'Marla', 'Square Feet', 'Square Meter', 'Square Yards']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Houses</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Apartments & Flats' mainname='Property for Rent' subname='Apartments & Flats' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Kanal', 'Marla', 'Square Feet', 'Square Meter', 'Square Yards']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Apartments & Flats</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Portions & Floors' mainname='Property for Rent' subname='Portions & Floors' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Kanal', 'Marla', 'Square Feet', 'Square Meter', 'Square Yards']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Portions & Floors</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Shops - Offices - Commercial Space' mainname='Property for Rent' subname='Shops - Offices - Commercial Space' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Kanal', 'Marla', 'Square Feet', 'Square Meter', 'Square Yards']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Shops - Offices - Commercial Space</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Rooms' mainname='Property for Rent' subname='Rooms' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Kanal', 'Marla', 'Square Feet', 'Square Meter', 'Square Yards']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Rooms</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Roommates & Paying Guests' mainname='Property for Rent' subname='Roommates & Paying Guests' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Kanal', 'Marla', 'Square Feet', 'Square Meter', 'Square Yards']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Roommates & Paying Guests</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Vacation Rentals - Guest Houses' mainname='Property for Rent' subname='Vacation Rentals - Guest Houses' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Kanal', 'Marla', 'Square Feet', 'Square Meter', 'Square Yards']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Vacation Rentals - Guest Houses</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub' style={{ borderBottom: "1px solid rgba(0,47,52,.2)" }}>
                                                                <span className='list_d_m' name='Land & Plots' mainname='Property for Rent' subname='Land & Plots' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Kanal', 'Marla', 'Square Feet', 'Square Meter', 'Square Yards']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Land & Plots</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                )}
                                                {this.state.f_c_ea && (
                                                    <div className='sub_categories' style={{ position: 'relative', top: '204px' }}>
                                                        <ul className='ad_cat_list_sub'>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Computer & Accessories' mainname='Electronics & Home Appliances' subname='Computer & Accessories' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Computer', 'Laptop', 'Generator', 'Cooking Range', 'Washing Machine']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Computer & Accessories</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='TV - Video - Audio' mainname='Electronics & Home Appliances' subname='TV - Video - Audio' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Computer', 'Laptop', 'Generator', 'Cooking Range', 'Washing Machine']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>TV - Video - Audio</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Cameras & Accessories' mainname='Electronics & Home Appliances' subname='Cameras & Accessories' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Computer', 'Laptop', 'Generator', 'Cooking Range', 'Washing Machine']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Cameras & Accessories</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Games & Entertainment' mainname='Electronics & Home Appliances' subname='Games & Entertainment' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Computer', 'Laptop', 'Generator', 'Cooking Range', 'Washing Machine']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Games & Entertainment</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Other Home Appliances' mainname='Electronics & Home Appliances' subname='Other Home Appliances' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Computer', 'Laptop', 'Generator', 'Cooking Range', 'Washing Machine']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Other Home Appliances</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Generators, UPS & Power Solutions' mainname='Electronics & Home Appliances' subname='Generators, UPS & Power Solutions' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Computer', 'Laptop', 'Generator', 'Cooking Range', 'Washing Machine']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Generators, UPS & Power Solutions</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Kitchen Appliances' mainname='Electronics & Home Appliances' subname='Kitchen Appliances' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Computer', 'Laptop', 'Generator', 'Cooking Range', 'Washing Machine']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Kitchen Appliances</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='AC & Coolers' mainname='Electronics & Home Appliances' subname='AC & Coolers' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Computer', 'Laptop', 'Generator', 'Cooking Range', 'Washing Machine']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>AC & Coolers</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Fridges & Freezers' mainname='Electronics & Home Appliances' subname='Fridges & Freezers' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Computer', 'Laptop', 'Generator', 'Cooking Range', 'Washing Machine']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Fridges & Freezers</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub' style={{ borderBottom: "1px solid rgba(0,47,52,.2)" }}>
                                                                <span className='list_d_m' name='Washing Machines & Dryers' mainname='Electronics & Home Appliances' subname='Washing Machines & Dryers' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Computer', 'Laptop', 'Generator', 'Cooking Range', 'Washing Machine']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Washing Machines & Dryers</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                )}
                                                {this.state.f_c_bikes && (
                                                    <div className='sub_categories' style={{ position: 'relative', top: '255px' }}>
                                                        <ul className='ad_cat_list_sub'>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Motorcycles' mainname='Bikes' subname='Motorcycles' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Honda', 'Unique', 'Superstar', 'Yamaha']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Motorcycles</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Spare Parts' mainname='Bikes' subname='Spare Parts' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Honda', 'Unique', 'Superstar', 'Yamaha']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Spare Parts</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Bicycles' mainname='Bikes' subname='Bicycles' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Honda', 'Unique', 'Superstar', 'Yamaha']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Bicycles</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='ATV & Quads' mainname='Bikes' subname='ATV & Quads' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Honda', 'Unique', 'Superstar', 'Yamaha']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>ATV & Quads</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub' style={{ borderBottom: "1px solid rgba(0,47,52,.2)" }}>
                                                                <span className='list_d_m' name='Scooters' mainname='Bikes' subname='Scooters' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Honda', 'Unique', 'Superstar', 'Yamaha']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Scooters</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                )}
                                                {this.state.f_c_bia && (
                                                    <div className='sub_categories' style={{ position: 'relative', top: '306px' }}>
                                                        <ul className='ad_cat_list_sub'>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Business for Sale' mainname='Business, Industrial & Agriculture' subname='Business for Sale' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Cranes', 'Roller', 'Dumpers', 'Heavy Machinery']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Business for Sale</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Food & Restaurants' mainname='Business, Industrial & Agriculture' subname='Food & Restaurants' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Cranes', 'Roller', 'Dumpers', 'Heavy Machinery']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Food & Restaurants</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Trade & Industrial' mainname='Business, Industrial & Agriculture' subname='Trade & Industrial' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Cranes', 'Roller', 'Dumpers', 'Heavy Machinery']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Trade & Industrial</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Construction & Heavy Machinery' mainname='Business, Industrial & Agriculture' subname='Construction & Heavy Machinery' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Cranes', 'Roller', 'Dumpers', 'Heavy Machinery']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Construction & Heavy Machinery</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Agriculture' mainname='Business, Industrial & Agriculture' subname='Agriculture' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Cranes', 'Roller', 'Dumpers', 'Heavy Machinery']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Agriculture</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Other Business & Industry' mainname='Business, Industrial & Agriculture' subname='Other Business & Industry' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Cranes', 'Roller', 'Dumpers', 'Heavy Machinery']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Other Business & Industry</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub' style={{ borderBottom: "1px solid rgba(0,47,52,.2)" }}>
                                                                <span className='list_d_m' name='Medical & Pharma' mainname='Business, Industrial & Agriculture' subname='Medical & Pharma' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Cranes', 'Roller', 'Dumpers', 'Heavy Machinery']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Medical & Pharma</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                )}
                                                {this.state.f_c_services && (
                                                    <div className='sub_categories' style={{ position: 'relative', top: '0px' }}>
                                                        <ul className='ad_cat_list_sub'>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Education & Classes' mainname='Services' subname='Education & Classes' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Computer', 'Language Classes', 'Tutoring', 'Other']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Education & Classes</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Travel & Visa' mainname='Services' subname='Travel & Visa' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Computer', 'Language Classes', 'Tutoring', 'Other']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Travel & Visa</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Car Rental' mainname='Services' subname='Car Rental' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Computer', 'Language Classes', 'Tutoring', 'Other']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Car Rental</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Drivers & Taxi' mainname='Services' subname='Drivers & Taxi' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Computer', 'Language Classes', 'Tutoring', 'Other']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Drivers & Taxi</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Web Development' mainname='Services' subname='Web Development' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Computer', 'Language Classes', 'Tutoring', 'Other']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Web Development</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Other Services' mainname='Services' subname='Other Services' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Computer', 'Language Classes', 'Tutoring', 'Other']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Other Services</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Electronics & Computer Repair' mainname='Services' subname='Electronics & Computer Repair' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Computer', 'Language Classes', 'Tutoring', 'Other']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Electronics & Computer Repair</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Event Services' mainname='Services' subname='Event Services' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Computer', 'Language Classes', 'Tutoring', 'Other']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Event Services</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Health & Beauty' mainname='Services' subname='Health & Beauty' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Computer', 'Language Classes', 'Tutoring', 'Other']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Health & Beauty</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Maids & Domestic Help' mainname='Services' subname='Maids & Domestic Help' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Computer', 'Language Classes', 'Tutoring', 'Other']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Maids & Domestic Help</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Movers & Packers' mainname='Services' subname='Movers & Packers' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Computer', 'Language Classes', 'Tutoring', 'Other']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Movers & Packers</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Home & Office Repair' mainname='Services' subname='Home & Office Repair' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Computer', 'Language Classes', 'Tutoring', 'Other']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Home & Office Repair</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Catering & Restaurant' mainname='Services' subname='Catering & Restaurant' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Computer', 'Language Classes', 'Tutoring', 'Other']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Catering & Restaurant</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub' style={{ borderBottom: "none" }}>
                                                                <span className='list_d_m' name='Farm & Fresh Food' mainname='Services' subname='Farm & Fresh Food' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Computer', 'Language Classes', 'Tutoring', 'Other']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Farm & Fresh Food</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                )}
                                                {this.state.f_c_jobs && (
                                                    <div className='sub_categories' style={{ position: 'relative', top: '0px' }}>
                                                        <ul className='ad_cat_list_sub'>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Online' mainname='Jobs' subname='Online' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Full-time', 'Contract', 'Part-time', 'Temporary', 'Hourly', 'Monthly', 'Weekly', 'Yearly']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Online</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Marketing' mainname='Jobs' subname='Marketing' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Full-time', 'Contract', 'Part-time', 'Temporary', 'Hourly', 'Monthly', 'Weekly', 'Yearly']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Marketing</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Advertising & PR' mainname='Jobs' subname='Advertising & PR' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Full-time', 'Contract', 'Part-time', 'Temporary', 'Hourly', 'Monthly', 'Weekly', 'Yearly']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Advertising & PR</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Education' mainname='Jobs' subname='Education' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Full-time', 'Contract', 'Part-time', 'Temporary', 'Hourly', 'Monthly', 'Weekly', 'Yearly']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Education</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Customer Service' mainname='Jobs' subname='Customer Service' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Full-time', 'Contract', 'Part-time', 'Temporary', 'Hourly', 'Monthly', 'Weekly', 'Yearly']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Customer Service</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Sales' mainname='Jobs' subname='Sales' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Full-time', 'Contract', 'Part-time', 'Temporary', 'Hourly', 'Monthly', 'Weekly', 'Yearly']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Sales</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='IT & Networking' mainname='Jobs' subname='IT & Networking' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Full-time', 'Contract', 'Part-time', 'Temporary', 'Hourly', 'Monthly', 'Weekly', 'Yearly']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>IT & Networking</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Hotels & Tourism' mainname='Jobs' subname='Hotels & Tourism' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Full-time', 'Contract', 'Part-time', 'Temporary', 'Hourly', 'Monthly', 'Weekly', 'Yearly']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Hotels & Tourism</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Clerical & Administration' mainname='Jobs' subname='Clerical & Administration' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Full-time', 'Contract', 'Part-time', 'Temporary', 'Hourly', 'Monthly', 'Weekly', 'Yearly']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Clerical & Administration</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Human Resources' mainname='Jobs' subname='Human Resources' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Full-time', 'Contract', 'Part-time', 'Temporary', 'Hourly', 'Monthly', 'Weekly', 'Yearly']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Human Resources</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Accounting & Finance' mainname='Jobs' subname='Accounting & Finance' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Full-time', 'Contract', 'Part-time', 'Temporary', 'Hourly', 'Monthly', 'Weekly', 'Yearly']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Accounting & Finance</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Manufacturing' mainname='Jobs' subname='Manufacturing' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Full-time', 'Contract', 'Part-time', 'Temporary', 'Hourly', 'Monthly', 'Weekly', 'Yearly']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Manufacturing</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Medical' mainname='Jobs' subname='Medical' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Full-time', 'Contract', 'Part-time', 'Temporary', 'Hourly', 'Monthly', 'Weekly', 'Yearly']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Medical</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Domestic Staff' mainname='Jobs' subname='Domestic Staff' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Full-time', 'Contract', 'Part-time', 'Temporary', 'Hourly', 'Monthly', 'Weekly', 'Yearly']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Domestic Staff</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub' style={{ borderLeft: "1px solid rgba(0,47,52,.2)" }}>
                                                                <span className='list_d_m' name='Part - Time' mainname='Jobs' subname='Part - Time' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Full-time', 'Contract', 'Part-time', 'Temporary', 'Hourly', 'Monthly', 'Weekly', 'Yearly']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Part - Time</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub' style={{ borderLeft: "1px solid rgba(0,47,52,.2)" }}>
                                                                <span className='list_d_m' name='Other Jobs' mainname='Jobs' subname='Other Jobs' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Full-time', 'Contract', 'Part-time', 'Temporary', 'Hourly', 'Monthly', 'Weekly', 'Yearly']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Other Jobs</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                )}
                                                {this.state.f_c_animals && (
                                                    <div className='sub_categories' style={{ position: 'relative', top: '0px' }}>
                                                        <ul className='ad_cat_list_sub'>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Fish & Aquariums' mainname='Animals' subname='Fish & Aquariums' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Pet', 'Horse', 'Cat', 'Birds']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Fish & Aquariums</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Birds' mainname='Animals' subname='Birds' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Pet', 'Horse', 'Cat', 'Birds']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Birds</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Hens & Aseel' mainname='Animals' subname='Hens & Aseel' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Pet', 'Horse', 'Cat', 'Birds']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Hens & Aseel</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Cats' mainname='Animals' subname='Cats' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Pet', 'Horse', 'Cat', 'Birds']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Cats</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Dogs' mainname='Animals' subname='Dogs' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Pet', 'Horse', 'Cat', 'Birds']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Dogs</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Livestock' mainname='Animals' subname='Livestock' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Pet', 'Horse', 'Cat', 'Birds']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Livestock</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Horses' mainname='Animals' subname='Horses' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Pet', 'Horse', 'Cat', 'Birds']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Horses</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Pet Food & Accessories' mainname='Animals' subname='Pet Food & Accessories' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Pet', 'Horse', 'Cat', 'Birds']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Pet Food & Accessories</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub' style={{ borderBottom: "1px solid rgba(0,47,52,.2)" }}>
                                                                <span className='list_d_m' name='Other Animals' mainname='Animals' subname='Other Animals' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Pet', 'Horse', 'Cat', 'Birds']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Other Animals</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                )}
                                                {this.state.f_c_fhd && (
                                                    <div className='sub_categories' style={{ position: 'relative', top: '0px' }}>
                                                        <ul className='ad_cat_list_sub'>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Sofa & Chairs' mainname='Furniture & Home Decor' subname='Sofa & Chairs' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Painting', 'Carpenter', 'Repair', 'Wall Sheets']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Sofa & Chairs</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Beds & Wardrobes' mainname='Furniture & Home Decor' subname='Beds & Wardrobes' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Painting', 'Carpenter', 'Repair', 'Wall Sheets']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Beds & Wardrobes</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Home Decoration' mainname='Furniture & Home Decor' subname='Home Decoration' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Painting', 'Carpenter', 'Repair', 'Wall Sheets']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Home Decoration</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Tables & Dining' mainname='Furniture & Home Decor' subname='Tables & Dining' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Painting', 'Carpenter', 'Repair', 'Wall Sheets']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Tables & Dining</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Garden & Outdoor' mainname='Furniture & Home Decor' subname='Garden & Outdoor' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Painting', 'Carpenter', 'Repair', 'Wall Sheets']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Garden & Outdoor</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Painting & Mirrors' mainname='Furniture & Home Decor' subname='Painting & Mirrors' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Painting', 'Carpenter', 'Repair', 'Wall Sheets']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Painting & Mirrors</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Rugs & Carpets' mainname='Furniture & Home Decor' subname='Rugs & Carpets' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Painting', 'Carpenter', 'Repair', 'Wall Sheets']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Rugs & Carpets</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Curtains & Blinds' mainname='Furniture & Home Decor' subname='Curtains & Blinds' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Painting', 'Carpenter', 'Repair', 'Wall Sheets']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Curtains & Blinds</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Office Furniture' mainname='Furniture & Home Decor' subname='Office Furniture' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Painting', 'Carpenter', 'Repair', 'Wall Sheets']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Office Furniture</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub' style={{ borderBottom: "1px solid rgba(0,47,52,.2)" }}>
                                                                <span className='list_d_m' name='Other Household Items' mainname='Furniture & Home Decor' subname='Other Household Items' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Painting', 'Carpenter', 'Repair', 'Wall Sheets']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Other Household Items</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                )}
                                                {this.state.f_c_fb && (
                                                    <div className='sub_categories' style={{ position: 'relative', top: '0px' }}>
                                                        <ul className='ad_cat_list_sub'>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Accessories' mainname='Fashion & Beauty' subname='Accessories' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Accessories for Men', 'Accessories for Women']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Accessories</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Clothes' mainname='Fashion & Beauty' subname='Clothes' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Accessories for Men', 'Accessories for Women']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Clothes</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Footwear' mainname='Fashion & Beauty' subname='Footwear' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Accessories for Men', 'Accessories for Women']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Footwear</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Jewellery' mainname='Fashion & Beauty' subname='Jewellery' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Accessories for Men', 'Accessories for Women']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Jewellery</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Make Up' mainname='Fashion & Beauty' subname='Make Up' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Accessories for Men', 'Accessories for Women']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Make Up</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Skin & Hair' mainname='Fashion & Beauty' subname='Skin & Hair' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Accessories for Men', 'Accessories for Women']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Skin & Hair</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Watches' mainname='Fashion & Beauty' subname='Watches' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Accessories for Men', 'Accessories for Women']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Watches</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Wedding' mainname='Fashion & Beauty' subname='Wedding' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Accessories for Men', 'Accessories for Women']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Wedding</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Lawn & Pret' mainname='Fashion & Beauty' subname='Lawn & Pret' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Accessories for Men', 'Accessories for Women']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Lawn & Pret</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Couture' mainname='Fashion & Beauty' subname='Couture' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Accessories for Men', 'Accessories for Women']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Couture</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub' style={{ borderBottom: "1px solid rgba(0,47,52,.2)" }}>
                                                                <span className='list_d_m' name='Other Fashion' mainname='Fashion & Beauty' subname='Other Fashion' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Accessories for Men', 'Accessories for Women']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Other Fashion</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                )}
                                                {this.state.f_c_bsh && (
                                                    <div className='sub_categories' style={{ position: 'absolute', bottom: '50px', width: '100%' }}>
                                                        <ul className='ad_cat_list_sub'>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Books & Magazines' mainname='Books, Sports & Hobbies' subname='Books & Magazines' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Education & Training', 'Literature & Fiction', 'Professional', 'Other Books']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Books & Magazines</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Musical Instruments' mainname='Books, Sports & Hobbies' subname='Musical Instruments' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Education & Training', 'Literature & Fiction', 'Professional', 'Other Books']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Musical Instruments</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Sports Equipment' mainname='Books, Sports & Hobbies' subname='Sports Equipment' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Education & Training', 'Literature & Fiction', 'Professional', 'Other Books']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Sports Equipment</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Gym & Fitness' mainname='Books, Sports & Hobbies' subname='Gym & Fitness' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Education & Training', 'Literature & Fiction', 'Professional', 'Other Books']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Gym & Fitness</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub' style={{ borderBottom: "1px solid rgba(0,47,52,.2)" }}>
                                                                <span className='list_d_m' name='Other Hobbies' mainname='Books, Sports & Hobbies' subname='Other Hobbies' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['Education & Training', 'Literature & Fiction', 'Professional', 'Other Books']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Other Hobbies</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                )}
                                                {this.state.f_c_kids && (
                                                    <div className='sub_categories' style={{ position: 'absolute', bottom: '0px', width: '100%' }}>
                                                        <ul className='ad_cat_list_sub'>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Kids Furniture' mainname='Kids' subname='Kids Furniture' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['New Born Baby', 'Infant', 'Boy', 'Girl']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Kids Furniture</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Toys' mainname='Kids' subname='Toys' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['New Born Baby', 'Infant', 'Boy', 'Girl']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Toys</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Prams & Walkers' mainname='Kids' subname='Prams & Walkers' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['New Born Baby', 'Infant', 'Boy', 'Girl']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Prams & Walkers</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Swings & Slides' mainname='Kids' subname='Swings & Slides' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['New Born Baby', 'Infant', 'Boy', 'Girl']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Swings & Slides</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub'>
                                                                <span className='list_d_m' name='Kids Bikes' mainname='Kids' subname='Kids Bikes' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['New Born Baby', 'Infant', 'Boy', 'Girl']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Kids Bikes</span>
                                                            </li>
                                                            <li className='ad_cat_list_li_sub' style={{ borderBottom: "none" }}>
                                                                <span className='list_d_m' name='Kids Accessories' mainname='Kids' subname='Kids Accessories' onClick={(e) => {
                                                                    this.props.ad_categories({
                                                                        mainCategorie: e.target.attributes[2].textContent,
                                                                        subCategorie: e.target.attributes[3].textContent,
                                                                        type: ['New Born Baby', 'Infant', 'Boy', 'Girl']
                                                                    });
                                                                    this.setState({
                                                                        toggle_ad_categories: false,
                                                                        toggle_ad_categories_sub: false,
                                                                        toggle_ad_post: true,
                                                                    })
                                                                }}>Kids Accessories</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {this.state.toggle_ad_post && (
                        <div>
                            <div className="row" style={{ height: '100%', marginBottom: '122px' }}>
                                <div className='col-lg-12'>
                                    <div className='ad_cat'>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className='choose_cat'>
                                                    <h6>SELECTED CATEGORY</h6>
                                                </div>
                                                <div className='categories_navigation'>
                                                    <span className='c_n_1'>{this.props.mainCat}</span>
                                                    <span className='c_n_2'> / </span>
                                                    <span className='c_n_3'>{this.props.subCat}</span>
                                                    <span className='change_cat' onClick={() => {
                                                        this.setState({
                                                            toggle_ad_categories_sub: true,
                                                        })
                                                    }} >Change</span>
                                                </div>
                                                {this.state.toggle_ad_categories_sub && (
                                                    <div>
                                                        <div className="row" style={{ height: '100%', marginBottom: '122px' }}>
                                                            <div className='col-lg-12'>
                                                                <div className='ad_cat'>
                                                                    <div className="row">
                                                                        <div className="col-lg-12">
                                                                            <div className='choose_cat'>
                                                                                <h6>CHOOSE A CATEGORY</h6>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="row " style={{ marginLeft: '0px', marginRight: '0px' }} >
                                                                        <div className="col-lg-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                                                                            <div className=''>
                                                                                <ul className='ad_cat_list'>
                                                                                    <li className='ad_cat_list_li' onClick={() => {
                                                                                        this.show_cat('f_c_mobiles', this.state.f_c_mobiles)

                                                                                    }}>
                                                                                        <span className='list_d_l'>
                                                                                            <svg width="30px" height="30px" viewBox="0 0 1024 1024"  ><path d="M743.68 85.333l66.987 67.84v701.227l-63.573 84.267h-471.253l-62.507-85.333v-700.373l67.627-67.627h462.72zM708.053 170.667h-391.893l-17.493 17.707v637.653l20.053 27.307h385.92l21.333-27.52v-637.653l-17.92-17.493zM512 682.667c23.564 0 42.667 19.103 42.667 42.667s-19.103 42.667-42.667 42.667c-23.564 0-42.667-19.103-42.667-42.667s19.103-42.667 42.667-42.667z"></path></svg>                                                </span>
                                                                                        <span className='list_d_m'>Mobiles</span>
                                                                                        <span className="list_d_r">
                                                                                            <svg width="25px" height="25px" viewBox="0 0 1024 1024"><path d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"></path></svg>
                                                                                        </span>
                                                                                    </li>

                                                                                    <li className='ad_cat_list_li' onClick={() => { this.show_cat('f_c_vehicles', this.state.f_c_vehicles) }}>
                                                                                        <span className='list_d_l'>
                                                                                            <svg width="30px" height="30px" viewBox="0 0 1024 1024"  ><path d="M744.747 124.16l38.4 33.28 36.949 258.731 107.221 107.179 11.349 27.435v193.963l-38.827 38.784h-38.741v116.352h-77.568v-116.352h-543.061v116.352h-77.568v-116.352h-38.741l-38.827-38.827v-193.877l11.349-27.435 107.264-107.221 36.949-258.731 38.4-33.28h465.493zM768.555 474.325h-513.109l-92.544 92.501v139.093h698.197v-139.093l-92.544-92.501zM298.667 550.784c32.128 0 58.197 26.027 58.197 58.197 0 32.128-26.027 58.155-58.197 58.155-32.128 0-58.197-26.027-58.197-58.155s26.027-58.197 58.197-58.197zM725.333 550.784c32.128 0 58.197 26.027 58.197 58.197 0 32.128-26.027 58.155-58.197 58.155-32.128 0-58.197-26.027-58.197-58.155s26.027-58.197 58.197-58.197zM711.083 201.685h-398.165l-27.904 195.115h453.888l-27.861-195.072z"></path></svg>                                                </span>
                                                                                        <span className='list_d_m'>Vehicles</span>
                                                                                        <span className="list_d_r">
                                                                                            <svg width="25px" height="25px" viewBox="0 0 1024 1024"><path d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"></path></svg>
                                                                                        </span>

                                                                                    </li>
                                                                                    <li className='ad_cat_list_li' onClick={() => { this.show_cat('f_c_pfs', this.state.f_c_pfs) }}>
                                                                                        <span className='list_d_l'>
                                                                                            <svg width="30px" height="30px" viewBox="0 0 1024 1024"  ><path d="M814.546 512v-53.489h-50.036v-17.106h44.529v-50.23h-44.529v-15.749h50.036v-53.489h-118.69v190.061h118.69zM684.179 512v-53.489h-52.13v-136.571h-68.965v190.061h121.095zM452.306 395.52l-10.861 39.098h21.45l-10.59-39.098zM421.625 512h-67.335l65.707-190.061h67.879l65.707 190.061h-70.593l-8.417-29.051h-44.529l-8.417 29.051zM284.51 454.982c0 3.065-1.785 4.615-5.43 4.615-8.844 0-17.299-6.71-25.25-20.091l-49.145 26.609c1.978 5.43 4.849 10.783 8.571 16.135 3.685 5.352 8.533 10.629 14.507 15.787s13.498 9.349 22.535 12.607c9.037 3.258 18.929 4.888 29.595 4.888 22.613 0 40.65-5.547 54.031-16.563 13.421-11.054 20.091-25.95 20.091-44.8 0-9.969-2.56-18.773-7.603-26.453s-11.249-13.809-18.579-18.347c-7.33-4.499-14.662-8.494-21.992-11.791-7.37-3.374-13.575-6.593-18.618-9.774-5.081-3.181-7.603-6.284-7.603-9.387 0-3.258 1.901-4.888 5.702-4.888 3.995 0 7.873 1.746 11.675 5.159 3.801 3.451 6.866 7.525 9.231 12.218l48.33-27.694c-3.219-10.317-11.288-20.364-24.165-30.138-12.839-9.774-29.051-14.662-48.601-14.662-21.333 0-38.593 5.547-51.705 16.563-13.15 11.015-19.705 25.677-19.705 43.986 0 8.883 1.823 16.833 5.43 23.893 3.647 7.059 8.185 12.684 13.73 16.95 5.509 4.267 11.481 8.185 17.92 11.713 6.4 3.49 12.373 6.361 17.92 8.533 5.509 2.171 10.085 4.499 13.691 7.059 3.647 2.56 5.43 5.159 5.43 7.873zM162.909 589.575v-349.091h698.182v349.091h-698.182zM899.879 162.909h-349.091v-38.789l-38.789-38.789-38.789 38.789v38.789h-349.091l-38.789 38.789v426.667l38.789 38.789h349.091v193.939h-77.575v77.575h232.728v-77.575h-77.575v-193.939h349.091l38.789-38.789v-426.667l-38.789-38.789z"></path></svg>                                                </span>
                                                                                        <span className='list_d_m'>Property for Sale</span>
                                                                                        <span className="list_d_r">
                                                                                            <svg width="25px" height="25px" viewBox="0 0 1024 1024"><path d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"></path></svg>
                                                                                        </span>
                                                                                    </li>
                                                                                    <li className='ad_cat_list_li' onClick={() => { this.show_cat('f_c_pfr', this.state.f_c_pfr) }}>
                                                                                        <span className='list_d_l'>
                                                                                            <svg width="30px" height="30px" viewBox="0 0 1024 1024"  ><path d="M706.21 385.164v126.836h64v-126.836h34.792v-49.649h-133.352v49.649h34.521zM557.189 512v-82.968l38.323 82.968h64.775v-176.485h-63.263v82.929l-38.361-82.929h-64.775v176.485h63.302zM478.759 512v-49.649h-46.39v-15.903h41.349v-46.662h-41.349v-14.623h46.39v-49.649h-110.157v176.485h110.157zM271.283 383.418v24.709h7.564c3.879 0 6.943-1.28 9.192-3.801s3.413-5.352 3.413-8.571c0-3.142-1.125-6.050-3.413-8.571-2.25-2.521-5.313-3.763-9.192-3.763h-7.603zM271.283 455.021v56.979h-62.022v-176.485h78.43c20.17 0 36.15 5.43 47.903 16.251 11.791 10.861 17.649 24.513 17.649 40.96 0 9.774-2.637 18.618-7.912 26.609-5.313 7.99-11.986 14.235-20.053 18.773l40.339 73.89h-69.352l-25.018-56.979zM162.909 589.575v-349.091h698.182v349.091h-698.182zM899.879 162.909h-349.091v-38.789l-38.789-38.789-38.789 38.789v38.789h-349.091l-38.789 38.789v426.667l38.789 38.789h349.091v193.939h-77.575v77.575h232.728v-77.575h-77.575v-193.939h349.091l38.789-38.789v-426.667l-38.789-38.789z"></path></svg>                                                </span>
                                                                                        <span className='list_d_m'>Property for Rent</span>
                                                                                        <span className="list_d_r">
                                                                                            <svg width="25px" height="25px" viewBox="0 0 1024 1024"><path d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"></path></svg>
                                                                                        </span>

                                                                                    </li>
                                                                                    <li className='ad_cat_list_li' onClick={() => { this.show_cat('f_c_ea', this.state.f_c_ea) }}>
                                                                                        <span className='list_d_l'>
                                                                                            <svg width="30px" height="30px" viewBox="0 0 1024 1024"  ><path d="M149.76 128l-64.427 62.848v480.853l69.333 67.84h317.781l0.725 75.477h-169.6v80.981h416.128v-80.981h-161.621l-0.683-75.435h315.648l65.621-68.693v-482.389l-75.733-60.501h-713.173zM170.24 638.72v-414.848l15.232-14.848h646.656l21.632 17.28v413.184l-18.176 19.072h-645.12l-20.224-19.84z"></path></svg>                                                </span>
                                                                                        <span className='list_d_m'>Electronics & Home Appliances</span>
                                                                                        <span className="list_d_r">
                                                                                            <svg width="25px" height="25px" viewBox="0 0 1024 1024"><path d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"></path></svg>
                                                                                        </span>

                                                                                    </li>
                                                                                    <li className='ad_cat_list_li' onClick={() => { this.show_cat('f_c_bikes', this.state.f_c_bikes) }}>
                                                                                        <span className='list_d_l'>
                                                                                            <svg width="30px" height="30px" viewBox="0 0 1024 1024"  ><path d="M674.657 245.333l47.813 129.715 23.448-51.706h51.11l26.563 33.51v80.171h-78.406l26.746 72.064h9.892c75.576 0 136.843 60.253 136.843 134.579s-61.267 134.579-136.843 134.579c-59.691-0.227-112.346-38.479-130.112-94.523s3.455-116.947 52.44-150.495v0l2.931-1.982-28.578-78.189-77.49 225.74h-167.070v3.243c-19.579 65.476-85.893 106.172-154.3 94.693s-117.248-71.498-113.643-139.654c3.605-68.156 58.515-122.867 127.764-127.303s130.911 42.808 143.476 109.928v0 3.783h122.554l22.716-66.839h-121.455l-61.735-80.171h-197.662l-58.071 132.598-36.638 9.008-21.616-28.826 69.796-168.089h228.255l64.849-62.696h196.197l-16.304-44.319h-89.763v-68.821h136.294zM796.845 577.368l25.463 69.362-20.884 31.888-43.233-6.306-26.746-75.307-5.129 6.846v0.54c-17.559 23.523-17.878 55.449-0.79 79.306s47.76 34.314 76.196 25.976c28.435-8.338 48.277-33.608 49.289-62.772s-17.032-55.706-44.823-65.931v0l-9.343-3.603zM365.248 616.823c-12.157-27.922-41.767-44.432-72.372-40.354s-54.681 27.74-58.847 57.836c-4.166 30.096 12.603 59.227 40.986 71.201s61.403 3.848 80.707-19.861v0l5.862-7.387-85 0.18v-57.111l29.86-18.016 30.41 19.818h31.142zM627.943 413.233h-153.88l-31.142 33.568 32.791 46.432h128.233l23.998-80zM318.667 345.333v66.667h-133.333v-66.667h133.333z"></path></svg>                                                </span>
                                                                                        <span className='list_d_m'>Bikes</span>
                                                                                        <span className="list_d_r">
                                                                                            <svg width="25px" height="25px" viewBox="0 0 1024 1024"><path d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"></path></svg>
                                                                                        </span>

                                                                                    </li>
                                                                                    <li className='ad_cat_list_li' onClick={() => { this.show_cat('f_c_bia', this.state.f_c_bia) }}>
                                                                                        <span className='list_d_l'>
                                                                                            <svg width="30px" height="30px" viewBox="0 0 1024 1024"  ><path d="M724.48 717.013c0.64 2.773 0.853 5.547 0.853 8.32s-0.213 5.547-0.853 8.32-1.28 5.333-2.347 7.893c-1.067 2.773-2.56 5.12-4.053 7.467s-3.2 4.48-5.333 6.4c-7.893 8.107-18.773 12.587-30.080 12.587s-22.187-4.48-30.080-12.587c-2.133-1.92-3.84-4.053-5.333-6.4s-2.987-4.693-4.053-7.467c-1.067-2.56-1.92-5.12-2.347-7.893-0.64-2.773-0.853-5.547-0.853-8.32s0.213-5.547 0.853-8.32c0.427-2.773 1.28-5.333 2.347-8.107 1.067-2.56 2.56-4.907 4.053-7.253s3.2-4.48 5.333-6.613c1.92-1.92 4.053-3.627 6.4-5.12s4.693-2.987 7.253-4.053c2.773-1.067 5.333-1.707 8.107-2.347 13.867-2.773 28.587 1.707 38.4 11.52 2.133 2.133 3.84 4.267 5.333 6.613s2.987 4.693 4.053 7.253c1.067 2.773 1.707 5.333 2.347 8.107zM553.813 717.013c0.64 2.773 0.853 5.547 0.853 8.32 0 11.307-4.48 22.187-12.587 30.293-1.92 1.92-4.053 3.627-6.4 5.12s-4.693 2.987-7.253 4.053c-2.773 1.067-5.333 1.92-8.107 2.347-2.773 0.64-5.547 0.853-8.32 0.853s-5.547-0.213-8.32-0.853c-2.773-0.427-5.333-1.28-8.107-2.347-2.56-1.067-4.907-2.56-7.253-4.053s-4.48-3.2-6.4-5.12c-8.107-8.107-12.587-18.987-12.587-30.293 0-2.773 0.213-5.547 0.853-8.32s1.28-5.333 2.347-8.107c1.067-2.56 2.56-4.907 4.053-7.253s3.2-4.48 5.333-6.4c1.92-2.133 4.053-3.84 6.4-5.333s4.693-2.987 7.253-4.053c2.773-1.067 5.333-1.707 8.107-2.347 13.867-2.773 28.587 1.707 38.4 11.733 2.133 1.92 3.84 4.053 5.333 6.4s2.987 4.693 4.053 7.253c1.067 2.773 1.92 5.333 2.347 8.107zM371.413 695.253c8.107 7.893 12.587 18.773 12.587 30.080s-4.48 22.187-12.587 30.080c-7.893 8.107-18.773 12.587-30.080 12.587s-22.187-4.48-30.080-12.587c-8.107-7.893-12.587-18.773-12.587-30.080s4.48-22.187 12.587-30.080c15.787-16 44.373-16 60.16 0zM853.333 853.333h-682.667v-682.667h85.333v416.683l213.333-128v137.984l170.667-128v118.016l213.333-128v393.984zM725.333 436.651v-137.984l-170.667 128v-118.016l-213.333 128v-308.651l-42.667-42.667h-170.667l-42.667 42.667v768l42.667 42.667h768l42.667-42.667v-587.349l-213.333 128z"></path></svg>                                                </span>
                                                                                        <span className='list_d_m'>Business, Industrial & Agriculture</span>
                                                                                        <span className="list_d_r">
                                                                                            <svg width="25px" height="25px" viewBox="0 0 1024 1024"><path d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"></path></svg>
                                                                                        </span>

                                                                                    </li>
                                                                                    <li className='ad_cat_list_li' onClick={() => { this.show_cat('f_c_services', this.state.f_c_services) }}>
                                                                                        <span className='list_d_l'>
                                                                                            <svg width="30px" height="30px" viewBox="0 0 1024 1024"  ><path d="M845.419 795.973l-18.078 18.059h-643.422l-18.078-18.059v-37.922l18.078-18.059h643.422l18.078 18.059v37.922zM198.941 562.396l43.308-63.059v-153.289c0-46.52 37.845-84.365 84.365-84.365h356.844c46.52 0 84.365 37.845 84.365 84.365v155.441l46.249 54.576v15.597h-615.134v-9.269zM859.19 663.070h-320.595v-14.48h352.403v-120.712l-46.249-54.576v-127.248c0-88.94-72.347-161.287-161.287-161.287h-144.863v-18.924h71.095v-76.922h-216.422v76.922h68.404v18.924h-135.058c-88.94 0-161.287 72.347-161.287 161.287v129.404l-43.308 63.040v110.096h339.653v14.48h-309.596l-63.155 63.136v101.616l63.155 63.136h707.114l63.155-63.136v-101.616l-63.155-63.136z"></path></svg>
                                                                                        </span>
                                                                                        <span className='list_d_m'>Services</span>
                                                                                        <span className="list_d_r">
                                                                                            <svg width="25px" height="25px" viewBox="0 0 1024 1024"><path d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"></path></svg>
                                                                                        </span>

                                                                                    </li>
                                                                                    <li className='ad_cat_list_li' onClick={() => {
                                                                                        this.show_cat('f_c_jobs', this.state.f_c_jobs)
                                                                                        this.setState({
                                                                                            kids_bottom_border: { ...this.state.kids_bottom_border, borderBottom: '1px solid rgba(0,47,52,.2)' }
                                                                                        })
                                                                                    }}>
                                                                                        <span className='list_d_l'>
                                                                                            <svg width="30px" height="30px" viewBox="0 0 1024 1024"  ><path d="M341.665 89.769l-82.848 72.739v66.327h-70.534l-98.517 98.906v468.388l95.92 104.215h649.246l99.298-102.676v-478.475l-107.179-90.359h-58.539v-2.275h-3.907v-65.087l-85.419-71.703h-337.522zM350.693 204.115l25.616-22.448h269.404l26.995 22.677v24.491h-322.015v-24.72zM181.668 365.697l44.756-44.963h567.065l48.844 41.17v79.17h-660.665v-75.381zM696.787 595.514v-62.538h145.545v227.542l-46.362 47.901h-569.959l-44.341-48.156v-227.29h127.763v62.538l31.132 17.116 31.132-17.116v-62.538h262.832v62.538l31.132 17.116 31.132-17.116z"></path></svg>
                                                                                        </span>
                                                                                        <span className='list_d_m'>Jobs</span>
                                                                                        <span className="list_d_r">
                                                                                            <svg width="25px" height="25px" viewBox="0 0 1024 1024"><path d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"></path></svg>
                                                                                        </span>

                                                                                    </li>
                                                                                    <li className='ad_cat_list_li' onClick={() => { this.show_cat('f_c_animals', this.state.f_c_animals) }}>
                                                                                        <span className='list_d_l'>
                                                                                            <svg width="30px" height="30px" viewBox="0 0 1024 1024"  ><path d="M653.689 147.951l168.004 35.403 99.123 140.646-104.437 161.363-24.699 166.528-48.766 44.876v80.131l-78.051 100.6h-291.644l-78.521-105.184 0.336-75.789-50.86-37.2-53.461-171.971-99.76-163.964 98.543-139.806 162.335-35.46 301.86-0.167zM668.063 715.029h-298.247l-0.149 32.58 41.095 55.034h217.445l39.859-51.368v-36.246zM625.751 222.82l-249.539 0.13-111.211 251.167 43.32 139.375 36.472 26.684h349.054l27.675-25.451 20.378-137.43-116.152-254.479zM560.227 494.238v19.798l-55.651 50.581-54.605-48.092v-22.288h110.258zM714.622 237.285l71.616 156.89 44.277-68.377-53.050-75.262-62.838-13.248zM618.824 353.349c10.647 0 19.275 8.644 19.275 19.275 0 10.665-8.626 19.313-19.275 19.313s-19.295-8.644-19.295-19.313c0-10.627 8.644-19.275 19.295-19.275zM380.916 353.349c10.647 0 19.295 8.644 19.295 19.275 0 10.665-8.644 19.313-19.295 19.313s-19.295-8.644-19.295-19.313c0-10.627 8.644-19.275 19.295-19.275zM287.553 238.315l-53.5 12.013-53.649 76.086 39.447 64.822 67.702-152.923z"></path></svg>
                                                                                        </span>
                                                                                        <span className='list_d_m'>Animals</span>
                                                                                        <span className="list_d_r">
                                                                                            <svg width="25px" height="25px" viewBox="0 0 1024 1024"><path d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"></path></svg>
                                                                                        </span>

                                                                                    </li>
                                                                                    <li className='ad_cat_list_li' onClick={() => { this.show_cat('f_c_fhd', this.state.f_c_fhd) }}>
                                                                                        <span className='list_d_l'>
                                                                                            <svg width="30px" height="30px" viewBox="0 0 1024 1024"  ><path d="M268.748 91.803l-70.244 96.818v124.45l-24.559-0.152-82.195 104.783v430.333h152.539v75.637h91.975v-75.637h333.816v75.637h91.975v-75.637h170.135v-436.888l-82.295-97.219h-4.335v-117.692l-78.665-104.431h-498.206zM429.605 396.172l-79.319-82.195-59.755-0.353v-95.152l25.112-34.692h405.422l32.524 43.213v86.934h-87.64l-65.504 77.403v75.284h-170.792v-70.444zM183.829 449.472l34.743-44.274 92.48 0.505 26.626 27.632v125.207h354.845v-133.528l16.137-19.111h98.633l32.977 38.93v311.176h-656.49v-306.588z"></path></svg>
                                                                                        </span>
                                                                                        <span className='list_d_m'>Furniture & Home Decor</span>
                                                                                        <span className="list_d_r">
                                                                                            <svg width="25px" height="25px" viewBox="0 0 1024 1024"><path d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"></path></svg>
                                                                                        </span>

                                                                                    </li>
                                                                                    <li className='ad_cat_list_li' onClick={() => { this.show_cat('f_c_fb', this.state.f_c_fb) }}>
                                                                                        <span className='list_d_l'>
                                                                                            <svg width="30px" height="30px" viewBox="0 0 1024 1024"  ><path d="M708.012 340.654v471.101h-391.011v-471.101h-116.125l48.317-144.445 32.889-26.596h106.075c17.154 51.007 65.474 87.906 122.014 87.906s104.908-36.899 122.062-87.906h101.002l28.423 17.258 56.135 153.784h-109.781zM827.639 132.662l-71.867-43.647h-197.179l-0.252 40.097c-0.204 26.393-21.824 47.809-48.165 47.809-26.393 0-47.964-21.468-48.116-47.861l-0.304-39.993h-208.092l-73.39 59.282-91.204 272.855h147.339v471.101h552.103v-471.101h144.397l-105.212-288.538z"></path></svg>
                                                                                        </span>
                                                                                        <span className='list_d_m'>Fashion & Beauty</span>
                                                                                        <span className="list_d_r">
                                                                                            <svg width="25px" height="25px" viewBox="0 0 1024 1024"><path d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"></path></svg>
                                                                                        </span>

                                                                                    </li>
                                                                                    <li className='ad_cat_list_li' onClick={() => { this.show_cat('f_c_bsh', this.state.f_c_bsh) }}>
                                                                                        <span className='list_d_l'>
                                                                                            <svg width="30px" height="30px" viewBox="0 0 1024 1024"  ><path d="M777.049 133.012l69.146 7.353 48.548 49.856 5.553 69.297-95.903 93.421-60.089-6.386-24.218 23.781c19.044 29.22 29.447 63.633 29.447 98.728 0 84.059-57.645 154.894-135.469 175.074 2.028 12.791 3.050 25.676 3.050 38.544 0 138.711-112.843 251.535-251.535 251.535-187.504 0-327.75-206.226-205.791-403.793 74.207-77.997 153.737-106.060 231.734-97.893 16.941-82.279 89.952-144.318 177.158-144.318 24.407 0 48.093 4.794 70.397 14.231v0l4.301 2.141 22.285 12.98 21.602-21.223-0.568-0.587-5.553-69.335 95.903-93.402zM568.679 364.005c-57.948 0-105.057 47.128-105.057 105.057 0 1.346 0.114 2.69 0.208 4.017v0l3.393 56.469-51.808-15.291c-16.373-4.831-33.124-7.297-49.837-7.297-138.008 0-239.388 159.952-128.478 304.214 144.261 110.91 304.214 9.551 304.214-128.497 0-19.517-3.412-39.093-10.119-58.213v0l-18.324-52.206 57.626 1.914c56.109-0.057 103.237-47.185 103.237-105.113 0-15.386-3.544-30.034-9.779-43.603v0l-115.498 113.451-44.171-6.783-8.944-47.298 114.246-112.2-2.103-1.233c-12.317-4.907-25.354-7.391-38.809-7.391zM367.141 573.986c54.271 0 98.271 44 98.271 98.271s-44 98.252-98.271 98.252c-54.271 0-98.271-43.981-98.271-98.252s44-98.271 98.271-98.271zM804.43 212.125l-44.892 43.754 0.53 6.556 10.384 10.668 6.556 0.7 44.892-43.735-0.53-6.537-10.403-10.687-6.537-0.719z"></path></svg>
                                                                                        </span>
                                                                                        <span className='list_d_m'>Books, Sports & Hobbies</span>
                                                                                        <span className="list_d_r">
                                                                                            <svg width="25px" height="25px" viewBox="0 0 1024 1024"><path d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"></path></svg>
                                                                                        </span>

                                                                                    </li>
                                                                                    <li className='ad_cat_list_li' onClick={() => { this.show_cat('f_c_kids', this.state.f_c_kids) }} style={this.state.kids_bottom_border}>
                                                                                        <span className='list_d_l'>
                                                                                            <svg width="30px" height="30px" viewBox="0 0 1024 1024"  ><path d="M395.636 861.090v-387.879h232.728v77.575h-77.575v77.575h77.575v77.575h-155.151v77.575h155.151v77.575h-232.728zM434.425 395.636h155.151v-38.789h-155.151v38.789zM512 240.485c21.41 0 38.789 17.415 38.789 38.789h-77.575c0-21.371 17.377-38.789 38.789-38.789zM667.151 395.636v-77.575l-38.789-38.789c0-50.541-32.427-93.556-77.575-109.575v-45.575l-38.789-38.789-38.789 38.789v45.575c-45.15 16.019-77.575 59.035-77.575 109.575l-38.789 38.789v77.575l-38.789 38.789v465.454l38.789 38.789h310.303l38.789-38.789v-465.454l-38.789-38.789z"></path></svg>
                                                                                        </span>
                                                                                        <span className='list_d_m'>Kids</span>
                                                                                        <span className="list_d_r">
                                                                                            <svg width="25px" height="25px" viewBox="0 0 1024 1024"><path d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"></path></svg>
                                                                                        </span>

                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                                                                            {this.state.f_c_mobiles && (
                                                                                <div className='sub_categories' >
                                                                                    <ul className='ad_cat_list_sub'>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Tablets' mainname='Mobiles' subname='Tablets' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Apple', 'Danny Tabs', 'Q Tabs', 'Samsung', 'Other Tablets',]
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Tablets</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Accessories' mainname='Mobiles' subname='Accessories' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Mobile', 'Tablets']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Accessories</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub' style={{ borderBottom: "1px solid rgba(0,47,52,.2)" }}>
                                                                                            <span className='list_d_m' name='Mobile Phones' mainname='Mobiles' subname='Mobile Phones' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Apple', 'Samsung']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Mobile Phones</span>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            )}
                                                                            {this.state.f_c_vehicles && (
                                                                                <div className='sub_categories' style={{ position: 'relative', top: '51px' }}>
                                                                                    <ul className='ad_cat_list_sub'>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Cars' mainname='Vehicles' subname='Cars' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['CNG', 'Diesel', 'Hybrid', 'LPG', 'Petrol']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Cars</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Cars on Installments' mainname='Vehicles' subname='Cars on Installments' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['CNG', 'Diesel', 'Hybrid', 'LPG', 'Petrol']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Cars on Installments</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Cars Accessories' mainname='Vehicles' subname='Cars Accessories' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['CNG', 'Diesel', 'Hybrid', 'LPG', 'Petrol']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Cars Accessories</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Spare Parts' mainname='Vehicles' subname='Spare Parts' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['CNG', 'Diesel', 'Hybrid', 'LPG', 'Petrol']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Spare Parts</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Buses, Vans & Trucks' mainname='Vehicles' subname='Buses, Vans & Trucks' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['CNG', 'Diesel', 'Hybrid', 'LPG', 'Petrol']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Buses, Vans & Trucks</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Rickshaw & Chingchi' mainname='Vehicles' subname='Rickshaw & Chingchi' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['CNG', 'Diesel', 'Hybrid', 'LPG', 'Petrol']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Rickshaw & Chingchi</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Other Vehicles' mainname='Vehicles' subname='Other Vehicles' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['CNG', 'Diesel', 'Hybrid', 'LPG', 'Petrol']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Other Vehicles</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Boats' mainname='Vehicles' subname='Boats' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['CNG', 'Diesel', 'Hybrid', 'LPG', 'Petrol']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Boats</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub' style={{ borderBottom: "1px solid rgba(0,47,52,.2)" }}>
                                                                                            <span className='list_d_m' name='Tractors & Trailers' mainname='Vehicles' subname='Tractors & Trailers' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['CNG', 'Diesel', 'Hybrid', 'LPG', 'Petrol']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Tractors & Trailers</span>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            )}
                                                                            {this.state.f_c_pfs && (
                                                                                <div className='sub_categories' style={{ position: 'relative', top: '102px' }}>
                                                                                    <ul className='ad_cat_list_sub'>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Land & Plots' mainname='Property for Sale' subname='Land & Plots' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Kanal', 'Marla', 'Square Feet', 'Square Meter', 'Square Yards']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Land & Plots</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Houses' mainname='Property for Sale' subname='Houses' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Kanal', 'Marla', 'Square Feet', 'Square Meter', 'Square Yards']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Houses</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Apartments & Flats' mainname='Property for Sale' subname='Apartments & Flats' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Kanal', 'Marla', 'Square Feet', 'Square Meter', 'Square Yards']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Apartments & Flats</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Shops - Offices - Commercial Space' mainname='Property for Sale' subname='Shops - Offices - Commercial Space' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Kanal', 'Marla', 'Square Feet', 'Square Meter', 'Square Yards']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Shops - Offices - Commercial Space</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub' style={{ borderBottom: "1px solid rgba(0,47,52,.2)" }}>
                                                                                            <span className='list_d_m' name='Portions & Floors' mainname='Property for Sale' subname='Portions & Floors' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Kanal', 'Marla', 'Square Feet', 'Square Meter', 'Square Yards']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Portions & Floors</span>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            )}
                                                                            {this.state.f_c_pfr && (
                                                                                <div className='sub_categories' style={{ position: 'relative', top: '153px' }}>
                                                                                    <ul className='ad_cat_list_sub'>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Houses' mainname='Property for Rent' subname='Houses' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Kanal', 'Marla', 'Square Feet', 'Square Meter', 'Square Yards']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Houses</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Apartments & Flats' mainname='Property for Rent' subname='Apartments & Flats' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Kanal', 'Marla', 'Square Feet', 'Square Meter', 'Square Yards']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Apartments & Flats</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Portions & Floors' mainname='Property for Rent' subname='Portions & Floors' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Kanal', 'Marla', 'Square Feet', 'Square Meter', 'Square Yards']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Portions & Floors</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Shops - Offices - Commercial Space' mainname='Property for Rent' subname='Shops - Offices - Commercial Space' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Kanal', 'Marla', 'Square Feet', 'Square Meter', 'Square Yards']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Shops - Offices - Commercial Space</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Rooms' mainname='Property for Rent' subname='Rooms' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Kanal', 'Marla', 'Square Feet', 'Square Meter', 'Square Yards']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Rooms</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Roommates & Paying Guests' mainname='Property for Rent' subname='Roommates & Paying Guests' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Kanal', 'Marla', 'Square Feet', 'Square Meter', 'Square Yards']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Roommates & Paying Guests</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Vacation Rentals - Guest Houses' mainname='Property for Rent' subname='Vacation Rentals - Guest Houses' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Kanal', 'Marla', 'Square Feet', 'Square Meter', 'Square Yards']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Vacation Rentals - Guest Houses</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub' style={{ borderBottom: "1px solid rgba(0,47,52,.2)" }}>
                                                                                            <span className='list_d_m' name='Land & Plots' mainname='Property for Rent' subname='Land & Plots' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Kanal', 'Marla', 'Square Feet', 'Square Meter', 'Square Yards']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Land & Plots</span>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            )}
                                                                            {this.state.f_c_ea && (
                                                                                <div className='sub_categories' style={{ position: 'relative', top: '204px' }}>
                                                                                    <ul className='ad_cat_list_sub'>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Computer & Accessories' mainname='Electronics & Home Appliances' subname='Computer & Accessories' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Computer', 'Laptop', 'Generator', 'Cooking Range', 'Washing Machine']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Computer & Accessories</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='TV - Video - Audio' mainname='Electronics & Home Appliances' subname='TV - Video - Audio' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Computer', 'Laptop', 'Generator', 'Cooking Range', 'Washing Machine']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>TV - Video - Audio</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Cameras & Accessories' mainname='Electronics & Home Appliances' subname='Cameras & Accessories' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Computer', 'Laptop', 'Generator', 'Cooking Range', 'Washing Machine']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Cameras & Accessories</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Games & Entertainment' mainname='Electronics & Home Appliances' subname='Games & Entertainment' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Computer', 'Laptop', 'Generator', 'Cooking Range', 'Washing Machine']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Games & Entertainment</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Other Home Appliances' mainname='Electronics & Home Appliances' subname='Other Home Appliances' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Computer', 'Laptop', 'Generator', 'Cooking Range', 'Washing Machine']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Other Home Appliances</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Generators, UPS & Power Solutions' mainname='Electronics & Home Appliances' subname='Generators, UPS & Power Solutions' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Computer', 'Laptop', 'Generator', 'Cooking Range', 'Washing Machine']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Generators, UPS & Power Solutions</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Kitchen Appliances' mainname='Electronics & Home Appliances' subname='Kitchen Appliances' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Computer', 'Laptop', 'Generator', 'Cooking Range', 'Washing Machine']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Kitchen Appliances</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='AC & Coolers' mainname='Electronics & Home Appliances' subname='AC & Coolers' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Computer', 'Laptop', 'Generator', 'Cooking Range', 'Washing Machine']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>AC & Coolers</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Fridges & Freezers' mainname='Electronics & Home Appliances' subname='Fridges & Freezers' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Computer', 'Laptop', 'Generator', 'Cooking Range', 'Washing Machine']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Fridges & Freezers</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub' style={{ borderBottom: "1px solid rgba(0,47,52,.2)" }}>
                                                                                            <span className='list_d_m' name='Washing Machines & Dryers' mainname='Electronics & Home Appliances' subname='Washing Machines & Dryers' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Computer', 'Laptop', 'Generator', 'Cooking Range', 'Washing Machine']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Washing Machines & Dryers</span>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            )}
                                                                            {this.state.f_c_bikes && (
                                                                                <div className='sub_categories' style={{ position: 'relative', top: '255px' }}>
                                                                                    <ul className='ad_cat_list_sub'>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Motorcycles' mainname='Bikes' subname='Motorcycles' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Honda', 'Unique', 'Superstar', 'Yamaha']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Motorcycles</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Spare Parts' mainname='Bikes' subname='Spare Parts' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Honda', 'Unique', 'Superstar', 'Yamaha']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Spare Parts</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Bicycles' mainname='Bikes' subname='Bicycles' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Honda', 'Unique', 'Superstar', 'Yamaha']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Bicycles</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='ATV & Quads' mainname='Bikes' subname='ATV & Quads' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Honda', 'Unique', 'Superstar', 'Yamaha']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>ATV & Quads</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub' style={{ borderBottom: "1px solid rgba(0,47,52,.2)" }}>
                                                                                            <span className='list_d_m' name='Scooters' mainname='Bikes' subname='Scooters' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Honda', 'Unique', 'Superstar', 'Yamaha']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Scooters</span>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            )}
                                                                            {this.state.f_c_bia && (
                                                                                <div className='sub_categories' style={{ position: 'relative', top: '306px' }}>
                                                                                    <ul className='ad_cat_list_sub'>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Business for Sale' mainname='Business, Industrial & Agriculture' subname='Business for Sale' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Cranes', 'Roller', 'Dumpers', 'Heavy Machinery']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Business for Sale</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Food & Restaurants' mainname='Business, Industrial & Agriculture' subname='Food & Restaurants' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Cranes', 'Roller', 'Dumpers', 'Heavy Machinery']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Food & Restaurants</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Trade & Industrial' mainname='Business, Industrial & Agriculture' subname='Trade & Industrial' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Cranes', 'Roller', 'Dumpers', 'Heavy Machinery']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Trade & Industrial</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Construction & Heavy Machinery' mainname='Business, Industrial & Agriculture' subname='Construction & Heavy Machinery' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Cranes', 'Roller', 'Dumpers', 'Heavy Machinery']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Construction & Heavy Machinery</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Agriculture' mainname='Business, Industrial & Agriculture' subname='Agriculture' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Cranes', 'Roller', 'Dumpers', 'Heavy Machinery']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Agriculture</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Other Business & Industry' mainname='Business, Industrial & Agriculture' subname='Other Business & Industry' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Cranes', 'Roller', 'Dumpers', 'Heavy Machinery']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Other Business & Industry</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub' style={{ borderBottom: "1px solid rgba(0,47,52,.2)" }}>
                                                                                            <span className='list_d_m' name='Medical & Pharma' mainname='Business, Industrial & Agriculture' subname='Medical & Pharma' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Cranes', 'Roller', 'Dumpers', 'Heavy Machinery']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Medical & Pharma</span>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            )}
                                                                            {this.state.f_c_services && (
                                                                                <div className='sub_categories' style={{ position: 'relative', top: '0px' }}>
                                                                                    <ul className='ad_cat_list_sub'>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Education & Classes' mainname='Services' subname='Education & Classes' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Computer', 'Language Classes', 'Tutoring', 'Other']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Education & Classes</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Travel & Visa' mainname='Services' subname='Travel & Visa' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Computer', 'Language Classes', 'Tutoring', 'Other']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Travel & Visa</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Car Rental' mainname='Services' subname='Car Rental' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Computer', 'Language Classes', 'Tutoring', 'Other']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Car Rental</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Drivers & Taxi' mainname='Services' subname='Drivers & Taxi' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Computer', 'Language Classes', 'Tutoring', 'Other']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Drivers & Taxi</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Web Development' mainname='Services' subname='Web Development' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Computer', 'Language Classes', 'Tutoring', 'Other']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Web Development</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Other Services' mainname='Services' subname='Other Services' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Computer', 'Language Classes', 'Tutoring', 'Other']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Other Services</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Electronics & Computer Repair' mainname='Services' subname='Electronics & Computer Repair' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Computer', 'Language Classes', 'Tutoring', 'Other']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Electronics & Computer Repair</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Event Services' mainname='Services' subname='Event Services' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Computer', 'Language Classes', 'Tutoring', 'Other']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Event Services</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Health & Beauty' mainname='Services' subname='Health & Beauty' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Computer', 'Language Classes', 'Tutoring', 'Other']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Health & Beauty</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Maids & Domestic Help' mainname='Services' subname='Maids & Domestic Help' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Computer', 'Language Classes', 'Tutoring', 'Other']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Maids & Domestic Help</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Movers & Packers' mainname='Services' subname='Movers & Packers' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Computer', 'Language Classes', 'Tutoring', 'Other']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Movers & Packers</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Home & Office Repair' mainname='Services' subname='Home & Office Repair' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Computer', 'Language Classes', 'Tutoring', 'Other']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Home & Office Repair</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Catering & Restaurant' mainname='Services' subname='Catering & Restaurant' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Computer', 'Language Classes', 'Tutoring', 'Other']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Catering & Restaurant</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub' style={{ borderBottom: "none" }}>
                                                                                            <span className='list_d_m' name='Farm & Fresh Food' mainname='Services' subname='Farm & Fresh Food' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Computer', 'Language Classes', 'Tutoring', 'Other']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Farm & Fresh Food</span>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            )}
                                                                            {this.state.f_c_jobs && (
                                                                                <div className='sub_categories' style={{ position: 'relative', top: '0px' }}>
                                                                                    <ul className='ad_cat_list_sub'>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Online' mainname='Jobs' subname='Online' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Full-time', 'Contract', 'Part-time', 'Temporary', 'Hourly', 'Monthly', 'Weekly', 'Yearly']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Online</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Marketing' mainname='Jobs' subname='Marketing' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Full-time', 'Contract', 'Part-time', 'Temporary', 'Hourly', 'Monthly', 'Weekly', 'Yearly']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Marketing</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Advertising & PR' mainname='Jobs' subname='Advertising & PR' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Full-time', 'Contract', 'Part-time', 'Temporary', 'Hourly', 'Monthly', 'Weekly', 'Yearly']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Advertising & PR</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Education' mainname='Jobs' subname='Education' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Full-time', 'Contract', 'Part-time', 'Temporary', 'Hourly', 'Monthly', 'Weekly', 'Yearly']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Education</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Customer Service' mainname='Jobs' subname='Customer Service' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Full-time', 'Contract', 'Part-time', 'Temporary', 'Hourly', 'Monthly', 'Weekly', 'Yearly']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Customer Service</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Sales' mainname='Jobs' subname='Sales' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Full-time', 'Contract', 'Part-time', 'Temporary', 'Hourly', 'Monthly', 'Weekly', 'Yearly']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Sales</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='IT & Networking' mainname='Jobs' subname='IT & Networking' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Full-time', 'Contract', 'Part-time', 'Temporary', 'Hourly', 'Monthly', 'Weekly', 'Yearly']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>IT & Networking</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Hotels & Tourism' mainname='Jobs' subname='Hotels & Tourism' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Full-time', 'Contract', 'Part-time', 'Temporary', 'Hourly', 'Monthly', 'Weekly', 'Yearly']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Hotels & Tourism</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Clerical & Administration' mainname='Jobs' subname='Clerical & Administration' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Full-time', 'Contract', 'Part-time', 'Temporary', 'Hourly', 'Monthly', 'Weekly', 'Yearly']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Clerical & Administration</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Human Resources' mainname='Jobs' subname='Human Resources' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Full-time', 'Contract', 'Part-time', 'Temporary', 'Hourly', 'Monthly', 'Weekly', 'Yearly']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Human Resources</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Accounting & Finance' mainname='Jobs' subname='Accounting & Finance' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Full-time', 'Contract', 'Part-time', 'Temporary', 'Hourly', 'Monthly', 'Weekly', 'Yearly']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Accounting & Finance</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Manufacturing' mainname='Jobs' subname='Manufacturing' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Full-time', 'Contract', 'Part-time', 'Temporary', 'Hourly', 'Monthly', 'Weekly', 'Yearly']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Manufacturing</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Medical' mainname='Jobs' subname='Medical' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Full-time', 'Contract', 'Part-time', 'Temporary', 'Hourly', 'Monthly', 'Weekly', 'Yearly']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Medical</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Domestic Staff' mainname='Jobs' subname='Domestic Staff' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Full-time', 'Contract', 'Part-time', 'Temporary', 'Hourly', 'Monthly', 'Weekly', 'Yearly']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Domestic Staff</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub' style={{ borderLeft: "1px solid rgba(0,47,52,.2)" }}>
                                                                                            <span className='list_d_m' name='Part - Time' mainname='Jobs' subname='Part - Time' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Full-time', 'Contract', 'Part-time', 'Temporary', 'Hourly', 'Monthly', 'Weekly', 'Yearly']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Part - Time</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub' style={{ borderLeft: "1px solid rgba(0,47,52,.2)" }}>
                                                                                            <span className='list_d_m' name='Other Jobs' mainname='Jobs' subname='Other Jobs' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Full-time', 'Contract', 'Part-time', 'Temporary', 'Hourly', 'Monthly', 'Weekly', 'Yearly']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Other Jobs</span>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            )}
                                                                            {this.state.f_c_animals && (
                                                                                <div className='sub_categories' style={{ position: 'relative', top: '0px' }}>
                                                                                    <ul className='ad_cat_list_sub'>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Fish & Aquariums' mainname='Animals' subname='Fish & Aquariums' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Pet', 'Horse', 'Cat', 'Birds']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Fish & Aquariums</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Birds' mainname='Animals' subname='Birds' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Pet', 'Horse', 'Cat', 'Birds']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Birds</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Hens & Aseel' mainname='Animals' subname='Hens & Aseel' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Pet', 'Horse', 'Cat', 'Birds']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Hens & Aseel</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Cats' mainname='Animals' subname='Cats' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Pet', 'Horse', 'Cat', 'Birds']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Cats</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Dogs' mainname='Animals' subname='Dogs' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Pet', 'Horse', 'Cat', 'Birds']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Dogs</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Livestock' mainname='Animals' subname='Livestock' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Pet', 'Horse', 'Cat', 'Birds']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Livestock</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Horses' mainname='Animals' subname='Horses' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Pet', 'Horse', 'Cat', 'Birds']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Horses</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Pet Food & Accessories' mainname='Animals' subname='Pet Food & Accessories' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Pet', 'Horse', 'Cat', 'Birds']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Pet Food & Accessories</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub' style={{ borderBottom: "1px solid rgba(0,47,52,.2)" }}>
                                                                                            <span className='list_d_m' name='Other Animals' mainname='Animals' subname='Other Animals' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Pet', 'Horse', 'Cat', 'Birds']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Other Animals</span>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            )}
                                                                            {this.state.f_c_fhd && (
                                                                                <div className='sub_categories' style={{ position: 'relative', top: '0px' }}>
                                                                                    <ul className='ad_cat_list_sub'>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Sofa & Chairs' mainname='Furniture & Home Decor' subname='Sofa & Chairs' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Painting', 'Carpenter', 'Repair', 'Wall Sheets']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Sofa & Chairs</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Beds & Wardrobes' mainname='Furniture & Home Decor' subname='Beds & Wardrobes' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Painting', 'Carpenter', 'Repair', 'Wall Sheets']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Beds & Wardrobes</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Home Decoration' mainname='Furniture & Home Decor' subname='Home Decoration' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Painting', 'Carpenter', 'Repair', 'Wall Sheets']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Home Decoration</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Tables & Dining' mainname='Furniture & Home Decor' subname='Tables & Dining' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Painting', 'Carpenter', 'Repair', 'Wall Sheets']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Tables & Dining</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Garden & Outdoor' mainname='Furniture & Home Decor' subname='Garden & Outdoor' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Painting', 'Carpenter', 'Repair', 'Wall Sheets']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Garden & Outdoor</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Painting & Mirrors' mainname='Furniture & Home Decor' subname='Painting & Mirrors' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Painting', 'Carpenter', 'Repair', 'Wall Sheets']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Painting & Mirrors</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Rugs & Carpets' mainname='Furniture & Home Decor' subname='Rugs & Carpets' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Painting', 'Carpenter', 'Repair', 'Wall Sheets']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Rugs & Carpets</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Curtains & Blinds' mainname='Furniture & Home Decor' subname='Curtains & Blinds' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Painting', 'Carpenter', 'Repair', 'Wall Sheets']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Curtains & Blinds</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Office Furniture' mainname='Furniture & Home Decor' subname='Office Furniture' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Painting', 'Carpenter', 'Repair', 'Wall Sheets']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Office Furniture</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub' style={{ borderBottom: "1px solid rgba(0,47,52,.2)" }}>
                                                                                            <span className='list_d_m' name='Other Household Items' mainname='Furniture & Home Decor' subname='Other Household Items' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Painting', 'Carpenter', 'Repair', 'Wall Sheets']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Other Household Items</span>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            )}
                                                                            {this.state.f_c_fb && (
                                                                                <div className='sub_categories' style={{ position: 'relative', top: '0px' }}>
                                                                                    <ul className='ad_cat_list_sub'>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Accessories' mainname='Fashion & Beauty' subname='Accessories' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Accessories for Men', 'Accessories for Women']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Accessories</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Clothes' mainname='Fashion & Beauty' subname='Clothes' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Accessories for Men', 'Accessories for Women']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Clothes</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Footwear' mainname='Fashion & Beauty' subname='Footwear' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Accessories for Men', 'Accessories for Women']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Footwear</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Jewellery' mainname='Fashion & Beauty' subname='Jewellery' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Accessories for Men', 'Accessories for Women']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Jewellery</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Make Up' mainname='Fashion & Beauty' subname='Make Up' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Accessories for Men', 'Accessories for Women']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Make Up</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Skin & Hair' mainname='Fashion & Beauty' subname='Skin & Hair' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Accessories for Men', 'Accessories for Women']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Skin & Hair</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Watches' mainname='Fashion & Beauty' subname='Watches' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Accessories for Men', 'Accessories for Women']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Watches</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Wedding' mainname='Fashion & Beauty' subname='Wedding' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Accessories for Men', 'Accessories for Women']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Wedding</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Lawn & Pret' mainname='Fashion & Beauty' subname='Lawn & Pret' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Accessories for Men', 'Accessories for Women']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Lawn & Pret</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Couture' mainname='Fashion & Beauty' subname='Couture' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Accessories for Men', 'Accessories for Women']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Couture</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub' style={{ borderBottom: "1px solid rgba(0,47,52,.2)" }}>
                                                                                            <span className='list_d_m' name='Other Fashion' mainname='Fashion & Beauty' subname='Other Fashion' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Accessories for Men', 'Accessories for Women']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Other Fashion</span>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            )}
                                                                            {this.state.f_c_bsh && (
                                                                                <div className='sub_categories' style={{ position: 'absolute', bottom: '50px', width: '100%' }}>
                                                                                    <ul className='ad_cat_list_sub'>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Books & Magazines' mainname='Books, Sports & Hobbies' subname='Books & Magazines' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Education & Training', 'Literature & Fiction', 'Professional', 'Other Books']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Books & Magazines</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Musical Instruments' mainname='Books, Sports & Hobbies' subname='Musical Instruments' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Education & Training', 'Literature & Fiction', 'Professional', 'Other Books']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Musical Instruments</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Sports Equipment' mainname='Books, Sports & Hobbies' subname='Sports Equipment' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Education & Training', 'Literature & Fiction', 'Professional', 'Other Books']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Sports Equipment</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Gym & Fitness' mainname='Books, Sports & Hobbies' subname='Gym & Fitness' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Education & Training', 'Literature & Fiction', 'Professional', 'Other Books']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Gym & Fitness</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub' style={{ borderBottom: "1px solid rgba(0,47,52,.2)" }}>
                                                                                            <span className='list_d_m' name='Other Hobbies' mainname='Books, Sports & Hobbies' subname='Other Hobbies' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['Education & Training', 'Literature & Fiction', 'Professional', 'Other Books']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Other Hobbies</span>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            )}
                                                                            {this.state.f_c_kids && (
                                                                                <div className='sub_categories' style={{ position: 'absolute', bottom: '0px', width: '100%' }}>
                                                                                    <ul className='ad_cat_list_sub'>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Kids Furniture' mainname='Kids' subname='Kids Furniture' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['New Born Baby', 'Infant', 'Boy', 'Girl']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Kids Furniture</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Toys' mainname='Kids' subname='Toys' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['New Born Baby', 'Infant', 'Boy', 'Girl']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Toys</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Prams & Walkers' mainname='Kids' subname='Prams & Walkers' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['New Born Baby', 'Infant', 'Boy', 'Girl']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Prams & Walkers</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Swings & Slides' mainname='Kids' subname='Swings & Slides' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['New Born Baby', 'Infant', 'Boy', 'Girl']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Swings & Slides</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub'>
                                                                                            <span className='list_d_m' name='Kids Bikes' mainname='Kids' subname='Kids Bikes' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['New Born Baby', 'Infant', 'Boy', 'Girl']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Kids Bikes</span>
                                                                                        </li>
                                                                                        <li className='ad_cat_list_li_sub' style={{ borderBottom: "none" }}>
                                                                                            <span className='list_d_m' name='Kids Accessories' mainname='Kids' subname='Kids Accessories' onClick={(e) => {
                                                                                                this.props.ad_categories({
                                                                                                    mainCategorie: e.target.attributes[2].textContent,
                                                                                                    subCategorie: e.target.attributes[3].textContent,
                                                                                                    type: ['New Born Baby', 'Infant', 'Boy', 'Girl']
                                                                                                });
                                                                                                this.setState({
                                                                                                    toggle_ad_categories: false,
                                                                                                    toggle_ad_categories_sub: false,
                                                                                                    toggle_ad_post: true,
                                                                                                })
                                                                                            }}>Kids Accessories</span>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="row " style={{ marginLeft: '0px', marginRight: '0px' }} >
                                            <div className="col-lg-7" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                                                <div className='include_some_details_main'>
                                                    <div className='include_some_details'>
                                                        <span>INCLUDE SOME DETAILS</span>
                                                    </div>
                                                    <div className='i_s_d_c'>
                                                        <label>Condition *</label>
                                                    </div>
                                                    <div className='condition_btn_div'>
                                                        <button className='condition_btn' value='New' onClick={(e) => {
                                                            this.setState({
                                                                send_ad_data_to_db: { ...this.state.send_ad_data_to_db, condition: e.target.value }
                                                            })
                                                        }}>New</button>
                                                        <button className='condition_btn' value='Used' onClick={(e) => {
                                                            this.setState({
                                                                send_ad_data_to_db: { ...this.state.send_ad_data_to_db, condition: e.target.value }
                                                            })
                                                        }}>Used</button>
                                                    </div>
                                                    <div className='i_s_d_t'>
                                                        <label>Type *</label>
                                                    </div>
                                                    <div className='type_btn_div'>
                                                        {this.props.ad_type.map((v, i) => {
                                                            return <button key={i} className='type_btn' value={v} onClick={(e) => {
                                                                this.setState({
                                                                    send_ad_data_to_db: { ...this.state.send_ad_data_to_db, type: e.target.value }
                                                                })
                                                            }}>{v}</button>
                                                        })}
                                                    </div>
                                                    <div>
                                                        <div className='i_s_d_ad_t'>
                                                            <label style={this.state.ad_t_g} >Ad title *</label>
                                                        </div>
                                                        <div className='ad_title_div'>
                                                            <input type="text" name='title' maxLength='70' id='title' required='required' onFocus={() => this.setState({
                                                                ad_t_g: { ...this.state.ad_t_g, color: '#00a49f', fontWeight: 700 }
                                                            })}

                                                                onBlur={() => this.setState({
                                                                    ad_t_g: { ...this.state.ad_t_g, color: '', fontWeight: 'normal' }
                                                                })}

                                                                onChange={(e) => {
                                                                    this.setState({
                                                                        ad_title_length: e.target.value.length,
                                                                        ad_title_value: e.target.value,
                                                                        send_ad_data_to_db: { ...this.state.send_ad_data_to_db, title: e.target.value }
                                                                    })
                                                                }} />
                                                            <div className='ad_title_char'>
                                                                <div className='atct_text'>
                                                                    <span>Mention the key features of your item (e.g. brand, model, age, type)</span>
                                                                </div>
                                                                <div className='atct_char_left'>
                                                                    <span>{this.state.ad_title_length} / 70</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className='i_s_d_ad_d'>
                                                            <label style={this.state.ad_d_g} >Description *</label>
                                                        </div>
                                                        <div className='ad_des_div'>
                                                            <textarea type="text" name='title' maxLength='4096' id='title' required='required' onFocus={() => this.setState({
                                                                ad_d_g: { ...this.state.ad_d_g, color: '#00a49f', fontWeight: 700 }
                                                            })}

                                                                onBlur={() => this.setState({
                                                                    ad_d_g: { ...this.state.ad_d_g, color: '', fontWeight: 'normal' }
                                                                })}

                                                                onChange={(e) => {
                                                                    this.setState({
                                                                        ad_description_length: e.target.value.length,
                                                                        ad_description_value: e.target.value,
                                                                        send_ad_data_to_db: { ...this.state.send_ad_data_to_db, description: e.target.value },
                                                                    })
                                                                }} />
                                                            <div className='ad_des_char'>
                                                                <div className='ad_des_text'>
                                                                    <span>Include condition, features and reason for selling</span>
                                                                </div>
                                                                <div className='ad_des_char_left'>
                                                                    <span>{this.state.ad_description_length} / 4096</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row set_price_row" style={{ marginLeft: '0px', marginRight: '0px' }}>
                                            <div className="col-lg-6">
                                                <div className='set_price_main'>
                                                    <div className='set_price'>
                                                        <span>SET A PRICE</span>
                                                    </div>
                                                    <div className='s_p_t'>
                                                        <label style={this.state.ad_t_g_t} >Price *</label>
                                                    </div>
                                                    <div className='price_div' style={this.state.ad_p_g_div}>
                                                        <div className='rs_div '>
                                                            <span>Rs</span>
                                                        </div>
                                                        <div className='rs_input'>
                                                            <input type='number' value={this.state.ad_price_value}

                                                                onFocus={() => this.setState({
                                                                    ad_p_g_div: { ...this.state.ad_p_g_div, boxShadow: 'inset 0 0 0 3px #00a49f' },
                                                                    ad_t_g_t: { ...this.state.ad_t_g_t, color: '#00a49f', fontWeight: 700 }
                                                                })}

                                                                onBlur={() => this.setState({
                                                                    ad_p_g_div: { ...this.state.ad_p_g_div, boxShadow: '' },
                                                                    ad_t_g_t: { ...this.state.ad_t_g_t, color: '', fontWeight: '' }
                                                                })}

                                                                onChange={(e) => this.setState({
                                                                    ad_price_value: e.target.value,
                                                                    send_ad_data_to_db: { ...this.state.send_ad_data_to_db, price: e.target.value }
                                                                })}

                                                                onwheel="return false;" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row upload_photo_row" style={{ marginLeft: '0px', marginRight: '0px' }}>
                                            <div className="col-lg-8">
                                                <div className='upload_main'>
                                                    <div className='upload_text'>
                                                        <span>UPLOAD UP TO 12 PHOTOS</span>
                                                    </div>
                                                    <div className='upload_div'>
                                                        <div>
                                                            <div className='upload_div_single_f'>
                                                                {(this.props.img_url === null || this.props.img_url === undefined) && (
                                                                    <div className='upload_div_single_child_only'>
                                                                        <button type="button" className="upload_button_f" role="button">
                                                                            <svg width="36px" height="36px" viewBox="0 0 1024 1024">
                                                                                <path d="M861.099 667.008v78.080h77.568v77.653h-77.568v77.141h-77.568v-77.184h-77.611v-77.611h77.611v-78.080h77.568zM617.515 124.16l38.784 116.437h165.973l38.827 38.827v271.659l-38.827 38.357-38.741-38.4v-232.832h-183.125l-38.784-116.48h-176.853l-38.784 116.48h-183.083v426.923h426.667l38.784 38.357-38.784 39.253h-465.493l-38.741-38.869v-504.491l38.784-38.827h165.973l38.827-116.437h288.597zM473.216 318.208c106.837 0 193.92 86.955 193.92 194.048 0 106.923-87.040 194.091-193.92 194.091s-193.963-87.168-193.963-194.091c0-107.093 87.083-194.048 193.963-194.048zM473.216 395.861c-64.213 0-116.352 52.181-116.352 116.395 0 64.256 52.139 116.437 116.352 116.437 64.171 0 116.352-52.181 116.352-116.437 0-64.213-52.181-116.437-116.352-116.437z"></path>
                                                                            </svg>
                                                                        </button>
                                                                        <div className='upload_text_span'>
                                                                            <span>Add photo</span>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                                {/* {(this.state.ad_post_files !== null) && (
                                                                    <div className='upload_div_single_child_only'>
                                                                        <img src={this.state.ad_post_files_src} alt="Uploaded Image" className='uploaded_image' />
                                                                    </div>
                                                                )} */}

                                                                {this.props.img_url && (
                                                                    <div className='upload_div_single_child_only'>
                                                                        <img src={this.props.img_url} className='uploaded_image' />
                                                                    </div>
                                                                )}

                                                                {/* {this.state.ad_post_files instanceof File && (
                                                                    <div className='upload_div_single_child_only'>
                                                                        <img src={URL.createObjectURL(this.state.ad_post_files)} className='uploaded_image' />

                                                                    </div>
                                                                )} */}
                                                            </div>
                                                            <div className='upload_div_single_all'>
                                                                <div className='upload_div_single_child'>
                                                                    <button type="button" className="upload_button_all" role="button">
                                                                        <svg width="36px" height="36px" viewBox="0 0 1024 1024">
                                                                            <path d="M861.099 667.008v78.080h77.568v77.653h-77.568v77.141h-77.568v-77.184h-77.611v-77.611h77.611v-78.080h77.568zM617.515 124.16l38.784 116.437h165.973l38.827 38.827v271.659l-38.827 38.357-38.741-38.4v-232.832h-183.125l-38.784-116.48h-176.853l-38.784 116.48h-183.083v426.923h426.667l38.784 38.357-38.784 39.253h-465.493l-38.741-38.869v-504.491l38.784-38.827h165.973l38.827-116.437h288.597zM473.216 318.208c106.837 0 193.92 86.955 193.92 194.048 0 106.923-87.040 194.091-193.92 194.091s-193.963-87.168-193.963-194.091c0-107.093 87.083-194.048 193.963-194.048zM473.216 395.861c-64.213 0-116.352 52.181-116.352 116.395 0 64.256 52.139 116.437 116.352 116.437 64.171 0 116.352-52.181 116.352-116.437 0-64.213-52.181-116.437-116.352-116.437z"></path>
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className='upload_div_single_all'>
                                                                <div className='upload_div_single_child'>
                                                                    <button type="button" className="upload_button_all" role="button">
                                                                        <svg width="36px" height="36px" viewBox="0 0 1024 1024">
                                                                            <path d="M861.099 667.008v78.080h77.568v77.653h-77.568v77.141h-77.568v-77.184h-77.611v-77.611h77.611v-78.080h77.568zM617.515 124.16l38.784 116.437h165.973l38.827 38.827v271.659l-38.827 38.357-38.741-38.4v-232.832h-183.125l-38.784-116.48h-176.853l-38.784 116.48h-183.083v426.923h426.667l38.784 38.357-38.784 39.253h-465.493l-38.741-38.869v-504.491l38.784-38.827h165.973l38.827-116.437h288.597zM473.216 318.208c106.837 0 193.92 86.955 193.92 194.048 0 106.923-87.040 194.091-193.92 194.091s-193.963-87.168-193.963-194.091c0-107.093 87.083-194.048 193.963-194.048zM473.216 395.861c-64.213 0-116.352 52.181-116.352 116.395 0 64.256 52.139 116.437 116.352 116.437 64.171 0 116.352-52.181 116.352-116.437 0-64.213-52.181-116.437-116.352-116.437z"></path>
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className='upload_div_single_all'>
                                                                <div className='upload_div_single_child'>
                                                                    <button type="button" className="upload_button_all" role="button">
                                                                        <svg width="36px" height="36px" viewBox="0 0 1024 1024">
                                                                            <path d="M861.099 667.008v78.080h77.568v77.653h-77.568v77.141h-77.568v-77.184h-77.611v-77.611h77.611v-78.080h77.568zM617.515 124.16l38.784 116.437h165.973l38.827 38.827v271.659l-38.827 38.357-38.741-38.4v-232.832h-183.125l-38.784-116.48h-176.853l-38.784 116.48h-183.083v426.923h426.667l38.784 38.357-38.784 39.253h-465.493l-38.741-38.869v-504.491l38.784-38.827h165.973l38.827-116.437h288.597zM473.216 318.208c106.837 0 193.92 86.955 193.92 194.048 0 106.923-87.040 194.091-193.92 194.091s-193.963-87.168-193.963-194.091c0-107.093 87.083-194.048 193.963-194.048zM473.216 395.861c-64.213 0-116.352 52.181-116.352 116.395 0 64.256 52.139 116.437 116.352 116.437 64.171 0 116.352-52.181 116.352-116.437 0-64.213-52.181-116.437-116.352-116.437z"></path>
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className='upload_div_single_all'>
                                                                <div className='upload_div_single_child'>
                                                                    <button type="button" className="upload_button_all" role="button">
                                                                        <svg width="36px" height="36px" viewBox="0 0 1024 1024">
                                                                            <path d="M861.099 667.008v78.080h77.568v77.653h-77.568v77.141h-77.568v-77.184h-77.611v-77.611h77.611v-78.080h77.568zM617.515 124.16l38.784 116.437h165.973l38.827 38.827v271.659l-38.827 38.357-38.741-38.4v-232.832h-183.125l-38.784-116.48h-176.853l-38.784 116.48h-183.083v426.923h426.667l38.784 38.357-38.784 39.253h-465.493l-38.741-38.869v-504.491l38.784-38.827h165.973l38.827-116.437h288.597zM473.216 318.208c106.837 0 193.92 86.955 193.92 194.048 0 106.923-87.040 194.091-193.92 194.091s-193.963-87.168-193.963-194.091c0-107.093 87.083-194.048 193.963-194.048zM473.216 395.861c-64.213 0-116.352 52.181-116.352 116.395 0 64.256 52.139 116.437 116.352 116.437 64.171 0 116.352-52.181 116.352-116.437 0-64.213-52.181-116.437-116.352-116.437z"></path>
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className='upload_div_single_all'>
                                                                <div className='upload_div_single_child'>
                                                                    <button type="button" className="upload_button_all" role="button">
                                                                        <svg width="36px" height="36px" viewBox="0 0 1024 1024">
                                                                            <path d="M861.099 667.008v78.080h77.568v77.653h-77.568v77.141h-77.568v-77.184h-77.611v-77.611h77.611v-78.080h77.568zM617.515 124.16l38.784 116.437h165.973l38.827 38.827v271.659l-38.827 38.357-38.741-38.4v-232.832h-183.125l-38.784-116.48h-176.853l-38.784 116.48h-183.083v426.923h426.667l38.784 38.357-38.784 39.253h-465.493l-38.741-38.869v-504.491l38.784-38.827h165.973l38.827-116.437h288.597zM473.216 318.208c106.837 0 193.92 86.955 193.92 194.048 0 106.923-87.040 194.091-193.92 194.091s-193.963-87.168-193.963-194.091c0-107.093 87.083-194.048 193.963-194.048zM473.216 395.861c-64.213 0-116.352 52.181-116.352 116.395 0 64.256 52.139 116.437 116.352 116.437 64.171 0 116.352-52.181 116.352-116.437 0-64.213-52.181-116.437-116.352-116.437z"></path>
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className='upload_div_single_all'>
                                                                <div className='upload_div_single_child'>
                                                                    <button type="button" className="upload_button_all" role="button">
                                                                        <svg width="36px" height="36px" viewBox="0 0 1024 1024">
                                                                            <path d="M861.099 667.008v78.080h77.568v77.653h-77.568v77.141h-77.568v-77.184h-77.611v-77.611h77.611v-78.080h77.568zM617.515 124.16l38.784 116.437h165.973l38.827 38.827v271.659l-38.827 38.357-38.741-38.4v-232.832h-183.125l-38.784-116.48h-176.853l-38.784 116.48h-183.083v426.923h426.667l38.784 38.357-38.784 39.253h-465.493l-38.741-38.869v-504.491l38.784-38.827h165.973l38.827-116.437h288.597zM473.216 318.208c106.837 0 193.92 86.955 193.92 194.048 0 106.923-87.040 194.091-193.92 194.091s-193.963-87.168-193.963-194.091c0-107.093 87.083-194.048 193.963-194.048zM473.216 395.861c-64.213 0-116.352 52.181-116.352 116.395 0 64.256 52.139 116.437 116.352 116.437 64.171 0 116.352-52.181 116.352-116.437 0-64.213-52.181-116.437-116.352-116.437z"></path>
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className='upload_div_single_all'>
                                                                <div className='upload_div_single_child'>
                                                                    <button type="button" className="upload_button_all" role="button">
                                                                        <svg width="36px" height="36px" viewBox="0 0 1024 1024">
                                                                            <path d="M861.099 667.008v78.080h77.568v77.653h-77.568v77.141h-77.568v-77.184h-77.611v-77.611h77.611v-78.080h77.568zM617.515 124.16l38.784 116.437h165.973l38.827 38.827v271.659l-38.827 38.357-38.741-38.4v-232.832h-183.125l-38.784-116.48h-176.853l-38.784 116.48h-183.083v426.923h426.667l38.784 38.357-38.784 39.253h-465.493l-38.741-38.869v-504.491l38.784-38.827h165.973l38.827-116.437h288.597zM473.216 318.208c106.837 0 193.92 86.955 193.92 194.048 0 106.923-87.040 194.091-193.92 194.091s-193.963-87.168-193.963-194.091c0-107.093 87.083-194.048 193.963-194.048zM473.216 395.861c-64.213 0-116.352 52.181-116.352 116.395 0 64.256 52.139 116.437 116.352 116.437 64.171 0 116.352-52.181 116.352-116.437 0-64.213-52.181-116.437-116.352-116.437z"></path>
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className='upload_div_single_all'>
                                                                <div className='upload_div_single_child'>
                                                                    <button type="button" className="upload_button_all" role="button">
                                                                        <svg width="36px" height="36px" viewBox="0 0 1024 1024">
                                                                            <path d="M861.099 667.008v78.080h77.568v77.653h-77.568v77.141h-77.568v-77.184h-77.611v-77.611h77.611v-78.080h77.568zM617.515 124.16l38.784 116.437h165.973l38.827 38.827v271.659l-38.827 38.357-38.741-38.4v-232.832h-183.125l-38.784-116.48h-176.853l-38.784 116.48h-183.083v426.923h426.667l38.784 38.357-38.784 39.253h-465.493l-38.741-38.869v-504.491l38.784-38.827h165.973l38.827-116.437h288.597zM473.216 318.208c106.837 0 193.92 86.955 193.92 194.048 0 106.923-87.040 194.091-193.92 194.091s-193.963-87.168-193.963-194.091c0-107.093 87.083-194.048 193.963-194.048zM473.216 395.861c-64.213 0-116.352 52.181-116.352 116.395 0 64.256 52.139 116.437 116.352 116.437 64.171 0 116.352-52.181 116.352-116.437 0-64.213-52.181-116.437-116.352-116.437z"></path>
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className='upload_div_single_all'>
                                                                <div className='upload_div_single_child'>
                                                                    <button type="button" className="upload_button_all" role="button">
                                                                        <svg width="36px" height="36px" viewBox="0 0 1024 1024">
                                                                            <path d="M861.099 667.008v78.080h77.568v77.653h-77.568v77.141h-77.568v-77.184h-77.611v-77.611h77.611v-78.080h77.568zM617.515 124.16l38.784 116.437h165.973l38.827 38.827v271.659l-38.827 38.357-38.741-38.4v-232.832h-183.125l-38.784-116.48h-176.853l-38.784 116.48h-183.083v426.923h426.667l38.784 38.357-38.784 39.253h-465.493l-38.741-38.869v-504.491l38.784-38.827h165.973l38.827-116.437h288.597zM473.216 318.208c106.837 0 193.92 86.955 193.92 194.048 0 106.923-87.040 194.091-193.92 194.091s-193.963-87.168-193.963-194.091c0-107.093 87.083-194.048 193.963-194.048zM473.216 395.861c-64.213 0-116.352 52.181-116.352 116.395 0 64.256 52.139 116.437 116.352 116.437 64.171 0 116.352-52.181 116.352-116.437 0-64.213-52.181-116.437-116.352-116.437z"></path>
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className='upload_div_single_all'>
                                                                <div className='upload_div_single_child'>
                                                                    <button type="button" className="upload_button_all" role="button">
                                                                        <svg width="36px" height="36px" viewBox="0 0 1024 1024">
                                                                            <path d="M861.099 667.008v78.080h77.568v77.653h-77.568v77.141h-77.568v-77.184h-77.611v-77.611h77.611v-78.080h77.568zM617.515 124.16l38.784 116.437h165.973l38.827 38.827v271.659l-38.827 38.357-38.741-38.4v-232.832h-183.125l-38.784-116.48h-176.853l-38.784 116.48h-183.083v426.923h426.667l38.784 38.357-38.784 39.253h-465.493l-38.741-38.869v-504.491l38.784-38.827h165.973l38.827-116.437h288.597zM473.216 318.208c106.837 0 193.92 86.955 193.92 194.048 0 106.923-87.040 194.091-193.92 194.091s-193.963-87.168-193.963-194.091c0-107.093 87.083-194.048 193.963-194.048zM473.216 395.861c-64.213 0-116.352 52.181-116.352 116.395 0 64.256 52.139 116.437 116.352 116.437 64.171 0 116.352-52.181 116.352-116.437 0-64.213-52.181-116.437-116.352-116.437z"></path>
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className='upload_div_single_all'>
                                                                <div className='upload_div_single_child'>
                                                                    <button type="button" className="upload_button_all" role="button">
                                                                        <svg width="36px" height="36px" viewBox="0 0 1024 1024">
                                                                            <path d="M861.099 667.008v78.080h77.568v77.653h-77.568v77.141h-77.568v-77.184h-77.611v-77.611h77.611v-78.080h77.568zM617.515 124.16l38.784 116.437h165.973l38.827 38.827v271.659l-38.827 38.357-38.741-38.4v-232.832h-183.125l-38.784-116.48h-176.853l-38.784 116.48h-183.083v426.923h426.667l38.784 38.357-38.784 39.253h-465.493l-38.741-38.869v-504.491l38.784-38.827h165.973l38.827-116.437h288.597zM473.216 318.208c106.837 0 193.92 86.955 193.92 194.048 0 106.923-87.040 194.091-193.92 194.091s-193.963-87.168-193.963-194.091c0-107.093 87.083-194.048 193.963-194.048zM473.216 395.861c-64.213 0-116.352 52.181-116.352 116.395 0 64.256 52.139 116.437 116.352 116.437 64.171 0 116.352-52.181 116.352-116.437 0-64.213-52.181-116.437-116.352-116.437z"></path>
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <input type="file" accept='image/*' multiple onChange={(e) => {
                                                            this.props.upload_files(e.target.files[0]);
                                                        }} />
                                                    </div>

                                                    <div className='mandatory_field'>
                                                        <p>This field is mandatory</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row location_row" style={{ marginLeft: '0px', marginRight: '0px' }}>
                                            <div className="col-lg-7">
                                                <div className='upload_main'>
                                                    <div className='upload_text'>
                                                        <span>CONFIRM YOUR LOCATION</span>
                                                    </div>

                                                    <div className='list_location_toggle_div'>
                                                        <div className='list_div' style={this.state.list_b_bor} onClick={() => this.toggle_location_div('list', this.state.link)}>
                                                            <span>LIST</span>
                                                        </div>
                                                        <div className='c_location_div' style={this.state.current_location_b_bor} onClick={() => this.toggle_location_div('current_location', this.state.current_location)}>
                                                            <span>CURRENT LOCATION</span>
                                                        </div>
                                                    </div>

                                                    {this.state.list && (
                                                        <List />
                                                    )}

                                                    {this.state.current_location && (
                                                        <Location />
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row" style={{ marginLeft: '0px', marginRight: '0px' }}>
                                            <div className="col-lg-7">
                                                <div className='upload_main'>
                                                    <div className='upload_text'>
                                                        <span>REVIEW YOUR DETAILS</span>
                                                    </div>



                                                    <div className='ad_current_user_div'>
                                                        <div className='current_user'>
                                                            <div className='ad_c_u_img'>
                                                                <img src={profile_image} alt="" width='100px' height='100px' />
                                                            </div>
                                                            <div className='username_div_main'>
                                                                <div className='' >
                                                                    <div className='username_input_name'>
                                                                        <label style={this.state.ad_t_g} >Name</label>
                                                                    </div>
                                                                    <div className='username_div'>
                                                                        <input type="text" name='username' maxLength='30' required='required' onFocus={() => this.setState({
                                                                            ad_t_g: { ...this.state.ad_t_g, color: '#00a49f', fontWeight: 700 }
                                                                        })}

                                                                            onBlur={() => this.setState({
                                                                                ad_t_g: { ...this.state.ad_t_g, color: '', fontWeight: 'normal' }
                                                                            })}

                                                                            onChange={(e) => {
                                                                                this.setState({
                                                                                    ad_user_name_length: e.target.value.length,
                                                                                    ad_user_name: e.target.value,
                                                                                    send_ad_data_to_db: { ...this.state.send_ad_data_to_db, ad_user: e.target.value, stateNameFull: this.props.stateNameFull, city: this.props.city },
                                                                                })
                                                                            }} />
                                                                        <div className='ad_title_char'>
                                                                            <div className='atct_text'>
                                                                                {(this.state.ad_user_name_length === 0) && (
                                                                                    <div className='username_mandatory_field'>
                                                                                        <p>This field is mandatory</p>
                                                                                    </div>
                                                                                )}
                                                                            </div>
                                                                            <div className='atct_char_left'>
                                                                                <span>{this.state.ad_user_name_length} / 30</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='number_div'>
                                                            <span>Your phone number</span>
                                                            <span>+92345678901</span>
                                                        </div>
                                                        <div className='show_number_div'>
                                                            <span>Show my phone number on my ads</span>
                                                            <span>
                                                                <label className="switch">
                                                                    <input type="checkbox" />
                                                                    <span className="slider round"></span>
                                                                </label>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            {(this.props.img_url === null || this.props.img_url === undefined) && (
                                                <div className="row review_details_row" style={{ marginLeft: '0px', marginRight: '0px' }}>
                                                    <div className="col-lg-6">
                                                        <div className='post_btn_before'>
                                                            <button type="submit">Post now</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {this.props.img_url && (
                                                <div className="row review_details_row" style={{ marginLeft: '0px', marginRight: '0px' }}>
                                                    <div className="col-lg-6">
                                                        <div className='post_btn_after'>
                                                            <button type="submit" onClick={() => {
                                                                const randomNumber = Math.floor(Math.random() * 1000000) + 1;
                                                                this.setState({
                                                                    send_ad_data_to_db: { ...this.state.send_ad_data_to_db, url: this.props.img_url, uid: this.props.user.uid, seller_photo: this.props.user.photo, id: randomNumber, },
                                                                });
                                                                setTimeout(() => {
                                                                    this.props.send_ad_data(this.state.send_ad_data_to_db, this.props.user.uid);
                                                                }, 2000);
                                                            }} >Post now</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>





                <div className="container-fluid post_ad_footer">
                    <div className="container">
                        <div className="row">
                            <div className='olx_country'>
                                <div className='other_countries'>
                                    <span>Sitemap</span>
                                </div>
                                <div className='other_countries_right'>
                                    <span className='other_countries_right_1'>Free Classifieds in Pakistan</span>
                                    <span className='other_countries_right_2'>. © 2006-2020 OLX</span>
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
    mainCat: state.app.mainCat,
    subCat: state.app.subCat,
    ad_type: state.app.ad_type,
    stateNameFull: state.app.stateNameFull,
    city: state.app.city,
    img_url: state.app.url,
    user: state.auth.current_user,
})

const mapDispatchToProps = (dispatch) => ({
    ad_categories: (data) => dispatch(ad_categories(data)),
    ad_condition: (data) => dispatch(ad_condition(data)),
    upload_files: (data) => dispatch(upload_files(data)),
    send_ad_data: (ad_data, uid) => dispatch(send_ad_data(ad_data, uid)),

})

export default connect(mapStateToProps, mapDispatchToProps)(Sell);