import { BackgroundController } from "./BackgroundController.js";

let bgController = new BackgroundController();
bgController.showBg();

let btnChange = document.querySelector(".btnConvert");
let dotBtnChange = document.querySelector(".btnConvert .dot");
btnChange.addEventListener("click", function(){
    if(bgController.isNight) {        
        dotBtnChange.style.transform = "translateX(0%)";
        btnChange.style.background = "#f1a851";

        bgController.isNight = false;
        bgController.showBg();
    }else{        
        dotBtnChange.style.transform = "translateX(-100%)";
        btnChange.style.background = "rgba(255,255,255,0.1)";

        bgController.isNight = true;
        bgController.showBg();
    }
})

var audioCityRain = document.querySelectorAll(".myAudio")[0];
var audioCityTraffic = document.querySelectorAll(".myAudio")[1];
var audioMusic = document.querySelectorAll(".myAudio")[2];
var audioKeyboard = document.querySelectorAll(".myAudio")[3];

// open menu
let btnMenuHeader = document.querySelector(".listIcon .btnMenu");
let isCheckMenuHeader = false;
let subMenuHeader = document.querySelector(".listIcon .subMenu");
btnMenuHeader.addEventListener("click", function(){
    if(isCheckMenuHeader) {
        isCheckMenuHeader = false;
        subMenuHeader.style.display = "none";
    }else{
        isCheckMenuHeader = true;
        subMenuHeader.style.display = "block";
    }
})

// full screen
let btnFullScreen = document.querySelector(".btnFullScreen");
let isFullScreen = true;
btnFullScreen.addEventListener("click", function(){
    if(isFullScreen){
        isFullScreen = false;
        document.querySelector("html").requestFullscreen();
    }else{
        isFullScreen = true;
        document.exitFullscreen();
    }      
})

// body - dot out store
let getDotCityRain = document.querySelector(".cityRain__dot");
let getDotCityTraffic = document.querySelector(".cityTraffic__dot");
let getDotEnter = document.querySelector(".enter__dot");

let getSettingCityRain = document.querySelector(".cityRain__setting");
let getSettingCityTraffic = document.querySelector(".cityTraffic__setting");

let getRangeCityRain = document.querySelector(".cityRain__range");
let getRangeCityTraffic = document.querySelector(".cityTraffic__range");

let isClickCityRain = true;
let isClickCityTraffic = true;

// click dot => range show
getDotCityRain.addEventListener("click", function(){
    if(isClickCityRain){
        isClickCityRain = false;
        audioCityRain.src = "./assets/audio/rain_forest.mp3";
        audioCityRain.volume = 0.5;
        getRangeCityRain.value = 50;
        getRangeCityRain.style.background = 'linear-gradient(90deg, #f3a952 50%, rgba(255,255,255,0.1) 50%)';
        soundRainRangeSetting.value = 50;
        soundRainRangeSetting.style.background = 'linear-gradient(90deg, #f3a952 50%, rgba(255,255,255,0.1) 50%)';
        getRangeCityRain.style.display = "block";
        bgController.isRaining = true;
        bgController.showBg();  

        // method
        getSettingCityRain.addEventListener("mouseout", function(){
            if(audioCityRain.volume > 0){
                // isClickCityRain = true;
                if(isClickCityRain == false){
                    getRangeCityRain.style.display = "block";                  
                }                             
            }else{
                isClickCityRain = true;
                getRangeCityRain.style.display = "none";
                
                bgController.isRaining = false;
                bgController.showBg();        
            }
        })
        getDotCityRain.addEventListener("mouseout", function(){
            if(audioCityRain.volume > 0){
                if(isClickCityRain == false){
                    getRangeCityRain.style.display = "block";                  
                }
            }else{
                getRangeCityRain.style.display = "none";
                
                bgController.isRaining = false;
                bgController.showBg();
                if(isClickCityRain){
                    isClickCityRain = false;
                }else{
                    isClickCityRain = true;
                }                                                               
            }
        })        
        getRangeCityRain.addEventListener("mousemove", function(){
            // load range out store
            var x = getRangeCityRain.value;
            var color = "linear-gradient(90deg, #f3a952 " + x + "%, rgba(255,255,255,0.1) " + x + "%)";
            getRangeCityRain.style.background = color;
            audioCityRain.volume = x/100;
            
            // load range in store
            getRangeCityRainInStore.style.background = color;
            getRangeCityRainInStore.value = x;

            // load in setting
            // in setting
            soundRainRangeSetting.style.background = color;
            soundRainRangeSetting.value = x;
        })                         
    }else{
        // ko mua
        isClickCityRain = true;
        getRangeCityRain.style.display = "none";
        audioCityRain.src = "";       
        soundRainRangeSetting.value = 0;
        soundRainRangeSetting.style.background = 'linear-gradient(90deg, #f3a952 0%, rgba(255,255,255,0.1) 0%)'; 
        getSettingCityRain.addEventListener("mouseout", function(){
            if(audioCityRain.volume > 0){
                // getRangeCityRain.style.display = "block";                               
            }else{
                getRangeCityRain.style.display = "none";
                
                bgController.isRaining = false;
                bgController.showBg();
                if(isClickCityRain){
                    isClickCityRain = false;
                }else{
                    isClickCityRain = true;
                }                  
            }
        })
        getDotCityRain.addEventListener("mouseout", function(){
            getRangeCityRain.style.display = "none";
            if(audioCityRain.volume > 0){
                // getRangeCityRain.style.display = "block";                   
            }else{
                getRangeCityRain.style.display = "none";
                                                                                   
            }
        })        
        getRangeCityRain.addEventListener("mousemove", function(){
            var x = getRangeCityRain.value;
            var color = "linear-gradient(90deg, #f3a952 " + x + "%, rgba(255,255,255,0.1) " + x + "%)";
            getRangeCityRain.style.background = color;
            audioCityRain.volume = x/100;
        })
        bgController.isRaining = false;
        bgController.showBg();
    }
})


