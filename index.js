/*!
 * Copyright 2015, All Rights Reserved.
 *
 * Code licensed under the MIT License:
 * http://vitorbritto.mit-license.org/
 *
 * Author: Vitor Britto <code@vitorbritto.com.br>
 */


(function(window, document, undefined) {

    'use strict';

    var isValid = (function() {

        var validate = validate || {};

        // VALIDATE METHOD
        validate.inputCnpj = function(cnpj) {

            var cnpjPattern = /^\d{2}(\.\d{3}){2}\/\d{4}\-\d{2}$/;
            return cnpjPattern.test(cnpj);

        };

        // INITIALIZE MODULE
        return {
            cnpj: validate.inputCnpj
        };

    })();

    // Global
    window.isValid = isValid;

})(window, document);

