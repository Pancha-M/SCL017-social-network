// import firebaseLoginFunctions from '../firebaseLogin.js';

export const feed = () => {
    const containerViewFeed = document.createElement('div');
  
    const viewFeed = `<div class="feed">
                        <nav>
                          <h1 class="womanbike">WOMANBIKE</H1>
                          <div class="iconsNav">
                            <button class="searchIcon" id="searchIcon">
                              <span class="iconify" data-inline="false" data-icon="ion:search-circle" style="color: #6FAAE4; font-size: 24px;"></span>
                            </button> 
                            <button class="homeIcon" id="homeIcon">
                              <span class="iconify" data-inline="false" data-icon="bx:bxs-home-heart" style="color: #6faae4; font-size: 24px;"></span>
                            </button>
                            <button class="profileIcon" id="profileIcon">
                              <span class="iconify" data-inline="false" data-icon="carbon:user-avatar-filled" style="color: #6faae4; font-size: 24px;"></span>
                            </button> 
                            <button class="menuIcon" id="menuIcon">
                            <span class="iconify" data-inline="false" data-icon="entypo:menu" style="color: #6FAAE4; font-size: 24px;"></span>
                            </button> 
                          </div>
                        </nav>
                            <p>LLEGAMOS AL FEED, YEEEY!</p>
                           </div>`;
  containerViewFeed.innerHTML = viewFeed;
  
//   window.addEventListener("load", () => {
//     firebaseLoginFunctions.showUser;
//   });


    return containerViewFeed;
  };
  