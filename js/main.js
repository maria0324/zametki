new Vue({ 
    el: '#app', 
    data: { 
      columns: [ 
        
      ] 
    }, 
    methods: { 
      createCard(columnIndex) { 
        
      }, 
      moveCard(cardIndex, fromColumnIndex, toColumnIndex) { 
        
      }, 
      checkItem(cardIndex, columnIndex, itemIndex) { 
        
      }, 
      saveData() { 
        
      }, 
      loadData() { 
        
      } 
    }, 
    watch: { 
        columns: { 
          handler() { 
            this.saveData(); 
          }, 
          deep: true 
        } 
      }, 
      created() { 
        this.loadData(); 
      } 
    });