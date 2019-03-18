import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';

function HeaderContainer(){
    return (
        <div className = 'hContainer'>
            <ImageThumbnail />
            <HeaderContent />
        </div>
    )
}

export default HeaderContainer;