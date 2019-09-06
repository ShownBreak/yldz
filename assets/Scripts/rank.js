  cc.Class({
        extends: cc.Component,
        properties: {
            display: cc.Sprite
        },      
        start () {
            this.tex = new cc.Texture2D();
        },
        // 刷新开放数据域的纹理
        _updateSubDomainCanvas () {
            if (!this.tex) {
                return;
            }
            var openDataContext = wx.getOpenDataContext();
            var sharedCanvas = openDataContext.canvas;
            this.tex.initWithElement(sharedCanvas);
            this.tex.handleLoadedTexture();
            this.display.spriteFrame = new cc.SpriteFrame(this.tex);
        },
        update () {
            this._updateSubDomainCanvas();
        }
    });