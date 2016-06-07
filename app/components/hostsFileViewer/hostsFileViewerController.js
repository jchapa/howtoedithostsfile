/* global angular */
'use strict';

angular.module('hostsFile')
.controller("hostsFileViewerCtrl", ['$scope', 'bowser', function($scope, bowser) {
    var includePath = "app/components/hostsFileViewer/";
    // Clean up or move?
    var getOs = function (){
        if (bowser.mac) {
            return "Mac";
        }
        else if (bowser.windows) {
            return "Windows";   
        }
        else {
            return "Windows";
        }
    }
    
    var browserView = getOs();
    
    this.getPartialUrl = function() {
        return includePath + "hostsFileViewer" + browserView + ".html";
    }
    
    $scope.setBrowser = function(strBrowser) {
        strBrowser = strBrowser || "auto";
        
        switch(strBrowser) {
            case "mac":
                browserView = "Mac";
                break;
            case "windows":
                browserView = "Windows";
                break;
            case "auto":
            default:
                browserView = getOs();
                break;
        }
    }
    
}])

;
