            #language: pt

            Funcionalidade: Adicionar item ao carrinho
            Como cliente da EBAC-SHOP
            Quero adicionar produtos no carrinho
            Para realizar a compra dos itens

            Cenário: Inserir mais de 10 itens do mesmo produto
            Dado que eu acesse o sistema EBAC-SHOP
            E eu adiciono 10 itens do mesmo produto ao carrinho
            Quando eu clicar para adicionar mais 1 item no mesmo produto
            Então a ação não será permitida
            E será exibida uma mensagem de erro informando "Permitido somente 10 itens com códigos iguais"

            Cenário: Negar compra pel valor
            Quando eu informar a quantidade do produto "11"
            E o valor total for "R$ 990,01"
            E clicar no botão "Concluir compra"
            Então deve exibir mensagem "Não é permitida a compra neste valor! O valor máximo é de R$ 990,00."


            Esquema do Cenário: Receber cupom
            Dado que eu acesse o sistema EBAC-SHOP
            E adicione itens ao carrinho
            Quando o valor da minha compra for <valor>
            Então devo ganhar <desconto> % de desconto

            | valor | desconto |
            | 100   | 0        |
            | 199   | 0        |
            | 299   | 10       |
            | 599   | 10       |
            | 601   | 15       |
      

