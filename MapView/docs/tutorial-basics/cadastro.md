---
sidebar_position: 4
---

#  Realizar Cadastro 

📝 Para realizar o cadastro, você deverá preencher corretamente todos os campos do formulário que possui três etapas. 

Na primeira etapa você deve preencher os dados do equipamento da seguinte forma:

● **ID do equipamento*:** Insira o código de identificação do notebook, que pode ser encontrado na etiqueta do equipamento ou acessando a ferramenta ‘IT Workplace Toolkit’ no campo ‘Cliente’. 

**⚠️** Se você inserir o ID de um equipamento que já está cadastrado no Mapview, o cadastro não poderá ser concluído, pois não é possível cadastrar o mesmo equipamento mais de um única vez. 

● **Nome do equipamento*:** Na ETS, cada notebook é identificado com uma etiqueta específica em cada laboratório. Por exemplo, "Notebook 01", “Notebook 02”, etc. é o nome que deve ser inserido neste campo.

● **RFID*:** Insira o código presente na etiqueta RFID que será colada no notebook.

● **Admin Rigths*:** Insira o código 

● **ID do usuário principal*:** Insira o código de 6 dígitos do usuário principal do notebook que pode ser encontrado acessando a ferramenta ‘IT Workplace Toolkit’ no campo ‘Usuário Principal’.

● **Centro de Custos*:** Insira o código do centro de custos ao qual o equipamento está vinculado. Vale ressaltar que esse campo só aceita números, e deve ser preenchido com exatos 6 dígitos.

● **Tipo do Equipamento*:** Selecione uma das opções entre ‘Notebook’, ‘Desktop’ e ‘Outro’, que represente o equipamento que está sendo cadastrado.

● **Modelo*:** Selecione uma das opções entre ‘Desktop Tink’, ‘Notebook Standard’, ‘Desktop Externo’ e ‘Notebook Enhanced’, que represente o modelo do equipamento que está sendo cadastrado.

● **Data de substituição*:** Insira a data de quando o notebook deverá ser devolvido ao IT Space.

Esta data é composta pelo ano e o trimestre de devolução, por exemplo ‘2024.Q1’ (JAN - MAR), 

‘2024.Q2’ (ABR-JUN), ‘2024.Q3’ (JUL - SET) ou ‘2024.Q4’ (OUT-DEZ).

**⚠️ Caso você informe algo diferente da formatação citada acima, o cadastro não será executado.**

● **Observação*:** Insira informações complementares se necessário, este campo é o único que não é obrigatório. 

Ao preencher todos os campos corretamente o botão de ‘Avançar’ será liberado para a segunda etapa do formulário a respeito da localização do equipamento: 

● **Laboratório:** Selecione a sala, laboratório ou ambiente entre as opções fornecidas. Ao selecionar uma delas, os campos ‘Prédio’ e ‘Setor’ serão preenchidos automaticamente.

**⚠️ Caso você não encontre o ambiente onde o equipamento ficará, selecione a opção ‘Laboratório não cadastrado?’. Um botão de ‘Clique aqui para cadastrar um laboratório’ será liberado abaixo do input.**

### Como realizar o Cadastro  de novo ambiente 📝 🏢:

Ao clicar no botão liberado, um popup para cadastro do ambiente será aberto na página, onde você deve informar: 

● **Laboratório:** Insira o nome do novo laboratório/sala ou ambiente que será registrado, como ‘Lab. Soluções Digitais 06’. 

● **Raspberry:** Insira o nome da raspberry que ficará conectada ao sistema de leitura no novo laboratório informado.

● **Prédio:** Selecione entre as opções fornecidas em qual prédio da planta da Bosch de Campinas esse ambiente está localizado. 

● **Setor:**  Selecione entre as opções fornecidas qual o setor da Bosch que esse ambiente pertence, como por exemplo ‘ETS’.

Preenchido todos os dados corretamente o botão de cadastro será liberado e ao clicar em ‘Cadastrar’,  o popup automaticamente será fechado. 

Então basta selecionar o novo laboratório cadastrado nas opções fornecidas do input.

● **Prédio:** Indica em qual prédio da planta Bosch de Campinas o ambiente selecionado está localizado, como por exemplo ‘Ca600’.

● **Setor:** Indica a qual setor da Bosch o ambiente selecionado pertence, como por exemplo ‘ETS’.

● **Posto:** Insira o nome ou o número do posto do ambiente onde o notebook irá ficar, como ‘Mesa 07’.

**⚠️Importante!**

Nesta etapa, caso você informe uma localização que já pertence a outro equipamento (a mesma combinação de ‘Laboratório’ e ‘Posto’), ao executar o cadastro, o sistema irá resetar a localização do equipamento já existente na plataforma e permitirá o cadastro do novo equipamento com a localização informada. 

Após está execução o equipamento que teve sua localização resetada poderá ter uma nova localização atribuída a ele na aba de edição da página de ‘Inventário’.

Ao preencher todos os campos corretamente o botão de ‘Avançar’ será liberado para a terceira e última etapa do formulário a respeito dos dados do(s) responsável(is) do equipamento: 

● **Nome do responsável:** Insira o nome completo do aprendiz que estará responsável pelo notebook. Caso não haja um aprendiz, você deverá informar o nome de algum Instrutor ou Meio Oficial que ficará responsável por ele.

● **EDV:** Insira o EDV correspondente ao responsável inserido. São aceitos exatos 8 números.

● **Curso:** Selecione a qual curso o responsável pertence dentre as opções, ‘Administração’, ‘Digital Solutions’, ‘Manufatura Digital’ ou ‘Mecatrônica’.

● **Turma:** Insira o número da turma a qual o responsável pertence. Devem ser inseridos apenas números com no mínimo 2 caracteres, por exemplo ‘08’.

**⚠️Importante!**

Caso você insira dados de um responsável que já foi cadastrado na plataforma alguma vez, atente-se no preenchimento correto dos campos.  

A plataforma te permite cadastrar um mesmo responsável em outro equipamento, porém se você informar um EDV que já existe junto com um nome diferente do que já foi registrado, a operação de cadastro não será executada.

**Adicionar e remover responsável:**

Para adicionar mais um responsável pelo equipamento, basta clicar no botão com o símbolo de adição ‘+’ localizado no canto superior direito do formulário de responsável, que mais um formulário igual ao anterior será adicionado para você preencher os dados.

Para remover algum dos responsáveis, basta clicar no botão com o símbolo de remoção ‘-’ localizado no canto superior direito do formulário de responsável desejado.

Após preencher corretamente todos os campos o botão de ‘Cadastrar’ será liberado, clicando nele o cadastro será executado, e apresentará uma mensagem de confirmação. Logo em seguida a página será recarregada automaticamente para executar novos cadastros.
