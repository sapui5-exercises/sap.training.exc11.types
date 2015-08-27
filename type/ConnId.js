jQuery.sap.declare("sap.training.exc11.types.type.ConnId");

sap.ui.model.SimpleType.extend("sap.training.exc11.types.type.ConnId", {

    formatValue: function(oValue) {
        return oValue;
    },


    parseValue: function(oValue) {
        return oValue;
    },
 

    validateValue: function(oValue) {
       if (!/^(\d{4})?$/.test(oValue)) {
            throw new sap.ui.model.ValidateException("Connection id must have 4 digits!");
       }
    }
});