// traffic
getDotCityTraffic.addEventListener("click", function(){
    if(isClickCityTraffic){
        isClickCityTraffic = false;
        getRangeCityTraffic.style.display = "block";
        audioCityTraffic.src = "./assets/audio/city_traffic.mp3";
        audioCityTraffic.volume = 0.5;
        getRangeCityTraffic.value = 50;
        getRangeCityTraffic.style.background = 'linear-gradient(90deg, #f3a952 50%, rgba(255,255,255,0.1) 50%)';
        soundCityTrafficRangeSetting.value = 50;
        soundCityTrafficRangeSetting.style.background = 'linear-gradient(90deg, #f3a952 50%, rgba(255,255,255,0.1) 50%)';        
        getSettingCityTraffic.addEventListener("mouseout", function(){
            if(audioCityTraffic.volume > 0){
                getRangeCityTraffic.style.display = "block";                   
            }else{
                getRangeCityTraffic.style.display = "none";                                                                                   
            }
        })
        getDotCityTraffic.addEventListener("mouseout", function(){
            if(audioCityTraffic.volume > 0){
                getRangeCityTraffic.style.display = "block";                   
            }else{
                getRangeCityTraffic.style.display = "none";                                                                                   
            }
        })
        getRangeCityTraffic.addEventListener("mousemove", function(){
            var x = getRangeCityTraffic.value;
            var color = "linear-gradient(90deg, #f3a952 " + x + "%, rgba(255,255,255,0.1) " + x + "%)";
            getRangeCityTraffic.style.background = color;
            audioCityTraffic.volume = x/100;
            // in setting
            soundCityTrafficRangeSetting.style.background = color;
            soundCityTrafficRangeSetting.value = x; 
        })
    }else{
        isClickCityTraffic = true;
        getRangeCityTraffic.style.display = "none";
        audioCityTraffic.src = "";
        soundCityTrafficRangeSetting.value = 0;
        soundCityTrafficRangeSetting.style.background = 'linear-gradient(90deg, #f3a952 0%, rgba(255,255,255,0.1) 0%)';        
        getSettingCityTraffic.addEventListener("mouseout", function(){
            getRangeCityTraffic.style.display = "none";
        })
        getDotCityTraffic.addEventListener("mouseout", function(){
            getRangeCityTraffic.style.display = "none";
        })         
    }
})

// INSTORE

// block dot out store
var getCityRainOutStore = document.querySelector(".cityRain");
var getCityTrafficOutStore = document.querySelector(".cityTraffic");
var getEnterOutStore = document.querySelector(".enter");

// block dot in store 
var getCityRainInStore = document.querySelector(".cityRain.instore");
var getKeyboardInStore = document.querySelector(".cityTraffic.instore");
var getGoOutInStore = document.querySelector(".enter.instore");
getDotEnter.addEventListener("click", function(){
    // set default
    audioCityTraffic.src = "";
    getRangeCityTraffic.style.display = "none";
    
    bgController.instore = true;
    bgController.showBg();
    if(isClickCityRain == false){
        getRangeCityRainInStore.style.display = "block";
    }

    // block out store
    getCityRainOutStore.style.display = "none";
    getCityTrafficOutStore.style.display = "none";
    getEnterOutStore.style.display = "none";
    // block in store
    getCityRainInStore.style.display = "block";
    getKeyboardInStore.style.display = "block";
    getGoOutInStore.style.display = "block";

    // rain kéo xuống trong instore
    getRangeCityRainInStore.addEventListener("mousemove", function(){
        var x = getRangeCityRainInStore.value;
        var color = "linear-gradient(90deg, #f3a952 " + x + "%, rgba(255,255,255,0.1) " + x + "%)";
        getRangeCityRainInStore.style.background = color;
        audioCityRain.volume = x/100;
    })

    //hover dot instore
    getDotCityRainInStore.addEventListener("mouseout", function(){
        if(audioCityRain.volume > 0){
            if(isClickCityRainInstore == false){
                getRangeCityRainInStore.style.display = "block";                  
            }                    
        }else{
            getRangeCityRainInStore.style.display = "none";
            
            bgController.isRaining = false;
            bgController.showBg();
            if(isClickCityRainInstore){
                isClickCityRainInstore = false;
            }else{
                isClickCityRainInstore = true;
            }                                                                
        }
    })  

})

var getDotCityRainInStore = document.querySelector(".cityRain__dot.instore");
var getDotKeyboardInStore = document.querySelector(".cityTraffic__dot.instore");
var getDotGoOut = document.querySelector(".enter__dot.instore");

