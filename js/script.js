/* Realizzare una todolist con Vue. La lista deve essere già popolata con alcuni elementi e si deve dare la possibilità di aggiungere nuovi item e di cancellarli.
Bonus 1): permettere ai file cancellati di finire in un'area 'cestino' dove possono essere eliminati del tutto oppure ripristinati.
Bonus 2): Dare la possibilità di eliminare tutti i file dal cestino
Aggiungete quello che più vi piace a piacere! */

let app = new Vue({

    el: '#app',
    data: {
        textList: '',
        editTask: -1,
        mainSwitch: 0,
        darkSwitch: false,
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
        },
        allTasks() {
            do {
                this.completedList.unshift(this.toDoList[0]);
                this.toDoList.splice(this.toDoList[0], 1);
            } while(this.toDoList.length > 0);
        },
        reTask(i) {
            this.toDoList.unshift(this.completedList[i]);
            this.completedList.splice(i, 1);
        },
        deleteElement(i) {
            let mex = confirm('Sei sicuro di voler eliminare questo elemento?');
            if (mex) {
                this.completedList.splice(i, 1)   
            };
        },
        deleteAllElements() {
            let mex = confirm('Sei sicuro di voler eliminare tutti gli elementi?');
            if (mex) {
                this.completedList = [];  
            };
        },
        addTask() {
            if (this.textList.length < 4) {
                alert('Inserisci un testo più lungo!');
            } else {
                this.toDoList.unshift(this.textList);
            };

            this.textList = '';
        },
        moveUp(index) {
            let new_index = index - 1;
            let arr = this.toDoList;
            if (new_index >= 0) {
                arr.splice(new_index, 0, arr.splice(index, 1)[0]);
            };
        },
        moveDown(index) {
            let new_index = index + 1;
            let arr = this.toDoList;
            if (new_index < arr.length) {
                arr.splice(new_index, 0, arr.splice(index, 1)[0]);
            };
        },
        editElement(index) {
            this.editTask = index;
        },
        addEdited(index) {
            this.toDoList.splice(index, 1, this.toDoList[index]);
            this.editTask = -1;
        },
        switchDark() {
                (this.darkSwitch) ? this.darkSwitch = false : this.darkSwitch = true;

            if (this.mainSwitch == 0) {
                this.mainSwitch++;
                console.log(this.mainSwitch);
            } else if (this.mainSwitch == 1) {
                this.mainSwitch++;
                console.log(this.mainSwitch);
            } else {
                this.mainSwitch--;
                console.log(this.mainSwitch);
            }
        }
    }
});