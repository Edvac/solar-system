/// <reference path="babylon.2.1.d.ts" />
// autocomplete help
/* Texture maps were downloaded from http://planetpixelemporium.com 
Planet Scaling: http://www.exploratorium.edu/ronh/solar_system/index.html 
Planets have 4 times biger radius compared to the sun for demonstration purpose
skybox: http://3delyvisions.co/skf1.htm , https://creativecommons.org/licenses/by/3.0/*/

var createScene = function() {

    var scene = new BABYLON.Scene(engine);

    scene.clearColor = new BABYLON.Color3(0, 0, 0);

    // This creates and positions an ArcRotateCamera (Rotation axels: horizontal: aplha, vertical: beta, distance from the center: radius )
    var camera = new BABYLON.ArcRotateCamera("camera", 0, 0, 2500, BABYLON.Vector3.Zero(), scene);
    // Smartphone support --- var camera = new BABYLON.TouchCamera("camera",  BABYLON.Vector3.Zero(), scene);

    // let the user move the camera
    camera.attachControl(canvas);

    // Limit the camera for the skybox
    camera.upperRadiusLimit = 2500;
    // This creates a light, aiming 0,1,0 - to the sky.
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.5;
    light.groundColor = new BABYLON.Color3(0, 0, 1);

    // sun
    var sun = BABYLON.Mesh.CreateSphere("sun", 20, 500, scene);
    var sunMaterial = new BABYLON.StandardMaterial("sunMaterial", scene);
    sunMaterial.emissiveTexture = new BABYLON.Texture("images/sunmap.jpg", scene); // see the color of the object even with no light
    sunMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0); // the object has it's own light based on the texture, not the Hemi light
    sunMaterial.specularColor = new BABYLON.Color3(0, 0, 0); // remove reflection
    sun.material = sunMaterial;

    // sun light - Make the sun shine!
    var sunLight = new BABYLON.PointLight("sunLight", BABYLON.Vector3.Zero(), scene); // like lightbulb, coordinates: same with the sun
    sunLight.intensity = 5;

    // planets

    var mercuryMaterial = new BABYLON.StandardMaterial("mercuryMaterial", scene);
    mercuryMaterial.diffuseTexture = new BABYLON.Texture("images/mercurymap.jpg", scene);
    //mercuryMaterial.bumpTexture = new BABYLON.Texture("images/mercurybump.jpg", scene);
    //mercuryMaterial.bumpTexture.level = 0.05;
    // mercuryMaterial.bumpTexture.uScale = 1; // the Texture x scaling
    // mercuryMaterial.bumpTexture.vScale = 1; // the Texture y scaling
    // mercuryMaterial.bumpTexture.uAng = 1; // the Texture x angle
    // mercuryMaterial.bumpTexture.vAng = 1; // the Texture y angle
    // mercuryMaterial.bumpTexture.wAng = 1; // the Texture z angle
    // mercuryMaterial.bumpTexture.uOffset = 1; // the Texture x offset/shift
    // mercuryMaterial.bumpTexture.vOffset = 1; // the Texture y offset/shift
    mercuryMaterial.specularColor = new BABYLON.Color3(0, 0, 0); // remove the light reflection
    var mercury = BABYLON.Mesh.CreateSphere("mercury", 16, 3, scene);
    mercury.position.x = 500;
    mercury.material = mercuryMaterial; // apply the properties
    mercury.orbit = {
        radius: mercury.position.x,
        speed: 0.007,
        angle: 0
    };

    var venus = BABYLON.Mesh.CreateSphere("venus", 16, 8, scene);
    var venusMaterial = new BABYLON.StandardMaterial("venusMaterial", scene);
    venusMaterial.diffuseTexture = new BABYLON.Texture("images/venusmap.jpg", scene);
    venus.material = venusMaterial;
    venus.position.x = 550;
    venus.orbit = {
        radius: venus.position.x,
        speed: 0.006,
        angle: 0
    };

    var earth = BABYLON.Mesh.CreateSphere("earth", 16, 20, scene);
    var earthMaterial = new BABYLON.StandardMaterial("earthMaterial", scene);
    earthMaterial.diffuseTexture = new BABYLON.Texture("images/earthmap1k.jpg", scene);
    earthMaterial.diffuseTexture.vAng = 1; // radiant rotation of the texture
    earth.material = earthMaterial;
    earth.position.x = 600;
    earth.orbit = {
        radius: earth.position.x,
        speed: 0.005,
        angle: 0
    };

    var mars = BABYLON.Mesh.CreateSphere("mars", 16, 5, scene);
    var marsMaterial = new BABYLON.StandardMaterial("marsMaterial", scene);
    marsMaterial.diffuseTexture = new BABYLON.Texture("images/marsmap.jpg", scene);
    mars.material = marsMaterial;
    mars.position.x = 650;
    mars.orbit = {
        radius: mars.position.x,
        speed: 0.004,
        angle: 0
    };

    var jupiter = BABYLON.Mesh.CreateSphere("jupiter", 16, 100, scene);
    var jupiterMaterial = new BABYLON.StandardMaterial("jupiterMaterial", scene);
    jupiterMaterial.diffuseTexture = new BABYLON.Texture("images/jupiter.jpg", scene);
    jupiterMaterial.diffuseTexture.vAng = 1;

    jupiter.material = jupiterMaterial;
    jupiter.position.x = 750;
    jupiter.orbit = {
        radius: jupiter.position.x,
        speed: 0.003,
        angle: 0
    };

    var saturn = BABYLON.Mesh.CreateSphere("saturn", 16, 80, scene);
    var saturnMaterial = new BABYLON.StandardMaterial("saturnMaterial", scene);
    saturnMaterial.diffuseTexture = new BABYLON.Texture("images/saturnmap.jpg", scene);
    saturn.material = saturnMaterial;
    saturn.position.x = 900;
    saturn.orbit = {
        radius: saturn.position.x,
        speed: 0.002,
        angle: 0
    };

    var saturnRing = BABYLON.Mesh.CreateSphere("saturnRing", 16, 120, scene);
    var saturnRingMaterial = new BABYLON.StandardMaterial("saturnRingMaterial", scene);
    saturnRingMaterial.diffuseTexture = new BABYLON.Texture("images/saturnringpattern.gif", scene);
    saturnRing.material = saturnRingMaterial;
    saturnRing.position.x = 900;
    saturnRing.orbit = {
        radius: saturnRing.position.x,
        speed: 0.002,
        angle: 0
    };

    saturnRing.scaling = new BABYLON.Vector3(1.5, 0, 1.5);

    var uranus = BABYLON.Mesh.CreateSphere("uranus", 16, 33, scene);
    var uranusMaterial = new BABYLON.StandardMaterial("uranusMaterial", scene);
    uranusMaterial.diffuseTexture = new BABYLON.Texture("images/uranusmap.jpg", scene);
    uranus.material = uranusMaterial;
    uranus.position.x = 1000;
    uranus.orbit = {
        radius: uranus.position.x,
        speed: 0.001,
        angle: 0
    };

    var neptune = BABYLON.Mesh.CreateSphere("neptune", 16, 32, scene);
    var neptuneMaterial = new BABYLON.StandardMaterial("neptuneMaterial", scene);
    neptuneMaterial.diffuseTexture = new BABYLON.Texture("images/neptunemap.jpg", scene);
    neptune.material = neptuneMaterial;
    neptune.position.x = 1100;
    neptune.orbit = {
        radius: neptune.position.x,
        speed: 0.0009,
        angle: 0
    };

    var pluto = BABYLON.Mesh.CreateSphere("pluto", 16, 12, scene);
    var plutoMaterial = new BABYLON.StandardMaterial("plutoMaterial", scene);
    plutoMaterial.diffuseTexture = new BABYLON.Texture("images/plutomap1k.jpg", scene);
    pluto.material = plutoMaterial;
    pluto.position.x = 1300;
    pluto.orbit = {
        radius: pluto.position.x,
        speed: 0.0005,
        angle: 0
    };

    // skybox : 6 - images sky background
    var skybox = BABYLON.Mesh.CreateBox("skybox", 10000, scene);
    var skyboxMaterial = new BABYLON.StandardMaterial("skyboxMat", scene);
    skyboxMaterial.backFaceCulling = false; // do not render what we can't see -> improves performance. i.e outside the box

    // infinite distance -> moves with the camera
    skybox.infiniteDistance = true;
    skybox.material = skyboxMaterial;

    // remove reflections
    skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);

    // textures of  6 side of the cude
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("images/skybox", scene);
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE; // this is a skybox

    // method that allows you to animate / move things - update position
    scene.beforeRender = function() {
        mercury.position.x = mercury.orbit.radius * Math.sin(mercury.orbit.angle);
        mercury.position.z = mercury.orbit.radius * Math.cos(mercury.orbit.angle);
        mercury.orbit.angle += mercury.orbit.speed;

        venus.position.x = venus.orbit.radius * Math.sin(venus.orbit.angle);
        venus.position.z = venus.orbit.radius * Math.cos(venus.orbit.angle);
        venus.orbit.angle += venus.orbit.speed;

        earth.position.x = earth.orbit.radius * Math.sin(earth.orbit.angle);
        earth.position.z = earth.orbit.radius * Math.cos(earth.orbit.angle);
        earth.orbit.angle += earth.orbit.speed;

        mars.position.x = mars.orbit.radius * Math.sin(mars.orbit.angle);
        mars.position.z = mars.orbit.radius * Math.cos(mars.orbit.angle);
        mars.orbit.angle += mars.orbit.speed;

        jupiter.position.x = jupiter.orbit.radius * Math.sin(jupiter.orbit.angle);
        jupiter.position.z = jupiter.orbit.radius * Math.cos(jupiter.orbit.angle);
        jupiter.orbit.angle += jupiter.orbit.speed;

        saturn.position.x = saturn.orbit.radius * Math.sin(saturn.orbit.angle);
        saturn.position.z = saturn.orbit.radius * Math.cos(saturn.orbit.angle);
        saturn.orbit.angle += saturn.orbit.speed;

        saturnRing.position.x = saturnRing.orbit.radius * Math.sin(saturnRing.orbit.angle);
        saturnRing.position.z = saturnRing.orbit.radius * Math.cos(saturnRing.orbit.angle);
        saturnRing.orbit.angle += saturnRing.orbit.speed;

        uranus.position.x = uranus.orbit.radius * Math.sin(uranus.orbit.angle);
        uranus.position.z = uranus.orbit.radius * Math.cos(uranus.orbit.angle);
        uranus.orbit.angle += uranus.orbit.speed;

        neptune.position.x = neptune.orbit.radius * Math.sin(neptune.orbit.angle);
        neptune.position.z = neptune.orbit.radius * Math.cos(neptune.orbit.angle);
        neptune.orbit.angle += neptune.orbit.speed;

        pluto.position.x = pluto.orbit.radius * Math.sin(pluto.orbit.angle);
        pluto.position.z = pluto.orbit.radius * Math.cos(pluto.orbit.angle);
        pluto.orbit.angle += pluto.orbit.speed;
    }
    return scene;
}; // End of createScene function