const app = new Vue({ 
  el: '#app', 
  data: { 
      columns: [ 
          { id: 1, notes: [], maxCards: 3 }, 
          { id: 2, notes: [], maxCards: 5 }, 
          { id: 3, notes: [] } 
      ], 
      newNote: '' 
  }, 
  methods:{ 
      addNote(columnId){ 
          const column = this.columns.find(col => col.id === columnId); 
          if(column && (!column.maxCards || column.notes.length < column.maxCards)){ 
              column.notes.push(this.newNote); 
              this.newNote = ''; 
          } 
      } 
  } 
});