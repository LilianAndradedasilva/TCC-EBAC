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
            E será exibida uma mensagem de erro

            Cenário: Negar compra pela quantidade
            Quando eu informar a quantidade do produto "11"
            E o valor total for "R$ 900,00"
            E clicar no botão "Concluir compra"
            Então deve exibir mensagem "Não é permitida a compra da quantidade informada! A quantidade máxima permitida é 10 itens."


            Esquema do Cenário: Receber cupom
            Dado que eu acesse o sistema EBAC-SHOP
            E adicione itens ao carrinho
            Quando o valor da minha compra for <valor>
            Então devo ganhar <desconto> % de desconto

            | valor | desconto |
            | 10    | 0        |
            | 100   | 5        |
            | 199   | 10       |
            | 299   | 15       |
            | 399   | 30       |
            | 500   | 50       |
      

