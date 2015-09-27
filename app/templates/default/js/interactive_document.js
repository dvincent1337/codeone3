/**
 * Created by david on 9/26/2015.
 */
var interactive_doc = {
    varDomPrefix: 'div.interactive_doc ',
    varDomFnClass: 'interactive_fn',
    validVarChars:["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],

    getVar :function(name){
        //Format of variable is $varname
        if (name.charAt(0) == '$') {
            name = name.substr(1);
        }
        var val = $(this.varDomPrefix + 'input[name='+name+']').val();
        if (val == null) this.issueWarning('getVar', "name: '"+name+"' not found");
        return val;
    },
    isValidVarChar:function(char){
        for (var i=0; i<this.validVarChars.length;i++){
            if (char == this.validVarChars[i]) return true;
        }
        return false;
    },
    replaceVars:function(expr) {
        expr_new = expr+' ';
        //Take an expression
        //E.g '$a + $b'
        //then replace $a and $b with the actual values
        var varArray = [];
        var tmpVar = '';
        var parsingVar=false;
        for (var i=0;i<expr_new.length;i++){
            if (parsingVar) {
                if (this.isValidVarChar(expr_new[i])) {
                    tmpVar +=expr_new[i];
                } else {
                    parsingVar = false;
                    varArray.push(tmpVar);
                }
            }else if (expr_new[i] == '$') {
                tmpVar ='';
                parsingVar = true;
            }
        }
        for (var i=0; i< varArray.length;i++){
            expr_new = expr_new.replace(new RegExp('\\$'+varArray[i], 'g'), this.getVar(varArray[i]));
        }
        return expr_new;
    },
    evaluateExpr:function(expr){
        //Evaluate expression
        //E.g '$a + $b + 3
        return Parser.evaluate(this.replaceVars(expr));
    },

    updateElements: function() {
        var elements = $(this.varDomPrefix + ' .'+this.varDomFnClass);
        for (var i=0; i<elements.length;i++) {
            try{
                $(elements[i]).text(this.evaluateExpr(elements[i].getAttribute('data')));
            } catch (e) {}
        }
    },
    issueWarning:function(fn_name, message) {
        console.log("In '"+fn_name+"' error: "+message);
    }

};