var getSettingCityRainInStore = document.querySelector(".cityRain__setting.instore");
var getSettingKeyboardInStore = document.querySelector(".cityTraffic__setting.instore");

var getRangeCityRainInStore = document.querySelector(".cityRain.instore .cityRain__range");
var getRangeKeyboardInStore = document.querySelector(".cityTraffic.instore .cityTraffic__range");

var isClickCityRainInstore = true;
var isClickKeyboard = true;

// click dot instore => range show
getDotCityRainInStore.addEventListener("click", function clickDotCityRainInStore(){    
    if(isClickCityRainInstore){
        // mua
        // set default
        isClickCityRainInstore = false;
        audioCityRain.src = "./assets/audio/rain_forest.mp3";
        audioCityRain.volume = 0.5;
        getRangeCityRainInStore.value = 50;
        getRangeCityRainInStore.style.background = 'linear-gradient(90deg, #f3a952 50%, rgba(255,255,255,0.1) 50%)';
        soundRainRangeSetting.value = 50;
        soundRainRangeSetting.style.background = 'linear-gradient(90deg, #f3a952 50%, rgba(255,255,255,0.1) 50%)';
        getRangeCityRainInStore.style.display = "block";     
        bgController.isRaining = true;
        bgController.showBg();  

        // method
        getSettingCityRainInStore.addEventListener("mouseout", function(){
            if(audioCityRain.volume > 0){
                if(isClickCityRainInstore == false){
                    getRangeCityRainInStore.style.display = "block";                  
                }                               
            }else{
                isClickCityRainInstore = true;
                getRangeCityRainInStore.style.display = "none";
                
                bgController.isRaining = false;
                bgController.showBg();
            }
        })
        getDotCityRainInStore.addEventListener("mouseout", function(){
            if(audioCityRain.volume > 0){
                // getRangeCityRainInStore.style.display = "block";
                if(isClickCityRainInstore == false){
                    getRangeCityRainInStore.style.display = "block";                  
                }                    
            }else{
                getRangeCityRainInStore.style.display = "none";

                bgController.isRaining = false;
                bgController.showBg();
                
                if(isClickCityRainInstore){
                    isClickCityRainInstore = false;
                }else{
                    isClickCityRainInstore = true;
                }                                                                
            }
        })        
        getRangeCityRainInStore.addEventListener("mousemove", function(){
            var x = getRangeCityRainInStore.value;
            var color = "linear-gradient(90deg, #f3a952 " + x + "%, rgba(255,255,255,0.1) " + x + "%)";
            getRangeCityRainInStore.style.background = color;
            audioCityRain.volume = x/100;
            
            // load range out store
            getRangeCityRain.style.background = color;
            getRangeCityRain.value = x;

            // load in setting
            // in setting
            soundRainRangeSetting.style.background = color;
            soundRainRangeSetting.value = x;
            
        })                         
    }else{
        // ko mua
        isClickCityRainInstore = true;
        getRangeCityRainInStore.style.display = "none";
        audioCityRain.src = "";
        soundRainRangeSetting.value = 0;
        soundRainRangeSetting.style.background = 'linear-gradient(90deg, #f3a952 0%, rgba(255,255,255,0.1) 0%)';        
        getSettingCityRainInStore.addEventListener("mouseout", function(){
            if(audioCityRain.volume > 0){
                // getRangeCityRainInStore.style.display = "block";                               
            }else{
                getRangeCityRainInStore.style.display = "none";
                bgController.isRaining = false;
                bgController.showBg();
                if(isClickCityRainInstore){
                    isClickCityRainInstore = false;
                }else{
                    isClickCityRainInstore = true;
                }             
            }
        })
        getDotCityRainInStore.addEventListener("mouseout", function(){
            getRangeCityRainInStore.style.display = "none";
            if(audioCityRain.volume > 0){
                // getRangeCityRainInStore.style.display = "block";                   
            }else{
                getRangeCityRainInStore.style.display = "none";
                                                                                   
            }
        })        
        getRangeCityRainInStore.addEventListener("mousemove", function(){
            var x = getRangeCityRainInStore.value;
            var color = "linear-gradient(90deg, #f3a952 " + x + "%, rgba(255,255,255,0.1) " + x + "%)";
            getRangeCityRainInStore.style.background = color;
            audioCityRain.volume = x/100;
        })
        bgController.isRaining = false;
        bgController.showBg();     
    }
})

