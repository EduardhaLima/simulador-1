//A string fornecida JSON completa 
const stringRepasses = "[\n {\n \"orgao\": \"Polícia Civil\",\n \"data\": \"01/01/2024\",\n \"valor\": 5500.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Polícia Rodoviária Federal\",\n \"data\": \"02/01/2024\",\n \"valor\": 6000.00,\n \"status\": \"falha\",\n \"motivo\": \"Problemas técnicos\"\n },\n {\n \"orgao\": \"Polícia Militar\",\n \"data\": \"03/01/2024\",\n \"valor\": 4500.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Corpo de Bombeiros\",\n \"data\": \"04/01/2024\",\n \"valor\": 7000.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Guarda Municipal\",\n \"data\": \"05/01/2024\",\n \"valor\": 3500.00,\n \"status\": \"falha\",\n \"motivo\": \"Documentação incompleta\"\n },\n {\n \"orgao\": \"Receita Federal\",\n \"data\": \"06/01/2024\",\n \"valor\": 8000.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Ministério Público\",\n \"data\": \"07/01/2024\",\n \"valor\": 9000.00,\n \"status\": \"falha\",\n \"motivo\": \"Erro no sistema\"\n },\n {\n \"orgao\": \"Defesa Civil\",\n \"data\": \"08/01/2024\",\n \"valor\": 4000.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Detran\",\n \"data\": \"09/01/2024\",\n \"valor\": 5000.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Polícia Federal\",\n \"data\": \"10/01/2024\",\n \"valor\": 6500.00,\n \"status\": \"falha\",\n \"motivo\": \"Falta de recursos\"\n },\n {\n \"orgao\": \"Ibama\",\n \"data\": \"11/01/2024\",\n \"valor\": 5500.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Anvisa\",\n \"data\": \"12/01/2024\",\n \"valor\": 6000.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Inmetro\",\n \"data\": \"13/01/2024\",\n \"valor\": 3000.00,\n \"status\": \"falha\",\n \"motivo\": \"Dados incorretos\"\n },\n {\n \"orgao\": \"Cetesb\",\n \"data\": \"14/01/2024\",\n \"valor\": 7000.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Susep\",\n \"data\": \"15/01/2024\",\n \"valor\": 8000.00,\n \"status\": \"falha\",\n \"motivo\": \"Problemas técnicos\"\n },\n {\n \"orgao\": \"Polícia Civil\",\n \"data\": \"16/01/2024\",\n \"valor\": 5200.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Polícia Rodoviária Federal\",\n \"data\": \"17/01/2024\",\n \"valor\": 6100.00,\n \"status\": \"falha\",\n \"motivo\": \"Erro humano\"\n },\n {\n \"orgao\": \"Polícia Militar\",\n \"data\": \"18/01/2024\",\n \"valor\": 4600.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Corpo de Bombeiros\",\n \"data\": \"19/01/2024\",\n \"valor\": 7100.00,\n \"status\": \"sucesso\"\n },\n {\n\n \"orgao\": \"Guarda Municipal\",\n \"data\": \"20/01/2024\",\n \"valor\": 3600.00,\n \"status\": \"falha\",\n \"motivo\": \"Sistema fora do ar\"\n },\n {\n \"orgao\": \"Receita Federal\",\n \"data\": \"21/01/2024\",\n \"valor\": 8100.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Ministério Público\",\n \"data\": \"22/01/2024\",\n \"valor\": 9100.00,\n \"status\": \"falha\",\n \"motivo\": \"Recursos insuficientes\"\n },\n {\n \"orgao\": \"Defesa Civil\",\n \"data\": \"23/01/2024\",\n \"valor\": 4100.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Detran\",\n \"data\": \"24/01/2024\",\n \"valor\": 5100.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Polícia Federal\",\n \"data\": \"25/01/2024\",\n \"valor\": 6600.00,\n \"status\": \"falha\",\n \"motivo\": \"Problemas técnicos\"\n },\n {\n \"orgao\": \"Ibama\",\n \"data\": \"26/01/2024\",\n \"valor\": 5600.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Anvisa\",\n \"data\": \"27/01/2024\",\n \"valor\": 6100.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Inmetro\",\n \"data\": \"28/01/2024\",\n \"valor\": 3100.00,\n \"status\": \"falha\",\n \"motivo\": \"Dados incorretos\"\n },\n {\n \"orgao\": \"Cetesb\",\n \"data\": \"29/01/2024\",\n \"valor\": 7100.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Susep\",\n \"data\": \"30/01/2024\",\n \"valor\": 8100.00,\n \"status\": \"falha\",\n \"motivo\": \"Problemas técnicos\"\n },\n {\n \"orgao\": \"Polícia Civil\",\n \"data\": \"31/01/2024\",\n \"valor\": 5300.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Polícia Rodoviária Federal\",\n \"data\": \"01/01/2024\",\n \"valor\": 6200.00,\n \"status\": \"falha\",\n \"motivo\": \"Erro humano\"\n },\n {\n \"orgao\": \"Polícia Militar\",\n \"data\": \"02/01/2024\",\n \"valor\": 4700.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Corpo de Bombeiros\",\n \"data\": \"03/01/2024\",\n \"valor\": 7200.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Guarda Municipal\",\n \"data\": \"04/01/2024\",\n \"valor\": 3700.00,\n \"status\": \"falha\",\n \"motivo\": \"Sistema fora do ar\"\n },\n {\n \"orgao\": \"Receita Federal\",\n \"data\": \"05/01/2024\",\n \"valor\": 8200.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Ministério Público\",\n \"data\": \"06/01/2024\",\n \"valor\": 9200.00,\n \"status\": \"falha\",\n \"motivo\": \"Recursos insuficientes\"\n },\n {\n \"orgao\": \"Defesa Civil\",\n \"data\": \"07/01/2024\",\n \"valor\": 4200.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Detran\",\n \"data\": \"08/01/2024\",\n \"valor\": 5200.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Polícia Federal\",\n \"data\": \"09/01/2024\",\n \"valor\": 6700.00,\n \"status\": \"falha\",\n \"motivo\": \"Problemas técnicos\"\n },\n {\n \"orgao\": \"Ibama\",\n \"data\": \"10/01/2024\",\n \"valor\": 5700.00,\n \"status\": \"sucesso\"\n },\n {\n \n\n \"orgao\": \"Anvisa\",\n \"data\": \"11/01/2024\",\n \"valor\": 6200.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Inmetro\",\n \"data\": \"12/01/2024\",\n \"valor\": 3200.00,\n \"status\": \"falha\",\n \"motivo\": \"Dados incorretos\"\n },\n {\n \"orgao\": \"Cetesb\",\n \"data\": \"13/01/2024\",\n \"valor\": 7200.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Susep\",\n \"data\": \"14/01/2024\",\n \"valor\": 8200.00,\n \"status\": \"falha\",\n \"motivo\": \"Problemas técnicos\"\n },\n {\n \"orgao\": \"Polícia Civil\",\n \"data\": \"15/01/2024\",\n \"valor\": 5400.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Polícia Rodoviária Federal\",\n \"data\": \"16/01/2024\",\n \"valor\": 6300.00,\n \"status\": \"falha\",\n \"motivo\": \"Erro humano\"\n },\n {\n \"orgao\": \"Polícia Militar\",\n \"data\": \"17/01/2024\",\n \"valor\": 4800.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Corpo de Bombeiros\",\n \"data\": \"18/01/2024\",\n \"valor\": 7300.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Guarda Municipal\",\n \"data\": \"19/01/2024\",\n \"valor\": 3800.00,\n \"status\": \"falha\",\n \"motivo\": \"Sistema fora do ar\"\n },\n {\n \"orgao\": \"Receita Federal\",\n \"data\": \"20/01/2024\",\n \"valor\": 8300.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Ministério Público\",\n \"data\": \"21/01/2024\",\n \"valor\": 9300.00,\n \"status\": \"falha\",\n \"motivo\": \"Recursos insuficientes\"\n },\n {\n \"orgao\": \"Defesa Civil\",\n \"data\": \"22/01/2024\",\n \"valor\": 4300.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Detran\",\n \"data\": \"23/01/2024\",\n \"valor\": 5300.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Polícia Federal\",\n \"data\": \"24/01/2024\",\n \"valor\": 6800.00,\n \"status\": \"falha\",\n \"motivo\": \"Problemas técnicos\"\n },\n {\n \"orgao\": \"Ibama\",\n \"data\": \"25/01/2024\",\n \"valor\": 5800.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Anvisa\",\n \"data\": \"26/01/2024\",\n \"valor\": 6300.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Inmetro\",\n \"data\": \"27/01/2024\",\n \"valor\": 3300.00,\n \"status\": \"falha\",\n \"motivo\": \"Dados incorretos\"\n },\n {\n \"orgao\": \"Cetesb\",\n \"data\": \"28/01/2024\",\n \"valor\": 7300.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Susep\",\n \"data\": \"29/01/2024\",\n \"valor\": 8300.00,\n \"status\": \"falha\",\n \"motivo\": \"Problemas técnicos\"\n },\n {\n \"orgao\": \"Polícia Civil\",\n \"data\": \"30/01/2024\",\n \"valor\": 5500.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Polícia Rodoviária Federal\",\n \"data\": \"31/01/2024\",\n \"valor\": 6400.00,\n \"status\": \"falha\",\n \"motivo\": \"Erro humano\"\n },\n {\n \"orgao\": \"Polícia Militar\",\n \"data\": \"01/01/2024\",\n \"valor\": 4900.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Corpo de Bombeiros\",\n \"data\": \"02/01/2024\",\n \"valor\": 7400.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Guarda Municipal\",\n \"data\": \"03/01/2024\",\n \"valor\": 3900.00,\n \"status\": \"falha\",\n \"motivo\": \"Sistema fora do ar\"\n },\n {\n \"orgao\": \"Receita Federal\",\n \"data\": \"04/01/2024\",\n \"valor\": 8400.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Ministério Público\",\n \"data\": \"05/01/2024\",\n \"valor\": 9400.00,\n \"status\": \"falha\",\n \"motivo\": \"Recursos insuficientes\"\n },\n {\n \"orgao\": \"Defesa Civil\",\n \"data\": \"06/01/2024\",\n \"valor\": 4400.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Detran\",\n \"data\": \"07/01/2024\",\n \"valor\": 5400.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Polícia Federal\",\n \"data\": \"08/01/2024\",\n \"valor\": 6900.00,\n \"status\": \"falha\",\n \"motivo\": \"Problemas técnicos\"\n },\n {\n \"orgao\": \"Ibama\",\n \"data\": \"09/01/2024\",\n \"valor\": 5900.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Anvisa\",\n \"data\": \"10/01/2024\",\n \"valor\": 6400.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Inmetro\",\n \"data\": \"11/01/2024\",\n \"valor\": 3400.00,\n \"status\": \"falha\",\n \"motivo\": \"Dados incorretos\"\n },\n {\n \"orgao\": \"Cetesb\",\n \"data\": \"12/01/2024\",\n \"valor\": 7400.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Susep\",\n \"data\": \"13/01/2024\",\n \"valor\": 8400.00,\n \"status\": \"falha\",\n \"motivo\": \"Problemas técnicos\"\n },\n {\n \"orgao\": \"Polícia Civil\",\n \"data\": \"14/01/2024\",\n \"valor\": 5600.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Polícia Rodoviária Federal\",\n \"data\": \"15/01/2024\",\n \"valor\": 6500.00,\n \"status\": \"falha\",\n \"motivo\": \"Erro humano\"\n },\n {\n \"orgao\": \"Polícia Militar\",\n \"data\": \"16/01/2024\",\n \"valor\": 5000.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Corpo de Bombeiros\",\n \"data\": \"17/01/2024\",\n \"valor\": 7500.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Guarda Municipal\",\n \"data\": \"18/01/2024\",\n \"valor\": 4000.00,\n \"status\": \"falha\",\n \"motivo\": \"Sistema fora do ar\"\n },\n {\n \"orgao\": \"Receita Federal\",\n \"data\": \"19/01/2024\",\n \"valor\": 8500.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Ministério Público\",\n \"data\": \"20/01/2024\",\n \"valor\": 9500.00,\n \"status\": \"falha\",\n \"motivo\": \"Recursos insuficientes\"\n },\n {\n \"orgao\": \"Defesa Civil\",\n \"data\": \"21/01/2024\",\n \"valor\": 4500.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Detran\",\n \"data\": \"22/01/2024\",\n \"valor\": 5500.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Polícia Federal\",\n \"data\": \"23/01/2024\",\n \"valor\": 7000.00,\n \"status\": \"falha\",\n \"motivo\": \"Problemas técnicos\"\n },\n {\n \"orgao\": \"Ibama\",\n \"data\": \"24/01/2024\",\n \"valor\": 6000.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Anvisa\",\n \"data\": \"25/01/2024\",\n \"valor\": 6500.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Inmetro\",\n \"data\": \"26/01/2024\",\n \"valor\": 3500.00,\n \"status\": \"falha\",\n \"motivo\": \"Dados incorretos\"\n },\n {\n \"orgao\": \"Cetesb\",\n \"data\": \"27/01/2024\",\n \"valor\": 7500.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Susep\",\n \"data\": \"28/01/2024\",\n \"valor\": 8500.00,\n \"status\": \"falha\",\n \"motivo\": \"Problemas técnicos\"\n },\n {\n \"orgao\": \"Polícia Civil\",\n \"data\": \"29/01/2024\",\n \"valor\": 5700.00,\n \"status\": \"sucesso\"\n },\n {\n \"orgao\": \"Polícia Rodoviária Federal\",\n \"data\": \"30/01/2024\",\n \"valor\": 6600.00,\n \"status\": \"falha\",\n \"motivo\": \"Erro humano\"\n },\n {\n \"orgao\": \"Polícia Militar\",\n \"data\": \"31/01/2024\",\n \"valor\": 5100.00,\n \"status\": \"sucesso\"\n }\n]";

