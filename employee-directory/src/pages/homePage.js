import React from 'react';

function homePage(){//this is a function based consumer
    return(//consider defining a component for this page that will handle a sole purpose, like a nav bar that will propegate down to each page
        <div>
           <Header/> 
            <h1>da Vjncj Enterprises</h1>
            <h3>Where your vision comes to reality!</h3>
        </div>
    )
}
export default homePage;