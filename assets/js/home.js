
// sidebar mix mode
var sbVolumeRange = document.querySelector(".volume__Range");
var sbRangeKeyboard = document.querySelector(".keyBoard_range");
var sbRangeCityRain = document.querySelector(".cityRain_range");
var sbRangeCityTraffic = document.querySelector(".cityTraffic_range");
sbVolumeRange.addEventListener("mousemove", function(){
    var x = sbVolumeRange.value;
    var color = "linear-gradient(90deg, #f3a952 " + x + "%, #141414 " + x + "%)";
    sbVolumeRange.style.background = color;
})
sbRangeKeyboard.addEventListener("mousemove", function(){
    var x = sbRangeKeyboard.value;
    var color = "linear-gradient(90deg, #f3a952 " + x + "%, #141414 " + x + "%)";
    sbRangeKeyboard.style.background = color;
})
sbRangeCityRain.addEventListener("mousemove", function(){
    var x = sbRangeCityRain.value;
    var color = "linear-gradient(90deg, #f3a952 " + x + "%, #141414 " + x + "%)";
    sbRangeCityRain.style.background = color;
})
sbRangeCityTraffic.addEventListener("mousemove", function(){
    var x = sbRangeCityTraffic.value;
    var color = "linear-gradient(90deg, #f3a952 " + x + "%, #141414 " + x + "%)";
    sbRangeCityTraffic.style.background = color;
})

// home range
var homeRangeCityRain = document.querySelector(".cityRain__range");
var homeRangeCityTraffic = document.querySelector(".cityTraffic__range");
var homeRangeEnter = document.querySelector(".enter__range");

var audioFirst = document.querySelectorAll(".myAudio")[0];
var audioSecond = document.querySelectorAll(".myAudio")[1];
var audioThird = document.querySelectorAll(".myAudio")[2];
var audioFour = document.querySelectorAll(".myAudio")[3];

homeRangeCityRain.addEventListener("mousemove", function(){
    var x = homeRangeCityRain.value;
    var color = "linear-gradient(90deg, #f3a952 " + x + "%, rgba(255,255,255,0.1) " + x + "%)";
    homeRangeCityRain.style.background = color;
    homeRangeCityRain.style.background = color;
    // song rain
    // audioFirst.src = "./assets/audio/rain_forest.mp3";
    // audioFirst.volume = x + "%";
    // audioSecond.volume = x + "%";
    // audioThird.volume = x + "%";
    // console.log(audioFirst.volume);
})

homeRangeCityTraffic.addEventListener("mousemove", function(){
    var x = homeRangeCityTraffic.value;
    var color = "linear-gradient(90deg, #f3a952 " + x + "%, rgba(255,255,255,0.1) " + x + "%)";
    homeRangeCityTraffic.style.background = color;
    homeRangeCityTraffic.style.background = color;
    // console.log(color);
})

homeRangeEnter.addEventListener("mousemove", function(){
    var x = homeRangeEnter.value;
    var color = "linear-gradient(90deg, #f3a952 " + x + "%, rgba(255,255,255,0.1) " + x + "%)";
    homeRangeEnter.style.background = color;
    homeRangeEnter.style.background = color;
})

// change morning-evening
var btnChange = document.querySelector(".btnConvert");
var btnChangeInstore = document.querySelector(".btnConvert.inStore");
var dotBtnChange = document.querySelector(".btnConvert .dot");
var dotBtnChangeInstore = document.querySelector(".btnConvert.inStore .dot");

var bgVideoSunNoRain = document.querySelector(".bg .bg__vdSun");
var bgVideoNightNoRain = document.querySelector(".bg .bg__vdNight");
var bgVideoSunRain = document.querySelector(".bg .bg__vdSunRain");
var bgVideoNightRain = document.querySelector(".bg .bg__vdNightRain");
var isChangeSunNight = true;
btnChange.addEventListener("click", function(){
    if(isChangeSunNight){
        // ban dem k mua
        isChangeSunNight = false;
        if(isClickCityRain){            
            dotBtnChange.style.transform = "translateX(-100%)";
            btnChange.style.background = "rgba(255,255,255,0.1)";
            // instore set
            dotBtnChangeInstore.style.transform = "translateX(-100%)";
            btnChangeInstore.style.background = "rgba(255,255,255,0.1)";
            bgVideoSunNoRain.style.zIndex = 1;
            bgVideoNightNoRain.style.zIndex = 2;
            bgVideoSunRain.style.zIndex = 1;
            bgVideoNightRain.style.zIndex = 1;
            console.log("ban đêm k mưa");
            console.log("Mưa" + isClickCityRain)
            console.log("Ngày" + isChangeSunNight)
        }else{
            // ban dem mua
            dotBtnChange.style.transform = "translateX(-100%)";
            btnChange.style.background = "rgba(255,255,255,0.1)";
            // instore set
            dotBtnChangeInstore.style.transform = "translateX(-100%)";
            btnChangeInstore.style.background = "rgba(255,255,255,0.1)";
            bgVideoSunNoRain.style.zIndex = 1;
            bgVideoNightNoRain.style.zIndex = 1;
            bgVideoSunRain.style.zIndex = 1;
            bgVideoNightRain.style.zIndex = 2;
            console.log("ban đêm mưa");
            console.log("Mưa" + isClickCityRain)
            console.log("Ngày" + isChangeSunNight)
        }
    }else{
        // bann ngay ko mua
        isChangeSunNight = true;
        if(isClickCityRain){            
            dotBtnChange.style.transform = "translateX(0%)";
            btnChange.style.background = "#f1a851";
            // instore set
            dotBtnChangeInstore.style.transform = "translateX(0%)";
            btnChangeInstore.style.background = "#f1a851";
            bgVideoSunNoRain.style.zIndex = 2;
            bgVideoNightNoRain.style.zIndex = 1;
            bgVideoSunRain.style.zIndex = 1;
            bgVideoNightRain.style.zIndex = 1;
            console.log("ban ko ngày mưa");
            console.log("Mưa" + isClickCityRain)
            console.log("Ngày" + isChangeSunNight)
        }else{
            // ban ngay mua            
            dotBtnChange.style.transform = "translateX(0%)";
            btnChange.style.background = "#f1a851";
            // instore set
            dotBtnChangeInstore.style.transform = "translateX(0%)";
            btnChangeInstore.style.background = "#f1a851";
            bgVideoSunNoRain.style.zIndex = 1;
            bgVideoNightNoRain.style.zIndex = 1;
            bgVideoSunRain.style.zIndex = 2;
            bgVideoNightRain.style.zIndex = 1;
            console.log("ban ngày mưa");
            console.log("Mưa" + isClickCityRain)
            console.log("Ngày" + isChangeSunNight)
        }
    }
})