//transformação para JSON
const objetoRepasses = JSON.parse(stringRepasses);
console.log(objetoRepasses);

//História de Usuário 1: Recebimento e Exibição de Dados do Governo 
console.log(`----------------------------------------------------------------`);
console.log(`----------------------TOTAL DE REPASSES-------------------------`);
console.log(`----------------------------------------------------------------`);

const totalDeRepasses = objetoRepasses.length;
console.log(`O total de repasses processados é igual a: ${totalDeRepasses}.`);

//História de Usuário 2: Análise de Transações por status
console.log(`----------------------------------------------------------------`);
console.log(`------------------------BEM SUCEDIDOS---------------------------`);
console.log(`----------------------------------------------------------------`);

//a. Quantidade total de repasses bem sucedidos
const repassesfiltrados = objetoRepasses.filter(repasse => repasse.status == "sucesso")
const repassesBemSucedidos = repassesfiltrados.length
console.log(`O total de repasses processados bem sucedidos é igual a: ${repassesBemSucedidos}`);

//b. Quantidade total de repasses bem sucedidos por órgão 
const contagemPorOrgao = repassesfiltrados.reduce((acumulador, repasse) => { 
    const nomeOrgao = repasse.orgao;

    if (!(acumulador[nomeOrgao])){
        acumulador[nomeOrgao] = 0;
    }

    acumulador[nomeOrgao]++;
    
    return acumulador;
}, {}); 

