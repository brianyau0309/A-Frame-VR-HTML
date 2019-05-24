const $ = (queryString) => document.querySelector(queryString);
/*const shiftHue = (hue) => (hue + 1) % 360; //1 to 360
let hue = 0;
var X = 0
const animate = () => {
    //change color over time
    hue = shiftHue(hue);
    const color = `hsl(${hue}, 100%, 50%)`
    $('a-sphere').setAttribute('color', color);
    //move by time
    var Y = 1.5 + Math.sin(Date.now() / 1000)
    
    const position = `0 `+Y+` -5`
    $('a-sphere').setAttribute('position', position)
    
    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);*/
$('#myBox').addEventListener('mouseenter', function(){
	$('#myBox').setAttribute('material', 'color', '#FFFFFF')	
})
$('#myBox').addEventListener('mouseleave', function(){
	$('#myBox').setAttribute('material', 'color', '#4CC3D9')	
})