btnChangeInstore.addEventListener("click", function(){
    if(isChangeSunNight){
        // ban dem k mua
        isChangeSunNight = false;
        if(isClickCityRainInstore){            
            dotBtnChangeInstore.style.transform = "translateX(-100%)";
            btnChangeInstore.style.background = "rgba(255,255,255,0.1)";
            // out store
            dotBtnChange.style.transform = "translateX(-100%)";
            btnChange.style.background = "rgba(255,255,255,0.1)";
            bgVideoSunNoRain.style.zIndex = 1;
            bgVideoNightNoRain.style.zIndex = 1;
            bgVideoSunRain.style.zIndex = 1;
            bgVideoNightRain.style.zIndex = 1;
            console.log("ban đêm k mưa");
            console.log("Mưa" + isClickCityRainInstore)
            console.log("Ngày" + isChangeSunNight)

            // in store
            bgVideoSunNoRainInstore.style.zIndex = 1;
            bgVideoSunRainInstore.style.zIndex = 1;
            bgVideoNightNoRainInstore.style.zIndex = 2;
            bgVideoNightRainInstore.style.zIndex = 1;
        }else{
            // ban dem mua
            dotBtnChangeInstore.style.transform = "translateX(-100%)";
            btnChangeInstore.style.background = "rgba(255,255,255,0.1)";
            // out store
            dotBtnChange.style.transform = "translateX(-100%)";
            btnChange.style.background = "rgba(255,255,255,0.1)";
            bgVideoSunNoRain.style.zIndex = 1;
            bgVideoNightNoRain.style.zIndex = 1;
            bgVideoSunRain.style.zIndex = 1;
            bgVideoNightRain.style.zIndex = 1;
            console.log("ban đêm mưa");
            console.log("Mưa" + isClickCityRainInstore)
            console.log("Ngày" + isChangeSunNight)
            
            // in store
            bgVideoSunNoRainInstore.style.zIndex = 1;
            bgVideoSunRainInstore.style.zIndex = 1;
            bgVideoNightNoRainInstore.style.zIndex = 1;
            bgVideoNightRainInstore.style.zIndex = 2
        }
    }else{
        // bann ngay ko mua
        isChangeSunNight = true;
        if(isClickCityRainInstore){            
            dotBtnChangeInstore.style.transform = "translateX(0%)";
            btnChangeInstore.style.background = "#f1a851";
            // out store
            dotBtnChange.style.transform = "translateX(0%)";
            btnChange.style.background = "rgba(255,255,255,0.1)";
            bgVideoSunNoRain.style.zIndex = 1;
            bgVideoNightNoRain.style.zIndex = 1;
            bgVideoSunRain.style.zIndex = 1;
            bgVideoNightRain.style.zIndex = 1;
            console.log("ban ko ngày mưa");
            console.log("Mưa" + isClickCityRainInstore)
            console.log("Ngày" + isChangeSunNight)

            //in store
            bgVideoSunNoRainInstore.style.zIndex = 2;
            bgVideoSunRainInstore.style.zIndex = 1;
            bgVideoNightNoRainInstore.style.zIndex = 1;
            bgVideoNightRainInstore.style.zIndex = 1;
        }else{
            // ban ngay mua            
            dotBtnChangeInstore.style.transform = "translateX(0%)";
            btnChangeInstore.style.background = "#f1a851";
            // out store
            dotBtnChange.style.transform = "translateX(0%)";
            btnChange.style.background = "rgba(255,255,255,0.1)";
            bgVideoSunNoRain.style.zIndex = 1;
            bgVideoNightNoRain.style.zIndex = 1;
            bgVideoSunRain.style.zIndex = 1;
            bgVideoNightRain.style.zIndex = 1;
            console.log("ban ngày mưa");
            console.log("Mưa" + isClickCityRainInstore)
            console.log("Ngày" + isChangeSunNight)

            // instore
            bgVideoSunNoRainInstore.style.zIndex = 1;
            bgVideoSunRainInstore.style.zIndex = 2;
            bgVideoNightNoRainInstore.style.zIndex = 1;
            bgVideoNightRainInstore.style.zIndex = 1;
        }
    }
})


// open menu
var btnMenuHeader = document.querySelector(".listIcon .btnMenu");
var subMenuHeader = document.querySelector(".listIcon .subMenu");
var isCheckMenuHeader = false;
btnMenuHeader.addEventListener("click", function(){
    if(isCheckMenuHeader){
        isCheckMenuHeader = false;
        subMenuHeader.style.display = "block";
    }else{
        isCheckMenuHeader = true;
        subMenuHeader.style.display = "none";
    }
})

// full screen
var btnFullScreen = document.querySelector(".listIcon .btnFullScreen");
var objectFullScreen = document.querySelector("html");
var isFullScreen = true;
btnFullScreen.addEventListener("click", function(){
    if(isFullScreen){
        isFullScreen = false;
        objectFullScreen.requestFullscreen();
    }else{
        isFullScreen = true;
        document.exitFullscreen();
    }      
})

// body - dot out store
var getDotCityRain = document.querySelector(".cityRain__dot");
var getDotCityTraffic = document.querySelector(".cityTraffic__dot");
var getDotEnter = document.querySelector(".enter__dot");

var getSettingCityRain = document.querySelector(".cityRain__setting");
var getSettingCityTraffic = document.querySelector(".cityTraffic__setting");
var getSettingEnter = document.querySelector(".enter__setting");

var getRangeCityRain = document.querySelector(".cityRain__range");
var getRangeCityTraffic = document.querySelector(".cityTraffic__range");
var getRangeEnter = document.querySelector(".enter__range");

var isClickCityRain = true;
var isClickCityTraffic = true;
var isClickEnter = true;

