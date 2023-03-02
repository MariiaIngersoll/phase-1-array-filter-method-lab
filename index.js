function findMatching(drivers, name){
    const newDrivers = drivers.filter(function(drivers){
        return drivers.toLowerCase() === name.toLowerCase()});
    return newDrivers;
    
    }


    function fuzzyMatch (driverArray,driverName){
        return driverArray.filter(element =>
        element.slice(0,1) === driverName.slice(0,1))
        }

        function matchName(drivers, string ) {
            return drivers.filter(element => element.name === string)
        }