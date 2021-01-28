/* Realizzare una todolist con Vue. La lista deve essere già popolata con alcuni elementi e si deve dare la possibilità di aggiungere nuovi item e di cancellarli.
Bonus 1): permettere ai file cancellati di finire in un'area 'cestino' dove possono essere eliminati del tutto oppure ripristinati.
Bonus 2): Dare la possibilità di eliminare tutti i file dal cestino
Aggiungete quello che più vi piace a piacere! */

let app = new Vue({

    el: '#app',
    data: {
        textList: '',
        toDoList: [
            'Guardare la lezione di teoria della mattina',
            'Fare esercitazioni su Javascript',
            'Fare sport'
        ],
        completedList: [
            'Fare la spesa'
        ]
    },
    created() {
        console.log(this.textList);
    },
    methods: {
        taskCompleted(i) {
            this.completedList.unshift(this.toDoList[i]);
            this.toDoList.splice(i, 1);
        },
        reTask(i) {
            this.toDoList.unshift(this.completedList[i]);
            this.completedList.splice(i, 1);
        },
        deleteElement(i) {
            let mex = confirm('Sei sicuro di voler eliminare questo elemento?');
            (mex) ? this.completedList.splice(i, 1) : '';
        },
        addTask() {
            (this.textList.length < 4) ?
                alert('Inserisci un testo più lungo!') :
                this.toDoList.unshift(this.textList);

            this.textList = '';
        }
    }
});