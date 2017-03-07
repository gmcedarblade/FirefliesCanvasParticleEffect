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
    
    // save the passed-in parameter values in properties
    // of our object for later access.
    this.top = topEdge;
    this.bottom = bottomEdge;
    this.left = leftEdge;
    this.right = rightEdge;
    this.xVelocity = xVel;
    this.xVelocity = yVel;
    
    // initialposition of this FireFly object
    this.x = Math.random() * canvas.width/2;
    this.y = Math.random() * canvas.height;
    
    this.alpha = randRange(.2, .9);
    this.color = 'rgba(153, 255, 51, ' + this.alpha + ')';
    
    this.radius = randRange(2.5, 4.5);
    
    this.blink = true;
    
    this.maxBlinkRate = 15;
    this.blinkRate = Math.floor(randRange(0, this.maxBlinkRate));
    
}

function randRange(min, max) {
    
    return Math.random() * (max - min) + min;
    
}