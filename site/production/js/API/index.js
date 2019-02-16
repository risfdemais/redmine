//https://redmine.mindtek.com.br/users/current.json?key=11ff9d526ec72fcb177a6e85c52117f247605906
/*

*/
const domain = 'file:///C:/Users/rogerio.santos/Documents/API%20REDMINE/gentelella-master/'

$(document).ready(function () {  
    /* PROD
    const apikey = sessionStorage.getItem("apikey")
    $.ajax({
        type: "get",
        url: "https://redmine.mindtek.com.br/users/current.json?key=" + apikey,
        success: function (response) {
            $('#user_name').val(response.user.firstname + ' ' + response.user.lastname)
        }
    });
    */
    // TESTE
    let data = {  
                    "user":{  
                        "id":57,
                        "login":"rogerio.santos",
                        "firstname":"Rogerio",
                        "lastname":"Santos",
                        "created_on":"2018-12-04T17:19:40Z",
                        "last_login_on":"2019-02-14T17:33:23Z",
                        "api_key":"11ff9d526ec72fcb177a6e85c52117f247605906"
                    }
    };
    let projects = {  
        "projects":[  
            {  
                "id":90,
                "name":"bartira_painel_executivo",
                "identifier":"bartira-dashboards-executivos",
                "description":"Projeto de BI em Qlikview para criação de painéis executivos para o controle do desempenho operacional, de custos/faturamento e produtividade",
                "status":1,
                "is_public":true,
                "custom_fields":[  
                    {  
                        "id":4,
                        "name":"Tipo de Projeto",
                        "value":"Projetos/Bilable"
                    },
                    {  
                        "id":5,
                        "name":"Tipo de Faturamento",
                        "value":"EF - Escopo Fechado"
                    }
                ],
                "created_on":"2018-04-13T15:20:50Z",
                "updated_on":"2018-05-03T19:44:57Z"
            },
            {  
                "id":116,
                "name":"NTG",
                "identifier":"ntg",
                "description":"",
                "status":1,
                "custom_fields":[  
                    {  
                        "id":4,
                        "name":"Tipo de Projeto",
                        "value":"Projetos/Bilable"
                    },
                    {  
                        "id":5,
                        "name":"Tipo de Faturamento",
                        "value":"EF - Escopo Fechado"
                    }
                ],
                "created_on":"2019-02-12T12:20:51Z",
                "updated_on":"2019-02-12T12:20:51Z"
            },
            {  
                "id":81,
                "name":"OTZ Engenharia: CFP",
                "identifier":"otz-engenharia",
                "description":"Projeto visa a extração de dados do ERP NASAJON e envio para o ambiente da Mindtek, no qual estarão implantados os softwares necessários para a geração da planilha “CFP 03-2017 R29 - rev 5 enviado.xlsm” e envio dos e-mails para os respectivos destinatários, de acordo com seus perfis.",
                "status":1,
                "custom_fields":[  
                    {  
                        "id":4,
                        "name":"Tipo de Projeto",
                        "value":"Projetos/Bilable"
                    },
                    {  
                        "id":5,
                        "name":"Tipo de Faturamento",
                        "value":"FM - Fixo Mensal (Capacidade Produtiva)"
                    }
                ],
                "created_on":"2017-11-13T19:05:57Z",
                "updated_on":"2018-03-07T16:56:19Z"
            },
            {  
                "id":56,
                "name":"OVERHEAD",
                "identifier":"oh-produtivo",
                "description":"Profissionais não-alocados que estão em projetos de investimento, treinamentos ou pré-venda.",
                "status":1,
                "is_public":true,
                "custom_fields":[  
                    {  
                        "id":4,
                        "name":"Tipo de Projeto",
                        "value":"OH - Produtivo"
                    },
                    {  
                        "id":5,
                        "name":"Tipo de Faturamento",
                        "value":"NA - Não Aplicável"
                    }
                ],
                "created_on":"2017-03-22T18:18:45Z",
                "updated_on":"2017-03-23T13:05:16Z"
            },
            {  
                "id":58,
                "name":"OH - INVESTIMENTO",
                "identifier":"oh-investimento",
                "description":"São projetos de criação de novos produtos para a Mindtek, sejam softwares, sejam aceleradores.",
                "parent":{  
                    "id":56,
                    "name":"OVERHEAD"
                },
                "status":5,
                "custom_fields":[  
                    {  
                        "id":4,
                        "name":"Tipo de Projeto",
                        "value":"OH - Produtivo"
                    },
                    {  
                        "id":5,
                        "name":"Tipo de Faturamento",
                        "value":""
                    }
                ],
                "created_on":"2017-03-22T18:22:27Z",
                "updated_on":"2017-03-22T18:22:27Z"
            },
            {  
                "id":59,
                "name":"OH - PRE VENDA",
                "identifier":"oh-pre-venda",
                "description":"Entender o que o futuro cliente efetivamente espera do projeto e analisar como será iniciado.",
                "parent":{  
                    "id":56,
                    "name":"OVERHEAD"
                },
                "status":1,
                "custom_fields":[  
                    {  
                        "id":4,
                        "name":"Tipo de Projeto",
                        "value":"OH - Produtivo"
                    },
                    {  
                        "id":5,
                        "name":"Tipo de Faturamento",
                        "value":"NA - Não Aplicável"
                    }
                ],
                "created_on":"2017-03-22T18:26:03Z",
                "updated_on":"2017-03-22T18:26:03Z"
            },
            {  
                "id":57,
                "name":"OH - TREINAMENTO",
                "identifier":"oh-treinamento",
                "description":"Todo o treinamento e melhoria de qualificação dos nossos colaboradores.",
                "parent":{  
                    "id":56,
                    "name":"OVERHEAD"
                },
                "status":1,
                "custom_fields":[  
                    {  
                        "id":4,
                        "name":"Tipo de Projeto",
                        "value":"OH - Produtivo"
                    },
                    {  
                        "id":5,
                        "name":"Tipo de Faturamento",
                        "value":""
                    }
                ],
                "created_on":"2017-03-22T18:20:18Z",
                "updated_on":"2017-03-22T18:20:18Z"
            },
            {  
                "id":74,
                "name":"TAESA::Sustentação de Sistemas",
                "identifier":"taesa-sustentacao-de-sistemas",
                "description":"",
                "status":1,
                "custom_fields":[  
                    {  
                        "id":4,
                        "name":"Tipo de Projeto",
                        "value":"Projetos/Bilable"
                    },
                    {  
                        "id":5,
                        "name":"Tipo de Faturamento",
                        "value":"FM - Fixo Mensal (Capacidade Produtiva)"
                    }
                ],
                "created_on":"2017-05-18T09:15:25Z",
                "updated_on":"2018-03-21T18:41:35Z"
            }
        ],
        "total_count":8,
        "offset":0,
        "limit":25
    }

    

    $('#user_name').text(data.user.firstname + ' ' + data.user.lastname)
    $('#user_name1').text(data.user.firstname + ' ' + data.user.lastname)
    


});