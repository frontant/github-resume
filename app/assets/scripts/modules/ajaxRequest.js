import $ from "jquery";

const errorMsg = {
    badResponse: "Fetching data failed"
};

const defaultErrorFunc = errorMsg => {
    console.warn(errorMsg);
}

const ajaxRequest = (inUrl, doneCb, errorCb = defaultErrorFunc) => {
    $.ajax({
        type: "GET",
        url: inUrl,
        dataType: "jsonp",
        data: '',
        success: function(response, status){
            if(status !== "success"){
                errorCb(errorMsg.badResponse);
                return;
            }

            if(response.data && !response.data.message){
                doneCb(response.data);
            }else{
                errorCb(response.data.message);
            }
        },
        error: function(){
            errorCb(errorMsg.badResponse);
        }
    });
}

export default ajaxRequest;