/**
 * Created by Ivan on 23.03.2016.
 */

function dataRetrieverService($http, $q) {
    let personsData = {
        today: {},
        week: {},
        all: {}
    };

    return function (period, game) {
        let deferred = $q.defer(),
            gameKey = game.id ? game.id : "all",
            dataAddress;
        if (!personsData[period.periodKey][gameKey]) {
            dataAddress =  game.id ? `data/${period.periodKey}/${game.id}/data.json` : `data/${period.periodKey}/data.json`;

            $http({method: "GET",url: dataAddress})
                .then(function(response) {
                    personsData[period.periodKey][gameKey] = response.data;
                    deferred.resolve(personsData[period.periodKey][gameKey]);
                }, function () {
                    throw new Error("Sorry, but data not found!");
                });
        } else {
            deferred.resolve(personsData[period.periodKey][gameKey]);
        }
        return deferred.promise;
    }
}

export default dataRetrieverService;