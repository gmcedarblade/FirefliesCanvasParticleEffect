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
    
    
    // Get the firefly animation started using a timer to 
    // kick off our heartbeat (loop). Have it run repeatedly
    // framerate times per second until the user leaves the page
    
    requestAnimationFrame(update);
    
    
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
    this.yVelocity = yVel;
    
    // initialposition of this FireFly object
    this.x = Math.random() * canvas.width/2;
    this.y = Math.random() * canvas.height;
    
    this.alpha = randRange(.2, .9);
    this.color = 'rgba(153, 255, 51, ' + this.alpha + ')';
    
    this.radius = randRange(.5, 1.5);
    
    this.blink = true;
    
    this.maxBlinkRate = 15;
    this.blinkRate = Math.floor(randRange(0, this.maxBlinkRate));
    
}

function randRange(min, max) {
    
    return Math.random() * (max - min) + min;
    
}

//
// Heartbeat function (animation loop)
// Draw and animate the FireFly particle objects on our canvas..
//
function update() {
    
    // Use a hack using setTimeout() to reset the framerate
    setTimeout(function() {
        
        // Clear the canvas so it can be refreshed (redrawn)
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Let's draw the FireFly particles that are in our
        // fireFlies array on the canvas.
        fireFlies.forEach(function(fly, index) {
            
            ctx.beginPath();
            
            ctx.fillStyle = fly.color;
            
            // If the firefly is visible, draw it
            if (fly.blink) {
                
                ctx.arc(fly.x, fly.y, fly.radius, 0, Math.PI*2, false);
                
                ctx.fill();
                
            }
            
            ctx.closePath();
            
            // Animate each Firefly particle object
            //
            // Apply a velocity to change the object's 
            // x and y properties (positions)
            //
            
            fly.x += fly.xVelocity + Math.cos(angleX) * range;
            fly.y += fly.yVelocity + Math.sin(angleY) * range;
            
            // Alter the angle values
            angleX += xSpeed;
            angleY += ySpeed;
            
            // Collision detcction at our boundaries
            //
            // Check bottom edge
            if (fly.y >= fly.bottom + 25 && fly.yVelocity > 0) {
                
                fly.y = fly.bottom + 5;
                fly.yVelocity *= -1; // reverse direction
                
            } else if (fly.y <= fly.top - 25 && fly.yVelocity < 0) { // top edge
                
                fly.y = 5;
                fly.yVelocity *= -1;
                
            }
            
        });
        
        requestAnimationFrame(update);
        
    }, 1000/fps);
    
}