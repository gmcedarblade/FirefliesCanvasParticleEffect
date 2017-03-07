function init() {
    
    canvas = document.querySelector('.fireFlies');
    
    ctx = canvas.getContext('2d');
    
    // Initialize variables
    fireFlies = [];  // or fireFlies = new Array();
    numFlies = 250;
    angleX = 0;
    angleY = 0;
    range = 1.2;
    xSpeed = .7;
    ySpeed = .1;
    fps = 15;
    
    //
    // Create a batch of FireFly particle objects and 
    // add each new Firefly object to the fireFlies array
    //
    
    for (var i = 0; i < numFlies; i++) {
    
        xVelocity = randRange(-4, 2);
        yVelocity = randRange(-4, 2);
        
        // We don't ever want our velocity values to be near 0
        if (xVelocity < 1 && xVelocity > -1) {
            
            xVelocity = -1;
            
        }
        
        if (yVelocity < 1 && yVelocity > -1) {
            
            yVelocity = -1;
            
        }
        
        // Create a new FireFly particle object and add it
        // to the end of the fireFlies array for later use...
        
        fireFlies.push(new FireFly(10, canvas.height - 10, 10, canvas.width - 10, xVelocity, yVelocity));
        
    }
    
    
}

//
// Constructor function for the FireFly "class"
//

function FireFly(topEdge, bottomEdge, leftEdge, rightEdge, xVel, yVel) {
    
    
}

function randRange(min, max) {
    
    return Math.random() * (max - min) + min;
    
}