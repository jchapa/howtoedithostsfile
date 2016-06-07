/* global angular */
'use strict';

angular.module('hostsFile')
.controller("hostsFileViewerCtrl", ['$scope', 'bowser', function($scope, bowser) {
    var includePath = "app/components/hostsFileViewer/";
    // Clean up or move?
    var getOs = function (){
        if (bowser.mac) {
            return "Mac"
        }
        else if (bowser.windows) {
            return "Windows"            
        }
        else {
            return "Windows"
        }
    }
    
    this.getPartialUrl = function() {
        return includePath + "hostsFileViewer" + getOs() + ".html";
    }
    
}])

;