console.log(`Contagem de sucesso por orgão:`);
console.log(contagemPorOrgao);

//c. Valor total de repasses bem sucedidos
const valorTotal = repassesfiltrados.reduce((acumulador, repasse) => {
    
    return acumulador + repasse.valor;

}, 0);
console.log(`O valor total de repasses bem sucedidos é R$ ${valorTotal.toFixed(2)}`)

//d. Valor total de repasses bem sucedidos por órgão
const valorTotalBemSucedido = repassesfiltrados.reduce((acumulador, repasse) => {

    const chave = repasse.orgao;

    if (!acumulador[chave]) {
        acumulador[chave] = {
            quantidade: 0,
            valorTotalBemSucedido: 0.00
        };
    }
     acumulador[chave].quantidade++;
     acumulador[chave].valorTotalBemSucedido += repasse.valor;
    
     return acumulador;

}, {}); 

console.log(`Valor total de repasses bem sucedidos por órgão:`);
console.log(valorTotalBemSucedido);

console.log(`----------------------------------------------------------------`);
console.log(`-------------------------COM FALHAS-----------------------------`);
console.log(`----------------------------------------------------------------`);

//a. Quantidade total de repasses com falha
const repassesfiltradosComFalhas = objetoRepasses.filter(repasse => repasse.status == "falha")
const repassesComFalha = repassesfiltradosComFalhas.length
console.log(`O total de repasses processados com falhas é igual a: ${repassesComFalha}`);

