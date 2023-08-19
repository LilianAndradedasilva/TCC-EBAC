            #language: pt

            Funcionalidade: Login na plataforma
            Como cliente da EBAC-SHOP
            Quero fazer o login na plataforma
            Para visualizar meus pedidos


            Cenário: Senha inválida
            Dado que eu acesse o sistema EBAC-SHOP na seção de login
            Quando eu inserir um login válido
            E uma senha inválida
            Então será exibida uma mensagem de erro


            Esquema do Cenário: Login por e-mail, login ou cpf
            Quando eu digitar o <usuario>
            E a <senha>
            Então o site deve carregar a sessão do usuário
            Exemplos:
            | usuário       | senha              |
            | "tester1"     | "tst_1@test"       |
            | "tester2"     | "tst_2@test"       |
            | "ebac_tester" | "ebac_tester@test" |

