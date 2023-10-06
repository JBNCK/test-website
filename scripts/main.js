function redirectHome() {
    window.location.href = "de/"
}

function initializeWebsite() {
    console.log("Setting variables and attributes...")
    menuExpanded = 0;
    maintenanceModeEnabled = 1;
    //var element = document.getElementById("menu_content");
    //element.style.opacity = "0";
    $(function(){
        $("#sharedMaintenanceModeWall").load("../shared/maintenance_wall.html");
    });
    console.log("initialization complete.")
}

function maintenanceMode() {
    if (maintenanceModeEnabled == 1) {
        console.log("Maintenance mode is enabled.")
        setTimeout( () =>{
            var element = document.getElementById("maintenanceModeWall")
            element.setAttribute("style", "height: 100vh;")
            var element = document.getElementById("maintenanceModeWallContent")
            element.setAttribute("style", "height: 100vh;")
            element.setAttribute("style", "visibility: visible;")
            setTimeout( () =>{
                element.style.opacity = "1";
            }, 500);
            console.log("Website content hidden.")
        }, 500)  
    }
    else {
        console.log("Maintenance mode is disabled.")
        console.log("Website content left visible")
    }
}