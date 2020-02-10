export class User {
    constructor(
        public OPER_seq_oper: number,
        public OPER_login: String,
        public OPER_senha: String,
        public OPER_nome_operador: String,
        public cod_oper_inc: number,
        public dat_inclusao: String,
        public cod_oper_alt: number,
        public dat_alteracao: String,
    ) {}
}