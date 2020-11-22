/* eslint-disable default-case */


const INITIAL_STATE = {
        show_location_div: false,
        show_user_profile_div: false,
        steps: 5,
        ak: ['', 'Bagh', 'Bhimber', 'Hajira', 'Kotli', 'Mirpur', 'Muzaffarabad', 'Pallandri', 'Rawalakot'],
        ba: ['', 'Bela', 'Gwadar', 'Jiwani', 'Kalat'],
        isl: ['', 'Islamabad'],
        kpk: ['', 'Abbottabad', 'Ali Masjid', 'Bannu', 'Batagram', 'Buner', 'Charsadda'],
        na: ['', 'Askoley', 'Chilas', 'Ghanche', 'Ghizer', 'Gilgit', 'Khaplu'],
        pb: ['', 'Lahore', 'Rahimyar Khan', 'Gujranwala', 'Multan', 'Faisalabad', 'Okara', 'Murree'],
        sd: ['', 'Karachi', 'Hyderabad', 'Thatta', 'Jamshoro', 'Mirpur Khas', 'Khairpur', 'Badin'],
        chat_toggle: true,
        show_chat: false,
        ad_data: [],
        chat_data_value: '',
        chat_data_index: '',
        messages: [],
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "SETDATA" :
            return({
                ...state,
                show_user_profile_div: !state.show_user_profile_div,
            }) 
    }
    
    switch(action.type){
        case "LOCATION_DIV" :
            return({
                ...state,
                show_location_div: !state.show_location_div,
            }) 
    }
    
    switch(action.type){
        case "CATEGORIES" :
            let {mainCategorie, subCategorie, type} = action.data;
            return({
                ...state,
                mainCat: mainCategorie,
                subCat: subCategorie,
                ad_type: type,
            })
    }
    
    switch(action.type){
        case "AD_CONDITION" :
            return({
                ...state,
            })
    }
    
    switch(action.type){
        case "AD_LOCATION_STATE" :
            console.log(action)
            return({
                ...state,
                stateName: action.state_short,
                stateNameFull: action.state_full,
            })
    }

   
    switch(action.type){
        case "AD_LOCATION_CITY" :
            return({
                ...state,
                city: action.data
            })
    }

    
    switch(action.type){
        case "IMAGE_URL" :
            console.log(action)
            return({
                ...state,
                url: action.url
            })
    }

    switch(action.type){
        case "CHAT-TOGGLE" :
            return({
                ...state,
                ad_data: [...state.ad_data, action.data],
            })
    }

    switch(action.type){
        case "CHAT-DATA" :
            return({
                ...state,
                chat_data_value: action.value,
                chat_data_index: action.index,
                chat_toggle: false,
                show_chat: true,
            })
    }

    switch(action.type){
        case "CHAT-MESSAGES" :
            return({
                ...state,
                messages: action.messages,
            })
    }

    switch(action.type){
        case "CLOSE-CHAT" :
            return({
                ...state,
                show_chat: false,
                chat_toggle: true,
            })
    }

    switch(action.type){
        case "DELETE-CHAT" :
            return({
                ...state,
                show_chat: false,
                chat_toggle: true,
            })
    }
        
        
    return state;
}