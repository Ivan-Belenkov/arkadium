import dataRetrieverService from "./scripts/dataRetrieverService/dataRetrieverService";
import leaderboardComponent from "./scripts/leaderboardComponent/leaderbordComponentController"

let app = angular.module("arkadium", ["ngScrollbars"]);

app
    .config(function (ScrollBarsProvider) {
        ScrollBarsProvider.defaults = {
            scrollButtons: {
                enable: false
            }
        };
    })
    .factory("dataRetrieverService", ["$http", "$q", dataRetrieverService])
    .component("leaderboardComponent", leaderboardComponent);
