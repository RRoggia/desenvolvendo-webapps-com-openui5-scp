sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
	], function (Controller, JSONModel) {
		"use strict";

		return Controller.extend("com.rroggia.openui5.demo.controller.Palestras", {
			
			onInit: function() {
				var oModel = new JSONModel();
				oModel.loadData(this.pegaCaminhoArquivoPalestras(), "", false);
				this.getView().setModel(oModel, "evento");
			},

			pegaCaminhoArquivoPalestras: function(){
				var caminhoRaiz = jQuery.sap.getModulePath("com.rroggia.openui5.demo");
				return caminhoRaiz + "/model/palestras.json";
			}

		});
	}
);