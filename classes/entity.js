export class Entity {
    constructor(mass, position, velocity, acceleration, particles) {
        this.mass = mass;
        this.position = position;
        this.velocity = velocity;
        this.acceleration = acceleration;
        this.particles = particles; //For v2
    }
    updatePos(position, velocity) {
        this.position = position;
        this.velocity = velocity;
        this.acceleration = this.acceleration;
    }
    
}