// keyboard
getDotKeyboardInStore.addEventListener("click", function(){
    if(isClickKeyboard){
        isClickKeyboard = false;
        getRangeKeyboardInStore.style.display = "block";
        audioKeyboard.src = "./assets/audio/keyboard.mp3";
        audioKeyboard.volume = 0.5;
        getRangeKeyboardInStore.value = 50;
        getRangeKeyboardInStore.style.background = 'linear-gradient(90deg, #f3a952 50%, rgba(255,255,255,0.1) 50%)';
        soundKeyboardRangeSetting.value = 50;
        soundKeyboardRangeSetting.style.background = 'linear-gradient(90deg, #f3a952 50%, rgba(255,255,255,0.1) 50%)';        
        getSettingKeyboardInStore.addEventListener("mouseout", function(){
            if(audioKeyboard.volume > 0){
                getRangeKeyboardInStore.style.display = "block";                   
            }else{
                getRangeKeyboardInStore.style.display = "none";                                                                                   
            }
        })
        getDotKeyboardInStore.addEventListener("mouseout", function(){
            if(audioKeyboard.volume > 0){
                getRangeKeyboardInStore.style.display = "block";                   
            }else{
                getRangeKeyboardInStore.style.display = "none";                                                                                   
            }
        })
        getRangeKeyboardInStore.addEventListener("mousemove", function(){
            var x = getRangeKeyboardInStore.value;
            var color = "linear-gradient(90deg, #f3a952 " + x + "%, rgba(255,255,255,0.1) " + x + "%)";
            getRangeKeyboardInStore.style.background = color;
            audioKeyboard.volume = x/100;

            soundKeyboardRangeSetting.style.background = color;
            soundKeyboardRangeSetting.value = x;            
        })
    }else{
        isClickKeyboard = true;
        getRangeKeyboardInStore.style.display = "none";
        soundKeyboardRangeSetting.style.background = "linear-gradient(90deg, #f3a952 0%, rgba(255,255,255,0.1) 0%)";
        soundKeyboardRangeSetting.value = 0;
        audioKeyboard.src = "";
        getSettingKeyboardInStore.addEventListener("mouseout", function(){
            getRangeKeyboardInStore.style.display = "none";
        })
        getDotKeyboardInStore.addEventListener("mouseout", function(){
            getRangeKeyboardInStore.style.display = "none";
        })         
    }
})

// out store
getDotGoOut.addEventListener("click", function(){
    // dem = false ; ko mua = true; ngay = true; mua = false
    // tắt tiếng keyboard
    audioKeyboard.src = "";
    getRangeKeyboardInStore.style.display = "none";
    bgController.instore = false;
    bgController.showBg();
    if(isClickCityRainInstore == false){
        getRangeCityRain.style.display = "block";
    }

    // block out store
    getCityRainOutStore.style.display = "block";
    getCityTrafficOutStore.style.display = "block";
    getEnterOutStore.style.display = "block";
    // block in store
    getCityRainInStore.style.display = "none";
    getKeyboardInStore.style.display = "none";
    getGoOutInStore.style.display = "none";
    
    // load range out store
    var x = getRangeCityRainInStore.value;
    var color = "linear-gradient(90deg, #f3a952 " + x + "%, rgba(255,255,255,0.1) " + x + "%)";
    getRangeCityRain.style.background = color;
    getRangeCityRain.value = x;

    // hover dot out store
    getDotCityRain.addEventListener("mouseout", function(){
        if(audioCityRain.volume > 0){
            if(isClickCityRain == false){
                getRangeCityRain.style.display = "block";                  
            }
        }else{
            getRangeCityRain.style.display = "none";
            bgController.isRaining = false;
            bgController.showBg();
            if(isClickCityRain){
                isClickCityRain = false;
            }else{
                isClickCityRain = true;
            }                                                             
        }
    })  
})


// sidebar
var itemSetting = document.querySelector(".sidebar__listItems .sidebar__itemSetting");
var itemPlaylist = document.querySelector(".sidebar__listItems .sidebar__itemPlaylist");
var itemBackground = document.querySelector(".sidebar__listItems .sidebar__itemBackground");
var itemProduct = document.querySelector(".sidebar__listItems .sidebar__itemProduct");

var itemSubSetting = document.querySelector(".sidebar__listItems .sidebar__subSetting");
var itemSubPlaylist = document.querySelector(".sidebar__listItems .sidebar__subPlaylist");
var itemSubBackground = document.querySelector(".sidebar__listItems .sidebar__subBackground");
var itemSubProduct = document.querySelector(".sidebar__listItems .sidebar__subProduct");

var isCheckSubSetting = true;
var isCheckSubPlaylist = true;
var isCheckSubBackground = true;
var isCheckSubProduct = true;

itemSetting.addEventListener("click", function(){    
    if(isCheckSubSetting){
        isCheckSubSetting = false;
        isCheckSubPlaylist = true;
        isCheckSubBackground = true;
        isCheckSubProduct = true;
        itemSubSetting.style.display = "block";
        itemSubPlaylist.style.display = "none";
        itemSubBackground.style.display = "none";
        itemSubProduct.style.display = "none";
    }else{
        isCheckSubSetting = true;
        itemSubSetting.style.display = "none";
    }
})

itemPlaylist.addEventListener("click", function(){    
    if(isCheckSubPlaylist){
        isCheckSubPlaylist = false;
        isCheckSubSetting = true;
        isCheckSubBackground = true;
        isCheckSubProduct = true;
        itemSubPlaylist.style.display = "block";
        itemSubSetting.style.display = "none";
        itemSubBackground.style.display = "none";
        itemSubProduct.style.display = "none";
    }else{
        isCheckSubPlaylist = true;
        itemSubPlaylist.style.display = "none";
    }
})

