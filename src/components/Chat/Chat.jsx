/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './Chat.css';
import Header from '../../components/Header/Header';
import Categories from '../../components/Categories/Categories.jsx';
import SearchIcon from '@material-ui/icons/Search';
import SelectChat from '../../images/emptyChat.webp';
import { connect } from 'react-redux';
import { chat_data, get_msg, close_chat, delete_chat } from '../../store/action';
import FlagOutlinedIcon from '@material-ui/icons/FlagOutlined';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import AttachmentOutlinedIcon from '@material-ui/icons/AttachmentOutlined';
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import SendIcon from '@material-ui/icons/Send';
import firebase from '../../config/firebase';



class Chat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input_value: '',
            data: this.props.ad_data,
            user: this.props.current_user,
            chatSnap: [],
            chatMessages: [],
            toggleClr: false,
            bg_color: {
                backgroundColor: '',
            },
            show_del_btn: false,
        }
    }

    componentDidMount() {
        firebase.database().ref('/').child(`chatSnap/${this.props.current_user.uid}`).on('value', (snapshot) => {
            let data = snapshot.val();
            let newState = [];
            for (let item in data) {
                newState.push({
                    name: data[item].name,
                    id: data[item].id,
                    photo: data[item].photo,
                    title: data[item].title,
                    price: data[item].price,
                    ad_photo: data[item].ad_photo,
                    uid: data[item].uid,
                    key: data[item].key,
                });
            }
            this.setState({
                chatSnap: newState
            });
        })
    }

    send_msg = () => {
        firebase.database().ref('/').child(`chat/${this.props.c_value.uid}/${this.props.c_value.id}`).push({
            message: this.state.input_value,
            uid: this.props.current_user.uid,
        });
        this.setState({
            input_value: '',
        })
        this.get_msg()
    }


    get_msg = () => {

    }

    render() {
        return (
            <div>
                <Header />
                <Categories />

                <div className="container">
                    <div className="row bor" style={{ padding: '0px' }}>
                        <div className="col-5" style={{ padding: '0px', borderRight: '1px solid rgba(0, 47, 52, 0.2)' }}>
                            <div className='inbox'>
                                <div>
                                    <p>INBOX</p>
                                </div>
                                <div className='search_icon'>
                                    <SearchIcon />
                                </div>
                            </div>
                            {/* /////////////////////////////////////////////// */}
                            <div className='quick_filters'>
                                <div className='qft'>
                                    <span>QUICK FILTERS</span>
                                </div>
                                <div className='three_div_cont'>
                                    <div className='filter_all'>
                                        <span>ALL</span>
                                    </div>
                                    <div className='filter'>
                                        <span>Unread Chats</span>
                                    </div>
                                    <div className='filter'>
                                        <span>Important</span>
                                    </div>
                                </div>
                            </div>
                            {/* /////////////////////////////////////////////// */}
                            <div className='chat_sellers'>
                                {this.state.chatSnap.map((value, index) => {
                                    return (
                                        <div key={index} onClick={() => {
                                            this.props.chat_data(value, index);
                                            this.props.get_msg(value);
                                            console.log(value)
                                        }} >
                                            <div className='chat_snap'>
                                                <div className='chat_snap_inner'>
                                                    <div className='name_img_msg'>
                                                        <div>
                                                            <div className='sq_img'>
                                                                <img src={value.ad_photo} alt="Seller Ad Photo" />
                                                            </div>
                                                            <div className='circle_img'>
                                                                <img src={value.photo} alt="Seller Photo" />
                                                            </div>
                                                        </div>

                                                        <div className='name_ad_name'>
                                                            <div className='seller_name_1'>
                                                                <span> {value.name} </span>
                                                            </div>
                                                            <div className='ad_name_1'>
                                                                <span>{value.title}</span>
                                                            </div>
                                                            {/* <div className='msg_snap'>
                                                                <span>Example Message</span>
                                                            </div> */}
                                                        </div>

                                                    </div>
                                                    <div className='timestamp_menu_icon'>
                                                        <div>
                                                            {/* <div className='time_stamp'>
                                                                <span>03:29</span>
                                                            </div> */}
                                                            {/* <div className='delete_chat' >
                                                                <MoreVertOutlinedIcon style={{ color: '9facad', marginLeft: 4, marginTop: 5 }} />
                                                            </div> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="col-7" style={{ padding: '0px' }}>
                            {(this.props.chat) && (
                                <div className='no_chat'>
                                    <div >
                                        <img src={SelectChat} alt="No Chat" />
                                    </div>
                                    <div>
                                        <span>Select a chat to view conversation</span>
                                    </div>
                                </div>
                            )}

                            {(this.props.show_chat) && (
                                <div className='chat'>
                                    <div className='ad_user_details'>
                                        <div className='name_photo'>
                                            <div>
                                                <div className='sq_img'>
                                                    <img src={this.props.c_value.ad_photo} alt="Seller Ad Photo" />
                                                </div>
                                                <div className='circle_img'>
                                                    <img src={this.props.c_value.photo} alt="Seller Photo" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className='seller_name'>
                                                    <span> {this.props.c_value.name}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='number_sms_icons'>
                                            <span className='small_icons'>
                                                <FlagOutlinedIcon style={{ fontSize: '30px' }} />
                                            </span>
                                            <span className='small_icons'>
                                                <CallOutlinedIcon style={{ fontSize: '30px' }} />
                                            </span>
                                            <span className='small_icons'>
                                                <ChatOutlinedIcon style={{ fontSize: '30px' }} />
                                            </span>
                                            <span className='small_icons' onClick={() => {
                                                this.setState({
                                                    show_del_btn: !this.state.show_del_btn,
                                                })
                                            }}>
                                                <MoreVertOutlinedIcon style={{ fontSize: '30px' }} />
                                            </span>
                                            <span className='small_icons' onClick={() => { this.props.close_chat() }}>
                                                <CloseOutlinedIcon style={{ fontSize: '30px' }} />
                                            </span>
                                        </div>
                                        {this.state.show_del_btn && (
                                            <div className='del_div'>
                                                <span onClick={() => {
                                                    this.props.delete_chat(this.props.current_user.uid, this.props.c_value.key)
                                                }}>Delete</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className='ad_name_price'>
                                        <div className='ad_name'>
                                            <span>{this.props.c_value.title}</span>
                                        </div>
                                        <div className='ad_price'>
                                            <span>Rs {this.props.c_value.price}</span>
                                        </div>
                                    </div>




                                    <div className='chat_area'>
                                        <div className='chat_text_area'>
                                            {this.props.msg.map((value, index) => {
                                                return (
                                                    <div key={index} className='msgDiv' style={{ float: value.uid !== this.props.current_user.uid ? 'left' : 'right' }}>
                                                        <p className='msgStyle'>{value.message}</p>
                                                    </div>
                                                )
                                            })}
                                        </div>



                                        <div className='attach_input_voice'>
                                            <div className='f1'>
                                                <AttachmentOutlinedIcon style={{ fontSize: '25px' }} />
                                            </div>
                                            <div className='f2'>
                                                <input value={this.state.input_value} type="text" placeholder='Type a message' onChange={(e) => {
                                                    this.setState({
                                                        input_value: e.target.value,
                                                    })
                                                }} />
                                            </div>
                                            <div className='f3'>
                                                {(this.state.input_value === '') && (
                                                    <MicNoneOutlinedIcon style={{ fontSize: '25px' }} />
                                                )}
                                                {(this.state.input_value !== '') && (
                                                    <SendIcon style={{ fontSize: '25px' }} onClick={() => {
                                                        this.send_msg()
                                                    }} />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    chat: state.app.chat_toggle,
    ad_data: state.app.ad_data,
    current_user: state.auth.current_user,
    c_value: state.app.chat_data_value,
    c_index: state.app.chat_data_index,
    msg: state.app.messages,
    show_chat: state.app.show_chat,
})

const mapDispatchToProps = (dispatch) => ({
    chat_data: (value, index) => dispatch(chat_data(value, index)),
    get_msg: (value) => dispatch(get_msg(value)),
    close_chat: () => dispatch(close_chat()),
    delete_chat: (uid, index) => dispatch(delete_chat(uid, index)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Chat);