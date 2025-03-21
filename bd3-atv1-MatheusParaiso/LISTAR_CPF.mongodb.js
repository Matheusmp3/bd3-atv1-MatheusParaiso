const database = 'BD3-NoSQL-AtlasMongoDB';

use(database);

db['bd3-nosql-atv1'].find(
    {"cpf" : "456.789.012-34"},
    {"cod_aluno" :0, "_id" : 0 }
);
