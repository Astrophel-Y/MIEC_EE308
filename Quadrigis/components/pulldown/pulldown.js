Component({
  properties:{
    selectData:{
      type:Array
    },
    selectContent:{
      type:String
    }
  },
  data: {
    show:false, //控制下拉列表的显示隐藏，false隐藏、true显示
    index:0, //选择的下拉列表下标
  },
  methods:{
    // 点击下拉显示框
    selectTap(){
      this.setData({
        show: !this.data.show
      });
    },
    // 点击下拉列表
    optionTap(e){
      let Index=e.currentTarget.dataset.index;//获取点击的下拉列表的下标
      this.setData({
        index:Index,
        show:!this.data.show,
        selectContent: this.data.selectData[e.currentTarget.dataset.index]
      });
    },
  },
})
