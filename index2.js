//factory function
function createCircle(radius){
return{
    radius,
    draw: function(){
        console.log('drawing');

    }
};
}
const circle= createCircle(1);
function Circle(radius){
    this.radius= radius;
    this.draw= function(){
        console.log('draw');
    };
}
const another = new Circle(1);