// click dot => range show
getDotCityRain.addEventListener("click", function(){
    if(isClickCityRain){
        // console.log(isClickCityRain);
        // mua
        // set default
        isClickCityRain = false;
        audioFirst.src = "./assets/audio/rain_forest.mp3";
        audioFirst.volume = 0.5;
        getRangeCityRain.value = 50;
        getRangeCityRain.style.background = 'linear-gradient(90deg, #f3a952 50%, rgba(255,255,255,0.1) 50%)';
        soundRainRangeSetting.value = 50;
        soundRainRangeSetting.style.background = 'linear-gradient(90deg, #f3a952 50%, rgba(255,255,255,0.1) 50%)';
        getRangeCityRain.style.display = "block";
        // doi ban ngay co mua
        // ngay true dem false
        // bgVideoSunNoRain.src = "./assets/video/outStoreMorningRain.mp4";        
        if(isChangeSunNight){
            // ban ngay
            bgVideoSunNoRain.style.zIndex = 1;
            bgVideoNightNoRain.style.zIndex = 1;
            bgVideoSunRain.style.zIndex = 2;
            bgVideoNightRain.style.zIndex = 1;
        }else{
            // ban dem
            bgVideoSunNoRain.style.zIndex = 1;
            bgVideoNightNoRain.style.zIndex = 1;
            bgVideoSunRain.style.zIndex = 1;
            bgVideoNightRain.style.zIndex = 2;
        }     

        // method
        getSettingCityRain.addEventListener("mouseout", function(){
            if(audioFirst.volume > 0){
                // isClickCityRain = true;
                if(isClickCityRain == false){
                    getRangeCityRain.style.display = "block";                  
                }                             
            }else{
                isClickCityRain = true;
                getRangeCityRain.style.display = "none";
                // dung fixx 1
                // doi tuong hien tai
                // => ngay = true, dem = false : mua = true, k mua = false                    
                // nut thay doi ban ngay/dem
                // dem = false ; ko mua = true; ngay = true; mua = false
                // con loi (luc troi mua giảm âm thanh chuyên buôi sáng => tối => lỗi)            
                // fix thanh cong
                if(isChangeSunNight){
                    // ban ngay (ban cu)
                    bgVideoSunNoRain.style.zIndex = 2;
                    bgVideoNightNoRain.style.zIndex = 1;
                    bgVideoSunRain.style.zIndex = 1;
                    bgVideoNightRain.style.zIndex = 1;
                    console.log("ban ngày");
                    console.log("Mưa" + isClickCityRain)
                    console.log("Ngày" + isChangeSunNight)
                }else{                                        
                    // ban dem (ban cu)
                    bgVideoSunNoRain.style.zIndex = 1;
                    bgVideoNightNoRain.style.zIndex = 2;
                    bgVideoSunRain.style.zIndex = 1;
                    bgVideoNightRain.style.zIndex = 1;
                    console.log("ban dem");
                    console.log("Mưa" + isClickCityRain)
                    console.log("Ngày" + isChangeSunNight)
                }                
            }
        })
        getDotCityRain.addEventListener("mouseout", function(){
            if(audioFirst.volume > 0){
                if(isClickCityRain == false){
                    getRangeCityRain.style.display = "block";                  
                }
            }else{
                getRangeCityRain.style.display = "none";
                if(isChangeSunNight){
                    // ban ngay
                    bgVideoSunNoRain.style.zIndex = 2;
                    bgVideoNightNoRain.style.zIndex = 1;
                    bgVideoSunRain.style.zIndex = 1;
                    bgVideoNightRain.style.zIndex = 1;
                    if(isClickCityRain){
                        isClickCityRain = false;
                    }else{
                        isClickCityRain = true;
                    }
                }else{
                    // ban dem
                    bgVideoSunNoRain.style.zIndex = 1;
                    bgVideoNightNoRain.style.zIndex = 2;
                    bgVideoSunRain.style.zIndex = 1;
                    bgVideoNightRain.style.zIndex = 1;
                    if(isClickCityRain){
                        isClickCityRain = false;
                    }else{
                        isClickCityRain = true;
                    }
                }                                                                   
            }
        })        
        getRangeCityRain.addEventListener("mousemove", function(){
            // load range out store
            var x = getRangeCityRain.value;
            var color = "linear-gradient(90deg, #f3a952 " + x + "%, rgba(255,255,255,0.1) " + x + "%)";
            getRangeCityRain.style.background = color;
            audioFirst.volume = x/100;
            // console.log(audioFirst.volume);
            
            // load range in store
            getRangeCityRainInStore.style.background = color;
            getRangeCityRainInStore.value = x;

            // load in setting
            // in setting
            soundRainRangeSetting.style.background = color;
            soundRainRangeSetting.value = x;
        })                         
    }else{
        // console.log(isClickCityRain);
        // ko mua
        isClickCityRain = true;
        getRangeCityRain.style.display = "none";
        audioFirst.src = "";        
        getSettingCityRain.addEventListener("mouseout", function(){
            if(audioFirst.volume > 0){
                // getRangeCityRain.style.display = "block";                               
            }else{
                getRangeCityRain.style.display = "none";
                if(isChangeSunNight){
                    // ban ngay (ban cu)
                    bgVideoSunNoRain.style.zIndex = 2;
                    bgVideoNightNoRain.style.zIndex = 1;
                    bgVideoSunRain.style.zIndex = 1;
                    bgVideoNightRain.style.zIndex = 1;
                    if(isClickCityRain){
                        isClickCityRain = false;
                    }else{
                        isClickCityRain = true;
                    }
                    console.log("ban ngày");
                    console.log("Mưa" + isClickCityRain)
                    console.log("Ngày" + isChangeSunNight)
                }else{                                        
                    // ban dem (ban cu)
                    bgVideoSunNoRain.style.zIndex = 1;
                    bgVideoNightNoRain.style.zIndex = 2;
                    bgVideoSunRain.style.zIndex = 1;
                    bgVideoNightRain.style.zIndex = 1;
                    if(isClickCityRain){
                        isClickCityRain = false;
                    }else{
                        isClickCityRain = true;
                    }
                    console.log("ban dem");
                    console.log("Mưa" + isClickCityRain)
                    console.log("Ngày" + isChangeSunNight)
                }                
            }
        })
        getDotCityRain.addEventListener("mouseout", function(){
            getRangeCityRain.style.display = "none";
            if(audioFirst.volume > 0){
                // getRangeCityRain.style.display = "block";                   
            }else{
                getRangeCityRain.style.display = "none";
                                                                                   
            }
        })        
        getRangeCityRain.addEventListener("mousemove", function(){
            var x = getRangeCityRain.value;
            var color = "linear-gradient(90deg, #f3a952 " + x + "%, rgba(255,255,255,0.1) " + x + "%)";
            getRangeCityRain.style.background = color;
            audioFirst.volume = x/100;
            // console.log(audioFirst.volume);                      
        })
        if(isChangeSunNight){
            // ban ngay
            bgVideoSunNoRain.style.zIndex = 2;
            bgVideoNightNoRain.style.zIndex = 1;
            bgVideoSunRain.style.zIndex = 1;
            bgVideoNightRain.style.zIndex = 1;
        }else{
            // ban dem
            bgVideoSunNoRain.style.zIndex = 1;
            bgVideoNightNoRain.style.zIndex = 2;
            bgVideoSunRain.style.zIndex = 1;
            bgVideoNightRain.style.zIndex = 1;
        }         
    }
})


// traffic
getDotCityTraffic.addEventListener("click", function(){
    if(isClickCityTraffic){
        isClickCityTraffic = false;
        getRangeCityTraffic.style.display = "block";
        audioSecond.src = "./assets/audio/city_traffic.mp3";
        audioSecond.volume = 0.5;
        getRangeCityTraffic.value = 50;
        getRangeCityTraffic.style.background = 'linear-gradient(90deg, #f3a952 50%, rgba(255,255,255,0.1) 50%)';
        soundCityTrafficRangeSetting.value = 50;
        soundCityTrafficRangeSetting.style.background = 'linear-gradient(90deg, #f3a952 50%, rgba(255,255,255,0.1) 50%)';        
        getSettingCityTraffic.addEventListener("mouseout", function(){
            if(audioSecond.volume > 0){
                getRangeCityTraffic.style.display = "block";                   
            }else{
                getRangeCityTraffic.style.display = "none";                                                                                   
            }
        })
        getDotCityTraffic.addEventListener("mouseout", function(){
            if(audioSecond.volume > 0){
                getRangeCityTraffic.style.display = "block";                   
            }else{
                getRangeCityTraffic.style.display = "none";                                                                                   
            }
        })
        getRangeCityTraffic.addEventListener("mousemove", function(){
            var x = getRangeCityTraffic.value;
            var color = "linear-gradient(90deg, #f3a952 " + x + "%, rgba(255,255,255,0.1) " + x + "%)";
            getRangeCityTraffic.style.background = color;
            audioSecond.volume = x/100;
            // in setting
            soundCityTrafficRangeSetting.style.background = color;
            soundCityTrafficRangeSetting.value = x; 
        })
    }else{
        isClickCityTraffic = true;
        getRangeCityTraffic.style.display = "none";
        audioSecond.src = "";
        getSettingCityTraffic.addEventListener("mouseout", function(){
            getRangeCityTraffic.style.display = "none";
        })
        getDotCityTraffic.addEventListener("mouseout", function(){
            getRangeCityTraffic.style.display = "none";
        })         
    }
})

// INSTORE
// video in store
var bgVideoSunNoRainInstore = document.querySelector(".bg .bg__vdInStoreSunNoRain");
var bgVideoSunRainInstore = document.querySelector(".bg .bg__vdInStoreSunRain");
var bgVideoNightNoRainInstore = document.querySelector(".bg .bg__vdInStoreNightNoRain");
var bgVideoNightRainInstore = document.querySelector(".bg .bg__vdInStoreNightRain");

// block dot out store
var getCityRainOutStore = document.querySelector(".cityRain");
var getCityTrafficOutStore = document.querySelector(".cityTraffic");
var getEnterOutStore = document.querySelector(".enter");

