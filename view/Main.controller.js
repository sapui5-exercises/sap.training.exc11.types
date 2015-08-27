jQuery.sap.require("sap.training.exc11.types.type.ConnId");

sap.ui.controller("sap.training.exc11.types.view.Main", {

	onInit: function() {
		
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.loadData("json/data.json");
		this.getView().setModel(oModel);

		var oCore = sap.ui.getCore();
		oCore.attachParseError(this.onError);
		oCore.attachValidationError(this.onError);

		oCore.attachValidationSuccess(function(oEvent) {
			var oElement = oEvent.getParameter("element");
			oElement.setValueState(sap.ui.core.ValueState.None);
		});
		
	},

	onError: function(oEvent) {
		var oElement = oEvent.getParameter("element");
		var oException = oEvent.getParameter("exception");

		oElement.setValueState(sap.ui.core.ValueState.Error);
		sap.m.MessageToast.show(
			oException.name + ": " + oException.message);
	}

});