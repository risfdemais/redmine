/*
Fazer autenticação
Verificar se existe usuário em cache
retornar o data do usuário logado
fazer logout
*/
let urlRedmine = 'http://localhost:8080'
let urlProd = ''
let urlSiteDev = 'http://localhost:80/redmine/site/production'
//const config = JSON.parse(import("./config.json"))
function login_by_apiId(apiId, redirect = '') {
    $.ajax({
        type: "get",
        url: urlRedmine + "/users/current.json?key=" + apiId,
        success: function (response) {
            if (response.user.api_key == apiId)
            {
                sessionStorage.setItem("apiId", apiId);
                if (redirect != '')
                {
                    window.location.replace(urlSiteDev + redirect);
                }
                else
                {
                    return response
                }
            }
            else
            {
                return 'Login inválido'
            }
        }
    });
}

function sessionAuth(redirect = '') {
    if(sessionStorage.getItem("apiId") == '')
    {
        window.location.replace(urlSiteDev + "login.html");
    }
    else
    {
        login_by_apiId(sessionStorage.getItem("apiId"), redirect)
    }
}

function userData(apiId) {
    $.ajax({
        type: "get",
        url: urlRedmine + "/users/current.json?key=" + apiId,
        success: function (response) {
            return response
        }
    });
}

function logout(apiId) {
    sessionStorage.setItem("apiId", '');
}