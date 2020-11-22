import firebase from '../../config/firebase';

const fb_login = () => {
    return (dispatch) => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                var token = result.credential.accessToken;
                var user = result.user;

                let current_user = {
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                    uid: user.uid
                }

                if (user) {
                    dispatch({
                        type: 'TOGGLE_LOGIN',
                        current_user: current_user,
                    })
                }


            }).catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage)
            });

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                let current_user = {
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                    uid: user.uid
                }
                firebase.database().ref('/').child(`users/${current_user.uid}`).set(current_user)

            } else {
                dispatch({
                    type: 'TOGGLE_LOGIN',
                    current_user: '',
                })
            }
        })
    }
}


const logout = () => {
    console.log('login')
    return (dispatch) => {
        firebase.auth().signOut().then(function () {
            dispatch({
                type: 'LOGOUT'
            })
            // Sign-out successful.
        }).catch(function (error) {
            // An error happened.
        });

    }
}



const show_user_profile_div = () => {
    return (dispatch) => {
        dispatch({
            type: 'SETDATA'
        })
    }
}

const open_location = () => {
    return (dispatch) => {
        dispatch({
            type: 'LOCATION_DIV'
        })
    }
}

const ad_categories = (data) => {
    return (dispatch) => {
        dispatch({
            type: 'CATEGORIES',
            data: data,
        })
    }
}

const ad_condition = (data) => {
    return (dispatch) => {
        dispatch({
            type: 'AD_CONDITION',
            data: data,
        })
    }
}

const ad_location_state = (a, b) => {
    return (dispatch) => {
        dispatch({
            type: 'AD_LOCATION_STATE',
            state_short: b,
            state_full: a,
        })
        console.log(a, b)
    }
}

const ad_location_city = (data) => {
    return (dispatch) => {
        dispatch({
            type: 'AD_LOCATION_CITY',
            data: data,
        })
    }
}

const send_ad_data = (ad_data, uid) => {
    return (dispatch) => {
        console.log(ad_data)
        console.log(uid)
        firebase.database().ref('/').child('ads').push(ad_data)

    }
}


const upload_files = (file) => {
    return (dispatch) => {
        var ref = firebase.storage().ref().child(`images/${file.name}`).put(file)
        ref.on('state_changed', function (snapshot) {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
        }, function (error) {
            alert(error);
        }, function () {
            ref.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                console.log('File available at', downloadURL);
                let url = downloadURL;
                dispatch({
                    type: 'IMAGE_URL',
                    url: url,
                })
            });
        });

    }
}

const chat_toggle = (chat_data, own_uid) => {
    return (dispatch) => {
        console.log(chat_data.ad_user)

        let flag = true;
        let key = firebase.database().ref().push().key
        firebase.database().ref(`chatSnap`).on('value', (snapshot) => {
            let chatSnap = snapshot.val();
            if (chatSnap === null) {
                firebase.database().ref('/').child(`chatSnap/${own_uid}/${key}`).set({
                    name: chat_data.ad_user,
                    id: chat_data.id,
                    photo: chat_data.seller_photo,
                    title: chat_data.title,
                    price: chat_data.price,
                    ad_photo: chat_data.url,
                    uid: chat_data.uid,
                    key: key,
                });
            }
            else if (chatSnap !== null) {
                firebase.database().ref('/').child(`chatSnap/${own_uid}`).on('value', (snapshot) => {
                    let data = snapshot.val();
                    for (let item in data) {
                        if (data[item].id == chat_data.id) {
                            flag = false;
                        }
                    }
                    if (flag) {
                        firebase.database().ref('/').child(`chatSnap/${own_uid}/${key}`).set({
                            name: chat_data.ad_user,
                            id: chat_data.id,
                            photo: chat_data.seller_photo,
                            title: chat_data.title,
                            price: chat_data.price,
                            ad_photo: chat_data.url,
                            uid: chat_data.uid,
                            key: key,
                        });
                    }
                })
            }
        });

        dispatch({
            type: 'CHAT-TOGGLE',
            data: chat_data,
        })
    }
}

const chat_toggle_other = (chat_data) => {
    return (dispatch) => {
        console.log(chat_data.ad_user)

        let flag = true;
        let key = firebase.database().ref().push().key
        firebase.database().ref(`chatSnap`).on('value', (snapshot) => {
            let chatSnap = snapshot.val();
            if (chatSnap === null) {
                firebase.database().ref('/').child(`chatSnap/${chat_data.uid}/${key}`).set({
                    name: chat_data.ad_user,
                    id: chat_data.id,
                    photo: chat_data.seller_photo,
                    title: chat_data.title,
                    price: chat_data.price,
                    ad_photo: chat_data.url,
                    uid: chat_data.uid,
                    key: key,
                });
            }
            else if (chatSnap !== null) {
                firebase.database().ref('/').child(`chatSnap/${chat_data.uid}`).on('value', (snapshot) => {
                    let data = snapshot.val();
                    for (let item in data) {
                        if (data[item].id == chat_data.id) {
                            flag = false;
                        }
                    }
                    if (flag) {
                        firebase.database().ref('/').child(`chatSnap/${chat_data.uid}/${key}`).set({
                            name: chat_data.ad_user,
                            id: chat_data.id,
                            photo: chat_data.seller_photo,
                            title: chat_data.title,
                            price: chat_data.price,
                            ad_photo: chat_data.url,
                            uid: chat_data.uid,
                            key: key,
                        });
                    }
                })
            }
        });

        dispatch({
            type: 'CHAT-TOGGLE',
            data: chat_data,
        })
    }
}

const chat_data = (value, index) => {
    console.log(value)
    return (dispatch) => {
        dispatch({
            type: 'CHAT-DATA',
            value: value,
            index: index,
        })
    }
}

const get_msg = (value) => {
    return (dispatch) => {
        firebase.database().ref('/').child(`chat/${value.uid}/${value.id}`).on('value', (snapshot) => {
            let messages = snapshot.val();
            let newState = [];
            for (let item in messages) {
                newState.push({
                    message: messages[item].message,
                    uid: messages[item].uid,
                });
            }
            dispatch({
                type: 'CHAT-MESSAGES',
                messages: newState
            })
        })
    }

}

const close_chat = () => {
    return (dispatch) => {
        dispatch({
            type: 'CLOSE-CHAT',
        })
    }
}


const delete_chat = (uid, key) => {
    return (dispatch) => {
        firebase.database().ref('/').child(`chatSnap/${uid}/${key}`).remove();
        dispatch({
            type: 'DELETE-CHAT',
        })
    }

}


export {
    fb_login,
    logout,
    show_user_profile_div,
    open_location,
    ad_categories,
    ad_condition,
    ad_location_state,
    ad_location_city,
    send_ad_data,
    upload_files,
    chat_toggle,
    chat_data,
    get_msg,
    chat_toggle_other,
    close_chat,
    delete_chat,
}