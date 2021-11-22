class Project {
    private _id;
    public name;
    public founder;
    public action;

    constructor(name, founder, action) {
        this.name = name;
        this.founder = founder;
        this.action = action;
    }

    get id() {
         return this.id
    }
    private  setId() {
        this._id = Math.random().toString(36).substr(2, 9);
    }
    public showData() {
        return {name: this.name, founder: this.founder, action: this.action}
    }
}

const proj = new Project('ИПЕ-ЛАБ', 'Пахомов А.Н.', 'сбор средства на акселиратор')
proj.showData()

class Details extends Project {
    public capitalization;
    public investments;

    constructor(name, founder, action,capitalization, investments) {
        super(name, founder, action);
        this.capitalization =capitalization;
        this.investments = investments;
    }
}
const detail = new Details('ИПЕ-ЛАБ', 'Пахомов А.Н.', 'сбор средства на акселиратор', 100500, 20000)
