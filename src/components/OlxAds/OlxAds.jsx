import React from 'react';
import { Component } from 'react';
import './OlxAds.css';
import firebase from '../../config/firebase';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';

class OlxAds extends Component {
    constructor() {
        super()
        this.state = {
            ads: [],
        }
    }

    componentDidMount() {
        firebase.database().ref('ads').on('value', (snapshot) => {
            let ads = snapshot.val();
            let newState = [];
            for (let item in ads) {
                newState.push({
                    title: ads[item].title,
                    ad_user: ads[item].ad_user,
                    city: ads[item].city,
                    condition: ads[item].condition,
                    type: ads[item].type,
                    url: ads[item].url,
                    description: ads[item].description,
                    stateNameFull: ads[item].stateNameFull,
                    price: ads[item].price,
                    uid: ads[item].uid,
                    seller_photo: ads[item].seller_photo,
                    id: ads[item].id,
                });
            }
            this.setState({
                ads: newState
            });
        });
    }


    render() {
        return (
            <div>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-12">
                            <div >
                                <h4>Fresh recommendations</h4>
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-lg-12">
                            <div className='all_olx_ads'>
                                {this.state.ads.map((value, index) => {
                                    return (
                                        <Link key={index} to={{ pathname: "/ads", data: value }}>
                                            <div className='cards'  >
                                                <Card className='root'>
                                                    <CardActionArea>
                                                        <CardMedia
                                                            className='media'
                                                            image={value.url}
                                                            title={value.title}
                                                        />
                                                        <div className="card_main">
                                                            <span className="card_sub">Rs. {value.price}</span>
                                                            <span className="card_des">{value.description}</span>
                                                            <div className="card_city">
                                                                <span className="card_state">{value.city}, {value.stateNameFull}</span>
                                                            </div>
                                                        </div>
                                                    </CardActionArea>
                                                </Card>
                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default OlxAds;