//b. Quantidade total de repasses com falha por órgão
const contagemPorOrgaoFalho = repassesfiltradosComFalhas.reduce((acumulador, repasse) => { 
    const nomeOrgao = repasse.orgao;

    if (!(acumulador[nomeOrgao])){
        acumulador[nomeOrgao] = 0;
    }

    acumulador[nomeOrgao]++;
    
    return acumulador;
}, {}); 

console.log(`Contagem de falhas por orgão:`);
console.log(contagemPorOrgaoFalho);

//c. Quantidade total de repasses com falha por motivo
const contagemPorFalhaMotivo = repassesfiltradosComFalhas.reduce((acumulador, repasse) => { 
    const chave = `${repasse.orgao} (${repasse.motivo})`;

   if (!acumulador[chave]) {
    acumulador[chave] = {
    quantidade: 0
 
    };
   }
   acumulador[chave].quantidade++;

   return acumulador;

}, {}); 

console.log(`Quantidade total de repasses com falha por motivo:`)
console.log(contagemPorFalhaMotivo);

//d. Valortotal de repasses com falha
const valorTotalComFalha = repassesfiltradosComFalhas.reduce((acumulador, repasse) => {
    
    return acumulador + repasse.valor;

}, 0);
console.log(`O valor total de repasses bem sucedidos é R$ ${valorTotalComFalha.toFixed(2)}`)