// block dot in store 
var getCityRainInStore = document.querySelector(".cityRain.instore");
var getKeyboardInStore = document.querySelector(".cityTraffic.instore");
var getGoOutInStore = document.querySelector(".enter.instore");
getDotEnter.addEventListener("click", function(){
    // dem = false ; ko mua = true; ngay = true; mua = false
    // set default
    // tat tieng xe cọ :V
    audioSecond.src = "";
    getRangeCityTraffic.style.display = "none";
    
    if(isClickCityRain == true && isChangeSunNight == true){
        isClickCityRainInstore = true;
        bgVideoSunNoRainInstore.style.zIndex = 2;
        bgVideoSunRainInstore.style.zIndex = 1;
        bgVideoNightNoRainInstore.style.zIndex = 1;
        bgVideoNightRainInstore.style.zIndex = 1;
    }else if(isClickCityRain == true && isChangeSunNight == false){
        isClickCityRainInstore = true;
        bgVideoSunNoRainInstore.style.zIndex = 1;
        bgVideoSunRainInstore.style.zIndex = 1;
        bgVideoNightNoRainInstore.style.zIndex = 2;
        bgVideoNightRainInstore.style.zIndex = 1;
    }else if(isClickCityRain == false && isChangeSunNight == false){
        isClickCityRainInstore = false;
        bgVideoSunNoRainInstore.style.zIndex = 1;
        bgVideoSunRainInstore.style.zIndex = 1;
        bgVideoNightNoRainInstore.style.zIndex = 1;
        bgVideoNightRainInstore.style.zIndex = 2;
        getRangeCityRainInStore.style.display = "block";
    }else{
        isClickCityRainInstore = false;
        bgVideoSunNoRainInstore.style.zIndex = 1;
        bgVideoSunRainInstore.style.zIndex = 2;
        bgVideoNightNoRainInstore.style.zIndex = 1;
        bgVideoNightRainInstore.style.zIndex = 1;
        getRangeCityRainInStore.style.display = "block";
    }

    // btn change ngay/dem
    btnChange.style.display = "none";
    btnChangeInstore.style.display = "block";

    // block out store
    getCityRainOutStore.style.display = "none";
    getCityTrafficOutStore.style.display = "none";
    getEnterOutStore.style.display = "none";
    // block in store
    getCityRainInStore.style.display = "block";
    getKeyboardInStore.style.display = "block";
    getGoOutInStore.style.display = "block";
        
    // out store
    bgVideoSunNoRain.style.zIndex = 1;
    bgVideoNightNoRain.style.zIndex = 1;
    bgVideoSunRain.style.zIndex = 1;
    bgVideoNightRain.style.zIndex = 1;

    console.log("ngày " + isChangeSunNight);
    console.log("ngày " + isClickCityRain);

    // rain kéo xuống trong instore
    getRangeCityRainInStore.addEventListener("mousemove", function(){
        var x = getRangeCityRainInStore.value;
        var color = "linear-gradient(90deg, #f3a952 " + x + "%, rgba(255,255,255,0.1) " + x + "%)";
        getRangeCityRainInStore.style.background = color;
        audioFirst.volume = x/100;
        // console.log(audioFirst.volume);                      
    })

    //hover dot instore
    getDotCityRainInStore.addEventListener("mouseout", function(){
        if(audioFirst.volume > 0){
            // getRangeCityRainInStore.style.display = "block";
            if(isClickCityRainInstore == false){
                getRangeCityRainInStore.style.display = "block";                  
            }                    
        }else{
            getRangeCityRainInStore.style.display = "none";
            if(isChangeSunNight){
                // ban ngay
                bgVideoSunNoRain.style.zIndex = 1;
                bgVideoNightNoRain.style.zIndex = 1;
                bgVideoSunRain.style.zIndex = 1;
                bgVideoNightRain.style.zIndex = 1;

                // instore
                bgVideoSunNoRainInstore.style.zIndex = 2;
                bgVideoSunRainInstore.style.zIndex = 1;
                bgVideoNightNoRainInstore.style.zIndex = 1;
                bgVideoNightRainInstore.style.zIndex = 1;
                if(isClickCityRainInstore){
                    isClickCityRainInstore = false;
                }else{
                    isClickCityRainInstore = true;
                }
            }else{
                // ban dem
                bgVideoSunNoRain.style.zIndex = 1;
                bgVideoNightNoRain.style.zIndex = 1;
                bgVideoSunRain.style.zIndex = 1;
                bgVideoNightRain.style.zIndex = 1;

                // instore
                bgVideoSunNoRainInstore.style.zIndex = 1;
                bgVideoSunRainInstore.style.zIndex = 1;
                bgVideoNightNoRainInstore.style.zIndex = 2;
                bgVideoNightRainInstore.style.zIndex = 1;

                if(isClickCityRainInstore){
                    isClickCityRainInstore = false;
                }else{
                    isClickCityRainInstore = true;
                }
            }                                                                   
        }
    })  

})

var getDotCityRainInStore = document.querySelector(".cityRain__dot.instore");
var getDotKeyboardInStore = document.querySelector(".cityTraffic__dot.instore");
var getDotGoOut = document.querySelector(".enter__dot.instore");

var getSettingCityRainInStore = document.querySelector(".cityRain__setting.instore");
var getSettingKeyboardInStore = document.querySelector(".cityTraffic__setting.instore");
var getSettingGoOut = document.querySelector(".enter__setting.instore");

var getRangeCityRainInStore = document.querySelector(".cityRain.instore .cityRain__range");
var getRangeKeyboardInStore = document.querySelector(".cityTraffic.instore .cityTraffic__range");
var getRangeGoOut = document.querySelector(".enter.instore .enter__range");

var isClickCityRainInstore = true;
var isClickKeyboard = true;
var isClickGoOut = true;

