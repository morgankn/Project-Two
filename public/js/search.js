function searchFlight(){
    //queryselect Searchflight origin destination ect. get values 
    location.href=`/search?searchflight=${searchflight}&origin=${origin}&destination=${destination}&departureDate=${departureDate}&arriveTo=${arriveTo}&currency=${currency}`
};

// onclick run dearchflight 