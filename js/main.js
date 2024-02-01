const app = new Vue({ 
    el: '#app', 
    data: { 
        columns:  JSON.parse(localStorage.getItem('columns')) || [ 
            { id: 1, notes: [], maxCards: 3 }, 
            { id: 2, notes: [], maxCards: 5 }, 
            { id: 3, notes: [] } 
        ], 
        nnewNoteTitle: '', 
        newNoteContent: '' 
    }, 
    methods:{ 
        addNote(columnId){ 
            const column = this.columns.find(col => col.id === columnId); 
            if(column && (!column.maxCards || column.notes.length < column.maxCards)){ 
                column.notes.push({ title: this.newNoteTitle, content: this.newNoteContent });
                this.newNoteTitle = ''; 
                this.newNoteContent = '';
            } 
            this.saveState();
            
        },
        moveNote(sourceColumnId, targetColumnId, noteIndex) {
          const sourceColumn = this.columns.find(col => col.id === sourceColumnId);
          const targetColumn = this.columns.find(col => col.id === targetColumnId);
          if (sourceColumn && targetColumn) {
            const noteToMove = sourceColumn.notes[noteIndex];
            sourceColumn.notes.splice(noteIndex, 1);
            targetColumn.notes.push(noteToMove);
          }
          this.checkMaxCards();
          this.saveState();
          
      },
      checkMaxCards() {
          const secondColumn = this.columns.find(col => col.id === 2);
          if (secondColumn && secondColumn.notes.length === secondColumn.maxCards) {
              const firstColumn = this.columns.find(col => col.id === 1);
              if (firstColumn) {
                  firstColumn.maxCards = firstColumn.notes.length;
              }
          }
      },
      saveState() {
        localStorage.setItem('columns', JSON.stringify(this.columns));
    }

      
    } 
  });