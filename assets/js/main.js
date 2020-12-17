/* Istruzioni:
Create una todo list usando VueJS.

Funzionalitá:
La nostra todo list avrá alcune tasks di default predefinite
L'utente puó inserire nuove tasks
Cliccando sulla "X" l'utente puó cancellare una task
Se non ci sono piu task nella lista, mostrate un messaggio tipo "Nulla da fare"
Quando l'utente inserisce una task ha due modi per salvarla: o preme il pulsante add o preme il taso Enter della tastiera.
Attenzione: l'utente non deve inserire tasks vuote ma almeno un tot di caratteri.
Da tenere a mente:
Ricordate di scrivere le istruzioni prima di iniziare a lavorare cercate di descrivere in modo sintetico gli step che pensate siano necessari.
Consultate la documentazione e se siete bloccati, aprite un ticket. */

let app = new Vue({
    el: '#root',
    data: {
        tasks: ['primoTask','secondoTask', 'terzoTask'],
        image: './assets/img/logo.png',
        task: '',
    },
    methods: {
        aggiungi : function(){
            if(this.task.length > 3){
                return this.tasks.push(this.task);
            }
        },
        elimina : function(index){
            this.tasks.splice(index,1);  
        },
    }

});