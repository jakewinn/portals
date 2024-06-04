var app = new Vue({
    el: '#app',
    data: {
        onOffArr: [
        {
          onOff: false,
        },
        {
          onOff: false,
        },
        {
          onOff: false,
        },
        {
          onOff: false,
        },
        {
          onOff: false,
        },
      ],
      currentIndex: 0
    },
    methods: {
        handleFaqItem(index){
            this.currentIndex = index;
            this.onOffArr.forEach((item, i) => {
                if (i === index) {
                  item.onOff = !item.onOff;
                } else {
                  item.onOff = false;
                }
            });
        }
    }
})
console.log('app',app)