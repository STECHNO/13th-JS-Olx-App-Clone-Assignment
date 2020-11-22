import React from 'react';
import '../Header/Header.css';

class Categories extends React.Component {
    constructor(){
        super()
        this.state = {
            toggle_categories: false
        }
    }


    all_categories_btn = () => {
        this.setState({
            toggle_categories: !this.state.toggle_categories,
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className='container'>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col sm-12">
                            <div className="categories_text_div">
                                <div style={{ display: "flex" }}>
                                    <div className='categories_text'>
                                        <span>ALL CATEGORIES</span>
                                    </div>
                                    <div>
                                        <button onClick={this.all_categories_btn} type="button" className="categories_btn">
                                            <svg width="24px" height="24px" viewBox="0 0 1024 1024">
                                                <path className="rui-77aaa" d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <div className='single_categories'>
                                    <div style={{ flex: 1 }}>
                                        <a href="#section">Mobile Phones</a>
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <a href="#section">Cars</a>
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <a href="#section">Motorcycles</a>
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <a href="#section">Houses</a>
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <a href="#section">TV - Video - Audio</a>
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <a href="#section">Tablets</a>
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <a href="#section">Land & Plots</a>
                                    </div>
                                </div>

                            </div>
                            {this.state.toggle_categories && (
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12" style={{ padding: 0 }}>
                                            <div className='all_categories'>
                                                <div className="row">
                                                    <div className="col-lg-2">
                                                        <h2>Products</h2>
                                                        <span>SmartPhones</span> <br />
                                                        <span>Car</span><br />
                                                        <span>Bike</span><br />
                                                        <span>Electronics</span>
                                                    </div>

                                                    <div className="col-lg-2">
                                                        <h2>Products</h2>
                                                        <span>SmartPhones</span> <br />
                                                        <span>Car</span><br />
                                                        <span>Bike</span><br />
                                                        <span>Electronics</span>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-2">
                                                        <h2>Products</h2>
                                                        <span>SmartPhones</span> <br />
                                                        <span>Car</span><br />
                                                        <span>Bike</span><br />
                                                        <span>Electronics</span>
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <h2>Products</h2>
                                                        <span>SmartPhones</span> <br />
                                                        <span>Car</span><br />
                                                        <span>Bike</span><br />
                                                        <span>Electronics</span>
                                                    </div>
                                                </div>
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


export default Categories;