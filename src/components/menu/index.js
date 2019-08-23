import React from 'react';
import Graphics from './graphics';
import Rating from './ratings';
import Actvity from './actvity';





class Menu extends React.Component {
    render() {
        return (
            <div style={{display: "block"}}>
                <div>
                    <Graphics />
                </div>

                <div>  
                    <Rating />
                </div>

                <div>
                    <Actvity />
                </div>

            </div>
        );
    }

}

export default (Menu);

