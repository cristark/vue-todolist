/* Realizzare una todolist con Vue. La lista deve essere già popolata con alcuni elementi e si deve dare la possibilità di aggiungere nuovi item e di cancellarli.
Bonus 1): permettere ai file cancellati di finire in un'area 'cestino' dove possono essere eliminati del tutto oppure ripristinati.
Bonus 2): Dare la possibilità di eliminare tutti i file dal cestino
Aggiungete quello che più vi piace a piacere! */

let app = new Vue({

    el: '#app',
    data: {
        toDoList: [
            'Guardare la lezione di teoria della mattina',
            'Fare esercitazioni su Javascript',
            'Fare sport'
        ],
        completedList: [
            'Fare la spesa'
        ]
    },
    methods: {
        taskCompleted(i) {
            this.completedList.unshift(this.toDoList[i]);
            this.toDoList.splice(i, 1);
        }
    }
});