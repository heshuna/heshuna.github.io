function Bird(option) {
    this.ctx = option.ctx;
    this.birdImg = option.birdImg;
    this.canvasX = option.canvasX;
    this.canvasY = option.canvasY;

    this.birdW = option.birdImg.width / 3;
    this.birdH = option.birdImg.height;
 
    //小鸟的初速度
    this.birdStep = 0;
    //重力加速度
    this.g = 0.0003;
    //小鸟旋转的最大角度
    this.maxAngle = 45
    //最大速度
    this.maxStep = 0.45;
    //索引值
    this.birdIndex = 0;
    //
    this.birdX = 0;
}
Bird.prototype = {
    constructor: Bird,
    drawBird: function (offsetT) {
        //让当前画布的变化不影响其他的内容
        this.ctx.save();
        // 速度= 初速度+g*时间间隔
        //重力加速度  移动的距离=速度*时间+g*时间间隔*时间间隔/2 
        var distanceY = this.birdStep * offsetT + this.g * offsetT * offsetT / 2;
        this.birdStep = this.birdStep + this.g * offsetT;
        this.canvasY += distanceY;
        //计算当前小鸟旋转中的角度值
        var currentAngle = this.maxAngle * this.birdStep / this.maxStep;
        if (currentAngle > 45) {
            currentAngle = 45;
        }
        //水平坐标需要每次重新计算获取
        this.birdX = this.birdIndex * this.birdW;

        //1 实现偏移
        this.ctx.translate(this.canvasX + this.birdW / 2, this.canvasY + this.birdH / 2);

        //2 实现旋转
        this.ctx.rotate(Math.PI / 180 * currentAngle);
         //ctx.drawImage(图片,素材x,素材y,素材w,素材h,画布x,画布y,素材w,素材h)
        this.ctx.drawImage(this.birdImg, this.birdX, 0, this.birdW, this.birdH, -this.birdW / 2, -this.birdH / 2, this.birdW, this.birdH);

        this.birdIndex++;
        if (this.birdIndex > 2) {
            this.birdIndex = 0;
        }
        this.ctx.restore();

    }
}
