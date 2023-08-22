            #language: pt

            Funcionalidade: Login na plataforma
            Como cliente da EBAC-SHOP
            Quero fazer o login na plataforma
            Para visualizar meus pedidos
            
            Cenário: Usuário ativo
            Dado que eu acesse o sistema EBAC-SHOP na seção de login
            Quando eu inserir um login inativo
            Então será exibida uma mensagem informando "Login não está ativo."

            Cenário: Senha inválida
            Dado que eu acesse o sistema EBAC-SHOP na seção de login
            Quando eu inserir um login válido
            E uma senha inválida
            Então será exibida uma mensagem informando "Senha inválida".

            Esquema do Cenário: Login por login 
            Quando eu digitar o <usuario>
            E a <senha>
            Então o site deve carregar a sessão do usuário
            Exemplos:
            | usuário       | senha              |
            | "tester1"     | "tst_1@test"       |
            | "tester2"     | "tst_2@test"       |
            | "ebac_tester" | "ebac_tester@test" |

            Esquema do Cenário: Login por cpf
            Quando eu digitar o <cpf>
            E a <senha>
            Então o site deve carregar a sessão do usuário
            Exemplos:
            | cpf           | senha              |
            | 09999123500   | "tst_1@test"       |
            | 88888811176   | "tst_2@test"       |
            | 99970966555   | "ebac_tester@test" |