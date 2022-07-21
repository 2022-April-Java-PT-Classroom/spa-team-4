import React, { Component } from 'react';

class ImageComponent extends Component {
    
    render() {
        return (
            <div>
                
                <img src={this.props.url} alt="display Art" />

            </div>
        );
    }
}

export default ImageComponent;