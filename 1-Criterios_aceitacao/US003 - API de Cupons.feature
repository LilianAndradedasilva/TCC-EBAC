            #language: pt

            Funcionalidade: API de Cupons
            Como admin da EBAC-SHOP
            Quero criar um serviço de cupom
            Para poder listar e cadastrar os cupons

            Cenário: Pesquisar cupom sem informar ID
            Dado que eu acesse a API de cupons
            Quando eu usar o método GET sem informar um ID de cupom
            Então deve exibir os cupons disponíveis

            
            Cenário: Pesquisar cupom informando um ID
            Dado que eu acesse a API de cupons
            Quando eu usar o método GET informando o cupom "Agosto15" 
            Então deve exibir os dados desse cupom

            Esquema do Cenário: Cadastrar cupom
            Dado que eu acesse a API de cupons
            E use o método POST 
            E informe o <codigo> do cupom 
            E o <valor>
            E o tipo de <desconto>
            E a <descricao>
            Quando eu clicar para cadastrar
            Então deve emitir mensagem "Cupom cadastrado com sucesso!"

            | codigo     | valor | desconto      | descricao           |
            | Ganhe10    | 10.00 | fixed_product | Cupom de teste      |
            | Agosto15   | 20.00 | fixed_product | Desconto de R$15.00 |
            | SuperPai   | 30.00 | fixed_product | Desconto de R$50.00 |