//e. Valor total de repasses com falha por órgão
const valorFalhaPorOrgao = repassesfiltrados.reduce((acumulador, repasse) => {

    const chave = repasse.orgao;

    if (!acumulador[chave]) {
        acumulador[chave] = {
            quantidade: 0,
            valorFalhaPorOrgao: 0.00
        };
    }
     acumulador[chave].quantidade++;
     acumulador[chave].valorFalhaPorOrgao += repasse.valor;
    
     return acumulador;

}, {}); 

console.log(`Valor total de repasses por falha por órgão:`);
console.log(valorFalhaPorOrgao);

//f. Valor total de repasses com falha por motivo
const valorFalhaPorMotivo = repassesfiltradosComFalhas.reduce((acumulador, repasse) => {

    const chave = repasse.motivo 

    if (!acumulador[chave]) {
        acumulador[chave] = {
            quantidade: 0,
            valorTotal: 0.00
        };
    }
     acumulador[chave].quantidade++;
     acumulador[chave].valorTotal += repasse.valor ;
    
     return acumulador;

}, {}); 

console.log(`Valor total de repasses por falhas por meio do motivo por órgão:`);
console.log(valorFalhaPorMotivo);

console.log(`----------------------------------------------------------------`);
//História de Usuário 3: Estatísticas de Repasses por critérios
//a. Detalhes do repasse com maior valor
const repasseComMaiorValor = objetoRepasses.reduce ((max, menor) => menor.valor > max.valor ? menor : max,repassesfiltrados [0]);
    console.log("Repasse com maior valor:");
    console.log(`   Órgão: ${repasseComMaiorValor.orgao}`);
    console.log(`   Data: ${repasseComMaiorValor.data}`);
    console.log(`   Valor: R$ ${repasseComMaiorValor.valor.toFixed(2)}`);
    console.log(`   Status: ${repasseComMaiorValor.status}`);

