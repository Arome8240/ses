function onDeviceReady() {
      document.removeEventListener('deviceready', onDeviceReady, false);
      
      // Set AdMobAds options:
      admob.setOptions({
        publisherId:           "ca-app-pub-6609715251129979/1115593783",  // Required
        interstitialAdId:      "ca-app-pub-6609715251129979/6651346714",  // Optional
        autoShowBanner:        true,                                      // Optional
        autoShowRInterstitial: false,                                     // Optional
        autoShowRewarded:      false,});
      
      // Start showing banners (atomatic when autoShowBanner is set to true)
      admob.createBannerView();
      
      // Request interstitial ad (will present automatically when autoShowInterstitial is set to true)
      admob.requestInterstitialAd();
 
      // Request rewarded ad (will present automatically when autoShowRewarded is set to true)
      admob.requestRewardedAd();
    }
    
    document.addEventListener("deviceready", onDeviceReady, false);

// Or instance with custom parameter
var splash = new Splash({background: 'black'}, {
        use: true,
        start: FancyAnimation.moveIn,
        end: FancyAnimation.rubberBand
    });

splash.fromAnimation(SVGAnimation.Rotate, 5000, {background: 'transparent'});

var div2=document.querySelector("#div2");
var div1=document.querySelector("#div1");
var text1,text2,text3,text4,text5,text6,mul1,mul2,yAns,ans2,ans,xAns,check,check2,y,finale2
function simulEquate(){
workings.style.display="none";
//Get the values in the first and second textbox
let eq1=document.querySelector("#eq1").value.toLowerCase();
let eq2=document.querySelector("#eq2").value.toLowerCase();
if(eq1.length>=5 && eq1.includes("x" && "y" && "=") || eq2.length>=5 && eq2.includes("x" && "y" && "=")){
check=eq1.substr(eq1.search("x"),eq1.search("x")+2);
check2=eq2.substr(eq2.search("x"),eq2.search("x")+2);
text1=eq1.substring(eq1.search("x"),eq1.search("x").length-length);
 text2=eq1.substring(eq1.search("y"),eq1.search("x")+1);
 text3=eq1.substring(eq1.search("=")+1,eq1.search("x").length);
 text4=eq2.substring(eq2.search("x"),eq2.search("x").length-length);
 text5=eq2.substring(eq2.search("y"),eq2.search("x")+1);
 text6=eq2.substring(eq2.search("=")+1,eq2.search("x").length);
if(text1==""){
text1=1;
}

if(text2=="-" || text2=="+"){
if(check.includes("-")){
text2=-1;
}
else{
text2=1;
}
}

if(text4==""){
text4=1;
}

if(text5=="-" || text5== "+"){
if(check2.includes("-")){
text5=-1;
}
else{
text5=1;
}
}
var get1=[text1,text2,text3];
var get2=[text4,text5,text6];
mul1=[get2[0]*get1[0],get2[0]*get1[1],get2[0]* get1[2]]
mul2=[get1[0]*get2[0],get1[0]*get2[1],get1[0]*get2[2]]
var finale=[mul1[0]-mul2[0],mul1[1]-mul2[1],mul1[2]-mul2[2]];
var finale2=[finale[0],finale[1],finale[2]];
var filter=finale2.filter(function(finale2){
if(finale2/1==0){
return false;
}
else{
return finale2;
}
})
y=[filter[1],filter[0]];
 yAns=y[0]/y[1]
 ans=get2[1] * yAns;
ans2=get2[2]-ans;
var xAns=ans2/get2[0];
div1.innerHTML="x ="+xAns;
div2.innerHTML="y ="+yAns;
showWorkings.style.display="inline-flex";
}
else{
var x = document.getElementById("snack");

x.className = "show";

setTimeeout(function(){
    x.className = x.className.replace("show","");}, 9000);
workings.innerHTML="";
div1.innerHTML="";
div2.innerHTML="";
showWorkings.style.display="none";
return false;
}
}
//steps
function showSteps(){
workings.style.display="block";
workings.style.animation="modal 1s 1";
workings.innerHTML=
eq1.value+"----------(i)<br>"+
eq2.value+"----------(ii)<br><br>Multiply equation i by "
+text4 +" and equation ii by "+text1+"<br>"+
text4+"("+eq1.value+")<br>"+
text1+"("+eq2.value+")<br><br>Subtract both sides<br>"+
y[1]+"y="+y[0]+"<br>&emsp;&emsp;y="+
yAns+"<br><br>Substitute y="+yAns+" in equation (i)<br>"+
eq1.value+"<br>"+
text1+"x+"+text2+"("+yAns+")="+text3+"<br>"+
text1+"x+"+text2*yAns+"="+text3+"<br>"+
text1+"x="+(text3-text2*yAns)+"<br>x="+
(text3-text2*yAns)/text1;
eq1.value="";
eq2.value="";
div1.innerHTML="";
div2.innerHTML="";
}

function clearIt() {
document.querySelector("#div1").value="";
document.querySelector("#div2").value="";
workings.innerHTML="";
div1.innerHTML="";
div2.innerHTML="";
}
