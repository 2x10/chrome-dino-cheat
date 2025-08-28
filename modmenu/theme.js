var config = JSON.parse(config);

if (config[0].darkmode == true) {

document.write(`

<style>
body {
    background-color: #202124;
}
</style>

<body>
    <div id="offline-resources">
        <img id="offline-resources-1x" src="modmenu/assets/darksprite.png"> 
    </div>
</body>

`);

}