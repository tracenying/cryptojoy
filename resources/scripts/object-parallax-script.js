var parallax = [];
var scene;
for(var i=1; i<3;i++){
	scene = document.getElementById('group'+i+'-scene');
	parallax[i] = new Parallax(scene);
}
parallax[2].invert(false, false);
