new Vue({ 
    el: '#app', 
    data: { 
      columns: [ 
        
      ] 
    }, 
    methods: { 
      createCard(columnIndex) { 
           
        const newCard = { 
        title: title, 
        items: items.map(item => ({ text: item, done: false })) 
      }; 
   
      
      this.columns[columnIndex].push(newCard); 
    }, 
    createItem(cardIndex, columnIndex, text) { 
      
      const newItem = { text: text, done: false }; 
   
      
      this.columns[columnIndex][cardIndex].items.push(newItem); 
        
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