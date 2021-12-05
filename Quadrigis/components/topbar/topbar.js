// components/topBar/topbar.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        optionData:{
            type:Array,
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        currentIndex: 0,
    },

    /**
     * 组件的方法列表
     */
    methods: {
        changeCurrentIndex:function(e){
            const Index = e.currentTarget.dataset.index
            let myEventDetail = {
                val: Index
            }
            this.triggerEvent('changeNaviIndex', myEventDetail)
            this.setData({
                currentIndex: Index,
            })
        }
    }
})