//b. Detalhes do repasse com menor valor
const repasseComMenorValor = objetoRepasses.reduce ((max, menor) => menor.valor < max.valor ? menor : max,repassesfiltrados [0]);
    console.log("Repasse com menor valor:");
    console.log(`   Órgão: ${repasseComMenorValor.orgao}`);
    console.log(`   Data: ${repasseComMenorValor.data}`);
    console.log(`   Valor: R$ ${repasseComMenorValor.valor.toFixed(2)}`);
    console.log(`   Status: ${repasseComMenorValor.status}`);

//c. Dia com mais repasses    
const contagemPorDia = objetoRepasses.reduce((mapa, repasse) => {
    const data = repasse.data;
    mapa.set(data, (mapa.get(data) || 0) + 1);
    return mapa;
}, new Map());

const [diaMaisRepasses, maxRepasses] = Array.from(contagemPorDia.entries()).reduce(
    (maxEntry, atualEntry) => {

        return atualEntry[1] > maxEntry[1] ? atualEntry : maxEntry;
    },
    ['', 0] 
);

console.log(`Dia com mais repasses: ${diaMaisRepasses} (${maxRepasses} repasses)`);

//d. Órgão com mais repasses
const contagemPorOrgaoMap = objetoRepasses.reduce((mapa, repasse) => {
    const orgao = repasse.orgao;
    mapa.set(orgao, (mapa.get(orgao) || 0) + 1);
    return mapa;
}, new Map());

const [orgaoMaisRepasses, maxRepassesOrgao] = Array.from(contagemPorOrgaoMap.entries()).reduce(
    (maxEntry, atualEntry) => {

        return atualEntry[1] > maxEntry[1] ? atualEntry : maxEntry;
    },
    ['', 0] 
);

console.log(`Orgão com mais repasses: ${orgaoMaisRepasses} (${maxRepassesOrgao} repasses)`);

//e. Órgão com mais repasses com sucesso
const contagemPorOrgaoSucessoMap = repassesfiltrados.reduce((mapa, repasse) => {
    const orgao = repasse.orgao;
    mapa.set(orgao, (mapa.get(orgao) || 0) + 1);
    return mapa;
}, new Map());

const [orgaoMaisRepassesComSucesso, maxRepassesOrgaoComSucesso] = Array.from(contagemPorOrgaoSucessoMap.entries()).reduce(
    (maxEntry, atualEntry) => {

        return atualEntry[1] > maxEntry[1] ? atualEntry : maxEntry;
    },
    ['', 0] 
);

console.log(`Orgão com mais repasses bem sucedidos: ${orgaoMaisRepassesComSucesso} (${maxRepassesOrgaoComSucesso} repasses)`);

//f. Órgão com mais repasses falhados
const contagemPorOrgaoFalhaMap = repassesfiltradosComFalhas.reduce((mapa, repasse) => {
    const orgao = repasse.orgao;
    mapa.set(orgao, (mapa.get(orgao) || 0) + 1);
    return mapa;
}, new Map());

const [orgaoMaisRepassesComFalha, maxRepassesOrgaoComFalha] = Array.from(contagemPorOrgaoFalhaMap.entries()).reduce(
    (maxEntry, atualEntry) => {

        return atualEntry[1] > maxEntry[1] ? atualEntry : maxEntry;
    },
    ['', 0] 
);

console.log(`Orgão com mais repasses com falha: ${orgaoMaisRepassesComFalha} (${maxRepassesOrgaoComFalha} repasses)`);

//g. Motivo de falha com mais repasses
function encontrarMotivoMaisComumComMap(dadosRepasse) {
    const contagemPorMotivo = dadosRepasse
        .filter(repasse => repasse.status === "falha" && repasse.motivo)
        .reduce((mapa, repasse) => {
            const motivo = repasse.motivo;
            mapa.set(motivo, (mapa.get(motivo) || 0) + 1);
            return mapa;
        }, new Map()); 

    const [motivoMaisComum, maxRepasses] = Array.from(contagemPorMotivo.entries()).reduce(
        (maxEntry, atualEntry) => {
            return atualEntry[1] > maxEntry[1] ? atualEntry : maxEntry;
        },
        ['', 0] 
    );

    console.log(`Motivo de falha com mais repasses: ${motivoMaisComum} (${maxRepasses} repasses)`);
    console.log("");
    
    return { motivo: motivoMaisComum, contagem: maxRepasses };
}

