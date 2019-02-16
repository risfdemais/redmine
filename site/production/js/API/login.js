//https://redmine.mindtek.com.br/users/current.json?key=11ff9d526ec72fcb177a6e85c52117f247605906
/*
{  
    "user":{  
        "id":57,
        "login":"rogerio.santos",
        "firstname":"Rogerio",
        "lastname":"Santos",
        "created_on":"2018-12-04T17:19:40Z",
        "last_login_on":"2019-02-14T17:33:23Z",
        "api_key":"11ff9d526ec72fcb177a6e85c52117f247605906"
    }
}
*/
// importanto os métodos de autenticação


$(document).ready(function () {
    $('#btn_login').click(function () {  
        const apiId = $('#api_id').val();
        alert(apiId)
        login_by_apiId(apiId, 'production/index.html')
    });
});