itemBackground.addEventListener("click", function(){    
    if(isCheckSubBackground){
        isCheckSubBackground = false;
        isCheckSubSetting = true;
        isCheckSubPlaylist = true;
        isCheckSubProduct = true;
        itemSubBackground.style.display = "block";
        itemSubSetting.style.display = "none";
        itemSubPlaylist.style.display = "none";
        itemSubProduct.style.display = "none";
    }else{
        isCheckSubBackground = true;
        itemSubBackground.style.display = "none";
    }
})

itemProduct.addEventListener("click", function(){    
    if(isCheckSubProduct){
        isCheckSubProduct = false;
        isCheckSubSetting = true;
        isCheckSubPlaylist = true;
        isCheckSubBackground = true;
        itemSubProduct.style.display = "block";
        itemSubSetting.style.display = "none";
        itemSubPlaylist.style.display = "none";
        itemSubBackground.style.display = "none";
    }else{
        isCheckSubProduct = true;
        itemSubProduct.style.display = "none";
    }
})

// mix mode noise
var soundCityTrafficRangeSetting = document.querySelector(".sidebar__subSetting_cityTraffic .cityTraffic_range");
var soundRainRangeSetting = document.querySelector(".sidebar__subSetting_cityRain .cityRain_range");
var soundKeyboardRangeSetting = document.querySelector(".sidebar__subSetting_keyBoard .keyBoard_range");
// load 
window.addEventListener("load", function(){
    soundCityTrafficRangeSetting.value = 0;
    soundKeyboardRangeSetting.value = 0;
    getRangeVolumeSong.value = 0;
    soundRainRangeSetting.value = 0;
})

// keyboard setting sound
soundKeyboardRangeSetting.addEventListener("click", function(){
    audioKeyboard.src = "./assets/audio/keyboard.mp3";
    audioKeyboard.volume = 0;
})
soundKeyboardRangeSetting.addEventListener("mousemove", function(){
    if(soundKeyboardRangeSetting.value > 0){
        isClickKeyboard = false;
        getRangeKeyboardInStore.style.display = "block";        
        var x = soundKeyboardRangeSetting.value;
        var color = "linear-gradient(90deg, #f3a952 " + x + "%, rgba(255,255,255,0.1) " + x + "%)";
        soundKeyboardRangeSetting.style.background = color;
        audioKeyboard.volume = x/100;
        getRangeKeyboardInStore.style.background = color;
        getRangeKeyboardInStore.value = x;
        
        getRangeKeyboardInStore.addEventListener("mousemove", function(){
            var x = getRangeKeyboardInStore.value;
            var color = "linear-gradient(90deg, #f3a952 " + x + "%, rgba(255,255,255,0.1) " + x + "%)";
            getRangeKeyboardInStore.style.background = color;
            audioKeyboard.volume = x/100;

            soundKeyboardRangeSetting.style.background = color;
            soundKeyboardRangeSetting.value = x;            
        })
    }else{
        isClickKeyboard = true;
        getRangeKeyboardInStore.style.display = "none";
        soundKeyboardRangeSetting.style.background = "linear-gradient(90deg, #f3a952 0%, rgba(255,255,255,0.1) 0%)";
        soundKeyboardRangeSetting.value = 0;
        audioKeyboard.src = "";
    }
})

// traffic setting sound
soundCityTrafficRangeSetting.addEventListener("click", function(){
    audioCityTraffic.src = "./assets/audio/city_traffic.mp3";
    audioCityTraffic.volume = 0;    
})
soundCityTrafficRangeSetting.addEventListener("mousemove", function(){
    // soundCityTrafficRangeSetting.value = 0;
    if(soundCityTrafficRangeSetting.value > 0){
        isClickCityTraffic = false;
        getRangeCityTraffic.style.display = "block";        
        var x = soundCityTrafficRangeSetting.value;
        var color = "linear-gradient(90deg, #f3a952 " + x + "%, rgba(255,255,255,0.1) " + x + "%)";
        soundCityTrafficRangeSetting.style.background = color;
        audioCityTraffic.volume = x/100;
        getRangeCityTraffic.style.background = color;
        getRangeCityTraffic.value = x;
        
        getRangeCityTraffic.addEventListener("mousemove", function(){
            var x = getRangeCityTraffic.value;
            var color = "linear-gradient(90deg, #f3a952 " + x + "%, rgba(255,255,255,0.1) " + x + "%)";
            getRangeCityTraffic.style.background = color;
            audioCityTraffic.volume = x/100;
            // in setting
            soundCityTrafficRangeSetting.style.background = color;
            soundCityTrafficRangeSetting.value = x; 
        })
    }else{
        isClickCityTraffic = true;
        getRangeCityTraffic.style.display = "none";
        soundCityTrafficRangeSetting.style.background = "linear-gradient(90deg, #f3a952 0%, rgba(255,255,255,0.1) 0%)";
        soundCityTrafficRangeSetting.value = 0;
        audioCityTraffic.src = "";
    }
})