const dadosRepasse = [
    { status: "falha", motivo: "Problemas técnicos" },
    { status: "falha", motivo: "Erro humano" },
    { status: "falha", motivo: "Problemas técnicos" },
    { status: "falha", motivo: "Documentação incompleta" },
    { status: "falha", motivo: "Problemas técnicos" },
];

encontrarMotivoMaisComumComMap(dadosRepasse);

//História de Usuário 4: Apresentação Automática de Detalhes de Transações
function usuario4(orgaoSelecionado = "Ibama") {
    
    const repassesDoOrgao = objetoRepasses.filter (repasse =>
        repasse.orgao.toLowerCase().includes(orgaoSelecionado.toLowerCase())
    );

console.log(`Busca automática por: ${orgaoSelecionado}`);
console.log(`Total de transações encontradas: ${repassesDoOrgao.length}`);
    
repassesDoOrgao.forEach((repass, index) => {
        console.log(`  Transação ${index + 1}:`);
        console.log(`  Órgão: ${repass.orgao}`);
        console.log(`  Data: ${repass.data}`);
        console.log(`  Valor: R$ ${repass.valor.toFixed(2)}`);
        console.log(`  Status: ${repass.status.toUpperCase()}`);
        if (repass.motivo) {
            console.log(`  Motivo: ${repass.motivo}`);
        } else if (repass.status.toLowerCase() === 'sucesso') {
             console.log(`  Motivo: N/A (Sucesso)`);
        }
        console.log(" ");
    });

}

usuario4(); 

//História de Usuário 5: Tratamento de erros
function transacoesInvalidas() {
    const transacoesInvalidas = dadosRepasse.filter(r => 
        r.status === "falha" && (!r.motivo || r.motivo.trim() === "")
    );
    
    console.log("Transações sem motivo de falha:");
    if (transacoesInvalidas.length === 0) {
        console.log("Nenhuma transação sem motivo de falha encontrada.");
} else {
        transacoesInvalidas.forEach((repasse, index) => {
            console.log(`  Transação inválida ${index + 1}:`);
            console.log(`  Órgão: ${repasse.orgao}`);
            console.log(`  Data: ${repasse.data}`);
            console.log(`  Valor: R$ ${repasse.valor.toFixed(2)}`);
            console.log(`  Status: ${repasse.status}`);
            console.log("Sem motivo!");
    });
}
    console.log("");
    return transacoesInvalidas;
}
transacoesInvalidas()

//História de Usuário 6: Ajustes nas estatísticas
function ajustesNasEstatisticas(){
    const transacoesInvalidasAjustadas = dadosRepasse.filter(repasse => 
        (repasse.status.toLowerCase == "falha" && (!repasse.motivo || repasse.motivo.trim == "")
    ));

    const dadosValidos = dadosRepasse.filter(repasse => 
        !(repasse.status.toLowerCase == "falha"&& (!repasse.motivo || repasse.motivo.trim() == "")
    ));

    console.log(`Transações com falhas removidas: ${transacoesInvalidasAjustadas.length}`);
    console.log(`Total de transações de sucesso: ${dadosValidos.length}`);

    let totalValidoSucesso = dadosValidos.filter(repasse => repasse.status.toLowerCase == "sucesso".length);
    let totalValidoFalha = dadosValidos.filter(repasse => repasse.status.toLowerCase == "falha".length);

    console.log(`Transações válidas com sucesso: ${totalValidoSucesso.length}`);
    console.log(`Transações válidas com falha: ${totalValidoFalha.length}`);
    console.log(`Total geral válidos: ${dadosValidos.length}`);

    return dadosValidos;
}
    ajustesNasEstatisticas()
