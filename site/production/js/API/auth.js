/*
Fazer autenticação
Verificar se existe usuário em cache
retornar o data do usuário logado
fazer logout
*/
const domain = 'file:///C:/Users/rogerio.santos/Documents/API%20REDMINE/gentelella-master/'
const urlProd = ''
const urlDev = 'http://localhost:8080'
function login_by_apiId(apiId, redirect = '') {
    $.ajax({
        type: "get",
        url: urlDev + "/users/current.json?key=" + apiId,
        success: function (response) {
            if (response.user.api_key == apiId)
            {
                sessionStorage.setItem("apiId", apiId);
                if (redirect != '')
                {
                    window.location.replace(domain + redirect);
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
        window.location.replace(domain + "login.html");
    }
    else
    {
        login_by_apiId(sessionStorage.getItem("apiId"), redirect)
    }
}

function userData(apiId) {
    $.ajax({
        type: "get",
        url: urlDev + "/users/current.json?key=" + apiId,
        success: function (response) {
            return response
        }
    });
}

function logout(apiId) {
    sessionStorage.setItem("apiId", '');
}