// rain setting sound
soundRainRangeSetting.addEventListener("click", function(){
    audioCityRain.src = "./assets/audio/rain_forest.mp3";
    audioCityRain.volume = 0;
})
soundRainRangeSetting.addEventListener("mousemove", function(){
    if(bgController.instore == true){
        // trong cua hang
        if(soundRainRangeSetting.value > 0){
            // troi mua
            isClickCityRainInstore = false;
            getRangeCityRainInStore.style.display = "block";        
            var x = soundRainRangeSetting.value;
            var color = "linear-gradient(90deg, #f3a952 " + x + "%, rgba(255,255,255,0.1) " + x + "%)";
            soundRainRangeSetting.style.background = color;
            audioCityRain.volume = x/100;
            getRangeCityRainInStore.style.background = color;
            getRangeCityRainInStore.value = x;        
            getRangeCityRainInStore.addEventListener("mousemove", function(){
                var x = getRangeCityRainInStore.value;
                var color = "linear-gradient(90deg, #f3a952 " + x + "%, rgba(255,255,255,0.1) " + x + "%)";
                getRangeCityRainInStore.style.background = color;
                audioCityRain.volume = x/100;

                soundRainRangeSetting.style.background = color;
                soundRainRangeSetting.value = x;            
            })
            // ban ngay true // dem false
            bgController.isRaining = true;
            bgController.showBg();
        }else{
            isClickCityRainInstore = true;
            getRangeCityRainInStore.style.display = "none";
            soundRainRangeSetting.style.background = "linear-gradient(90deg, #f3a952 0%, rgba(255,255,255,0.1) 0%)";
            soundRainRangeSetting.value = 0;
            audioCityRain.src = "";
            // ban ngay true // dem false
            bgController.isRaining = false;
            bgController.showBg();
        }        
        
    } else {
        // ngoai cua hang
        if(soundRainRangeSetting.value > 0){
            // troi mua
            isClickCityRain = false;
            getRangeCityRain.style.display = "block";        
            var x = soundRainRangeSetting.value;
            var color = "linear-gradient(90deg, #f3a952 " + x + "%, rgba(255,255,255,0.1) " + x + "%)";
            soundRainRangeSetting.style.background = color;
            audioCityRain.volume = x/100;
            getRangeCityRain.style.background = color;
            getRangeCityRain.value = x;                    
            getRangeCityRain.addEventListener("mousemove", function(){
                // load range out store
                var x = getRangeCityRain.value;
                var color = "linear-gradient(90deg, #f3a952 " + x + "%, rgba(255,255,255,0.1) " + x + "%)";
                getRangeCityRain.style.background = color;
                audioCityRain.volume = x/100;
                
                // load range in store
                getRangeCityRainInStore.style.background = color;
                getRangeCityRainInStore.value = x;
    
                // load in setting
                // in setting
                soundRainRangeSetting.style.background = color;
                soundRainRangeSetting.value = x;
            })
            // ban ngay true // dem false
            bgController.isRaining = true;
            bgController.showBg();
        }else{
            isClickCityRain = true;
            getRangeCityRain.style.display = "none";
            soundRainRangeSetting.style.background = "linear-gradient(90deg, #f3a952 0%, rgba(255,255,255,0.1) 0%)";
            soundRainRangeSetting.value = 0;
            audioCityRain.src = "";
            // ban ngay true // dem false
            bgController.isRaining = false;
            bgController.showBg();
        }        
        
    }           
})


// SONG
var songSleepy = [
    {
        name: "Last Reunion-Peter Roe",
        path: "./assets/audio/songSleepy/LastReunion-PeterRoe-3503780.mp3"
    },
    {
        name: "Rise Extended-John Dreamer",
        path: "./assets/audio/songSleepy/RiseExtendedEpicMusic-JohnDreamer-5338979.mp3"
    },
    {
        name: "End Of My Journey-John Denver",
        path: "./assets/audio/songSleepy/EndOfMyJourney-JohnDenver-2428587.mp3"
    },
    {
        name: "Brotherhood - John Dreamer",
        path: "./assets/audio/songSleepy/Brotherhood-JohnDreamer_4cpkz_hq.mp3"
    },
    {
        name: "Futari No Kimochi-VA",
        path: "./assets/audio/songSleepy/FutariNoKimochi-VA_4gc8n.mp3"
    }
]

var songJazzy = [
    {
        name: "Victory-Two Steps From Hell",
        path: "./assets/audio/songJazzy/Victory-TwoStepsFromHell-3890867.mp3"
    },
    {
        name: "Star Sky-Two Steps From Hell",
        path: "./assets/audio/songJazzy/StarSky-TwoStepsFromHell-3887093.mp3"
    },
    {
        name: "Protectors Of The Earth-Two Steps From Hell",
        path: "./assets/audio/songJazzy/ProtectorsOfTheEarthNoChoir-TwoStepsFromHell-3507971.mp3"
    },
    {
        name: "Heart Of Courage-Two Steps From Hell",
        path: "./assets/audio/songJazzy/HeartOfCourage-TwoStepsFromHell-3318547.mp3"
    },
    {
        name: "Invincible-Two Steps From Hell",
        path: "./assets/audio/songJazzy/Invincible-TwoStepsFromHell-3318615.mp3"
    }
]

var songChill = [
    {
        name: "Child hood Memory-Bandari",
        path: "./assets/audio/songChill/ChildhoodMemory-Bandari_3a6hg.mp3"
    },
    {
        name: "Kiss The Rain-Yiruma",
        path: "./assets/audio/songChill/KissTheRain-Yiruma-75858.mp3"
    },
    {
        name: "Túy Hồng Nhan-Lưu Y Đóa",
        path: "./assets/audio/songChill/TuyHongNhanNhacPhimTanThuyHu-V_44zr9.mp3"
    },
    {
        name: "Windy Hill-VA",
        path: "./assets/audio/songChill/WindyHill-VA-5941232.mp3"
    }
]

