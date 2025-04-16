new Vue({
  el: '#app',
  data: {
    isOpenedTop: false,
    items: [
      {
        title: 'Page 1',
        images: [
          'coffee date1.jpg',
          'coffee date2.jpg',
          'coffee date3.jpg',
          '1jpg'
        ],
        isOpen: false
      },
      {
        title: 'Page 2',
        images: [
          '2.jpg',
          '3.jpg',
          '4.jpg',
          '5.jpg'
        ],
        isOpen: false
      },
    ]
  },
  methods: {
    topOpen(state) {
      this.isOpenedTop = !state;
    },
    open(index, state) {
      this.items[index].isOpen = !state;
    },
    reset() {
      this.items.forEach(item => (item.isOpen = false));
      this.isOpenedTop = false;
    }
  }
});
