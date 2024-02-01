const app = new Vue({ 
    el: '#app', 
    data: { 
        columns: JSON.parse(localStorage.getItem('columns')) || [ 
            { id: 1, notes: [], maxCards: 3 }, 
            { id: 2, notes: [], maxCards: 5 }, 
            { id: 3, notes: [] } 
        ], 
        newNoteTitle: '', 
        newNoteContent: '',
        newItemText: '' 
    }, 
    methods:{ 
        addNote(columnId){ 
            const column = this.columns.find(col => col.id === columnId); 
            if(column && (!column.maxCards || column.notes.length < column.maxCards)){ 
                column.notes.push({ 
                    title: this.newNoteTitle, 
                    content: this.newNoteContent, 
                    items: [], 
                    completedAt: null 
                });
                this.newNoteTitle = ''; 
                this.newNoteContent = '';
            } 
            this.saveState();
            
        },
        addItem(columnId) {
            const column = this.columns.find(col => col.id === columnId);
            if (column && column.notes.length > 0) {
                const note = column.notes[column.notes.length - 1];
                note.items.push({ text: this.newItemText, done: false });
                this.newItemText = '';
            }
            this.saveState();
            
            
        },
        checkProgress(note, column) {
            const doneItems = note.items.filter(item => item.done).length;
            const totalItems = note.items.length;
            const progress = doneItems / totalItems;

            if (progress >= 1 && column.id < 3) {
                this.moveNote(column.id, column.id + 1, note);
                note.completedAt = new Date().toLocaleString();
            } else if (progress > 0.5 && column.id === 1) {
                this.moveNote(column.id, column.id + 1, note);
            }
            this.saveState();
            

            
        },
        moveNote(sourceColumnId, targetColumnId, note) {
            const sourceColumn = this.columns.find(col => col.id === sourceColumnId);
            const targetColumn = this.columns.find(col => col.id === targetColumnId);
            if (sourceColumn && targetColumn && (!targetColumn.maxCards || targetColumn.notes.length < targetColumn.maxCards)) {
                const noteIndex = sourceColumn.notes.indexOf(note);
                sourceColumn.notes.splice(noteIndex, 1);
                targetColumn.notes.push(note);
            }
        },
        saveState() {
            localStorage.setItem('columns', JSON.stringify(this.columns));
        }
        
    } 
        
});