import React, { Component } from 'react';
import Title from './Title';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';

class Services extends Component{

    constructor(){
        super();
        this.state = {
            servicesData: [
                {
                    icon:<FaCocktail/>,
                    title: 'Free Cocktails',
                    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
                },
                {
                    icon:<FaHiking/>,
                    title: 'Local Hiking Tours',
                    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
                },
                {
                    icon:<FaShuttleVan/>,
                    title: 'Free Airport Shuttle',
                    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
                },
                {
                    icon:<FaBeer/>,
                    title: 'Strongest beer',
                    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
                }
            ]
        }
    }

    render(){
        return(
            <section className="services">
                <Title title="Our Services"/>
                <div className="services-center">
                    {this.state.servicesData.map((item, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        );
    }
}

export default Services;