// click dot instore => range show
getDotCityRainInStore.addEventListener("click", function clickDotCityRainInStore(){    
    if(isClickCityRainInstore){
        // mua
        // set default
        isClickCityRainInstore = false;
        audioFirst.src = "./assets/audio/rain_forest.mp3";
        audioFirst.volume = 0.5;
        getRangeCityRainInStore.value = 50;
        getRangeCityRainInStore.style.background = 'linear-gradient(90deg, #f3a952 50%, rgba(255,255,255,0.1) 50%)';
        soundRainRangeSetting.value = 50;
        soundRainRangeSetting.style.background = 'linear-gradient(90deg, #f3a952 50%, rgba(255,255,255,0.1) 50%)';
        getRangeCityRainInStore.style.display = "block";
        // doi ban ngay co mua
        // ngay true dem false
        // bgVideoSunNoRain.src = "./assets/video/outStoreMorningRain.mp4";        
        if(isChangeSunNight){
            // ban ngay
            // out store
            bgVideoSunNoRain.style.zIndex = 1;
            bgVideoNightNoRain.style.zIndex = 1;
            bgVideoSunRain.style.zIndex = 1;
            bgVideoNightRain.style.zIndex = 1;

            // instore
            bgVideoSunNoRainInstore.style.zIndex = 1;
            bgVideoSunRainInstore.style.zIndex = 2;
            bgVideoNightNoRainInstore.style.zIndex = 1;
            bgVideoNightRainInstore.style.zIndex = 1;
        }else{
            // ban dem
            // out store
            bgVideoSunNoRain.style.zIndex = 1;
            bgVideoNightNoRain.style.zIndex = 1;
            bgVideoSunRain.style.zIndex = 1;
            bgVideoNightRain.style.zIndex = 1;

            // instore
            bgVideoSunNoRainInstore.style.zIndex = 1;
            bgVideoSunRainInstore.style.zIndex = 1;
            bgVideoNightNoRainInstore.style.zIndex = 1;
            bgVideoNightRainInstore.style.zIndex = 2;
        }     

        // method
        getSettingCityRainInStore.addEventListener("mouseout", function(){
            if(audioFirst.volume > 0){
                // isClickCityRainInstore = true;
                // getRangeCityRainInStore.style.display = "block";
                if(isClickCityRainInstore == false){
                    getRangeCityRainInStore.style.display = "block";                  
                }                               
            }else{
                isClickCityRainInstore = true;
                getRangeCityRainInStore.style.display = "none";
                // dung fixx 1
                // doi tuong hien tai
                // => ngay = true, dem = false : mua = true, k mua = false                    
                // nut thay doi ban ngay/dem
                // dem = false ; ko mua = true; ngay = true; mua = false
                // con loi (luc troi mua giảm âm thanh chuyên buôi sáng => tối => lỗi)            
                // fix thanh cong
                if(isChangeSunNight){
                    // ban ngay (ban cu)
                    bgVideoSunNoRain.style.zIndex = 1;
                    bgVideoNightNoRain.style.zIndex = 1;
                    bgVideoSunRain.style.zIndex = 1;
                    bgVideoNightRain.style.zIndex = 1;
                    
                    // instore
                    bgVideoSunNoRainInstore.style.zIndex = 2;
                    bgVideoSunRainInstore.style.zIndex = 1;
                    bgVideoNightNoRainInstore.style.zIndex = 1;
                    bgVideoNightRainInstore.style.zIndex = 1;
                    console.log("ban ngày");
                    console.log("Mưa" + isClickCityRainInstore)
                    console.log("Ngày" + isChangeSunNight)
                }else{                                        
                    // ban dem (ban cu)
                    bgVideoSunNoRain.style.zIndex = 1;
                    bgVideoNightNoRain.style.zIndex = 1;
                    bgVideoSunRain.style.zIndex = 1;
                    bgVideoNightRain.style.zIndex = 1;
                    
                    // instore
                    bgVideoSunNoRainInstore.style.zIndex = 1;
                    bgVideoSunRainInstore.style.zIndex = 1;
                    bgVideoNightNoRainInstore.style.zIndex = 2;
                    bgVideoNightRainInstore.style.zIndex = 1;

                    console.log("ban dem");
                    console.log("Mưa" + isClickCityRainInstore)
                    console.log("Ngày" + isChangeSunNight)
                }                
            }
        })
        getDotCityRainInStore.addEventListener("mouseout", function(){
            if(audioFirst.volume > 0){
                // getRangeCityRainInStore.style.display = "block";
                if(isClickCityRainInstore == false){
                    getRangeCityRainInStore.style.display = "block";                  
                }                    
            }else{
                getRangeCityRainInStore.style.display = "none";
                if(isChangeSunNight){
                    // ban ngay
                    bgVideoSunNoRain.style.zIndex = 1;
                    bgVideoNightNoRain.style.zIndex = 1;
                    bgVideoSunRain.style.zIndex = 1;
                    bgVideoNightRain.style.zIndex = 1;

                    // instore
                    bgVideoSunNoRainInstore.style.zIndex = 2;
                    bgVideoSunRainInstore.style.zIndex = 1;
                    bgVideoNightNoRainInstore.style.zIndex = 1;
                    bgVideoNightRainInstore.style.zIndex = 1;
                    if(isClickCityRainInstore){
                        isClickCityRainInstore = false;
                    }else{
                        isClickCityRainInstore = true;
                    }
                }else{
                    // ban dem
                    bgVideoSunNoRain.style.zIndex = 1;
                    bgVideoNightNoRain.style.zIndex = 1;
                    bgVideoSunRain.style.zIndex = 1;
                    bgVideoNightRain.style.zIndex = 1;

                    // instore
                    bgVideoSunNoRainInstore.style.zIndex = 1;
                    bgVideoSunRainInstore.style.zIndex = 1;
                    bgVideoNightNoRainInstore.style.zIndex = 2;
                    bgVideoNightRainInstore.style.zIndex = 1;

                    if(isClickCityRainInstore){
                        isClickCityRainInstore = false;
                    }else{
                        isClickCityRainInstore = true;
                    }
                }                                                                   
            }
        })        
        getRangeCityRainInStore.addEventListener("mousemove", function(){
            var x = getRangeCityRainInStore.value;
            var color = "linear-gradient(90deg, #f3a952 " + x + "%, rgba(255,255,255,0.1) " + x + "%)";
            getRangeCityRainInStore.style.background = color;
            audioFirst.volume = x/100;
            // console.log(audioFirst.volume);
            
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
        audioFirst.src = "";        
        getSettingCityRainInStore.addEventListener("mouseout", function(){
            if(audioFirst.volume > 0){
                // getRangeCityRainInStore.style.display = "block";                               
            }else{
                getRangeCityRainInStore.style.display = "none";
                if(isChangeSunNight){
                    // ban ngay (ban cu)
                    bgVideoSunNoRain.style.zIndex = 1;
                    bgVideoNightNoRain.style.zIndex = 1;
                    bgVideoSunRain.style.zIndex = 1;
                    bgVideoNightRain.style.zIndex = 1;

                    // instore
                    bgVideoSunNoRainInstore.style.zIndex = 2;
                    bgVideoSunRainInstore.style.zIndex = 1;
                    bgVideoNightNoRainInstore.style.zIndex = 1;
                    bgVideoNightRainInstore.style.zIndex = 1;
                    if(isClickCityRainInstore){
                        isClickCityRainInstore = false;
                    }else{
                        isClickCityRainInstore = true;
                    }
                    console.log("ban ngày");
                    console.log("Mưa" + isClickCityRainInstore)
                    console.log("Ngày" + isChangeSunNight)
                }else{                                        
                    // ban dem (ban cu)
                    bgVideoSunNoRain.style.zIndex = 1;
                    bgVideoNightNoRain.style.zIndex = 1;
                    bgVideoSunRain.style.zIndex = 1;
                    bgVideoNightRain.style.zIndex = 1;

                    // instore
                    bgVideoSunNoRainInstore.style.zIndex = 1;
                    bgVideoSunRainInstore.style.zIndex = 1;
                    bgVideoNightNoRainInstore.style.zIndex = 2;
                    bgVideoNightRainInstore.style.zIndex = 1;
                    if(isClickCityRainInstore){
                        isClickCityRainInstore = false;
                    }else{
                        isClickCityRainInstore = true;
                    }
                    console.log("ban dem");
                    console.log("Mưa" + isClickCityRainInstore)
                    console.log("Ngày" + isChangeSunNight)
                }                
            }
        })
        getDotCityRainInStore.addEventListener("mouseout", function(){
            getRangeCityRainInStore.style.display = "none";
            if(audioFirst.volume > 0){
                // getRangeCityRainInStore.style.display = "block";                   
            }else{
                getRangeCityRainInStore.style.display = "none";
                                                                                   
            }
        })        
        getRangeCityRainInStore.addEventListener("mousemove", function(){
            var x = getRangeCityRainInStore.value;
            var color = "linear-gradient(90deg, #f3a952 " + x + "%, rgba(255,255,255,0.1) " + x + "%)";
            getRangeCityRainInStore.style.background = color;
            audioFirst.volume = x/100;
            // console.log(audioFirst.volume);                      
        })
        if(isChangeSunNight){
            // ban ngay
            bgVideoSunNoRain.style.zIndex = 1;
            bgVideoNightNoRain.style.zIndex = 1;
            bgVideoSunRain.style.zIndex = 1;
            bgVideoNightRain.style.zIndex = 1;

            // instore
            bgVideoSunNoRainInstore.style.zIndex = 2;
            bgVideoSunRainInstore.style.zIndex = 1;
            bgVideoNightNoRainInstore.style.zIndex = 1;
            bgVideoNightRainInstore.style.zIndex = 1;
        }else{
            // ban dem
            bgVideoSunNoRain.style.zIndex = 1;
            bgVideoNightNoRain.style.zIndex = 2;
            bgVideoSunRain.style.zIndex = 1;
            bgVideoNightRain.style.zIndex = 1;

            // instore
            bgVideoSunNoRainInstore.style.zIndex = 1;
            bgVideoSunRainInstore.style.zIndex = 1;
            bgVideoNightNoRainInstore.style.zIndex = 2;
            bgVideoNightRainInstore.style.zIndex = 1;
        }         
    }
})

// keyboard
getDotKeyboardInStore.addEventListener("click", function(){
    if(isClickKeyboard){
        isClickKeyboard = false;
        getRangeKeyboardInStore.style.display = "block";
        audioFour.src = "./assets/audio/keyboard.mp3";
        audioFour.volume = 0.5;
        getRangeKeyboardInStore.value = 50;
        getRangeKeyboardInStore.style.background = 'linear-gradient(90deg, #f3a952 50%, rgba(255,255,255,0.1) 50%)';
        soundKeyboardRangeSetting.value = 50;
        soundKeyboardRangeSetting.style.background = 'linear-gradient(90deg, #f3a952 50%, rgba(255,255,255,0.1) 50%)';        
        getSettingKeyboardInStore.addEventListener("mouseout", function(){
            if(audioFour.volume > 0){
                getRangeKeyboardInStore.style.display = "block";                   
            }else{
                getRangeKeyboardInStore.style.display = "none";                                                                                   
            }
        })
        getDotKeyboardInStore.addEventListener("mouseout", function(){
            if(audioFour.volume > 0){
                getRangeKeyboardInStore.style.display = "block";                   
            }else{
                getRangeKeyboardInStore.style.display = "none";                                                                                   
            }
        })
        getRangeKeyboardInStore.addEventListener("mousemove", function(){
            var x = getRangeKeyboardInStore.value;
            var color = "linear-gradient(90deg, #f3a952 " + x + "%, rgba(255,255,255,0.1) " + x + "%)";
            getRangeKeyboardInStore.style.background = color;
            audioFour.volume = x/100;

            soundKeyboardRangeSetting.style.background = color;
            soundKeyboardRangeSetting.value = x;            
        })
    }else{
        isClickKeyboard = true;
        getRangeKeyboardInStore.style.display = "none";
        soundKeyboardRangeSetting.style.background = "linear-gradient(90deg, #f3a952 0%, rgba(255,255,255,0.1) 0%)";
        soundKeyboardRangeSetting.value = 0;
        audioFour.src = "";
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
    audioFour.src = "";
    getRangeKeyboardInStore.style.display = "none";
    if(isClickCityRainInstore == true && isChangeSunNight == true){
        // out store
        bgVideoSunNoRain.style.zIndex = 2;
        bgVideoNightNoRain.style.zIndex = 1;
        bgVideoSunRain.style.zIndex = 1;
        bgVideoNightRain.style.zIndex = 1;
    }else if(isClickCityRainInstore == true && isChangeSunNight == false){
        // out store
        bgVideoSunNoRain.style.zIndex = 1;
        bgVideoNightNoRain.style.zIndex = 2;
        bgVideoSunRain.style.zIndex = 1;
        bgVideoNightRain.style.zIndex = 1;
    }else if(isClickCityRainInstore == false && isChangeSunNight == false){
        // out store
        bgVideoSunNoRain.style.zIndex = 1;
        bgVideoNightNoRain.style.zIndex = 1;
        bgVideoSunRain.style.zIndex = 1;
        bgVideoNightRain.style.zIndex = 2;
        getRangeCityRain.style.display = "block";
    }else{
        // out store
        bgVideoSunNoRain.style.zIndex = 1;
        bgVideoNightNoRain.style.zIndex = 1;
        bgVideoSunRain.style.zIndex = 2;
        bgVideoNightRain.style.zIndex = 1;
        getRangeCityRain.style.display = "block";
    }

    // btn change ngay/dem
    btnChange.style.display = "block";
    btnChangeInstore.style.display = "none";

    // block out store
    getCityRainOutStore.style.display = "block";
    getCityTrafficOutStore.style.display = "block";
    getEnterOutStore.style.display = "block";
    // block in store
    getCityRainInStore.style.display = "none";
    getKeyboardInStore.style.display = "none";
    getGoOutInStore.style.display = "none";
            
    // instore
    bgVideoSunNoRainInstore.style.zIndex = 1;
    bgVideoSunRainInstore.style.zIndex = 1;
    bgVideoNightNoRainInstore.style.zIndex = 1;
    bgVideoNightRainInstore.style.zIndex = 1;
    
    // load range out store
    var x = getRangeCityRainInStore.value;
    var color = "linear-gradient(90deg, #f3a952 " + x + "%, rgba(255,255,255,0.1) " + x + "%)";
    getRangeCityRain.style.background = color;
    getRangeCityRain.value = x;

    // hover dot out store
    getDotCityRain.addEventListener("mouseout", function(){
        if(audioFirst.volume > 0){
            if(isClickCityRain == false){
                getRangeCityRain.style.display = "block";                  
            }
        }else{
            getRangeCityRain.style.display = "none";
            if(isChangeSunNight){
                // ban ngay
                bgVideoSunNoRain.style.zIndex = 2;
                bgVideoNightNoRain.style.zIndex = 1;
                bgVideoSunRain.style.zIndex = 1;
                bgVideoNightRain.style.zIndex = 1;
                if(isClickCityRain){
                    isClickCityRain = false;
                }else{
                    isClickCityRain = true;
                }
            }else{
                // ban dem
                bgVideoSunNoRain.style.zIndex = 1;
                bgVideoNightNoRain.style.zIndex = 2;
                bgVideoSunRain.style.zIndex = 1;
                bgVideoNightRain.style.zIndex = 1;
                if(isClickCityRain){
                    isClickCityRain = false;
                }else{
                    isClickCityRain = true;
                }
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

    // load instore
    // bgVideoSunNoRain.style.zIndex = 1;
    // bgVideoNightNoRain.style.zIndex = 1;
    // bgVideoSunRain.style.zIndex = 1;
    // bgVideoNightRain.style.zIndex = 1;

    // // load outstore
    bgVideoSunNoRainInstore.style.zIndex = 1;
    bgVideoSunRainInstore.style.zIndex = 1;
    bgVideoNightNoRainInstore.style.zIndex = 1;
    bgVideoNightRainInstore.style.zIndex = 1;
    
})

// keyboard setting sound
soundKeyboardRangeSetting.addEventListener("click", function(){
    audioFour.src = "./assets/audio/keyboard.mp3";
    audioFour.volume = 0;
})
soundKeyboardRangeSetting.addEventListener("mousemove", function(){
    if(soundKeyboardRangeSetting.value > 0){
        console.log(soundKeyboardRangeSetting.value);
        isClickKeyboard = false;
        getRangeKeyboardInStore.style.display = "block";        
        var x = soundKeyboardRangeSetting.value;
        var color = "linear-gradient(90deg, #f3a952 " + x + "%, rgba(255,255,255,0.1) " + x + "%)";
        soundKeyboardRangeSetting.style.background = color;
        audioFour.volume = x/100;
        getRangeKeyboardInStore.style.background = color;
        getRangeKeyboardInStore.value = x;
        
        getRangeKeyboardInStore.addEventListener("mousemove", function(){
            var x = getRangeKeyboardInStore.value;
            var color = "linear-gradient(90deg, #f3a952 " + x + "%, rgba(255,255,255,0.1) " + x + "%)";
            getRangeKeyboardInStore.style.background = color;
            audioFour.volume = x/100;

            soundKeyboardRangeSetting.style.background = color;
            soundKeyboardRangeSetting.value = x;            
        })
    }else{
        isClickKeyboard = true;
        console.log(soundKeyboardRangeSetting.value);
        getRangeKeyboardInStore.style.display = "none";
        soundKeyboardRangeSetting.style.background = "linear-gradient(90deg, #f3a952 0%, rgba(255,255,255,0.1) 0%)";
        soundKeyboardRangeSetting.value = 0;
        audioFour.src = "";
    }
})

// traffic setting sound
soundCityTrafficRangeSetting.addEventListener("click", function(){
    audioSecond.src = "./assets/audio/city_traffic.mp3";
    audioSecond.volume = 0;    
})
soundCityTrafficRangeSetting.addEventListener("mousemove", function(){
    // soundCityTrafficRangeSetting.value = 0;
    if(soundCityTrafficRangeSetting.value > 0){
        console.log(soundCityTrafficRangeSetting.value);
        isClickCityTraffic = false;
        getRangeCityTraffic.style.display = "block";        
        var x = soundCityTrafficRangeSetting.value;
        var color = "linear-gradient(90deg, #f3a952 " + x + "%, rgba(255,255,255,0.1) " + x + "%)";
        soundCityTrafficRangeSetting.style.background = color;
        audioSecond.volume = x/100;
        getRangeCityTraffic.style.background = color;
        getRangeCityTraffic.value = x;
        
        getRangeCityTraffic.addEventListener("mousemove", function(){
            var x = getRangeCityTraffic.value;
            var color = "linear-gradient(90deg, #f3a952 " + x + "%, rgba(255,255,255,0.1) " + x + "%)";
            getRangeCityTraffic.style.background = color;
            audioSecond.volume = x/100;
            // in setting
            soundCityTrafficRangeSetting.style.background = color;
            soundCityTrafficRangeSetting.value = x; 
        })
    }else{
        isClickCityTraffic = true;
        console.log(soundCityTrafficRangeSetting.value);
        getRangeCityTraffic.style.display = "none";
        soundCityTrafficRangeSetting.style.background = "linear-gradient(90deg, #f3a952 0%, rgba(255,255,255,0.1) 0%)";
        soundCityTrafficRangeSetting.value = 0;
        audioSecond.src = "";
    }
})

// rain setting sound
soundRainRangeSetting.addEventListener("click", function(){
    audioFirst.src = "./assets/audio/rain_forest.mp3";
    audioFirst.volume = 0;
})
soundRainRangeSetting.addEventListener("mousemove", function(){
    if(bgVideoSunNoRain.style.zIndex == 1 && bgVideoNightNoRain.style.zIndex == 1 && bgVideoSunRain.style.zIndex == 1 && bgVideoNightRain.style.zIndex == 1){
        // trong cua hang
        if(soundRainRangeSetting.value > 0){
            // troi mua
            isClickCityRainInstore = false;
            getRangeCityRainInStore.style.display = "block";        
            var x = soundRainRangeSetting.value;
            var color = "linear-gradient(90deg, #f3a952 " + x + "%, rgba(255,255,255,0.1) " + x + "%)";
            soundRainRangeSetting.style.background = color;
            audioFirst.volume = x/100;
            getRangeCityRainInStore.style.background = color;
            getRangeCityRainInStore.value = x;        
            getRangeCityRainInStore.addEventListener("mousemove", function(){
                var x = getRangeCityRainInStore.value;
                var color = "linear-gradient(90deg, #f3a952 " + x + "%, rgba(255,255,255,0.1) " + x + "%)";
                getRangeCityRainInStore.style.background = color;
                audioFirst.volume = x/100;

                soundRainRangeSetting.style.background = color;
                soundRainRangeSetting.value = x;            
            })
            // ban ngay true // dem false
            if(isChangeSunNight){                
                // ban ngay mua trong cua hang
                bgVideoSunNoRain.style.zIndex = 1;
                bgVideoNightNoRain.style.zIndex = 1;
                bgVideoSunRain.style.zIndex = 1;
                bgVideoNightRain.style.zIndex = 1;
    
                // instore
                bgVideoSunNoRainInstore.style.zIndex = 1;
                bgVideoSunRainInstore.style.zIndex = 2;
                bgVideoNightNoRainInstore.style.zIndex = 1;
                bgVideoNightRainInstore.style.zIndex = 1;
            }else{
                // ban dem mua trong cua hang
                bgVideoSunNoRain.style.zIndex = 1;
                bgVideoNightNoRain.style.zIndex = 1;
                bgVideoSunRain.style.zIndex = 1;
                bgVideoNightRain.style.zIndex = 1;
    
                // instore
                bgVideoSunNoRainInstore.style.zIndex = 1;
                bgVideoSunRainInstore.style.zIndex = 1;
                bgVideoNightNoRainInstore.style.zIndex = 1;
                bgVideoNightRainInstore.style.zIndex = 2;
            }
        }else{
            isClickCityRainInstore = true;
            console.log(soundRainRangeSetting.value);
            getRangeCityRainInStore.style.display = "none";
            soundRainRangeSetting.style.background = "linear-gradient(90deg, #f3a952 0%, rgba(255,255,255,0.1) 0%)";
            soundRainRangeSetting.value = 0;
            audioFirst.src = "";
            // ban ngay true // dem false
            if(isChangeSunNight){                
                // ban ngay k mua
                bgVideoSunNoRain.style.zIndex = 1;
                bgVideoNightNoRain.style.zIndex = 1;
                bgVideoSunRain.style.zIndex = 1;
                bgVideoNightRain.style.zIndex = 1;
    
                // instore
                bgVideoSunNoRainInstore.style.zIndex = 2;
                bgVideoSunRainInstore.style.zIndex = 1;
                bgVideoNightNoRainInstore.style.zIndex = 1;
                bgVideoNightRainInstore.style.zIndex = 1;
            }else{
                // ban dem k mua
                bgVideoSunNoRain.style.zIndex = 1;
                bgVideoNightNoRain.style.zIndex = 1;
                bgVideoSunRain.style.zIndex = 1;
                bgVideoNightRain.style.zIndex = 1;
    
                // instore
                bgVideoSunNoRainInstore.style.zIndex = 1;
                bgVideoSunRainInstore.style.zIndex = 1;
                bgVideoNightNoRainInstore.style.zIndex = 2;
                bgVideoNightRainInstore.style.zIndex = 1;
            } 
        }        
        
    }        
    if(bgVideoSunNoRainInstore.style.zIndex == 1 && bgVideoSunRainInstore.style.zIndex == 1 && bgVideoNightNoRainInstore.style.zIndex == 1 && bgVideoNightRainInstore.style.zIndex == 1){
        // ngoai cua hang
        if(soundRainRangeSetting.value > 0){
            // troi mua
            isClickCityRain = false;
            getRangeCityRain.style.display = "block";        
            var x = soundRainRangeSetting.value;
            var color = "linear-gradient(90deg, #f3a952 " + x + "%, rgba(255,255,255,0.1) " + x + "%)";
            soundRainRangeSetting.style.background = color;
            audioFirst.volume = x/100;
            getRangeCityRain.style.background = color;
            getRangeCityRain.value = x;        
            // getRangeCityRain.addEventListener("mousemove", function(){
            //     var x = getRangeCityRain.value;
            //     var color = "linear-gradient(90deg, #f3a952 " + x + "%, rgba(255,255,255,0.1) " + x + "%)";
            //     getRangeCityRain.style.background = color;
            //     audioFirst.volume = x/100;

            //     soundRainRangeSetting.style.background = color;
            //     soundRainRangeSetting.value = x;            
            // })
            getRangeCityRain.addEventListener("mousemove", function(){
                // load range out store
                var x = getRangeCityRain.value;
                var color = "linear-gradient(90deg, #f3a952 " + x + "%, rgba(255,255,255,0.1) " + x + "%)";
                getRangeCityRain.style.background = color;
                audioFirst.volume = x/100;
                // console.log(audioFirst.volume);
                
                // load range in store
                getRangeCityRainInStore.style.background = color;
                getRangeCityRainInStore.value = x;
    
                // load in setting
                // in setting
                soundRainRangeSetting.style.background = color;
                soundRainRangeSetting.value = x;
            })
            // ban ngay true // dem false
            if(isChangeSunNight){                
                // ban ngay mua ngoai cua hang
                bgVideoSunNoRain.style.zIndex = 1;
                bgVideoNightNoRain.style.zIndex = 1;
                bgVideoSunRain.style.zIndex = 2;
                bgVideoNightRain.style.zIndex = 1;
    
                // instore
                bgVideoSunNoRainInstore.style.zIndex = 1;
                bgVideoSunRainInstore.style.zIndex = 1;
                bgVideoNightNoRainInstore.style.zIndex = 1;
                bgVideoNightRainInstore.style.zIndex = 1;
            }else{
                // ban dem mua ngoai cua hang
                bgVideoSunNoRain.style.zIndex = 1;
                bgVideoNightNoRain.style.zIndex = 1;
                bgVideoSunRain.style.zIndex = 1;
                bgVideoNightRain.style.zIndex = 2;
    
                // instore
                bgVideoSunNoRainInstore.style.zIndex = 1;
                bgVideoSunRainInstore.style.zIndex = 1;
                bgVideoNightNoRainInstore.style.zIndex = 1;
                bgVideoNightRainInstore.style.zIndex = 1;
            }
        }else{
            isClickCityRain = true;
            console.log(soundRainRangeSetting.value);
            getRangeCityRain.style.display = "none";
            soundRainRangeSetting.style.background = "linear-gradient(90deg, #f3a952 0%, rgba(255,255,255,0.1) 0%)";
            soundRainRangeSetting.value = 0;
            audioFirst.src = "";
            // ban ngay true // dem false
            if(isChangeSunNight){                
                // ban ngay k mua
                bgVideoSunNoRain.style.zIndex = 2;
                bgVideoNightNoRain.style.zIndex = 1;
                bgVideoSunRain.style.zIndex = 1;
                bgVideoNightRain.style.zIndex = 1;
    
                // instore
                bgVideoSunNoRainInstore.style.zIndex = 1;
                bgVideoSunRainInstore.style.zIndex = 1;
                bgVideoNightNoRainInstore.style.zIndex = 1;
                bgVideoNightRainInstore.style.zIndex = 1;
            }else{
                // ban dem k mua
                bgVideoSunNoRain.style.zIndex = 1;
                bgVideoNightNoRain.style.zIndex = 2;
                bgVideoSunRain.style.zIndex = 1;
                bgVideoNightRain.style.zIndex = 1;
    
                // instore
                bgVideoSunNoRainInstore.style.zIndex = 1;
                bgVideoSunRainInstore.style.zIndex = 1;
                bgVideoNightNoRainInstore.style.zIndex = 1;
                bgVideoNightRainInstore.style.zIndex = 1;
            } 
        }        
        
    }           
})

function isCheckPropagation(e){
    e.stopPropagation();    
}


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
    audioThird.src = songSleepy[currentSong].path;
    // getItemMusicSleepy.click();
    getItemMusicSleepy.classList.add("itemClick");
    getItemMusicJazzy.classList.remove("itemClick");
    getItemMusicChill.classList.remove("itemClick");
    isClickItemMusicSleepy = false;
    isClickItemMusicJazzy = true;
    isClickItemMusicChill = true;
    
})

// function loadCurrentSong(){
//     getNameSong.innerHTML = songSleepy[currentSong].name;
//     audioThird.src = songSleepy[currentSong].path;
// }

var isClickItemMusicSleepy = true;
var isClickItemMusicJazzy = false;
var isClickItemMusicChill = false;

getItemMusicSleepy.addEventListener("click",function(){
    if(isClickItemMusicSleepy = true){
        getNameSong.innerHTML = songSleepy[currentSong].name;
        audioThird.src = songSleepy[currentSong].path;
        getItemMusicSleepy.classList.add("itemClick");
        getItemMusicJazzy.classList.remove("itemClick");
        getItemMusicChill.classList.remove("itemClick");
        isClickItemMusicSleepy = false;
        isClickItemMusicJazzy = true;
        isClickItemMusicChill = true;
        console.log("sleepy " + isClickItemMusicSleepy);
        console.log("jazzy " + isClickItemMusicJazzy);
        console.log("chill " + isClickItemMusicChill);
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
        audioThird.src = songJazzy[currentSong].path;
        getItemMusicSleepy.classList.remove("itemClick");
        getItemMusicJazzy.classList.add("itemClick");
        getItemMusicChill.classList.remove("itemClick");
        isClickItemMusicSleepy = true;
        isClickItemMusicJazzy = false;
        isClickItemMusicChill = true;
        console.log("sleepy " + isClickItemMusicSleepy);
        console.log("jazzy " + isClickItemMusicJazzy);
        console.log("chill " + isClickItemMusicChill);
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
        audioThird.src = songChill[currentSong].path;
        getItemMusicSleepy.classList.remove("itemClick");
        getItemMusicJazzy.classList.remove("itemClick");
        getItemMusicChill.classList.add("itemClick");
        isClickItemMusicSleepy = true;
        isClickItemMusicJazzy = true;
        isClickItemMusicChill = false;
        console.log("sleepy " + isClickItemMusicSleepy);
        console.log("jazzy " + isClickItemMusicJazzy);
        console.log("chill " + isClickItemMusicChill);
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
        audioThird.play();
        audioThird.volume = 0.5;
        // range song in setting sidebar
        getRangeVolumeSong.value = 50;
        getRangeVolumeSong.style.background = 'linear-gradient(90deg, #f3a952 50%, rgba(255,255,255,0.1) 50%)'       

        // method
        getRangeVolumeSong.addEventListener("mousemove", function(){
            var x = getRangeVolumeSong.value;
            var color = "linear-gradient(90deg, #f3a952 " + x + "%, rgba(255,255,255,0.1) " + x + "%)";
            getRangeVolumeSong.style.background = color;
            audioThird.volume = x/100;
        })
        getRangeVolumeSong.addEventListener("click", function(){
            var x = getRangeVolumeSong.value;
            var color = "linear-gradient(90deg, #f3a952 " + x + "%, rgba(255,255,255,0.1) " + x + "%)";
            getRangeVolumeSong.style.background = color;
            audioThird.volume = x/100;
        })
        // console.log(audioThird.ended)
        audioThird.addEventListener("ended", function(){
            getBtnNext.click();
        })
    }else{
        isClickBtnSong = true;
        // add class play
        getBtnPlay.classList.add("fa-circle-play");
        // delete class pause
        getBtnPlay.classList.remove("fa-circle-pause");
        // pause song
        audioThird.pause();
        audioThird.volume = 0;
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
    
    audioThird.play();
    isClickBtnSong = false;
    // delete class play
    getBtnPlay.classList.remove("fa-circle-play");
    // add class pause
    getBtnPlay.classList.add("fa-circle-pause");
    audioThird.volume = 0.5;
    // range song in setting sidebar
    getRangeVolumeSong.value = 50;
    getRangeVolumeSong.style.background = 'linear-gradient(90deg, #f3a952 50%, rgba(255,255,255,0.1) 50%)'       

    // method
    getRangeVolumeSong.addEventListener("mousemove", function(){
        var x = getRangeVolumeSong.value;
        var color = "linear-gradient(90deg, #f3a952 " + x + "%, rgba(255,255,255,0.1) " + x + "%)";
        getRangeVolumeSong.style.background = color;
        audioThird.volume = x/100;
    })
    getRangeVolumeSong.addEventListener("click", function(){
        var x = getRangeVolumeSong.value;
        var color = "linear-gradient(90deg, #f3a952 " + x + "%, rgba(255,255,255,0.1) " + x + "%)";
        getRangeVolumeSong.style.background = color;
        audioThird.volume = x/100;
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
    
    audioThird.play();
    isClickBtnSong = false;
    // delete class play
    getBtnPlay.classList.remove("fa-circle-play");
    // add class pause
    getBtnPlay.classList.add("fa-circle-pause");
    audioThird.volume = 0.5;
    // range song in setting sidebar
    getRangeVolumeSong.value = 50;
    getRangeVolumeSong.style.background = 'linear-gradient(90deg, #f3a952 50%, rgba(255,255,255,0.1) 50%)';       

    // method
    getRangeVolumeSong.addEventListener("mousemove", function(){
        var x = getRangeVolumeSong.value;
        var color = "linear-gradient(90deg, #f3a952 " + x + "%, rgba(255,255,255,0.1) " + x + "%)";
        getRangeVolumeSong.style.background = color;
        audioThird.volume = x/100;
    })
    getRangeVolumeSong.addEventListener("click", function(){
        var x = getRangeVolumeSong.value;
        var color = "linear-gradient(90deg, #f3a952 " + x + "%, rgba(255,255,255,0.1) " + x + "%)";
        getRangeVolumeSong.style.background = color;
        audioThird.volume = x/100;
    })  
})

getBtnMuteVolumeSong.addEventListener("click", function(){
    audioThird.volume = 0;
    getRangeVolumeSong.value = 0;
    getRangeVolumeSong.style.background = 'linear-gradient(90deg, #f3a952 0%, rgba(255,255,255,0.1) 0%)'
})

getBtnMaxVolumeSong.addEventListener("click", function(){
    audioThird.volume = 1;
    getRangeVolumeSong.value = 100;
    getRangeVolumeSong.style.background = 'linear-gradient(90deg, #f3a952 100%, rgba(255,255,255,0.1) 100%)'
})
