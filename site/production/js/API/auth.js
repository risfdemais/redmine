/*
Fazer autenticação
Verificar se existe usuário em cache
retornar o data do usuário logado
fazer logout
*/
let urlRedmine = ''
let urlProd = ''
let urlSiteDev = 'http://localhost:80/redmine/site/production'
const config = $.getJSON("./config.json",
    function (data) {
        alert(JSON.stringify(data))
    }
);
export function login_by_apiId(apiId, redirect = '') {
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

export function sessionAuth(redirect = '') {
    if(sessionStorage.getItem("apiId") == '')
    {
        window.location.replace(domain + "login.html");
    }
    else
    {
        login_by_apiId(sessionStorage.getItem("apiId"), redirect)
    }
}

export function userData(apiId) {
    $.ajax({
        type: "get",
        url: urlDev + "/users/current.json?key=" + apiId,
        success: function (response) {
            return response
        }
    });
}

export function logout(apiId) {
    sessionStorage.setItem("apiId", '');
}