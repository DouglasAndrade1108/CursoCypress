Feature: Curso

    Scenario: Endereço de Correspondência igual ao Residencial SIM
        Given visito o site do detran
        When informo que o endereço de Correspondência é igual ao Residencial
        Then não aparecem os campos para preencher o endereço

    Scenario: Endereço de Correspondência igual ao Residencial NÃO
        Given visito o site do detran mg
        When informo que o endereço de Correspondência não é igual ao Residencial
        Then  aparecem os campos para preencher o endereço
