use('BD3-NoSQL-AtlasMongoDB');

db['bd3-nosql-atv1'].insertMany(
    [
        {
          cod_aluno: 1,
          cod_turma: 101,
          nome: "Alan Turing",
          cpf: "123.456.789-01",
          rg: "12.345.678-9",
          telefone_aluno: "987654321",
          telefone_responsavel: "987654322",
          email: "AlanTuring@email.com",
          data_nascimento: ("1912-06-23")
        },
        {
          cod_aluno: 2,
          cod_turma: 101,
          nome: "Dennis Ritchie",
          cpf: "234.567.890-12",
          rg: "23.456.789-0",
          telefone_aluno: "987654323",
          telefone_responsavel: "987654324",
          email: "DennisRitchie@email.com",
          data_nascimento: ("1941-09-09")
        },
        {
          cod_aluno: 3,
          cod_turma: 102,
          nome: "Linus Torvalds",
          cpf: "345.678.901-23",
          rg: "34.567.890-1",
          telefone_aluno: "987654325",
          telefone_responsavel: "987654326",
          email: "LinusTorvalds@email.com",
          data_nascimento: ("1969-12-28")
        },
        {
          cod_aluno: 4,
          cod_turma: 103,
          nome: "Bjarne Stroustrup",
          cpf: "456.789.012-34",
          rg: "45.678.901-2",
          telefone_aluno: "987654327",
          telefone_responsavel: "987654328",
          email: "BjarneStroustrup@email.com",
          data_nascimento: ("1950-12-30")
        },
        {
          cod_aluno: 5,
          cod_turma: 102,
          nome: "Grace Hopper",
          cpf: "567.890.123-45",
          rg: "56.789.012-3",
          telefone_aluno: "987654329",
          telefone_responsavel: "987654330",
          email: "GraceHopper@email.com",
          data_nascimento: ("1906-12-09")
        },
        {
          cod_aluno: 6,
          cod_turma: 103,
          nome: "Margaret Hamilton",
          cpf: "678.901.234-56",
          rg: "67.890.123-4",
          telefone_aluno: "987654331",
          telefone_responsavel: "987654332",
          email: "MargaretHamilton@email.com",
          data_nascimento: ("1936-08-17")
        },
        {
          cod_aluno: 7,
          cod_turma: 104,
          nome: "Donald Knuth",
          cpf: "789.012.345-67",
          rg: "78.901.234-5",
          telefone_aluno: "987654333",
          telefone_responsavel: "987654334",
          email: "DonaldKnuth@email.com",
          data_nascimento: ("1938-01-10")
        },
        {
          cod_aluno: 8,
          cod_turma: 104,
          nome: "Vannevar Bush",
          cpf: "890.123.456-78",
          rg: "89.012.345-6",
          telefone_aluno: "987654335",
          telefone_responsavel: "987654336",
          email: "VannevarBush@email.com",
          data_nascimento: ("1890-03-23")
        },
        {
          cod_aluno: 9,
          cod_turma: 105,
          nome: "John McCarthy",
          cpf: "901.234.567-89",
          rg: "90.123.456-7",
          telefone_aluno: "987654337",
          telefone_responsavel: "987654338",
          email: "JohnMcCarthy@email.com",
          data_nascimento: ("1927-09-04")
        },
        {
          cod_aluno: 10,
          cod_turma: 105,
          nome: "Ada Lovelace",
          cpf: "012.345.678-90",
          rg: "01.234.567-8",
          telefone_aluno: "987654339",
          telefone_responsavel: "987654340",
          email: "AdaLovelace@email.com",
          data_nascimento: ("1815-12-10")
        }
    ]
);
