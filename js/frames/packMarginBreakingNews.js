//Create objects for common properties across available frames
var bounds = {x:-88.5/2010, y:-79/2817, width:2185/2010, height:2975/2817};
var ogBounds = {x:0, y:0, width:1, height:1};
//defines available frames
availableFrames = [
	{name:'Wanted Extension', src:'/img/frames/breakingNews/margin.png', bounds:bounds, ogBounds:ogBounds}
];
//disables/enables the "Load Frame Version" button
document.querySelector('#loadFrameVersion').disabled = false;
//defines process for loading this version, if applicable
document.querySelector('#loadFrameVersion').onclick = loadMarginVersion;
//loads available frames
loadFramePack();