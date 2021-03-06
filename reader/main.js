//From https://github.com/EvanHahn/ScriptInclude
include=function(){function f(){var a=this.readyState;(!a||/ded|te/.test(a))&&(c--,!c&&e&&d())}var a=arguments,b=document,c=a.length,d=a[c-1],e=d.call;e&&c--;for(var g,h=0;c>h;h++)g=b.createElement("script"),g.src=arguments[h],g.async=!0,g.onload=g.onerror=g.onreadystatechange=f,(b.head||b.getElementsByTagName("head")[0]).appendChild(g)};
serialInclude=function(a){var b=console,c=serialInclude.l;if(a.length>0)c.splice(0,0,a);else b.log("Done!");if(c.length>0){if(c[0].length>1){var d=c[0].splice(0,1);b.log("Loading "+d+"...");include(d,function(){serialInclude([]);});}else{var e=c[0][0];c.splice(0,1);e.call();};}else b.log("Finished.");};serialInclude.l=new Array();

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,    
    function(m,key,value) {
      vars[decodeURIComponent(key)] = decodeURIComponent(value);
    });
    return vars;
}	 

serialInclude(['../lib/CGF.js', 'XMLscene.js', 'MySceneGraph.js', 'assocMap.js','primitives/MyTriangle.js',
				'primitives/MyRectangle.js','primitives/MyCylinderSurface.js', 'primitives/MyCircle.js', 'primitives/MyPiece.js',
				'primitives/MySphere.js', 'GraphTree.js','GraphTree_node.js','GraphTree_leaf.js','MyTexture.js',
				'MyInterface.js','primitives/MyPlane.js','primitives/MyPatch.js','primitives/MyTerrain.js','primitives/MyVehicle.js','logic/History.js',
                'animations/Animation.js','animations/LinearAnimation.js','animations/CircularAnimation.js', 'animations/ComposedAnimation.js','logic/String3D.js',
                'primitives/MyTile.js','logic/Board.js','logic/Cell.js','logic/Connection.js','logic/Piece.js','logic/GameState.js','animations/MovePieceAnimation.js',
                'animations/CapturePieceAnimation.js','animations/ComplexAnimation.js','primitives/MyBoat.js','animations/CameraAnimation.js','primitives/MyCrown.js','animations/CrownAnimation.js',


main=function()
{
	

	// Standard application, scene and interface setup
    var app = new CGFapplication(document.body);
    var myScene = new XMLscene();

    var myInterface = new MyInterface();

    app.init();

    app.setScene(myScene);
    app.setInterface(myInterface);

    myInterface.setActiveCamera(myScene.camera);
    myScene.setInterface(myInterface);

	// get file name provided in URL, e.g. http://localhost/myproj/?file=myfile.xml 
	// or use "demo.xml" as default (assumes files in subfolder "scenes", check MySceneGraph constructor) 
	

	var filename=getUrlVars()['file'] || "testScene.lsx";


	// create and load graph, and associate it to scene. 
	// Check console for loading errors	
	var myGraph = new MySceneGraph(filename, myScene);
	
	// start
    app.run();
}

]);