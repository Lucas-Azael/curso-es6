class List {
    constructor() {
        this.data = [];
    }
    
    add(data) {
        this.data.push(data);
        console.log(this.data); 
    }
}

class TodoList extends List {
    constructor() {
        super(); //Interresante sempre que houver herança, a classe filha chamar a classe mãe

        this.usuario = 'Lucas';
    }

    mostraUsuario() {
        console.log(this.usuario);
    }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add('Novo Todo');
}

MinhaLista.mostraUsuario();

var ListaNova = new TodoList();
