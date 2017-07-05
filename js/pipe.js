function Pipe(option) {
    this.ctx = option.ctx;
    this.topImg = option.topImg;
    this.botImg = option.botImg;
    this.pipeX = option.pipeX;

    this.topY = 0;
    this.botY = 0;

    this.width = option.topImg.width;
    this.height = option.topImg.height;
    this.step = 2;
    this.space = 150;

    this.getY();

}
Pipe.prototype = {
    constructor: Pipe,
    drawPipe: function () {
        this.pipeX -= this.step;
        if (this.pipeX < -3 * this.width) {
            this.pipeX += 3 * this.width * 6;
            this.getY();
        };
        //绘制管道
        this.ctx.drawImage(this.topImg, this.pipeX, this.topY, this.width, this.height);
        //绘制路径
        this.ctx.rect(this.pipeX, this.topY, this.width, this.height);

        this.ctx.drawImage(this.botImg, this.pipeX, this.botY, this.width, this.height);
        //绘制路径
        this.ctx.rect(this.pipeX, this.botY, this.width, this.height);
    },
    getY: function() {
        this.topY = -(Math.random() * 250 + 120);
        this.botY = this.topY + this.height + this.space;
    }
}