var getBtnPlay = document.querySelector(".musicSong .btnPlay");
var getBtnNext = document.querySelector(".musicSong .btnNext");
var getBtnPrev = document.querySelector(".musicSong .btnPrev")
var getNameSong = document.querySelector(".nameSong");
var isClickBtnSong = true;
var currentSong = 0;

// range volume in sidebar(
var getRangeVolumeSong = document.querySelector(".sidebar__subSetting_volume .volume__Range");
var getBtnMuteVolumeSong = document.querySelectorAll(".sidebar__subSetting_volume i")[0];
var getBtnMaxVolumeSong = document.querySelectorAll(".sidebar__subSetting_volume i")[1];

// click playlist music in setting
var getItemMusicSleepy = document.querySelectorAll(".sidebar__subSetting_listImg li")[0];
var getItemMusicJazzy = document.querySelectorAll(".sidebar__subSetting_listImg li")[1];
var getItemMusicChill = document.querySelectorAll(".sidebar__subSetting_listImg li")[2];

window.addEventListener("load", function(){    
    getNameSong.innerHTML = songSleepy[currentSong].name;
    audioMusic.src = songSleepy[currentSong].path;
    getItemMusicSleepy.classList.add("itemClick");
    getItemMusicJazzy.classList.remove("itemClick");
    getItemMusicChill.classList.remove("itemClick");
    isClickItemMusicSleepy = false;
    isClickItemMusicJazzy = true;
    isClickItemMusicChill = true;
    
})

var isClickItemMusicSleepy = true;
var isClickItemMusicJazzy = false;
var isClickItemMusicChill = false;

getItemMusicSleepy.addEventListener("click",function(){
    if(isClickItemMusicSleepy = true){
        getNameSong.innerHTML = songSleepy[currentSong].name;
        audioMusic.src = songSleepy[currentSong].path;
        getItemMusicSleepy.classList.add("itemClick");
        getItemMusicJazzy.classList.remove("itemClick");
        getItemMusicChill.classList.remove("itemClick");
        isClickItemMusicSleepy = false;
        isClickItemMusicJazzy = true;
        isClickItemMusicChill = true;
        if(isClickBtnSong){
            isClickBtnSong = false;
        }else{
            isClickBtnSong = true
        }
        getBtnPlay.click();
    }        
})

getItemMusicJazzy.addEventListener("click",function(){
    if(isClickItemMusicJazzy = true){
        getNameSong.innerHTML = songJazzy[currentSong].name;
        audioMusic.src = songJazzy[currentSong].path;
        getItemMusicSleepy.classList.remove("itemClick");
        getItemMusicJazzy.classList.add("itemClick");
        getItemMusicChill.classList.remove("itemClick");
        isClickItemMusicSleepy = true;
        isClickItemMusicJazzy = false;
        isClickItemMusicChill = true;
        if(isClickBtnSong){
            isClickBtnSong = false;
        }else{
            isClickBtnSong = true
        }
        getBtnPlay.click();
    }     
})

getItemMusicChill.addEventListener("click",function(){
    if(isClickItemMusicChill = true){
        getNameSong.innerHTML = songChill[currentSong].name;
        audioMusic.src = songChill[currentSong].path;
        getItemMusicSleepy.classList.remove("itemClick");
        getItemMusicJazzy.classList.remove("itemClick");
        getItemMusicChill.classList.add("itemClick");
        isClickItemMusicSleepy = true;
        isClickItemMusicJazzy = true;
        isClickItemMusicChill = false;
        if(isClickBtnSong){
            isClickBtnSong = false;
        }else{
            isClickBtnSong = true
        }
        getBtnPlay.click();
    }    
}) 

getBtnPlay.addEventListener("click", function clickBtnSong(){
    if(isClickBtnSong){
        isClickBtnSong = false;
        // delete class play
        getBtnPlay.classList.remove("fa-circle-play");
        // add class pause
        getBtnPlay.classList.add("fa-circle-pause");
        // play song
        audioMusic.play();
        audioMusic.volume = 0.5;
        // range song in setting sidebar
        getRangeVolumeSong.value = 50;
        getRangeVolumeSong.style.background = 'linear-gradient(90deg, #f3a952 50%, rgba(255,255,255,0.1) 50%)'       

        // method
        getRangeVolumeSong.addEventListener("mousemove", function(){
            var x = getRangeVolumeSong.value;
            var color = "linear-gradient(90deg, #f3a952 " + x + "%, rgba(255,255,255,0.1) " + x + "%)";
            getRangeVolumeSong.style.background = color;
            audioMusic.volume = x/100;
        })
        getRangeVolumeSong.addEventListener("click", function(){
            var x = getRangeVolumeSong.value;
            var color = "linear-gradient(90deg, #f3a952 " + x + "%, rgba(255,255,255,0.1) " + x + "%)";
            getRangeVolumeSong.style.background = color;
            audioMusic.volume = x/100;
        })
        audioMusic.addEventListener("ended", function(){
            getBtnNext.click();
        })
    }else{
        isClickBtnSong = true;
        // add class play
        getBtnPlay.classList.add("fa-circle-play");
        // delete class pause
        getBtnPlay.classList.remove("fa-circle-pause");
        // pause song
        audioMusic.pause();
        audioMusic.volume = 0;
        // range song in setting sidebar
        getRangeVolumeSong.value = 0;
        getRangeVolumeSong.style.background = 'linear-gradient(90deg, #f3a952 0%, rgba(255,255,255,0.1) 0%)'
    }    
})

