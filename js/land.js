function Land(option){
    this.ctx=option.ctx;
    this.landImg=option.landImg;
    this.canvasX=option.canvasX;
    this.canvasY=option.canvasY;


    this.width=option.landImg.width;
    this.step=2;


}
Land.prototype={
    constructor:Land,
    drawLand:function(){
        this.canvasX -= this.step;
        if(this.canvasX < -this.width){
            this.canvasX+=4*this.width;
        }
        this.ctx.drawImage(this.landImg,this.canvasX,this.canvasY); 
    }
}