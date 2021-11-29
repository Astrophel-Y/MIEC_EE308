// components/topBar/topbar.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        currentIndex:0
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        changeCurrentIndex:function(e){
            this.setData({
                currentIndex:e.currentTarget.id
            })
        }
    }
})