getBtnNext.addEventListener("click", function (){
    // load music sleepy
    currentSong++;
    if(isClickItemMusicSleepy == false && isClickItemMusicJazzy == true && isClickItemMusicChill == true){
        if(currentSong > songSleepy.length-1){
            currentSong = 0;
        }
        getItemMusicSleepy.click();
    }
    // load music jazzy
    if(isClickItemMusicSleepy == true && isClickItemMusicJazzy == false && isClickItemMusicChill == true){
        if(currentSong > songJazzy.length-1){
            currentSong = 0;
        }
        getItemMusicJazzy.click();
    }
    // load music chill
    if(isClickItemMusicSleepy == true && isClickItemMusicJazzy == true && isClickItemMusicChill == false){
        if(currentSong > songChill.length-1){
            currentSong = 0;
        }
        getItemMusicChill.click();
    }
    
    audioMusic.play();
    isClickBtnSong = false;
    // delete class play
    getBtnPlay.classList.remove("fa-circle-play");
    // add class pause
    getBtnPlay.classList.add("fa-circle-pause");
    audioMusic.volume = 0.5;
    // range song in setting sidebar
    getRangeVolumeSong.value = 50;
    getRangeVolumeSong.style.background = 'linear-gradient(90deg, #f3a952 50%, rgba(255,255,255,0.1) 50%)'       

    // method
    getRangeVolumeSong.addEventListener("mousemove", function(){
        var x = getRangeVolumeSong.value;
        var color = "linear-gradient(90deg, #f3a952 " + x + "%, rgba(255,255,255,0.1) " + x + "%)";
        getRangeVolumeSong.style.background = color;
        audioMusic.volume = x/100;
    })
    getRangeVolumeSong.addEventListener("click", function(){
        var x = getRangeVolumeSong.value;
        var color = "linear-gradient(90deg, #f3a952 " + x + "%, rgba(255,255,255,0.1) " + x + "%)";
        getRangeVolumeSong.style.background = color;
        audioMusic.volume = x/100;
    })
})

getBtnPrev.addEventListener("click", function(){
    // loadCurrentSong();
    currentSong--;
    if(isClickItemMusicSleepy == false && isClickItemMusicJazzy == true && isClickItemMusicChill == true){
        if(currentSong < 0){
            currentSong = songSleepy.length-1;
        }
        getItemMusicSleepy.click();
    }
    // load music jazzy
    if(isClickItemMusicSleepy == true && isClickItemMusicJazzy == false && isClickItemMusicChill == true){
        if(currentSong < 0){
            currentSong = songJazzy.length-1;
        }
        getItemMusicJazzy.click();
    }
    // load music chill
    if(isClickItemMusicSleepy == true && isClickItemMusicJazzy == true && isClickItemMusicChill == false){
        if(currentSong < 0){
            currentSong = songChill.length-1;
        }
        getItemMusicChill.click();
    }    
    
    audioMusic.play();
    isClickBtnSong = false;
    // delete class play
    getBtnPlay.classList.remove("fa-circle-play");
    // add class pause
    getBtnPlay.classList.add("fa-circle-pause");
    audioMusic.volume = 0.5;
    // range song in setting sidebar
    getRangeVolumeSong.value = 50;
    getRangeVolumeSong.style.background = 'linear-gradient(90deg, #f3a952 50%, rgba(255,255,255,0.1) 50%)';       

    // method
    getRangeVolumeSong.addEventListener("mousemove", function(){
        var x = getRangeVolumeSong.value;
        var color = "linear-gradient(90deg, #f3a952 " + x + "%, rgba(255,255,255,0.1) " + x + "%)";
        getRangeVolumeSong.style.background = color;
        audioMusic.volume = x/100;
    })
    getRangeVolumeSong.addEventListener("click", function(){
        var x = getRangeVolumeSong.value;
        var color = "linear-gradient(90deg, #f3a952 " + x + "%, rgba(255,255,255,0.1) " + x + "%)";
        getRangeVolumeSong.style.background = color;
        audioMusic.volume = x/100;
    })  
})

getBtnMuteVolumeSong.addEventListener("click", function(){
    audioMusic.volume = 0;
    getRangeVolumeSong.value = 0;
    getRangeVolumeSong.style.background = 'linear-gradient(90deg, #f3a952 0%, rgba(255,255,255,0.1) 0%)'
})

getBtnMaxVolumeSong.addEventListener("click", function(){
    audioMusic.volume = 1;
    getRangeVolumeSong.value = 100;
    getRangeVolumeSong.style.background = 'linear-gradient(90deg, #f3a952 100%, rgba(255,255,255,0.1) 100%)'
})
